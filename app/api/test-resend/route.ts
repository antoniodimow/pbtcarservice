import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function GET(request: NextRequest) {
  try {
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_APP_PASSWORD;

    // Check if credentials exist
    if (!emailUser || !emailPassword) {
      return NextResponse.json({
        error: 'Email credentials not found',
        hasCredentials: false,
        message: 'Please set EMAIL_USER and EMAIL_APP_PASSWORD environment variables',
      }, { status: 500 });
    }

    // Show partial email for verification
    const partialEmail = emailUser.substring(0, 3) + '***@' + emailUser.split('@')[1];

    // Attempt to send a test email
    try {
      const result = await sendEmail({
        to: 'pbtcarservice@gmail.com',
        subject: 'Test Email - Gmail SMTP Verification',
        html: '<p>This is a test email to verify that Gmail SMTP is working correctly with Nodemailer.</p>',
      });

      return NextResponse.json({
        success: true,
        message: 'Email credentials are valid and test email sent successfully',
        emailUser: partialEmail,
        messageId: result.messageId,
      }, { status: 200 });

    } catch (emailError: any) {
      return NextResponse.json({
        error: 'Failed to send test email',
        details: emailError.message,
        emailUser: partialEmail,
        hasCredentials: true,
      }, { status: 500 });
    }

  } catch (error: any) {
    return NextResponse.json({
      error: 'Exception occurred',
      message: error.message,
    }, { status: 500 });
  }
}
