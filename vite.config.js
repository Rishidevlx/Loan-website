import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import nodemailer from 'nodemailer'
import path from 'path'
import fs from 'fs'

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
            console.warn('[Vite Dev Server] EMAIL_USER or EMAIL_PASS not set in .env.');
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

          // Resolve logo path safely whether running from Frontend or root
          let logoPath = path.resolve(process.cwd(), 'src/assets/logo/logo.jpeg');
          if (!fs.existsSync(logoPath)) {
            logoPath = path.resolve(process.cwd(), 'Frontend/src/assets/logo/logo.jpeg');
          }
          if (!fs.existsSync(logoPath)) {
            logoPath = path.resolve(process.cwd(), '../api/logo.jpeg');
          }
          const hasLogo = fs.existsSync(logoPath);

          const attachments = hasLogo ? [
            {
              filename: 'logo.jpeg',
              path: logoPath,
              cid: 'bharathLogo'
            }
          ] : [];

          // Clean, minimal, low border-radius, informative email template with aligned header
          const htmlContent = `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 580px; margin: 20px auto; border: 1px solid #e2e8f0; border-radius: 6px; overflow: hidden; background-color: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
              
              <!-- Top Header: Logo on Left, Title on Right (Table Layout for Universal Email Client Support) -->
              <div style="background-color: #ffffff; padding: 20px 24px; border-bottom: 1px solid #e2e8f0;">
                <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
                  <tr>
                    <!-- Left side: Bharath Finserv Logo -->
                    <td style="vertical-align: middle; text-align: left;">
                      ${hasLogo 
                        ? `<img src="cid:bharathLogo" alt="Bharath Finserv" style="height: 44px; max-height: 44px; width: auto; object-fit: contain; display: block;" />`
                        : `<span style="font-size: 18px; font-weight: 700; color: #0f172a; letter-spacing: -0.2px;">Bharath Finserv</span>`
                      }
                    </td>
                    <!-- Right side: New Loan Consultation Request (Normal Black Color) -->
                    <td style="vertical-align: middle; text-align: right;">
                      <h2 style="margin: 0; font-size: 16px; font-weight: 700; color: #0f172a; line-height: 1.3;">
                        New Loan Consultation Request
                      </h2>
                      <p style="margin: 3px 0 0 0; font-size: 12px; color: #64748b; font-weight: 500;">
                        Website Inquiry Notification
                      </p>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Main Content Intro -->
              <div style="padding: 20px 24px 14px 24px;">
                <p style="color: #475569; font-size: 14px; margin: 0; line-height: 1.5;">
                  A new borrower consultation enquiry has been submitted on the website. Customer details are provided below:
                </p>
              </div>

              <!-- Informative Content Box (Low border radius, minimal borders) -->
              <div style="padding: 0 24px 20px 24px;">
                <div style="border: 1px solid #e2e8f0; border-radius: 6px; overflow: hidden; background-color: #ffffff;">
                  <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 11px 16px; color: #64748b; font-weight: 600; width: 35%;">Customer Name</td>
                      <td style="padding: 11px 16px; color: #0f172a; font-weight: 700; font-size: 14px;">${fullName}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
                      <td style="padding: 11px 16px; color: #64748b; font-weight: 600;">Mobile Number</td>
                      <td style="padding: 11px 16px; color: #0f172a; font-weight: 700; font-size: 14px;">
                        <a href="tel:+91${phone}" style="color: #2563eb; text-decoration: none;">+91 ${phone}</a>
                      </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 11px 16px; color: #64748b; font-weight: 600;">Email Address</td>
                      <td style="padding: 11px 16px; color: #0f172a;">
                        <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                      </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #f1f5f9; background-color: #f8fafc;">
                      <td style="padding: 11px 16px; color: #64748b; font-weight: 600;">Loan Requirement</td>
                      <td style="padding: 11px 16px; color: #1d4ed8; font-weight: 700;">
                        ${loanType}
                      </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #f1f5f9;">
                      <td style="padding: 11px 16px; color: #64748b; font-weight: 600; vertical-align: top;">Customer Note</td>
                      <td style="padding: 11px 16px; color: #334155; line-height: 1.5;">
                        ${message ? message : '<span style="color: #94a3b8; font-style: italic;">No additional note provided</span>'}
                      </td>
                    </tr>
                    <tr style="background-color: #f8fafc;">
                      <td style="padding: 11px 16px; color: #64748b; font-weight: 600;">Submitted Time</td>
                      <td style="padding: 11px 16px; color: #64748b; font-size: 12px;">${formattedDate}</td>
                    </tr>
                  </table>
                </div>
              </div>

              <!-- Direct User-Friendly Action Buttons -->
              <div style="padding: 0 24px 24px 24px;">
                <p style="margin: 0 0 10px 0; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">
                  Direct Quick Actions:
                </p>
                <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
                  <tr>
                    <td style="padding: 0;">
                      <a href="tel:+91${phone}" style="display: inline-block; background-color: #2563eb; color: #ffffff; padding: 11px 20px; font-size: 13px; font-weight: 600; text-decoration: none; border-radius: 5px; margin-right: 10px; margin-bottom: 6px;">
                        📞 Call Customer (+91 ${phone})
                      </a>
                      <a href="mailto:${email}?subject=Regarding your Loan Enquiry - Bharath Finserv" style="display: inline-block; background-color: #f8fafc; color: #1e293b; border: 1px solid #cbd5e1; padding: 11px 18px; font-size: 13px; font-weight: 600; text-decoration: none; border-radius: 5px; margin-bottom: 6px;">
                        ✉️ Reply to ${email}
                      </a>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Minimal Clean Footer -->
              <div style="background-color: #f8fafc; padding: 14px 24px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #edf2f7;">
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
            attachments: attachments,
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
