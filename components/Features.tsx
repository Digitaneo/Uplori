
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Zap, Layers, Calendar, BarChart, Shield, Layout, Settings, ToggleRight, ChevronDown } from 'lucide-react';
import { SectionHeading } from './UI';

const benefits = [
  { icon: Clock, title: 'Save Time', desc: 'Automate your daily posting routine and reclaim 10+ hours every week.' },
  { icon: Layers, title: 'All-in-One', desc: 'Manage TikTok, Instagram, YouTube, and more from a single dashboard.' },
  { icon: Calendar, title: 'Smart Scheduling', desc: 'Plan months of content in advance with visual drag-and-drop calendars.' },
  { icon: Zap, title: 'AI Automation', desc: 'Let AI optimize your captions, hashtags, and posting times for max reach.' },
  { icon: BarChart, title: 'Deep Analytics', desc: 'Understand what works with comprehensive performance metrics.' },
  { icon: Shield, title: 'Secure & Reliable', desc: 'Enterprise-grade security keeps your accounts safe and connected.' },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Why Creators Choose Us" 
          subtitle="Everything you need to scale your social media strategy without the burnout." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white/50 border border-gray-100 hover:shadow-xl hover:bg-white transition-all duration-300 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <benefit.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WhyChoose: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50/80 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Built for Modern Growth
            </h2>
            <div className="space-y-6">
              {[
                { title: 'Unified Workflow', desc: 'Stop switching tabs. Handle comments, DMs, and posts in one feed.' },
                { title: 'Bulk Upload', desc: 'Upload hundreds of videos or images at once. We handle the formatting.' },
                { title: 'Cloud-Based', desc: 'Access your work from anywhere, on any device. No installation needed.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <Layout className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative"
          >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-indigo-600 rounded-2xl transform rotate-3 opacity-20 blur-lg"></div>
              <div className="relative bg-white/90 backdrop-blur p-8 rounded-2xl shadow-xl border border-gray-100">
                  <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                      <div className="flex items-center gap-2">
                          <Settings className="w-5 h-5 text-gray-400" />
                          <span className="font-semibold text-gray-700">Account Settings</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full border border-green-100">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                          </span>
                          Active
                      </div>
                  </div>
                  
                  {/* Real Content Mockup */}
                  <div className="space-y-5">
                      {/* Connected Accounts Row */}
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                          <div>
                              <p className="text-sm font-semibold text-gray-800">Connected Profiles</p>
                              <p className="text-xs text-gray-500">Auto-posting enabled</p>
                          </div>
                          <div className="flex -space-x-2">
                              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center border-2 border-white text-white text-[10px]">𝕏</div>
                              <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center border-2 border-white text-white text-[10px] font-bold">Ig</div>
                              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center border-2 border-white text-white text-[10px] font-bold">In</div>
                          </div>
                      </div>

                      {/* Toggle Option */}
                      <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                              <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                                  <Zap className="w-4 h-4" />
                              </div>
                              <span className="text-sm font-medium text-gray-700">AI Auto-Caption</span>
                          </div>
                          <ToggleRight className="w-8 h-8 text-primary-600" />
                      </div>

                       {/* Toggle Option 2 */}
                       <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                              <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                                  <Clock className="w-4 h-4" />
                              </div>
                              <span className="text-sm font-medium text-gray-700">Smart Scheduling</span>
                          </div>
                          <ToggleRight className="w-8 h-8 text-primary-600" />
                      </div>

                      {/* Dropdown Mockup */}
                      <div>
                          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">Default Timezone</label>
                          <div className="flex items-center justify-between w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700">
                              <span>(GMT-05:00) Eastern Time</span>
                              <ChevronDown className="w-4 h-4 text-gray-400" />
                          </div>
                      </div>
                  </div>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
