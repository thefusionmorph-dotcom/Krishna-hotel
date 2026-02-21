import { RESTAURANT_INFO } from '../constants';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-haldi">{RESTAURANT_INFO.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {RESTAURANT_INFO.description}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-haldi transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-haldi transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-haldi transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-haldi transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-haldi transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-haldi transition-colors">Menu</a></li>
              <li><a href="#gallery" className="hover:text-haldi transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-haldi transition-colors">Book a Table</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>{RESTAURANT_INFO.address}</li>
              <li>{RESTAURANT_INFO.phone}</li>
              <li>{RESTAURANT_INFO.hours}</li>
              <li className="pt-4">
                <a href={`mailto:info@${RESTAURANT_INFO.name.replace(/\s+/g, '').toLowerCase()}.com`} className="text-haldi hover:underline">
                  info@{RESTAURANT_INFO.name.replace(/\s+/g, '').toLowerCase()}.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center text-gray-600 text-xs">
          <p>&copy; {new Date().getFullYear()} {RESTAURANT_INFO.name}. All rights reserved.</p>
          <p className="mt-2">Designed with ❤️ by Maratha Curry</p>
        </div>
      </div>
    </footer>
  );
}
