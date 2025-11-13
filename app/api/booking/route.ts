import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      pickupLocation,
      destination,
      date,
      time,
      passengers,
      serviceType,
      specialRequests,
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !pickupLocation || !destination || !date || !time) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to customer
    const customerEmail = await resend.emails.send({
      from: 'Palm Beach Transportation <onboarding@resend.dev>',
      to: email,
      subject: 'Booking Received - Confirmation Pending',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #0A1828 0%, #1a2f45 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .booking-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
              .detail-row { padding: 10px 0; border-bottom: 1px solid #eee; }
              .detail-label { font-weight: bold; color: #C9A961; }
              .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
              .gold { color: #C9A961; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 28px;">Thank You for Your Booking!</h1>
              </div>
              <div class="content">
                <p>Dear ${name},</p>
                <p>We have received your booking request for luxury transportation services. Your reservation is currently <strong class="gold">pending confirmation</strong>.</p>

                <div class="booking-details">
                  <h2 style="color: #0A1828; margin-top: 0;">Your Booking Details:</h2>
                  <div class="detail-row">
                    <span class="detail-label">Pickup Location:</span> ${pickupLocation}
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Destination:</span> ${destination}
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Date & Time:</span> ${date} at ${time}
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Passengers:</span> ${passengers}
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Service Type:</span> ${serviceType}
                  </div>
                  ${specialRequests ? `<div class="detail-row"><span class="detail-label">Special Requests:</span> ${specialRequests}</div>` : ''}
                </div>

                <h3 style="color: #C9A961;">What Happens Next?</h3>
                <p>Our team will review your booking and contact you shortly at <strong>${phone}</strong> to:</p>
                <ul>
                  <li>Confirm your reservation details</li>
                  <li>Discuss pricing and any special requirements</li>
                  <li>Answer any questions you may have</li>
                  <li>Finalize your booking</li>
                </ul>

                <p><strong>Please keep your phone available so we can reach you!</strong></p>

                <p>If you need immediate assistance, please call us at <strong style="color: #C9A961;">(561) 334-6350</strong>.</p>

                <div class="footer">
                  <p>Palm Beach Transportation Services<br>
                  Phone: (561) 334-6350<br>
                  Email: info@pbtcarservice.com</p>
                  <p style="font-size: 12px; color: #999;">This is an automated message. Please do not reply to this email.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Send email to admin
    // NOTE: In testing mode, sending to antoniodimov04@gmail.com
    // Change to 'info@pbtcarservice.com' once domain is verified
    const adminEmail = await resend.emails.send({
      from: 'Palm Beach Transportation Bookings <onboarding@resend.dev>',
      to: 'antoniodimov04@gmail.com',
      subject: `New Booking Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 700px; margin: 0 auto; padding: 20px; }
              .header { background: #C9A961; color: #0A1828; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .booking-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #C9A961; }
              .detail-row { padding: 12px; border-bottom: 1px solid #eee; display: flex; }
              .detail-label { font-weight: bold; color: #0A1828; min-width: 150px; }
              .detail-value { color: #333; }
              .urgent { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; border-radius: 5px; margin: 20px 0; }
              .contact-info { background: #0A1828; color: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 24px;">🚗 NEW BOOKING REQUEST</h1>
                <p style="margin: 5px 0 0 0;">Requires Confirmation Call</p>
              </div>
              <div class="content">
                <div class="urgent">
                  <strong>⚠️ ACTION REQUIRED:</strong> Please call this customer to confirm their booking.
                </div>

                <div class="contact-info">
                  <h2 style="color: #C9A961; margin-top: 0;">Customer Contact Information:</h2>
                  <p style="font-size: 18px; margin: 5px 0;"><strong>Name:</strong> ${name}</p>
                  <p style="font-size: 18px; margin: 5px 0;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #C9A961;">${phone}</a></p>
                  <p style="font-size: 18px; margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #C9A961;">${email}</a></p>
                </div>

                <div class="booking-details">
                  <h2 style="color: #0A1828; margin-top: 0;">Booking Details:</h2>
                  <div class="detail-row">
                    <span class="detail-label">📍 Pickup Location:</span>
                    <span class="detail-value">${pickupLocation}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">📍 Destination:</span>
                    <span class="detail-value">${destination}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">📅 Date:</span>
                    <span class="detail-value">${date}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">🕐 Time:</span>
                    <span class="detail-value">${time}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">👥 Passengers:</span>
                    <span class="detail-value">${passengers}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">🚙 Service Type:</span>
                    <span class="detail-value">${serviceType}</span>
                  </div>
                  ${specialRequests ? `
                  <div class="detail-row">
                    <span class="detail-label">📝 Special Requests:</span>
                    <span class="detail-value">${specialRequests}</span>
                  </div>
                  ` : ''}
                </div>

                <div style="background: #e8f5e9; padding: 15px; border-radius: 5px; margin-top: 20px;">
                  <strong style="color: #2e7d32;">Next Steps:</strong>
                  <ol style="margin: 10px 0;">
                    <li>Call customer at ${phone} to confirm availability</li>
                    <li>Discuss pricing and finalize details</li>
                    <li>Confirm vehicle assignment</li>
                    <li>Send final confirmation to customer</li>
                  </ol>
                </div>

                <p style="margin-top: 30px; font-size: 14px; color: #666;">
                  Received: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Booking request sent successfully',
    });

  } catch (error) {
    console.error('Booking API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking request' },
      { status: 500 }
    );
  }
}
