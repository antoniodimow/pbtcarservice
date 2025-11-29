"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
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
                  Privacy Policy
                </h1>
                <p className="text-charcoal">Last updated: November 2025</p>
              </div>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Introduction
                </h2>
                <p className="text-charcoal leading-relaxed">
                  Palm Beach Transportation Services (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our transportation services.
                </p>
              </div>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Information We Collect
                </h2>
                <p className="text-charcoal leading-relaxed mb-4">
                  We may collect information about you in a variety of ways, including:
                </p>
                <ul className="list-disc list-inside text-charcoal space-y-2">
                  <li><strong>Personal Data:</strong> Name, email address, phone number, and billing address when you make a reservation or contact us.</li>
                  <li><strong>Booking Information:</strong> Pickup and drop-off locations, date and time preferences, flight details, and special requests.</li>
                  <li><strong>Payment Information:</strong> Credit card details processed securely through our payment processors.</li>
                  <li><strong>Device Information:</strong> IP address, browser type, and operating system for website analytics.</li>
                </ul>
              </div>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-charcoal leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-charcoal space-y-2">
                  <li>Process and fulfill your transportation bookings</li>
                  <li>Communicate with you about your reservations</li>
                  <li>Send booking confirmations and updates</li>
                  <li>Process payments securely</li>
                  <li>Improve our services and website experience</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Information Sharing
                </h2>
                <p className="text-charcoal leading-relaxed mb-4">
                  We may share your information with:
                </p>
                <ul className="list-disc list-inside text-charcoal space-y-2">
                  <li><strong>Transportation Partners:</strong> We work with affiliated transportation providers to fulfill your bookings. Your booking details are shared only as necessary to provide your requested service.</li>
                  <li><strong>Payment Processors:</strong> Secure third-party payment processors handle your payment information.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights.</li>
                </ul>
                <p className="text-charcoal leading-relaxed mt-4">
                  We do not sell, trade, or rent your personal information to third parties for marketing purposes.
                </p>
              </div>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Data Security
                </h2>
                <p className="text-charcoal leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Cookies
                </h2>
                <p className="text-charcoal leading-relaxed">
                  Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how you use our site. You can choose to disable cookies through your browser settings, though this may affect some website functionality.
                </p>
              </div>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Your Rights
                </h2>
                <p className="text-charcoal leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-charcoal space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
                <p className="text-charcoal leading-relaxed mt-4">
                  To exercise these rights, please contact us using the information below.
                </p>
              </div>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-charcoal leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                </p>
              </div>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Contact Us
                </h2>
                <p className="text-charcoal leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at:
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
