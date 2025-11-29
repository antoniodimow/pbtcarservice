import nodemailer from 'nodemailer';

// Create a reusable transporter
export function createEmailTransporter() {
  const emailUser = process.env.EMAIL_USER;
  const emailPassword = process.env.EMAIL_APP_PASSWORD;

  if (!emailUser || !emailPassword) {
    throw new Error('Email credentials not configured. Please set EMAIL_USER and EMAIL_APP_PASSWORD environment variables.');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPassword,
    },
  });
}

// Send email helper function
export async function sendEmail({
  to,
  subject,
  html,
  from,
}: {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
}) {
  const transporter = createEmailTransporter();
  const emailUser = process.env.EMAIL_USER;

  const mailOptions = {
    from: from || `PBT Car Service <${emailUser}>`,
    to: Array.isArray(to) ? to.join(', ') : to,
    subject,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error: any) {
    console.error('Email sending error:', error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
}
