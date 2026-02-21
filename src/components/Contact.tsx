import { motion } from 'framer-motion';
import { RESTAURANT_INFO } from '../constants';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl"
          >
            <h2 className="text-3xl font-serif text-gray-900 mb-2">Book a Table</h2>
            <p className="text-gray-500 mb-8">Reserve your spot for a memorable dining experience.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-maroon focus:ring-1 focus:ring-maroon outline-none transition-all" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-maroon focus:ring-1 focus:ring-maroon outline-none transition-all" placeholder="+91" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-maroon focus:ring-1 focus:ring-maroon outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-maroon focus:ring-1 focus:ring-maroon outline-none transition-all">
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5+ Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-maroon focus:ring-1 focus:ring-maroon outline-none transition-all">
                  <option>Lunch (12:00 PM - 3:00 PM)</option>
                  <option>Dinner (7:00 PM - 11:00 PM)</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-maroon text-white py-4 rounded-lg font-bold tracking-wide shadow-lg hover:bg-red-900 transition-colors"
              >
                CONFIRM RESERVATION
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-6">Visit Us</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-haldi/20 p-3 rounded-full text-maroon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Address</h4>
                    <p className="text-gray-600">{RESTAURANT_INFO.address}</p>
                    <a href={RESTAURANT_INFO.googleMapsLink} target="_blank" rel="noopener noreferrer" className="text-maroon font-medium text-sm mt-1 inline-block hover:underline">
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-haldi/20 p-3 rounded-full text-maroon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Phone</h4>
                    <p className="text-gray-600">{RESTAURANT_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-haldi/20 p-3 rounded-full text-maroon">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Hours</h4>
                    <p className="text-gray-600">{RESTAURANT_INFO.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-md">
              <iframe 
                src="https://maps.google.com/maps?q=20.0082385838,73.7562430522&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
