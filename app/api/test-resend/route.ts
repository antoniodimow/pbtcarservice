import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function GET(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    // Check if API key exists
    if (!apiKey) {
      return NextResponse.json({
        error: 'API key not found',
        hasKey: false,
      }, { status: 500 });
    }

    // Show partial API key for verification (first 8 chars only)
    const partialKey = apiKey.substring(0, 8) + '...';

    // Try to initialize Resend
    const resend = new Resend(apiKey);

    // Attempt to send a test email
    const { data, error } = await resend.emails.send({
      from: 'PBT Car Service <onboarding@resend.dev>',
      to: 'pbtcarservice@gmail.com',
      subject: 'Test Email - API Key Verification',
      html: '<p>This is a test email to verify the Resend API key is working correctly.</p>',
    });

    if (error) {
      return NextResponse.json({
        error: 'Failed to send test email',
        details: error,
        apiKeyPrefix: partialKey,
        hasKey: true,
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: 'API key is valid and test email sent successfully',
      apiKeyPrefix: partialKey,
      emailId: data?.id,
    }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({
      error: 'Exception occurred',
      message: error.message,
    }, { status: 500 });
  }
}
