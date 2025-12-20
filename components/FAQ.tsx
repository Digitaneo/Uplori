import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './UI';

const faqs = [
  { q: "Is it safe for my accounts?", a: "Yes, the platform uses official APIs and enterprise-grade security to ensure your accounts remain safe and compliant." },
  { q: "Can I manage multiple brands?", a: "Absolutely. The dashboard is designed to handle multiple distinct profiles or brands seamlessly." },
  { q: "Does it support video?", a: "Yes, you can upload and schedule videos, Reels, Shorts, and TikToks directly." },
  { q: "Is there a free trial?", a: "Yes! You can try the full features for free to see how much time it saves you." },
];

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50/80 backdrop-blur-md">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Frequently Asked Questions" />
        
        <div className="space-y-6">
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.q}</h3>
              <p className="text-gray-600">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};