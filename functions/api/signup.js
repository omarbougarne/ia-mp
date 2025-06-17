// api/signup.js (for Vercel Function - now using ES Modules for local testing)

// For local testing, we will use 'dotenv' to load variables from a .env file.
// IMPORTANT: Remove this line before deploying to Vercel/Netlify.
import dotenv from 'dotenv';
dotenv.config();

import Brevo from '@sendinblue/client'; // Brevo SDK
import admin from 'firebase-admin';     // Firebase Admin SDK

// --- Environment Variables for Local Testing ---
// IMPORTANT: Replace the placeholder values below with your actual credentials.
// For production, these MUST be set as environment variables on your hosting platform (Vercel/Netlify).

// Get your Brevo API Key from your Brevo account (SMTP & API -> API Keys tab)
const LOCAL_BREVO_API_KEY = process.env.BREVO_API_KEY || "YOUR_BREVO_API_KEY_HERE"; // <-- REPLACE THIS

// This email must be verified as a sender in your Brevo account.
const LOCAL_BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || "oaboussafi@gmail.com"; // <-- REPLACE THIS if different from oaboussafi@gmail.com

// Your admin email address for notifications.
const LOCAL_ADMIN_EMAIL = process.env.ADMIN_EMAIL || "oaboussafi@gmail.com"; // <-- REPLACE THIS if different from oaboussafi@gmail.com

// The URL for your app's email verification page (e.g., http://localhost:3000/verify-email for local React app)
const LOCAL_APP_VERIFICATION_URL = process.env.APP_VERIFICATION_URL || "http://localhost:3000/verify-email"; // <-- REPLACE THIS

// Your Firebase Service Account Key JSON.
// OPTION 1: Best for local - point to your downloaded serviceAccountKey.json file
// Create a file named 'serviceAccountKey.json' in the root of your project
// (NOT in 'api' folder) and paste its content there.
// Then uncomment the line below and adjust the path.
// const serviceAccount = require('../../serviceAccountKey.json'); // Adjust path relative to api/signup.js

// OPTION 2: Parse the JSON string directly if you put it in a .env file (less ideal for large JSON locally)
const LOCAL_FIREBASE_SERVICE_ACCOUNT_KEY = process.env.FIREBASE_SERVICE_ACCOUNT_KEY_JSON;
// Example for hardcoding it directly (NOT recommended, but possible for quick test)
// const LOCAL_FIREBASE_SERVICE_ACCOUNT_KEY = '{ "type": "service_account", "project_id": "iamp-e2b32", "private_key_id": "YOUR_PRIVATE_KEY_ID", "private_key": "-----BEGIN PRIVATE KEY-----YOUR_PRIVATE_KEY_HERE\\n-----END PRIVATE KEY-----\\n", "client_email": "firebase-adminsdk-xxxxx@iamp-e2b32.iam.gserviceaccount.com", "client_id": "YOUR_CLIENT_ID", "auth_uri": "https://accounts.google.com/o/oauth2/auth", "token_uri": "https://oauth2.googleapis.com/token", "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xxxxx%40iamp-e2b32.iam.gserviceaccount.com", "universe_domain": "googleapis.com" }'; // <-- PASTE YOUR FULL JSON HERE AS A SINGLE STRING IF NOT USING .env


// --- Firebase Admin SDK Initialization ---
let firebaseApp;
try {
    // If using OPTION 1 (serviceAccountKey.json file directly):
    // if (!admin.apps.length) {
    //     firebaseApp = admin.initializeApp({
    //         credential: admin.credential.cert(serviceAccount)
    //     });
    // }

    // If using OPTION 2 (JSON string from .env or hardcoded):
    if (!LOCAL_FIREBASE_SERVICE_ACCOUNT_KEY) {
        throw new Error('Firebase Service Account Key is missing. Set FIREBASE_SERVICE_ACCOUNT_KEY_JSON in .env or hardcode it.');
    }
    const firebaseServiceAccount = JSON.parse(LOCAL_FIREBASE_SERVICE_ACCOUNT_KEY);
    if (!admin.apps.length) {
        firebaseApp = admin.initializeApp({
            credential: admin.credential.cert(firebaseServiceAccount)
        });
        console.log('Firebase Admin SDK initialized successfully.');
    } else {
        firebaseApp = admin.app();
        console.log('Firebase Admin SDK already initialized.');
    }
} catch (error) {
    console.error('Failed to initialize Firebase Admin SDK:', error);
    throw new Error('Firebase Admin SDK initialization failed: ' + error.message);
}

const db = admin.firestore();
const authAdmin = admin.auth();

// --- Brevo API Configuration ---
if (!LOCAL_BREVO_API_KEY || LOCAL_BREVO_API_KEY === "YOUR_BREVO_API_KEY_HERE") {
    console.error('LOCAL_BREVO_API_KEY is not set or is still placeholder. Please update it.');
    throw new Error('Missing Brevo API Key for local testing.');
}

const apiInstance = new Brevo.TransactionalEmailsApi();
const apiKey = apiInstance.authentications['apiKey'];
apiKey.apiKey = LOCAL_BREVO_API_KEY;

