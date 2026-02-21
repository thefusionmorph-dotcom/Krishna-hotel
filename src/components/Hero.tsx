import { motion } from 'framer-motion';
import { RESTAURANT_INFO } from '../constants';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=2000&auto=format&fit=crop"
            alt="Maharashtrian Thali"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-haldi font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base"
        >
          {RESTAURANT_INFO.subName}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight"
        >
          {RESTAURANT_INFO.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-white/90 text-lg md:text-xl font-light tracking-wide mb-10 max-w-2xl mx-auto"
        >
          {RESTAURANT_INFO.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#order"
            className="bg-haldi text-maroon px-8 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto"
          >
            ORDER NOW
          </a>
          <a
            href="#contact"
            className="border border-white/30 text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-white hover:text-maroon transition-all transform hover:scale-105 backdrop-blur-sm w-full sm:w-auto"
          >
            BOOK A TABLE
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
