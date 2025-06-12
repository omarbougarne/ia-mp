/**
 * Import function triggers from their respective submodules:
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as functions from 'firebase-functions';
import nodemailer from 'nodemailer';
import * as admin from 'firebase-admin';
admin.initializeApp();

// Configure your email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'oaboussafi@gmail.com',
    pass: 'nedh ojom fpal ctyd'
  }
});

// Admin email to receive notifications
const ADMIN_EMAIL = 'oaboussafi@gmail.com';

// Change exports.sendNewUserEmail to export const sendNewUserEmail
export const sendNewUserEmail = functions.firestore
  .document('users/{userId}')
  .onCreate(async (snapshot) => { // Added underscore to ignore unused parameter
    try {
      const userData = snapshot.data();
      
      // Create email content
      const mailOptions = {
        from: '"IAMP Registration" <oaboussafi@gmail.com>', // Updated to use your email
        to: ADMIN_EMAIL,
        subject: '🔔 New User Registration on IAMP',
        html: `
          <div style="font-family: Arial, sans-serif; color: #333;">
            <h2 style="color: #0099cc;">New User Registration Alert</h2>
            <p>A new user has registered on the IAMP platform:</p>
            
            <table style="border-collapse: collapse; width: 100%; max-width: 500px; margin: 20px 0;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Full Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${userData.firstName} ${userData.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${userData.email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${userData.phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${userData.company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Registered On:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${userData.createdAt ? new Date(userData.createdAt.toDate()).toLocaleString() : new Date().toLocaleString()}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Newsletter:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${userData.subscribeNewsletter ? 'Subscribed' : 'Not subscribed'}</td>
              </tr>
            </table>
            
            <p>You can view and manage all users in the <a href="https://console.firebase.google.com/project/iamp-e2b32/authentication/users" style="color: #0099cc; text-decoration: none;">Firebase Console</a>.</p>
            
            <p style="font-size: 12px; color: #999; margin-top: 30px;">This is an automated message from the IAMP platform.</p>
          </div>
        `
      };
      
      // Send email
      await transporter.sendMail(mailOptions);
      console.log('New user notification email sent successfully');
      return null;
    } catch (error) {
      console.error('Error sending email:', error);
      return null;
    }
  });
