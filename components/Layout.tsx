import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Twitter, Instagram, Linkedin, Command } from 'lucide-react';
import { AFFILIATE_LINK, NAVIGATION_LINKS, FOOTER_LINKS } from '../constants';
import { Button } from './UI';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
             <div className="bg-primary-600 p-2 rounded-lg mr-2">
                <Command className="h-6 w-6 text-white" />
             </div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">Uplori</span>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            {NAVIGATION_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
                {link.name}
              </a>
            ))}
            <Button href={AFFILIATE_LINK} className="!py-2 !px-4">Try for Free</Button>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <Button href={AFFILIATE_LINK} className="w-full justify-center">Try for Free</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center mb-4">
               <div className="bg-primary-600 p-1.5 rounded-lg mr-2">
                  <Command className="h-5 w-5 text-white" />
               </div>
              <span className="text-xl font-bold text-gray-900">Uplori</span>
            </div>
            <p className="text-gray-500 mb-6 max-w-sm">
              Your gateway to seamless social media automation. We help content creators and businesses streamline their digital presence through advanced tools.
            </p>
            <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-lg inline-block">
               <p className="text-xs text-yellow-800 font-medium">
                 Disclaimer: Uplori.com is an independent affiliate website. We are not the official provider of the promoted service. We participate in affiliate marketing.
               </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.slice(0, 3).map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.slice(3).map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} Uplori. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};