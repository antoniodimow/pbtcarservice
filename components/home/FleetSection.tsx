"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, Wifi, Wine } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const fleetVehicles = [
  {
    name: "Mercedes-Benz S-Class",
    type: "Executive Sedan",
    image:
      "https://images.unsplash.com/photo-1617531653520-bd466b8f0e44?q=80&w=2070&auto=format&fit=crop",
    capacity: 3,
    luggage: 2,
    amenities: ["WiFi", "Climate Control", "Premium Sound", "Privacy Glass"],
  },
  {
    name: "BMW 7 Series",
    type: "Luxury Sedan",
    image:
      "https://images.unsplash.com/photo-1617531653500-db629c11f7b8?q=80&w=2070&auto=format&fit=crop",
    capacity: 3,
    luggage: 2,
    amenities: ["WiFi", "Massage Seats", "Champagne Bar", "Entertainment"],
  },
  {
    name: "Mercedes-Benz Sprinter",
    type: "Executive Van",
    image:
      "https://images.unsplash.com/photo-1562141487-55d0e8f8dfb7?q=80&w=2070&auto=format&fit=crop",
    capacity: 14,
    luggage: 10,
    amenities: ["WiFi", "Conference Setup", "Refreshments", "USB Charging"],
  },
  {
    name: "Cadillac Escalade",
    type: "Luxury SUV",
    image:
      "https://images.unsplash.com/photo-1610708423669-29b91ebe33f3?q=80&w=2070&auto=format&fit=crop",
    capacity: 6,
    luggage: 4,
    amenities: ["WiFi", "Premium Audio", "Climate Zones", "Entertainment"],
  },
];

export function FleetSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-gold mb-3 sm:mb-4">
            Our Premium Fleet
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Immaculately maintained luxury vehicles for every occasion
          </p>
        </motion.div>

        {/* Fleet Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="fleet-swiper"
          >
            {fleetVehicles.map((vehicle, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-gold/20 hover:border-gold/40 transition-colors">
                  <div className="relative h-64">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-gold text-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {vehicle.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-2xl font-bold text-gold mb-4">
                      {vehicle.name}
                    </h3>
                    <div className="flex gap-6 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-gold" />
                        <span>{vehicle.capacity} Passengers</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Briefcase className="h-4 w-4 text-gold" />
                        <span>{vehicle.luggage} Luggage</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {vehicle.amenities.map((amenity) => (
                        <div
                          key={amenity}
                          className="flex items-center gap-2 text-sm text-gray-300"
                        >
                          <div className="w-1 h-1 rounded-full bg-gold" />
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button size="lg" variant="outline" asChild>
            <Link href="/fleet">View Full Fleet</Link>
          </Button>
        </motion.div>
      </div>

      <style jsx global>{`
        .fleet-swiper .swiper-button-next,
        .fleet-swiper .swiper-button-prev {
          color: #c9a961;
        }
        .fleet-swiper .swiper-pagination-bullet {
          background: #c9a961;
        }
        .fleet-swiper .swiper-pagination-bullet-active {
          background: #c9a961;
        }
      `}</style>
    </section>
  );
}
