import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './UI';

const platforms = [
  {
    name: 'TikTok',
    color: 'text-black',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 1 0-1 13.6 6.84 6.84 0 0 0 6.82-6.82V9.26a8.32 8.32 0 0 0 5 1.55v-3.7a4.47 4.47 0 0 1-1.59-.42z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    color: 'text-pink-600',
    icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
            <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
        </svg>
    )
  },
  {
    name: 'Facebook',
    color: 'text-blue-600',
    icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
            <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.15 5.96C15.21 5.96 16.12 6.04 16.12 6.04V8.51H15.01C13.77 8.51 13.38 9.28 13.38 10.07V12.06H16.15L15.71 14.96H13.38V21.96C18.16 21.21 21.82 17.06 21.82 12.06C21.82 6.53 17.32 2.04 12 2.04Z" />
        </svg>
    )
  },
  {
    name: 'YouTube',
    color: 'text-red-600',
    icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
             <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
    )
  },
  {
    name: 'LinkedIn',
    color: 'text-blue-700',
    icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
    )
  },
  {
    name: 'X / Twitter',
    color: 'text-gray-900',
    icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
             <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
    )
  },
  {
    name: 'Pinterest',
    color: 'text-red-700',
    icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
            <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C8.85,20.77 8.89,19.64 9.1,18.72C9.29,17.9 10.37,13.31 10.37,13.31C10.37,13.31 10.03,12.64 10.03,11.63C10.03,10.04 10.95,8.85 12.1,8.85C13.07,8.85 13.54,9.58 13.54,10.45C13.54,11.42 12.92,12.87 12.6,14.22C12.33,15.34 13.15,16.26 14.28,16.26C16.32,16.26 17.89,14.11 17.89,11.02C17.89,8.27 15.91,6.35 13.08,6.35C9.79,6.35 7.87,8.81 7.87,11.39C7.87,12.4 8.25,13.48 8.73,14.06C8.82,14.18 8.84,14.24 8.81,14.36C8.75,14.62 8.6,15.22 8.55,15.43C8.52,15.54 8.44,15.58 8.32,15.52C7.38,15.09 6.2,13.71 6.2,11.35C6.2,7.63 8.91,4.2 13.92,4.2C17.95,4.2 21.08,7.07 21.08,11.23C21.08,15.65 18.29,19.2 14.41,19.2C13.11,19.2 11.89,18.5 11.47,17.7L10.74,20.48C10.46,21.52 9.75,22.84 9.35,23.5C10.2,23.83 11.09,24 12,24A12,12 0 0,0 24,12A12,12 0 0,0 12,2Z" />
        </svg>
    )
  },
  {
    name: 'Telegram',
    color: 'text-sky-500',
    icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
            <path d="M21.64,3.22C21.64,3.22 22.09,3.06 22,3.44C21.94,3.88 21.63,5.32 21.4,6.86L19.89,16.5C19.89,16.5 19.79,17.22 19.27,17.37C18.75,17.5 18,17 17.75,16.8L14.06,14.13C14.06,14.13 13.62,13.8 13.59,13.5C13.56,13.19 15.39,11.59 17.16,9.91C18.89,8.27 19.5,7.31 17.16,8.81L9.62,13.88C9.62,13.88 9.07,14.21 8,13.91L5.56,13.14C5.56,13.14 4.71,12.89 4.76,12.24C4.81,11.59 5.86,11.2 5.86,11.2L19.46,6.07C19.46,6.07 20.66,5.56 21.64,3.22Z" />
        </svg>
    )
  },
  {
    name: 'Google Business',
    color: 'text-blue-500',
    icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
             <path d="M21 11.5V10c0-4.42-3.58-8-8-8s-8 3.58-8 8v1.5c-2.21 0-4 1.79-4 4v2c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-2c0-2.21-1.79-4-4-4zM13 3.16c2.81.47 5 2.91 5 5.84v2.5H6V9c0-2.93 2.19-5.37 5-5.84V3h2v.16zM7 16h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" />
        </svg>
    )
  },
];

export const SupportedApps: React.FC = () => {
  return (
    <section id="apps" className="py-20 bg-gray-50/80 backdrop-blur-md border-y border-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading 
            title="Connect Everywhere"
            subtitle="Supports seamless uploading to all major content platforms."
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center justify-center p-6 bg-white/80 backdrop-blur rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className={`${platform.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {platform.icon}
              </div>
              <span className="font-semibold text-gray-700">{platform.name}</span>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center p-6 bg-white/40 backdrop-blur rounded-xl border border-dashed border-gray-400"
          >
             <span className="text-gray-600 font-medium">+ Many More</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
