import { motion } from 'framer-motion';
import { RESTAURANT_INFO } from '../constants';
import { ExternalLink } from 'lucide-react';

export default function Order() {
  return (
    <section id="order" className="py-20 bg-maroon text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#FFC000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif mb-6">
          Hungry? Order Online
        </h2>
        <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
          Enjoy our delicious Maharashtrian delicacies from the comfort of your home. 
          We deliver piping hot food through our delivery partners.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <motion.a
            href={RESTAURANT_INFO.zomatoLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-900 px-8 py-4 rounded-xl shadow-lg flex items-center justify-center gap-4 group"
          >
            <div className="bg-red-500 text-white p-2 rounded-lg font-bold text-xs">ZOMATO</div>
            <span className="font-bold text-lg group-hover:text-red-600 transition-colors">Order on Zomato</span>
            <ExternalLink size={18} className="text-gray-400 group-hover:text-red-600" />
          </motion.a>

          <motion.a
            href={RESTAURANT_INFO.swiggyLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-900 px-8 py-4 rounded-xl shadow-lg flex items-center justify-center gap-4 group"
          >
            <div className="bg-orange-500 text-white p-2 rounded-lg font-bold text-xs">SWIGGY</div>
            <span className="font-bold text-lg group-hover:text-orange-600 transition-colors">Order on Swiggy</span>
            <ExternalLink size={18} className="text-gray-400 group-hover:text-orange-600" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
