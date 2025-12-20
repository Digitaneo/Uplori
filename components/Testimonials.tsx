import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { SectionHeading } from './UI';

const testimonials = [
  { name: "Sarah J.", role: "Content Creator", quote: "This tool completely changed my workflow. I used to spend Sundays stressed about posting, now it's all automated." },
  { name: "Mike T.", role: "Agency Owner", quote: "Managing 15 clients was a nightmare before. Now we have everything in one place. Highly recommended." },
  { name: "Elena R.", role: "Influencer", quote: "The AI features are a game changer. It writes better captions than I do!" },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Loved by Creators" subtitle="Join thousands of users who have streamlined their workflow." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-gray-50/70 backdrop-blur p-8 rounded-2xl border border-gray-100"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, idx) => <Star key={idx} className="h-5 w-5 fill-current" />)}
              </div>
              <p className="text-gray-700 italic mb-6">"{t.quote}"</p>
              <div>
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};