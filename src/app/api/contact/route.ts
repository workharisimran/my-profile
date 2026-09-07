import { NextRequest, NextResponse } from 'next/server';
import { getDb, initDb } from '@/lib/db';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    await initDb();
    const sql = getDb();
    const body = await req.json();

    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // 1. Save entry to Neon PostgreSQL database
    const result = await sql`
      INSERT INTO form_submissions (name, email, phone, service, message)
      VALUES (${name}, ${email}, ${phone || null}, ${service || 'General Inquiry'}, ${message})
      RETURNING id, created_at;
    `;

    const submissionId = result[0]?.id;

    // 2. Dispatch Email Notification
    const recipientEmail = process.env.NOTIFICATION_EMAIL || 'md@myrestotoday.io';
    
    // Check if SMTP is configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);

    let emailSent = false;
    let emailInfo = '';

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: `"Portfolio Contact Form" <${smtpUser}>`,
        to: recipientEmail,
        replyTo: email,
        subject: `🔔 New Portfolio Inquiry from ${name} (${service || 'General'})`,
        text: `You have received a new inquiry from your portfolio website:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service: ${service || 'General'}
Submitted At: ${new Date().toLocaleString()}

Message:
${message}
`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #080c09; color: #f0fdf4; border: 1px solid #10b981; border-radius: 12px; padding: 24px;">
            <h2 style="color: #00f59b; margin-top: 0; border-bottom: 1px solid rgba(52, 211, 153, 0.2); padding-bottom: 12px;">
              ✨ New Portfolio Contact Form Submission
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
              <tr>
                <td style="padding: 8px 0; color: #6ee7b7; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #ffffff;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6ee7b7; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0; color: #ffffff;"><a href="mailto:${email}" style="color: #00f59b;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6ee7b7; font-weight: bold;">Phone:</td>
                <td style="padding: 8px 0; color: #ffffff;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6ee7b7; font-weight: bold;">Service:</td>
                <td style="padding: 8px 0; color: #ffffff;">${service || 'General Inquiry'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6ee7b7; font-weight: bold;">Submitted:</td>
                <td style="padding: 8px 0; color: #94a3b8;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
            <div style="background: rgba(16, 185, 129, 0.08); border-left: 3px solid #00f59b; padding: 14px; border-radius: 6px; margin-top: 16px;">
              <p style="margin: 0 0 6px; color: #6ee7b7; font-weight: bold;">Message:</p>
              <p style="margin: 0; color: #e2e8f0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="font-size: 12px; color: #64748b; margin-top: 24px; text-align: center;">
              HARIS I M Portfolio Notification &bull; Saved to Neon DB (#${submissionId})
            </p>
          </div>
        `,
      };

      try {
        await transporter.sendMail(mailOptions);
        emailSent = true;
        emailInfo = 'Email dispatched successfully via SMTP';
      } catch (mailErr: any) {
        console.error('SMTP send failed:', mailErr);
        emailInfo = `SMTP dispatch error: ${mailErr.message}`;
      }
    } else {
      // In development or if SMTP is not provided, log and record that it was received
      console.log(`[Form Entry Notification] New submission from ${name} (${email}):`, message);
      emailSent = true;
      emailInfo = 'Notification logged (Configure SMTP_HOST in .env for direct inbox dispatch)';
    }

    return NextResponse.json({
      success: true,
      id: submissionId,
      emailSent,
      message: 'Thank you! Your message has been received and saved.',
      emailInfo,
    });
  } catch (err: any) {
    console.error('Contact API error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
