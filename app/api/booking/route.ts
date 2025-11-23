import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const {
      name,
      email,
      phone,
      pickupDate,
      pickupTime,
      pickupAddress,
      dropoffAddress,
      passengerCount,
      specialRequests,
      isRoundTrip,
      returnDate,
      returnTime,
    } = body;

    if (!name || !email || !phone || !pickupDate || !pickupTime || !pickupAddress || !dropoffAddress || !passengerCount) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0A1828 0%, #2C3E50 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #ffffff; padding: 30px; border: 1px solid #e0e0e0; }
            .section { margin-bottom: 25px; }
            .section-title { color: #C9A961; font-size: 18px; font-weight: bold; margin-bottom: 10px; border-bottom: 2px solid #C9A961; padding-bottom: 5px; }
            .info-row { margin: 8px 0; }
            .label { font-weight: bold; color: #0A1828; }
            .value { color: #2C3E50; }
            .footer { background: #F5F5F0; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; font-size: 14px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">New Reservation Request</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Palm Beach Transportation Services</p>
            </div>

            <div class="content">
              <div class="section">
                <div class="section-title">Passenger Information</div>
                <div class="info-row"><span class="label">Name:</span> <span class="value">${name}</span></div>
                <div class="info-row"><span class="label">Email:</span> <span class="value">${email}</span></div>
                <div class="info-row"><span class="label">Phone:</span> <span class="value">${phone}</span></div>
              </div>

              <div class="section">
                <div class="section-title">Trip Details</div>
                <div class="info-row"><span class="label">Pickup Date:</span> <span class="value">${pickupDate}</span></div>
                <div class="info-row"><span class="label">Pickup Time:</span> <span class="value">${pickupTime}</span></div>
                <div class="info-row"><span class="label">Pickup Address:</span> <span class="value">${pickupAddress}</span></div>
                <div class="info-row"><span class="label">Dropoff Address:</span> <span class="value">${dropoffAddress}</span></div>
                <div class="info-row"><span class="label">Number of Passengers:</span> <span class="value">${passengerCount}</span></div>
                ${isRoundTrip ? `
                  <div class="info-row"><span class="label">Round Trip:</span> <span class="value">Yes</span></div>
                  <div class="info-row"><span class="label">Return Date:</span> <span class="value">${returnDate || 'N/A'}</span></div>
                  <div class="info-row"><span class="label">Return Time:</span> <span class="value">${returnTime || 'N/A'}</span></div>
                ` : ''}
              </div>

              ${specialRequests ? `
                <div class="section">
                  <div class="section-title">Special Requests</div>
                  <div class="value">${specialRequests}</div>
                </div>
              ` : ''}
            </div>

            <div class="footer">
              <p style="margin: 0;">This is an automated notification from your booking system.</p>
              <p style="margin: 5px 0 0 0;">Please respond to the customer as soon as possible.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email to business owner
    const { data: ownerEmailData, error: ownerEmailError } = await resend.emails.send({
      from: 'PBT Car Service <onboarding@resend.dev>',
      to: 'antoniodimov04@gmail.com',
      subject: `New Reservation Request from ${name}`,
      html: emailHtml,
    });

    if (ownerEmailError) {
      console.error('Error sending owner email:', ownerEmailError);
      return NextResponse.json(
        { error: 'Failed to send notification email' },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    const customerEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #C9A961 0%, #E5D4A5 100%); color: #0A1828; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #ffffff; padding: 30px; border: 1px solid #e0e0e0; }
            .footer { background: #F5F5F0; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; font-size: 14px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">Reservation Received</h1>
              <p style="margin: 10px 0 0 0;">Thank you for choosing Palm Beach Transportation Services</p>
            </div>

            <div class="content">
              <p>Dear ${name},</p>
              <p>We have received your reservation request and will contact you shortly to confirm your booking details.</p>
              <p><strong>Your Reservation Details:</strong></p>
              <ul style="list-style: none; padding-left: 0;">
                <li><strong>Pickup Date:</strong> ${pickupDate} at ${pickupTime}</li>
                <li><strong>Pickup Location:</strong> ${pickupAddress}</li>
                <li><strong>Dropoff Location:</strong> ${dropoffAddress}</li>
                <li><strong>Passengers:</strong> ${passengerCount}</li>
              </ul>
              <p>If you have any questions or need to modify your reservation, please contact us at:</p>
              <p>
                <strong>Phone:</strong> (561) 334-6350<br>
                <strong>Email:</strong> info@pbtcarservice.com
              </p>
              <p>We look forward to serving you!</p>
              <p style="margin-top: 30px;">Best regards,<br><strong>Palm Beach Transportation Services</strong></p>
            </div>

            <div class="footer">
              <p style="margin: 0;">This is an automated confirmation email.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send confirmation email to customer
    await resend.emails.send({
      from: 'PBT Car Service <onboarding@resend.dev>',
      to: email,
      subject: 'Reservation Confirmation - Palm Beach Transportation Services',
      html: customerEmailHtml,
    });

    return NextResponse.json(
      { message: 'Booking request submitted successfully', data: ownerEmailData },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing booking:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
