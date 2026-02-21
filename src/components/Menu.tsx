import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MENU_CATEGORIES } from '../constants';
import { ArrowRight } from 'lucide-react';

export default function Menu() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-maroon font-bold tracking-widest uppercase text-sm mb-2 block">
            Discover Our Flavors
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
            Our Specialities
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MENU_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-cream"
            >
              <div className="aspect-w-16 aspect-h-9 h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-serif text-white mb-1">{category.title}</h3>
                  <p className="text-white/80 text-sm">Starting from {category.items[0].price}</p>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-4">
                  {category.items.slice(0, 3).map((item) => (
                    <li key={item.name} className="flex justify-between items-start border-b border-gray-200 pb-2 last:border-0">
                      <div>
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-500 line-clamp-1">{item.desc}</p>
                      </div>
                      <span className="font-bold text-maroon">{item.price}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full py-3 border border-maroon text-maroon rounded-lg hover:bg-maroon hover:text-white transition-colors flex items-center justify-center gap-2 text-sm font-bold tracking-wide uppercase">
                  View Full Menu <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
