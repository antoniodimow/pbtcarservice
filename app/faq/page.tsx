"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    category: "Booking & Reservations",
    questions: [
      {
        question: "How far in advance should I book?",
        answer:
          "We recommend booking at least 24-48 hours in advance for standard services. However, we often accommodate same-day requests based on availability. For airport transfers and special events, we suggest booking 3-7 days ahead to ensure vehicle availability.",
      },
      {
        question: "Can I make last-minute bookings?",
        answer:
          "Yes! We offer 24/7 service and will do our best to accommodate last-minute requests. Call our concierge team at (561) 334-6350, and we'll check availability immediately.",
      },
      {
        question: "How do I cancel or modify my reservation?",
        answer:
          "You can cancel or modify your reservation up to 24 hours before your scheduled pickup without any fees. For cancellations or changes within 24 hours, please contact us directly. A cancellation fee may apply depending on our cancellation policy.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    questions: [
      {
        question: "How is pricing calculated?",
        answer:
          "Our pricing is based on several factors including distance, time, vehicle type, and service requirements. We provide transparent, upfront pricing with no hidden fees. Use our route calculator on the website for instant estimates, or contact us for a custom quote.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, MasterCard, American Express, Discover), corporate accounts, and can arrange for monthly billing for regular clients. Payment can be made securely through our booking platform or with your chauffeur.",
      },
      {
        question: "Do you offer corporate accounts?",
        answer:
          "Yes! We offer comprehensive corporate account services with simplified billing, dedicated account management, and flexible payment terms. Contact us to discuss setting up a corporate account tailored to your business needs.",
      },
    ],
  },
  {
    category: "Service Details",
    questions: [
      {
        question: "Are your chauffeurs licensed and insured?",
        answer:
          "Absolutely. All our chauffeurs are professionally licensed, extensively trained, and undergo thorough background checks. Our entire fleet is fully insured with comprehensive commercial coverage for your peace of mind.",
      },
      {
        question: "What happens if my flight is delayed?",
        answer:
          "We monitor all flights in real-time. If your flight is delayed, we automatically adjust your pickup time at no extra charge. For airport pickups, we include complimentary wait time: 15 minutes for domestic flights and 30 minutes for international flights.",
      },
      {
        question: "Can I request a specific vehicle?",
        answer:
          "Yes! When booking, you can select your preferred vehicle from our fleet. We'll do everything possible to accommodate your request. If your first choice isn't available, we'll suggest similar alternatives.",
      },
      {
        question: "Do you provide car seats for children?",
        answer:
          "Yes, we can provide car seats and booster seats upon request at no additional charge. Please specify the age and size requirements when booking so we can ensure proper safety equipment is available.",
      },
    ],
  },
  {
    category: "Coverage Area",
    questions: [
      {
        question: "What areas do you serve?",
        answer:
          "We primarily serve Palm Beach and the surrounding South Florida region, including Fort Lauderdale, Miami, and West Palm Beach. We also provide transportation to all major airports in the area and can arrange long-distance trips upon request.",
      },
      {
        question: "Do you offer out-of-state transportation?",
        answer:
          "Yes, we can arrange long-distance and out-of-state transportation for special requests. Please contact us with your itinerary, and we'll provide a custom quote and coordinate the logistics.",
      },
    ],
  },
  {
    category: "Special Requests",
    questions: [
      {
        question: "Can I make special requests for amenities?",
        answer:
          "Absolutely! We welcome special requests such as specific beverages, newspapers, temperature preferences, or route preferences. Let us know when booking, and we'll ensure everything is prepared for your journey.",
      },
      {
        question: "Do you accommodate passengers with disabilities?",
        answer:
          "Yes, we're committed to providing accessible transportation. We have vehicles equipped to accommodate passengers with various mobility needs. Please inform us of any specific requirements when booking so we can ensure the appropriate vehicle and assistance.",
      },
      {
        question: "Can I bring pets?",
        answer:
          "Yes, we welcome well-behaved pets! Please let us know when booking so we can prepare accordingly. We ask that pets remain in carriers or on leashes during the journey.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-gold transition-colors"
      >
        <span className="font-semibold text-lg text-primary pr-8">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-gold flex-shrink-0 transition-transform duration-200",
            isOpen && "transform rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        )}
      >
        <p className="text-charcoal leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-24 pb-12">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Find answers to common questions about our services
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-6">
                  {category.category}
                </h2>
                <div className="bg-warm-gray rounded-xl p-6 md:p-8">
                  {category.questions.map((faq) => (
                    <FAQItem
                      key={faq.question}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is here to help. Contact us anytime for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15613346350"
              className="inline-flex items-center justify-center gap-2 bg-gold text-primary hover:bg-gold-light px-8 py-3 rounded-lg font-medium transition-all hover:scale-105 shadow-md"
            >
              Call (561) 334-6350
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-primary px-8 py-3 rounded-lg font-medium transition-all"
            >
              Send a Message
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
