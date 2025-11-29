"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TimePicker } from "@/components/ui/TimePicker";
import { Calendar, MapPin, Users, Phone, Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useState, FormEvent } from "react";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupDate: "",
    pickupTime: "",
    pickupAddress: "",
    dropoffAddress: "",
    passengerCount: "1",
    vehicleType: "",
    specialRequests: "",
    isRoundTrip: false,
    returnDate: "",
    returnTime: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

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

      setSubmitStatus({
        type: "success",
        message: "Your reservation request has been submitted successfully! We'll contact you shortly.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        pickupDate: "",
        pickupTime: "",
        pickupAddress: "",
        dropoffAddress: "",
        passengerCount: "1",
        vehicleType: "",
        specialRequests: "",
        isRoundTrip: false,
        returnDate: "",
        returnTime: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to submit your booking. Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/chauffeur-service.jpg"
            alt="Book your luxury transportation"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
          <div className="absolute inset-0 bg-black/50"></div>
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
            <motion.div
              className="bg-warm-gray rounded-xl p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <Calendar className="h-12 w-12 text-gold mx-auto mb-4" />
                <h2 className="font-playfair text-3xl font-bold text-primary mb-2">
                  Reserve Your Ride
                </h2>
                <p className="text-charcoal">
                  Fill out the form below and we'll confirm your reservation shortly
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Passenger Information */}
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-gold" />
                    Passenger Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                        placeholder="(561) 234-5678"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Trip Details */}
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-gold" />
                    Trip Details
                  </h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="pickupDate" className="block text-sm font-medium text-charcoal mb-1">
                          Pickup Date *
                        </label>
                        <input
                          type="date"
                          id="pickupDate"
                          name="pickupDate"
                          value={formData.pickupDate}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-charcoal"
                          style={!formData.pickupDate ? { color: 'transparent' } : {}}
                          onFocus={(e) => e.target.style.color = '#2C3E50'}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1">
                          Pickup Time *
                        </label>
                        <TimePicker
                          value={formData.pickupTime}
                          onChange={(time) => setFormData((prev) => ({ ...prev, pickupTime: time }))}
                          placeholder="Select pickup time"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="pickupAddress" className="block text-sm font-medium text-charcoal mb-1">
                        Pickup Address *
                      </label>
                      <input
                        type="text"
                        id="pickupAddress"
                        name="pickupAddress"
                        value={formData.pickupAddress}
                        onChange={handleChange}
                        placeholder="123 Main St, Palm Beach, FL"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="dropoffAddress" className="block text-sm font-medium text-charcoal mb-1">
                        Dropoff Address *
                      </label>
                      <input
                        type="text"
                        id="dropoffAddress"
                        name="dropoffAddress"
                        value={formData.dropoffAddress}
                        onChange={handleChange}
                        placeholder="Palm Beach International Airport"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="passengerCount" className="block text-sm font-medium text-charcoal mb-1">
                          Number of Passengers *
                        </label>
                        <input
                          type="number"
                          id="passengerCount"
                          name="passengerCount"
                          value={formData.passengerCount}
                          onChange={handleChange}
                          required
                          min="1"
                          max="14"
                          className="w-full h-[42px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="vehicleType" className="block text-sm font-medium text-charcoal mb-1">
                          Vehicle Type *
                        </label>
                        <select
                          id="vehicleType"
                          name="vehicleType"
                          value={formData.vehicleType}
                          onChange={handleChange}
                          required
                          className="w-full h-[42px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent bg-white"
                        >
                          <option value="">Select a vehicle</option>
                          <option value="Luxury Sedan">Luxury Sedan (up to 3 passengers)</option>
                          <option value="Executive SUV">Executive SUV (up to 6 passengers)</option>
                          <option value="Luxury Van">Luxury Van (up to 14 passengers)</option>
                        </select>
                      </div>
                    </div>

                    {/* Round Trip Option */}
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="isRoundTrip"
                        name="isRoundTrip"
                        checked={formData.isRoundTrip}
                        onChange={handleChange}
                        className="h-4 w-4 text-gold focus:ring-gold border-gray-300 rounded"
                      />
                      <label htmlFor="isRoundTrip" className="ml-2 block text-sm text-charcoal">
                        This is a round trip
                      </label>
                    </div>

                    {formData.isRoundTrip && (
                      <div className="grid md:grid-cols-2 gap-4 pl-6 border-l-2 border-gold">
                        <div>
                          <label htmlFor="returnDate" className="block text-sm font-medium text-charcoal mb-1">
                            Return Date
                          </label>
                          <input
                            type="date"
                            id="returnDate"
                            name="returnDate"
                            value={formData.returnDate}
                            onChange={handleChange}
                            min={formData.pickupDate || new Date().toISOString().split("T")[0]}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-charcoal"
                            style={!formData.returnDate ? { color: 'transparent' } : {}}
                            onFocus={(e) => e.target.style.color = '#2C3E50'}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1">
                            Return Time
                          </label>
                          <TimePicker
                            value={formData.returnTime}
                            onChange={(time) => setFormData((prev) => ({ ...prev, returnTime: time }))}
                            placeholder="Select return time"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium text-charcoal mb-1">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Any special requirements or notes..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 text-lg"
                  style={{
                    background: isSubmitting ? '#9CA3AF' : 'linear-gradient(135deg, #C9A961 0%, #E5D4A5 100%)',
                    border: '2px solid #FFFFFF',
                    color: '#0A1828',
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Reservation Request'
                  )}
                </Button>

                {/* Error Message */}
                {submitStatus.type === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg flex items-start bg-red-50 text-red-800"
                  >
                    <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <p>{submitStatus.message}</p>
                  </motion.div>
                )}
              </form>

              {/* Success Modal */}
              {submitStatus.type === "success" && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
                  >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-gold to-gold-light p-6 text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="h-10 w-10 text-gold" />
                      </div>
                      <h2 className="text-2xl font-playfair font-bold text-primary">
                        Reservation Confirmed!
                      </h2>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-center text-charcoal mb-6">
                        Thank you for choosing Palm Beach Transportation Services. Your reservation request has been submitted successfully.
                      </p>

                      <div className="bg-warm-gray rounded-lg p-4 mb-6">
                        <p className="text-sm text-charcoal text-center">
                          <strong>What's Next?</strong><br />
                          We'll contact you shortly at <strong>{formData.email}</strong> to confirm your booking details.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <Button
                          onClick={() => {
                            setSubmitStatus({ type: null, message: "" });
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="w-full"
                          style={{
                            background: 'linear-gradient(135deg, #C9A961 0%, #E5D4A5 100%)',
                            border: '2px solid #FFFFFF',
                            color: '#0A1828',
                          }}
                        >
                          Make Another Reservation
                        </Button>

                        <Button
                          asChild
                          variant="outline"
                          className="w-full"
                        >
                          <a href="/">Return to Homepage</a>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Alternative Contact Methods */}
              <div className="mt-12 pt-8 border-t border-gray-300">
                <p className="text-center text-charcoal mb-6">
                  Prefer to contact us directly?
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button asChild variant="outline" className="w-full">
                    <a href="tel:+15613346350" className="flex items-center justify-center">
                      <Phone className="h-4 w-4 mr-2" />
                      Call: (561) 334-6350
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="mailto:pbtcarservice@gmail.com" className="flex items-center justify-center">
                      <Mail className="h-4 w-4 mr-2" />
                      Email: pbtcarservice@gmail.com
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
