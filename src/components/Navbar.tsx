import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { RESTAURANT_INFO } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Menu', href: '/#menu' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <HashLink
            smooth
            to="/#home"
            className="flex flex-col"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className={`text-2xl font-bold font-serif ${scrolled ? 'text-maroon' : 'text-white'}`}>
                {RESTAURANT_INFO.name}
              </span>
              <span className={`text-xs tracking-widest uppercase block ${scrolled ? 'text-gray-600' : 'text-white/80'}`}>
                {RESTAURANT_INFO.subName}
              </span>
            </motion.div>
          </HashLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <HashLink
                key={link.name}
                smooth
                to={link.href}
                className={`text-sm font-medium tracking-wide hover:text-haldi transition-colors ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name.toUpperCase()}
                </motion.span>
              </HashLink>
            ))}
            <HashLink
              smooth
              to="/#order"
              className="bg-haldi text-maroon px-6 py-2 rounded-full font-bold text-sm shadow-lg hover:bg-yellow-400 transition-colors flex items-center gap-2"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2"
              >
                <ShoppingBag size={16} />
                ORDER ONLINE
              </motion.div>
            </HashLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-maroon text-white overflow-hidden"
          >
            <div className="px-4 pt-2 pb-8 space-y-4 text-center">
              {navLinks.map((link) => (
                <HashLink
                  key={link.name}
                  smooth
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-lg font-medium hover:text-haldi"
                >
                  {link.name}
                </HashLink>
              ))}
              <HashLink
                smooth
                to="/#order"
                onClick={() => setIsOpen(false)}
                className="inline-block bg-haldi text-maroon px-8 py-3 rounded-full font-bold mt-4"
              >
                ORDER ONLINE
              </HashLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
