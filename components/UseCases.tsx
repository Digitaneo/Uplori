import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Camera, TrendingUp, Users } from 'lucide-react';
import { SectionHeading } from './UI';

const useCases = [
  {
    icon: Camera,
    title: "Content Creators",
    desc: "Spend more time filming and less time posting. Batch upload weeks of content in minutes.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Users,
    title: "Social Media Managers",
    desc: "Manage multiple clients from one dashboard. Switch accounts instantly and keep approvals flowing.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Briefcase,
    title: "Agencies",
    desc: "Scale your operations without hiring more hands. Automated reporting keeps clients happy.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: TrendingUp,
    title: "eCommerce Owners",
    desc: "Drive traffic to your store on autopilot. Sync product posts across all visual platforms.",
    color: "bg-green-100 text-green-600"
  }
];

export const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-20 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Who Is This For?" subtitle="Tailored solutions for every stage of growth." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/70 backdrop-blur p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};