// --- Helper function for sending email via Brevo ---
async function sendBrevoEmail(toEmail, toName, subject, htmlContent) {
    const sendSmtpEmail = {
        sender: { email: LOCAL_BREVO_SENDER_EMAIL, name: "IAMP Team" },
        to: [{ email: toEmail, name: toName }],
        subject: subject,
        htmlContent: htmlContent,
    };

    try {
        const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log('Email sent successfully via Brevo:', data);
        return true;
    } catch (error) {
        console.error('Error sending email via Brevo:', error.response ? error.response.text : error.message);
        return false;
    }
}

// --- Serverless Function Handler ---
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    const { firstName, lastName, email, phone, company, password, subscribeNewsletter } = req.body;

    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ success: false, message: 'Missing required fields.' });
    }

    try {
        // 1. Create user in Firebase Authentication
        const userRecord = await authAdmin.createUser({
            email: email,
            password: password,
            displayName: `${firstName} ${lastName}`,
            emailVerified: false
        });

        const userId = userRecord.uid;

        // 2. Store additional user data in Firestore
        await db.collection("users").doc(userId).set({
            uid: userId,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone || '',
            company: company || '',
            subscribeNewsletter: subscribeNewsletter,
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        });

        // 3. Send welcome/confirmation email to the user via Brevo
        const userEmailSent = await sendBrevoEmail(
            email,
            `${firstName} ${lastName}`,
            `Welcome to IAMP, ${firstName}! Your Registration is Confirmed`,
            `
            <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
                <h2 style="color: #4CAF50; text-align: center;">Welcome to IAMP!</h2>
                <p>Dear ${firstName},</p>
                <p>Thank you for registering with IAMP! Your account has been successfully created.</p>
                <p>Please verify your email address by clicking the link below:</p>
                <p style="text-align: center; margin: 30px 0;">
                    <a href="${LOCAL_APP_VERIFICATION_URL}?email=${encodeURIComponent(email)}&uid=${userId}"
                       style="display: inline-block; padding: 12px 25px; background-color: #0099cc; color: #ffffff; text-decoration: none; border-radius: 5px; font-weight: bold;">
                       Verify Your Email
                    </a>
                </p>
                <p>We're thrilled to have you join our community. You can now explore all the features and benefits our platform has to offer.</p>
                <p>If you have any questions or need assistance, please don't hesitate to contact our support team.</p>
                <p>Best regards,<br>The IAMP Team</p>
                <p style="font-size: 11px; color: #999; margin-top: 40px; text-align: center;">This is an automated message. Please do not reply directly to this email.</p>
            </div>
            `
        );

        // 4. Send admin notification email via Brevo
        const adminEmailSent = await sendBrevoEmail(
            LOCAL_ADMIN_EMAIL,
            "Admin",
            '🔔 New User Registration on IAMP',
            `
            <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
                <h2 style="color: #0099cc; text-align: center;">New User Registration Alert</h2>
                <p>A new user has registered on the IAMP platform:</p>
                
                <table style="border-collapse: collapse; width: 100%; max-width: 500px; margin: 20px auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
                  <tr>
                    <td style="padding: 12px 15px; background-color: #f8f8f8; font-weight: bold; width: 150px;">Full Name:</td>
                    <td style="padding: 12px 15px; border-bottom: 1px solid #eee;">${firstName} ${lastName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 15px; background-color: #f8f8f8; font-weight: bold; border-bottom: 1px solid #eee;">Email:</td>
                    <td style="padding: 12px 15px; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #0099cc; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 15px; background-color: #f8f8f8; font-weight: bold; border-bottom: 1px solid #eee;">Phone:</td>
                    <td style="padding: 12px 15px; border-bottom: 1px solid #eee;">${phone || 'Not provided'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 15px; background-color: #f8f8f8; font-weight: bold; border-bottom: 1px solid #eee;">Company:</td>
                    <td style="padding: 12px 15px; border-bottom: 1px solid #eee;">${company || 'Not provided'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 15px; background-color: #f8f8f8; font-weight: bold;">Registered On:</td>
                    <td style="padding: 12px 15px;">${new Date().toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 15px; background-color: #f8f8f8; font-weight: bold;">Newsletter:</td>
                    <td style="padding: 12px 15px;">${subscribeNewsletter ? 'Subscribed' : 'Not subscribed'}</td>
                  </tr>
                </table>
                
                <p style="font-size: 11px; color: #999; margin-top: 40px; text-align: center;">This is an automated message from the IAMP platform.</p>
            </div>
            `
        );

        res.status(200).json({
            success: true,
            message: 'User created and emails triggered.',
            userEmailSent,
            adminEmailSent
        });

    } catch (error) {
        console.error("Error during signup process:", error.message);
        let errorMessage = 'Failed to create account. Please try again later.';
        if (error.code === 'auth/email-already-in-use') {
            errorMessage = 'This email is already registered.';
        } else if (error.code === 'auth/invalid-email') {
            errorMessage = 'Invalid email address.';
        } else if (error.code === 'auth/weak-password') {
            errorMessage = 'Password is too weak.';
        }
        res.status(500).json({ success: false, message: errorMessage });
    }
}
