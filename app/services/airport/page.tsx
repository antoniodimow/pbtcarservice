"use client";

import { ServicePageHero } from "@/components/services/ServicePageHero";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { CTASection } from "@/components/home/CTASection";
import { Plane, MapPin, Wifi, Luggage, Clock, UserRound } from "lucide-react";

const features = [
  {
    icon: Plane,
    title: "Flight Tracking",
    description:
      "Real-time flight monitoring to adjust pickup times for delays or early arrivals.",
  },
  {
    icon: UserRound,
    title: "Meet & Greet",
    description:
      "Professional chauffeur waiting at arrivals with personalized signage.",
  },
  {
    icon: Luggage,
    title: "Luggage Assistance",
    description:
      "Full support with baggage handling from curb to vehicle.",
  },
  {
    icon: Clock,
    title: "On-Time Guarantee",
    description:
      "Arrive at the airport with plenty of time for check-in and security.",
  },
  {
    icon: MapPin,
    title: "All Major Airports",
    description:
      "Service to Palm Beach International and surrounding airports.",
  },
  {
    icon: Wifi,
    title: "Comfortable Journey",
    description:
      "WiFi and amenities to prepare for your flight or decompress after landing.",
  },
];

export default function AirportTransfersPage() {
  return (
    <>
      <ServicePageHero
        title="Airport Transfer Services"
        description="Stress-free airport transportation with flight tracking, meet & greet service, and guaranteed on-time arrivals for all your travel needs."
        Icon={Plane}
        backgroundImage="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=2070&auto=format&fit=crop"
      />
      <ServiceFeatures features={features} />

      <section className="py-20 bg-warm-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Seamless Airport Transportation
            </h2>
            <div className="space-y-6 text-charcoal">
              <p className="text-lg">
                Start and end your journey with Palm Beach Transportation Services. Our airport transfer service takes the stress out of getting to and from the airport, whether you're traveling for business or pleasure.
              </p>
              <p className="text-lg">
                With real-time flight tracking, we monitor your flight status and adjust pickup times automatically for delays or early arrivals. Your chauffeur will be waiting when you land, ready to assist with luggage and ensure a smooth transition to your destination.
              </p>
              <div className="bg-white rounded-xl p-8 shadow-md mt-8">
                <h3 className="font-semibold text-xl text-primary mb-4">
                  Service Highlights:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                    <span>
                      Complimentary wait time: 15 minutes for domestic, 30 minutes for international
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                    <span>
                      Professional meet & greet service with personalized signage
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                    <span>
                      24/7 availability for early morning and late-night flights
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                    <span>
                      Service to all major South Florida airports
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                    <span>
                      Spacious vehicles with ample luggage capacity
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-primary rounded-xl p-8 shadow-md mt-8 text-white">
                <h3 className="font-semibold text-xl text-gold mb-4">
                  Airports We Serve:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium mb-2">Primary Airports:</p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Palm Beach International Airport (PBI)</li>
                      <li>• Fort Lauderdale-Hollywood International (FLL)</li>
                      <li>• Miami International Airport (MIA)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Additional Airports:</p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Fort Lauderdale Executive Airport (FXE)</li>
                      <li>• Boca Raton Airport (BCT)</li>
                      <li>• Stuart Witham Field (SUA)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
