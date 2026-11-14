import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import nodemailer from 'nodemailer'

const contactApiPlugin = (env) => ({
  name: 'contact-api-plugin',
  configureServer(server) {
    server.middlewares.use('/api/contact', async (req, res) => {
      if (req.method !== 'POST') {
        res.statusCode = 405;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ success: false, message: 'Method Not Allowed' }));
      }

      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', async () => {
        try {
          const data = JSON.parse(body || '{}');
          const { fullName, email, phone, loanType, message, timestamp } = data;

          if (!fullName || !email || !phone || !loanType) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            return res.end(JSON.stringify({ success: false, message: 'Missing required fields' }));
          }

          const emailUser = env.EMAIL_USER || process.env.EMAIL_USER;
          const emailPass = env.EMAIL_PASS || process.env.EMAIL_PASS;
          const notificationReceiver = env.NOTIFICATION_EMAIL || process.env.NOTIFICATION_EMAIL || 'bharathfinser@gmail.com';

          if (!emailUser || !emailPass) {
            console.warn('[Vite Dev Server] EMAIL_USER or EMAIL_PASS not set in .env. Form validated successfully!');
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            return res.end(JSON.stringify({
              success: true,
              message: 'Thank you! Your enquiry has been received. Our loan advisor will call you within 15 minutes.'
            }));
          }

          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: emailUser,
              pass: emailPass,
            },
          });

          const formattedDate = new Date(timestamp || Date.now()).toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            dateStyle: 'full',
            timeStyle: 'medium',
          });

          const htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
              <div style="background-color: #113764; color: #ffffff; padding: 24px; text-align: center;">
                <h1 style="margin: 0; font-size: 22px; font-weight: bold; letter-spacing: 0.5px;">Bharath Finserv</h1>
                <p style="margin: 6px 0 0 0; font-size: 13px; color: #93c5fd; text-transform: uppercase; letter-spacing: 1px;">New Loan Consultation Request</p>
              </div>

              <div style="padding: 24px;">
                <p style="color: #334155; font-size: 15px; margin-top: 0;">You have received a new consultation enquiry via the Bharath Finserv website:</p>

                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 12px; color: #64748b; font-size: 13px; font-weight: bold; width: 35%;">Customer Name</td>
                    <td style="padding: 10px 12px; color: #1e293b; font-size: 14px; font-weight: bold;">${fullName}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
                    <td style="padding: 10px 12px; color: #64748b; font-size: 13px; font-weight: bold;">Mobile Number</td>
                    <td style="padding: 10px 12px; color: #1e293b; font-size: 14px; font-weight: bold;">
                      <a href="tel:+91${phone}" style="color: #2563eb; text-decoration: none;">+91 ${phone}</a>
                    </td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 12px; color: #64748b; font-size: 13px; font-weight: bold;">Email Address</td>
                    <td style="padding: 10px 12px; color: #1e293b; font-size: 14px;">
                      <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                    </td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
                    <td style="padding: 10px 12px; color: #64748b; font-size: 13px; font-weight: bold;">Loan Requirement</td>
                    <td style="padding: 10px 12px; color: #0284c7; font-size: 14px; font-weight: bold;">
                      ${loanType}
                    </td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 12px; color: #64748b; font-size: 13px; font-weight: bold;">Customer Message</td>
                    <td style="padding: 10px 12px; color: #334155; font-size: 13px; line-height: 1.5;">
                      ${message ? message : '<em>No message provided</em>'}
                    </td>
                  </tr>
                  <tr style="background-color: #f8fafc;">
                    <td style="padding: 10px 12px; color: #64748b; font-size: 13px; font-weight: bold;">Submitted On</td>
                    <td style="padding: 10px 12px; color: #64748b; font-size: 13px;">${formattedDate}</td>
                  </tr>
                </table>

                <div style="background-color: #eff6ff; border-left: 4px solid #2563eb; padding: 12px 16px; border-radius: 4px; margin-top: 24px;">
                  <p style="margin: 0; font-size: 13px; color: #1e40af;">
                    <strong>Action Recommended:</strong> Call this customer within 15 minutes to initiate document collection and bank matching.
                  </p>
                </div>
              </div>

              <div style="background-color: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
                Bharath Finserv • 481/1, Thilakar Street, Velandipalayam, Coimbatore - 641025
              </div>
            </div>
          `;

          await transporter.sendMail({
            from: `"Bharath Finserv Website" <${emailUser}>`,
            to: notificationReceiver,
            replyTo: email,
            subject: `🚨 New Loan Enquiry: ${fullName} - ${loanType}`,
            html: htmlContent,
            text: `New Loan Enquiry:\nName: ${fullName}\nPhone: +91 ${phone}\nEmail: ${email}\nLoan: ${loanType}\nMessage: ${message || 'None'}\nDate: ${formattedDate}`,
          });

          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          return res.end(JSON.stringify({
            success: true,
            message: 'Thank you! Your enquiry has been received. Our loan advisor will call you within 15 minutes.'
          }));
        } catch (error) {
          console.error('[Vite Dev Server] Nodemailer error:', error);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          return res.end(JSON.stringify({
            success: false,
            message: 'Failed to send email enquiry. Please call us directly at +91 99444 00022.'
          }));
        }
      });
    });
  }
});

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      tailwindcss(),
      contactApiPlugin(env)
    ],
  };
});
