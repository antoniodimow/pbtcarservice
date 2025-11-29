"use client";

import { motion } from "framer-motion";

export default function TermsOfServicePage() {
  return (
    <main className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="mb-8">
                <h1 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-2">
                  Terms of Service
                </h1>
                <p className="text-charcoal">Last updated: November 2025</p>
              </div>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Agreement to Terms
                </h2>
                <p className="text-charcoal leading-relaxed">
                  By accessing or using the services of Palm Beach Transportation Services (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Description of Services
                </h2>
                <p className="text-charcoal leading-relaxed">
                  Palm Beach Transportation Services operates as a transportation booking service, connecting clients with professional transportation providers. We facilitate bookings for executive transportation, airport transfers, corporate travel, and event logistics in Palm Beach and surrounding areas.
                </p>
              </div>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Booking and Reservations
                </h2>
                <ul className="list-disc list-inside text-charcoal space-y-2">
                  <li>All bookings are subject to availability and confirmation.</li>
                  <li>You must provide accurate and complete information when making a reservation.</li>
                  <li>Booking confirmations will be sent via email to the address provided.</li>
                  <li>You are responsible for reviewing your booking details for accuracy.</li>
                  <li>We reserve the right to refuse service at our discretion.</li>
                </ul>
              </div>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Payment Terms
                </h2>
                <ul className="list-disc list-inside text-charcoal space-y-2">
                  <li>We accept major credit and debit cards (Visa, MasterCard, American Express, Discover).</li>
                  <li>Full payment is required at the time of booking unless otherwise arranged.</li>
                  <li>All prices are quoted in US Dollars (USD).</li>
                  <li>Prices may vary based on vehicle type, distance, time, and special requirements.</li>
                  <li>Additional charges may apply for wait time, tolls, parking fees, or special requests.</li>
                </ul>
              </div>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Cancellation Policy
                </h2>
                <p className="text-charcoal leading-relaxed">
                  Please refer to our <a href="/cancellation" className="text-gold hover:underline">Cancellation Policy</a> page for detailed information regarding cancellations, modifications, and refunds. In summary:
                </p>
                <ul className="list-disc list-inside text-charcoal space-y-2 mt-4">
                  <li>Cancellations made 24 hours or more before pickup: Full refund</li>
                  <li>Cancellations made within 24 hours of pickup: Full charge applies</li>
                  <li>No-shows: Full charge applies</li>
                </ul>
              </div>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Client Responsibilities
                </h2>
                <p className="text-charcoal leading-relaxed mb-4">
                  As a client, you agree to:
                </p>
                <ul className="list-disc list-inside text-charcoal space-y-2">
                  <li>Be ready at the scheduled pickup time and location</li>
                  <li>Provide accurate contact and booking information</li>
                  <li>Treat chauffeurs and vehicles with respect</li>
                  <li>Not smoke or consume illegal substances in vehicles</li>
                  <li>Be responsible for any damage caused to vehicles during your service</li>
                  <li>Ensure all passengers comply with local laws and regulations</li>
                </ul>
              </div>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-charcoal leading-relaxed mb-4">
                  Palm Beach Transportation Services acts as a booking facilitator connecting clients with transportation providers. To the fullest extent permitted by law:
                </p>
                <ul className="list-disc list-inside text-charcoal space-y-2">
                  <li>We are not liable for delays caused by traffic, weather, road conditions, or circumstances beyond our control.</li>
                  <li>Our liability for any claim is limited to the amount paid for the specific service.</li>
                  <li>We are not responsible for lost, stolen, or damaged personal items left in vehicles.</li>
                  <li>We recommend appropriate travel insurance for important trips.</li>
                </ul>
              </div>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Intellectual Property
                </h2>
                <p className="text-charcoal leading-relaxed">
                  All content on this website, including text, graphics, logos, and images, is the property of Palm Beach Transportation Services and is protected by copyright and trademark laws. You may not reproduce, distribute, or use our content without prior written permission.
                </p>
              </div>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Governing Law
                </h2>
                <p className="text-charcoal leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of the State of Florida. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in Palm Beach County, Florida.
                </p>
              </div>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Changes to Terms
                </h2>
                <p className="text-charcoal leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of our services after any changes constitutes acceptance of the new terms.
                </p>
              </div>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Contact Us
                </h2>
                <p className="text-charcoal leading-relaxed">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 text-charcoal">
                  <p><strong>Palm Beach Transportation Services</strong></p>
                  <p>Palm Beach, FL</p>
                  <p>Phone: (561) 334-6350</p>
                  <p>Email: pbtcarservice@gmail.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
    </main>
  );
}
