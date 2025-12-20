import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { AFFILIATE_LINK } from '../constants';
import { Button, SectionHeading } from './UI';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-900/95 backdrop-blur-sm text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="mb-12 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight sm:text-5xl mb-4"
            >
              Simple, Flexible Pricing
            </motion.h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
              Choose the perfect plan for your needs. Start with a free trial.
            </p>
         </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Individual Plan */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-primary-500 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-2">Individual</h3>
            <p className="text-gray-400 mb-6">Perfect for solo creators starting out.</p>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-extrabold text-white">Starter</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['Connect up to 3 accounts', 'Basic Analytics', '30 scheduled posts/mo', 'Email Support'].map((feat, i) => (
                <li key={i} className="flex items-center text-gray-300">
                  <Check className="h-5 w-5 text-primary-500 mr-3" /> {feat}
                </li>
              ))}
            </ul>
            {/* Fix: Dark blue text on white button for high contrast */}
            <Button href={AFFILIATE_LINK} variant="outline" className="w-full !bg-white !text-primary-900 !border-transparent hover:!bg-gray-100 font-bold">
              Start Free Trial
            </Button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative bg-primary-900 rounded-2xl p-8 border border-primary-500 shadow-2xl"
          >
            <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">Professional</h3>
            <p className="text-primary-200 mb-6">For power users and growing businesses.</p>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-extrabold text-white">Unlimited</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['Connect unlimited accounts', 'Advanced Analytics', 'Unlimited scheduling', 'AI Caption Generator', 'Priority Support'].map((feat, i) => (
                <li key={i} className="flex items-center text-white">
                  <Check className="h-5 w-5 text-white mr-3 bg-primary-500 rounded-full p-0.5" /> {feat}
                </li>
              ))}
            </ul>
            {/* Fix: Primary blue text on white button */}
            <Button href={AFFILIATE_LINK} variant="primary" className="w-full !bg-white !text-primary-700 hover:!bg-gray-50 font-bold shadow-none">
              Get Started Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};