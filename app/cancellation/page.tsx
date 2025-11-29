"use client";

import { motion } from "framer-motion";

export default function CancellationPolicyPage() {
  return (
    <main className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="mb-8">
                <h1 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-2">
                  Cancellation Policy
                </h1>
                <p className="text-charcoal">Last updated: November 2025</p>
              </div>

              <p className="text-lg text-charcoal leading-relaxed">
                We understand that plans can change. Please review our cancellation policy below to understand the terms and conditions for modifying or canceling your reservation with Palm Beach Transportation Services.
              </p>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Cancellation Timeframes
                </h2>
                <ul className="list-disc list-inside text-charcoal space-y-3">
                  <li><strong>24+ hours before pickup:</strong> Cancellations made 24 hours or more before your scheduled pickup time will receive a full refund. No cancellation fees apply.</li>
                  <li><strong>Within 24 hours of pickup:</strong> Cancellations made within 24 hours of your scheduled pickup time will be charged the full booking amount. No refunds will be issued.</li>
                </ul>
              </div>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  No-Show Policy
                </h2>
                <p className="text-charcoal leading-relaxed">
                  If you fail to appear at the scheduled pickup location and time without prior notice, this is considered a &quot;no-show.&quot; No-shows will be charged the full booking amount with no refund. Our chauffeur will wait for up to 15 minutes past the scheduled pickup time before the booking is marked as a no-show.
                </p>
              </div>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  How to Cancel or Modify
                </h2>
                <p className="text-charcoal leading-relaxed mb-4">
                  To cancel or modify your reservation, please contact us using one of the following methods:
                </p>
                <ul className="list-disc list-inside text-charcoal space-y-2">
                  <li><strong>Phone:</strong> (561) 334-6350</li>
                  <li><strong>Email:</strong> pbtcarservice@gmail.com</li>
                </ul>
                <p className="text-charcoal leading-relaxed mt-4">
                  Please have your booking confirmation number ready when contacting us. Cancellation requests must be confirmed by our team to be valid.
                </p>
              </div>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Modifications to Bookings
                </h2>
                <p className="text-charcoal leading-relaxed">
                  Changes to your booking (such as pickup time, location, or vehicle type) are subject to availability. Modifications made within 24 hours of the scheduled pickup may incur additional charges if they require significant changes to the arrangement. Please contact us as early as possible to make changes.
                </p>
              </div>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Refund Processing
                </h2>
                <p className="text-charcoal leading-relaxed">
                  Approved refunds will be processed within 5-10 business days to the original payment method. Please note that your bank or credit card company may take additional time to reflect the refund in your account.
                </p>
              </div>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Special Circumstances
                </h2>
                <p className="text-charcoal leading-relaxed mb-4">
                  We understand that emergencies happen. In cases of:
                </p>
                <ul className="list-disc list-inside text-charcoal space-y-2">
                  <li><strong>Medical emergencies:</strong> Please contact us immediately. We will work with you on a case-by-case basis.</li>
                  <li><strong>Severe weather:</strong> If we cancel a service due to unsafe weather conditions, you will receive a full refund or the option to reschedule.</li>
                  <li><strong>Flight cancellations:</strong> For airport transfers, if your flight is cancelled by the airline, please notify us as soon as possible for rescheduling options.</li>
                </ul>
              </div>

              <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Contact Us
                </h2>
                <p className="text-charcoal leading-relaxed">
                  If you have any questions about our cancellation policy or need assistance with your booking, please don&apos;t hesitate to contact us. Our team is available 24/7 to assist you.
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
