import React from 'react';
import { motion } from 'framer-motion';
import { AFFILIATE_LINK } from '../constants';
import { Button } from './UI';
import { ArrowRight, CheckCircle, LayoutGrid, Calendar, BarChart2, Settings, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden">
      {/* Background is handled globally in App.tsx */}
      <div className="absolute inset-0 z-0">
          <div className="hidden md:block absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="hidden md:block absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="hidden md:block absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-md text-primary-700 text-sm font-semibold mb-8 border border-white/50 shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary-600 mr-2"></span>
              New: AI-Powered Content Scheduling
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight"
            >
              Automate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">
                Social Growth
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Stop wasting hours manually posting. Schedule, manage, and analyze content across all your favorite platforms from one powerful command center.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <Button href={AFFILIATE_LINK} className="text-lg px-8 py-4 shadow-xl shadow-primary-500/20">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="text-lg px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white">
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-500 font-medium"
            >
              <span className="flex items-center"><CheckCircle className="h-4 w-4 mr-1 text-green-500" /> No credit card required</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 mr-1 text-green-500" /> 14-day free trial</span>
            </motion.div>
          </div>

          {/* Hero Image / Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
             <div className="relative rounded-2xl shadow-2xl border border-white/50 bg-white/40 backdrop-blur-sm md:backdrop-blur-xl p-2">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-2xl"></div>
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] md:aspect-[16/10] bg-white flex shadow-inner">
                    
                    {/* Sidebar Mockup */}
                    <div className="w-16 bg-gray-50 border-r border-gray-100 flex flex-col items-center py-6 space-y-6 hidden md:flex">
                        <div className="p-2 bg-primary-100 text-primary-600 rounded-lg shadow-sm"><LayoutGrid size={20} /></div>
                        <div className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"><Calendar size={20} /></div>
                        <div className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"><BarChart2 size={20} /></div>
                        <div className="mt-auto p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"><Settings size={20} /></div>
                    </div>

                    {/* Dashboard Content Mockup */}
                    <div className="flex-1 p-4 md:p-6 bg-white overflow-hidden flex flex-col">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">Overview</h3>
                                <p className="text-xs text-gray-400">Welcome back, Alex</p>
                            </div>
                            <div className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
                            {[
                                { label: "Reach", val: "2.4M", trend: "+12%", color: "text-green-600", bg: "bg-green-50", icon: TrendingUp },
                                { label: "Engage", val: "45K", trend: "+5%", color: "text-blue-600", bg: "bg-blue-50", icon: CheckCircle },
                                { label: "Posts", val: "12", trend: "Queued", color: "text-purple-600", bg: "bg-purple-50", icon: Calendar }
                            ].map((stat, i) => (
                                <div key={i} className="p-3 rounded-xl border border-gray-100 bg-gray-50/50 flex flex-col justify-between">
                                    <div className="flex justify-between items-start mb-1">
                                        <p className="text-[10px] md:text-xs text-gray-500">{stat.label}</p>
                                        <stat.icon size={12} className={stat.color} />
                                    </div>
                                    <div>
                                        <p className="text-sm md:text-lg font-bold text-gray-900">{stat.val}</p>
                                        <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full inline-block mt-1 ${stat.bg} ${stat.color}`}>{stat.trend}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Recent Activity / Scheduled Posts */}
                        <div className="flex-1 border border-gray-100 rounded-xl p-4 bg-white shadow-sm flex flex-col">
                            <div className="flex justify-between items-center mb-3">
                                <h4 className="text-xs md:text-sm font-bold text-gray-700">Scheduled Uploads</h4>
                                <span className="text-[10px] font-semibold text-primary-600 cursor-pointer hover:underline">View Calendar</span>
                            </div>
                            <div className="space-y-3">
                                {/* Item 1 */}
                                <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100 group">
                                    <div className="flex items-center space-x-3">
                                         <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 1 0-1 13.6 6.84 6.84 0 0 0 6.82-6.82V9.26a8.32 8.32 0 0 0 5 1.55v-3.7a4.47 4.47 0 0 1-1.59-.42z" /></svg>
                                         </div>
                                         <div>
                                             <p className="text-xs font-bold text-gray-800 line-clamp-1">Summer Vibe Challenge</p>
                                             <p className="text-[10px] text-gray-400">Today, 4:00 PM</p>
                                         </div>
                                    </div>
                                    <span className="text-[9px] font-medium px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 border border-yellow-200">Pending</span>
                                </div>
                                {/* Item 2 */}
                                <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100 group">
                                    <div className="flex items-center space-x-3">
                                         <div className="w-8 h-8 rounded-lg bg-pink-600 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>
                                         </div>
                                         <div>
                                             <p className="text-xs font-bold text-gray-800 line-clamp-1">New Product Teaser</p>
                                             <p className="text-[10px] text-gray-400">Tomorrow, 10:00 AM</p>
                                         </div>
                                    </div>
                                    <span className="text-[9px] font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200">Scheduled</span>
                                </div>
                            </div>
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