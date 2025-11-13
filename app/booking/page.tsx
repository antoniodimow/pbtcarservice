"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Phone, Mail, Clock, Car, CheckCircle, AlertCircle } from "lucide-react";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupLocation: "",
    destination: "",
    date: "",
    time: "",
    passengers: "1",
    serviceType: "Airport Transfer",
    specialRequests: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const serviceTypes = [
    "Airport Transfer",
    "Corporate Travel",
    "Executive Transport",
    "Event Transportation",
    "Hourly Charter",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit booking");
      }

      setSubmitStatus("success");
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        pickupLocation: "",
        destination: "",
        date: "",
        time: "",
        passengers: "1",
        serviceType: "Airport Transfer",
        specialRequests: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Failed to submit booking. Please try again or call us at (561) 334-6350.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop)",
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
              Book Your Luxury Ride
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Reserve your premium transportation in just a few steps
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {submitStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center"
              >
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h2 className="font-playfair text-3xl font-bold text-green-700 mb-4">
                  Booking Request Received!
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Thank you for choosing Palm Beach Transportation. We've sent a confirmation to your email.
                </p>
                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-xl text-primary mb-3">What Happens Next?</h3>
                  <ul className="text-left space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">✓</span>
                      <span>Our team will review your request within 30 minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">✓</span>
                      <span>We'll call you at {formData.phone || "your provided number"} to confirm details</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">✓</span>
                      <span>You'll receive final confirmation once we've spoken</span>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-600 mb-6">
                  <strong>Please keep your phone available!</strong>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => setSubmitStatus("idle")}
                    className="bg-gold hover:bg-gold-light"
                  >
                    Book Another Ride
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                  >
                    <a href="tel:+15613346350">Call Us: (561) 334-6350</a>
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                className="bg-warm-gray rounded-xl p-8 md:p-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-playfair text-3xl font-bold text-primary mb-2 text-center">
                  Request Your Booking
                </h2>
                <p className="text-center text-charcoal mb-8">
                  Fill out the form below and we'll contact you shortly to confirm your reservation
                </p>

                {submitStatus === "error" && (
                  <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 mb-6 flex items-start gap-3">
                    <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-700">Submission Failed</p>
                      <p className="text-red-600">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-semibold text-xl text-primary mb-4 flex items-center gap-2">
                      <Users className="h-5 w-5 text-gold" />
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                          placeholder="(561) 555-1234"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                          placeholder="john.doe@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Trip Details */}
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-semibold text-xl text-primary mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-gold" />
                      Trip Details
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="pickupLocation" className="block text-sm font-medium text-charcoal mb-2">
                          Pickup Location *
                        </label>
                        <input
                          type="text"
                          id="pickupLocation"
                          name="pickupLocation"
                          required
                          value={formData.pickupLocation}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                          placeholder="123 Main St, Palm Beach, FL 33480"
                        />
                      </div>
                      <div>
                        <label htmlFor="destination" className="block text-sm font-medium text-charcoal mb-2">
                          Destination *
                        </label>
                        <input
                          type="text"
                          id="destination"
                          name="destination"
                          required
                          value={formData.destination}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                          placeholder="Palm Beach International Airport (PBI)"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="date" className="block text-sm font-medium text-charcoal mb-2">
                            Date *
                          </label>
                          <input
                            type="date"
                            id="date"
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                            placeholder="Select date"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-charcoal"
                            style={{ colorScheme: 'light' }}
                          />
                        </div>
                        <div>
                          <label htmlFor="time" className="block text-sm font-medium text-charcoal mb-2">
                            Time *
                          </label>
                          <input
                            type="time"
                            id="time"
                            name="time"
                            required
                            value={formData.time}
                            onChange={handleChange}
                            placeholder="Select time"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-charcoal"
                            style={{ colorScheme: 'light' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Service Preferences */}
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-semibold text-xl text-primary mb-4 flex items-center gap-2">
                      <Car className="h-5 w-5 text-gold" />
                      Service Preferences
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="serviceType" className="block text-sm font-medium text-charcoal mb-2">
                          Service Type *
                        </label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          required
                          value={formData.serviceType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                        >
                          {serviceTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="passengers" className="block text-sm font-medium text-charcoal mb-2">
                          Number of Passengers *
                        </label>
                        <select
                          id="passengers"
                          name="passengers"
                          required
                          value={formData.passengers}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? "Passenger" : "Passengers"}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="specialRequests" className="block text-sm font-medium text-charcoal mb-2">
                          Special Requests (Optional)
                        </label>
                        <textarea
                          id="specialRequests"
                          name="specialRequests"
                          rows={4}
                          value={formData.specialRequests}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                          placeholder="Luggage, child seats, accessibility needs, or any other special requirements..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Important Notice */}
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-blue-700">
                        <p className="font-semibold mb-1">Confirmation Process</p>
                        <p>
                          Your booking is not confirmed until we call you to verify details and pricing.
                          Please ensure your phone is available. We typically respond within 30 minutes during business hours.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg font-bold shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #C9A961 0%, #E5D4A5 100%)',
                      color: '#0A1828'
                    }}
                  >
                    {isSubmitting ? "Submitting..." : "Request Booking"}
                  </Button>

                  <p className="text-center text-sm text-gray-600">
                    Need immediate assistance? Call us at{" "}
                    <a href="tel:+15613346350" className="text-gold font-semibold hover:underline">
                      (561) 334-6350
                    </a>
                  </p>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8">
              Why Book With Us?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <Clock className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-2">24/7 Service</h3>
                <p className="text-gray-300">
                  Available anytime, any day of the year
                </p>
              </div>
              <div>
                <CheckCircle className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-2">Professional Drivers</h3>
                <p className="text-gray-300">
                  Experienced, licensed, and background-checked
                </p>
              </div>
              <div>
                <Car className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-2">Luxury Vehicles</h3>
                <p className="text-gray-300">
                  Premium, well-maintained fleet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
