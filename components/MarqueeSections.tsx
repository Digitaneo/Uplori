import React from 'react';
import { SectionHeading } from './UI';

const socialIcons = [
  { name: 'TikTok', color: '#000000', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 1 0-1 13.6 6.84 6.84 0 0 0 6.82-6.82V9.26a8.32 8.32 0 0 0 5 1.55v-3.7a4.47 4.47 0 0 1-1.59-.42z" /></svg> },
  { name: 'Instagram', color: '#E1306C', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg> },
  { name: 'YouTube', color: '#FF0000', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
  { name: 'LinkedIn', color: '#0A66C2', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg> },
  { name: 'Facebook', color: '#1877F2', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.15 5.96C15.21 5.96 16.12 6.04 16.12 6.04V8.51H15.01C13.77 8.51 13.38 9.28 13.38 10.07V12.06H16.15L15.71 14.96H13.38V21.96C18.16 21.21 21.82 17.06 21.82 12.06C21.82 6.53 17.32 2.04 12 2.04Z" /></svg> },
  { name: 'X', color: '#000000', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { name: 'Pinterest', color: '#BD081C', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C8.85,20.77 8.89,19.64 9.1,18.72C9.29,17.9 10.37,13.31 10.37,13.31C10.37,13.31 10.03,12.64 10.03,11.63C10.03,10.04 10.95,8.85 12.1,8.85C13.07,8.85 13.54,9.58 13.54,10.45C13.54,11.42 12.92,12.87 12.6,14.22C12.33,15.34 13.15,16.26 14.28,16.26C16.32,16.26 17.89,14.11 17.89,11.02C17.89,8.27 15.91,6.35 13.08,6.35C9.79,6.35 7.87,8.81 7.87,11.39C7.87,12.4 8.25,13.48 8.73,14.06C8.82,14.18 8.84,14.24 8.81,14.36C8.75,14.62 8.6,15.22 8.55,15.43C8.52,15.54 8.44,15.58 8.32,15.52C7.38,15.09 6.2,13.71 6.2,11.35C6.2,7.63 8.91,4.2 13.92,4.2C17.95,4.2 21.08,7.07 21.08,11.23C21.08,15.65 18.29,19.2 14.41,19.2C13.11,19.2 11.89,18.5 11.47,17.7L10.74,20.48C10.46,21.52 9.75,22.84 9.35,23.5C10.2,23.83 11.09,24 12,24A12,12 0 0,0 24,12A12,12 0 0,0 12,2Z" /></svg> },
];

const integrationIcons = [
  { 
    name: 'n8n', 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#FF6584]">
        <path d="M12.9 2.5c.3 0 .7.1.9.4l7.7 7.7c.5.5.5 1.4 0 1.9l-7.7 7.7c-.5.5-1.4.5-1.9 0l-7.7-7.7c-.5-.5-.5-1.4 0-1.9l7.7-7.7c.3-.3.6-.4 1-.4zm-3 4.5c-.3 0-.5.1-.7.3L5.3 11.2c-.2.2-.2.5 0 .7l3.9 3.9c.2.2.5.2.7 0l3.9-3.9c.2-.2.2-.5 0-.7L9.9 7.3c-.2-.2-.4-.3-.7-.3zm8.9 4.2-3.9-3.9c-.2-.2-.5-.2-.7 0l-3.9 3.9c-.2.2-.2.5 0 .7l3.9 3.9c.2.2.5.2.7 0l3.9-3.9c.2-.2.2-.5 0-.7z" />
      </svg>
    )
  },
  { 
    name: 'Make', 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#6f42c1]">
         <path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm8 6a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
         <path d="M15.5 12a3.5 3.5 0 0 1-3.5 3.5 3.5 3.5 0 0 1-3.5-3.5 3.5 3.5 0 0 1 3.5-3.5 3.5 3.5 0 0 1 3.5 3.5" />
      </svg>
    ) 
  },
  { 
    name: 'Zapier', 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#FF4F00]">
        <path d="M4 4h16v16H4V4zm12.3 8.3-6.6-6.6v4.6H5.7v2.6h4.1v4.6l6.6-6.6z"/>
      </svg>
    )
  },
  { 
    name: 'Airtable', 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path fill="#FACC15" d="M11.96 2.24L1.7 8.08L11.96 5.2L22.21 8.08L11.96 2.24Z" />
        <path fill="#2563EB" d="M11.96 5.2V21.76L22.21 8.08L11.96 5.2Z" />
        <path fill="#DC2626" d="M1.7 8.08L11.96 21.76V15.92L6.83 14.92L1.7 8.08Z" />
      </svg>
    )
  },
   { 
    name: 'Slack', 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#4A154B]">
        <path d="M6 15A2 2 0 1 0 6 19A2 2 0 0 0 6 15M2 11A2 2 0 1 0 2 15H6V11M9 15A2 2 0 1 0 13 15V11H9M9 6A2 2 0 1 0 9 10H13V6M15 9A2 2 0 1 0 15 5A2 2 0 0 0 15 9M19 13A2 2 0 1 0 19 9H15V13M12 18A2 2 0 1 0 12 22H15V18M18 18A2 2 0 1 0 22 18V14H18" />
      </svg>
    )
  },
   { 
    name: 'Notion', 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-black">
        <path d="M4.5 4.5L19.5 4.5L19.5 19.5L4.5 19.5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M8 8V16M16 8V16M8 8L16 16" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  },
];

const Marquee: React.FC<{ children: React.ReactNode; direction?: 'left' | 'right' }> = ({ children, direction = 'left' }) => {
  return (
    <div className="relative flex overflow-x-hidden group">
      <div 
        className={`flex py-8 whitespace-nowrap will-change-transform ${
          direction === 'left' ? 'animate-scroll' : 'animate-scroll-reverse'
        } group-hover:[animation-play-state:paused]`}
      >
        {children}
        {children}
        {children}
      </div>
      {/* Fade Edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent z-10"></div>
    </div>
  );
};

export const SocialMarquee: React.FC = () => {
  return (
    <div className="bg-white/50 backdrop-blur-sm border-b border-gray-100 overflow-hidden">
      <Marquee direction="left">
        {socialIcons.map((icon, index) => (
          <div key={index} className="mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110 cursor-default">
            <div className="mr-2" style={{ color: icon.color }}>{icon.icon}</div>
            <span className="text-lg font-bold text-gray-700">{icon.name}</span>
          </div>
        ))}
        {socialIcons.map((icon, index) => (
          <div key={`d-${index}`} className="mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110 cursor-default">
            <div className="mr-2" style={{ color: icon.color }}>{icon.icon}</div>
            <span className="text-lg font-bold text-gray-700">{icon.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export const IntegrationsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50/80 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <SectionHeading 
          title="Connects With Your Tools" 
          subtitle="Easily integrates with n8n, Make, Zapier, Airtable and more."
        />
      </div>

      <div className="bg-white/60 backdrop-blur-md border-y border-gray-200 py-4">
        <Marquee direction="right">
          {integrationIcons.map((item, index) => (
            <div key={index} className="mx-12 flex flex-col items-center justify-center group cursor-default">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-3 group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </div>
              <span className="text-sm font-semibold text-gray-600 group-hover:text-gray-900">{item.name}</span>
            </div>
          ))}
          {integrationIcons.map((item, index) => (
            <div key={`d-${index}`} className="mx-12 flex flex-col items-center justify-center group cursor-default">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-3 group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </div>
              <span className="text-sm font-semibold text-gray-600 group-hover:text-gray-900">{item.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};