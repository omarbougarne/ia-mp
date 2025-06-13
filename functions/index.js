// Firebase SDKs for Cloud Functions
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Nodemailer for sending emails
import nodemailer from 'nodemailer';

// Initialize Firebase Admin SDK
admin.initializeApp();

// Configure your email transporter using Nodemailer
// IMPORTANT: For production, use environment variables (functions.config()) for sensitive data
// like email credentials, and consider App Passwords if using Gmail with 2FA.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'oaboussafi@gmail.com', // Your sending email address
    pass: 'nedh ojom fpal ctyd'    // Your email password or App Password
  }
});

// Admin email to receive new user notifications
const ADMIN_EMAIL = 'oaboussafi@gmail.com';

// Define your Firebase Project ID for use in console links
const FIREBASE_PROJECT_ID = 'iamp-e2b32'; // <-- Hardcoded your project ID here

/**
 * Cloud Function: sendNewUserEmail
 * Triggered when a new document is created in the 'users' Firestore collection.
 * Sends an email notification to the admin about the new user.
 */
export const sendNewUserEmail = functions.firestore
  .document('users/{userId}')
  .onCreate(async (snapshot) => {
    try {
      const userData = snapshot.data();

      // Check if user data exists and has an email
      if (!userData || !userData.email) {
        console.warn('New user document has no data or email. Skipping admin notification.');
        return null;
      }

      // Construct the email content for the admin
      const mailOptions = {
        from: '"IAMP Registration" <oaboussafi@gmail.com>', // Sender display name and email
        to: ADMIN_EMAIL, // Admin's email address
        subject: '🔔 New User Registration on IAMP',
        html: `
          <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
            <h2 style="color: #0099cc; text-align: center;">New User Registration Alert</h2>
            <p>A new user has registered on the IAMP platform:</p>
            
            <table style="border-collapse: collapse; width: 100%; max-width: 500px; margin: 20px auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
              <tr>
                <td style="padding: 12px 15px; background-color: #f8f8f8; font-weight: bold; width: 150px;">Full Name:</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #eee;">${userData.firstName || 'N/A'} ${userData.lastName || ''}</td>
              </tr>
              <tr>
                <td style="padding: 12px 15px; background-color: #f8f8f8; font-weight: bold; border-bottom: 1px solid #eee;">Email:</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #eee;"><a href="mailto:${userData.email}" style="color: #0099cc; text-decoration: none;">${userData.email || 'N/A'}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 15px; background-color: #f8f8f8; font-weight: bold; border-bottom: 1px solid #eee;">Phone:</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #eee;">${userData.phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 15px; background-color: #f8f8f8; font-weight: bold; border-bottom: 1px solid #eee;">Company:</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #eee;">${userData.company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 15px; background-color: #f8f8f8; font-weight: bold; border-bottom: 1px solid #eee;">Registered On:</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #eee;">${userData.createdAt ? new Date(userData.createdAt.toDate()).toLocaleString() : new Date().toLocaleString()}</td>
              </tr>
              <tr>
                <td style="padding: 12px 15px; background-color: #f8f8f8; font-weight: bold;">Newsletter:</td>
                <td style="padding: 12px 15px;">${userData.subscribeNewsletter ? 'Subscribed' : 'Not subscribed'}</td>
              </tr>
            </table>
            
            <p style="text-align: center; margin-top: 25px;">
              You can view and manage all users in the 
              <a href="https://console.firebase.google.com/project/${FIREBASE_PROJECT_ID}/authentication/users" style="color: #0099cc; text-decoration: none; font-weight: bold;">Firebase Console</a>.
            </p>
            
            <p style="font-size: 11px; color: #999; margin-top: 40px; text-align: center;">This is an automated message from the IAMP platform.</p>
          </div>
        `
      };

      // Send the email to the admin
      await transporter.sendMail(mailOptions);
      console.log('New user notification email sent to admin successfully.');
      return null;
    } catch (error) {
      console.error('Error sending admin notification email:', error);
      return null;
    }
  });


/**
 * Cloud Function: sendWelcomeEmailToUser
 * Triggered when a new document is created in the 'users' Firestore collection.
 * Sends a welcome/confirmation email to the newly registered user.
 */
export const sendWelcomeEmailToUser = functions.firestore
  .document('users/{userId}')
  .onCreate(async (snapshot) => {
    try {
      const userData = snapshot.data();

      // Check if user data exists and has an email
      if (!userData || !userData.email) {
        console.warn('New user document has no data or email. Skipping welcome email.');
        return null;
      }

      const userEmail = userData.email;
      const userName = userData.firstName || 'there'; // Use first name if available, otherwise 'there'

      // Construct the email content for the user
      const mailOptions = {
        from: '"IAMP Team" <oaboussafi@gmail.com>', // Your sending email address
        to: userEmail, // The new user's email address
        subject: `Welcome to IAMP, ${userName}! Your Registration is Confirmed`,
        html: `
          <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
            <h2 style="color: #4CAF50; text-align: center;">Welcome to IAMP!</h2>
            <p>Dear ${userName},</p>
            <p>Thank you for joining IAMP! Your account has been successfully created.</p>
            
            <p>We're thrilled to have you join our community. You can now explore all the features and benefits our platform has to offer.</p>
            
            <p style="text-align: center; margin: 30px 0;">
              <a href="[Your Application Login URL]" 
                 style="display: inline-block; padding: 12px 25px; background-color: #0099cc; color: #ffffff; text-decoration: none; border-radius: 5px; font-weight: bold;">
                Go to IAMP
              </a>
            </p>
            
            <p>If you have any questions or need assistance, please don't hesitate to contact our support team.</p>
            
            <p>Best regards,<br>The IAMP Team</p>
            
            <p style="font-size: 11px; color: #999; margin-top: 40px; text-align: center;">This is an automated message. Please do not reply directly to this email.</p>
          </div>
        `
      };

      // Send the email to the user
      await transporter.sendMail(mailOptions);
      console.log(`Welcome email sent to new user: ${userEmail}`);
      return null;
    } catch (error) {
      console.error('Error sending welcome email to user:', error);
      return null;
    }
  });

