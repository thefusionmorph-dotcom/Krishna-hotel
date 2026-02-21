import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { RESTAURANT_INFO } from '../constants';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1606491956689-2ea28c674456?q=80&w=600&auto=format&fit=crop"
                alt="Spices"
                className="rounded-2xl shadow-xl w-full h-64 object-cover transform translate-y-8"
              />
              <img
                src="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=600&auto=format&fit=crop"
                alt="Ambience"
                className="rounded-2xl shadow-xl w-full h-64 object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-haldi/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-maroon font-bold tracking-widest uppercase text-sm mb-2 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
              A Legacy of <span className="text-maroon italic">Pure Taste</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {RESTAURANT_INFO.description}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At Shree Krishna, we believe that food is not just sustenance, but a celebration of culture. Our recipes have been passed down through generations, ensuring that every bite transports you to the heart of Maharashtra.
            </p>
            
            <div className="flex gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-maroon font-bold">100%</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Pure Veg</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-maroon font-bold">20+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Years Legacy</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-maroon font-bold">4.5★</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
