import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from './UI';

const platforms = [
  {
    id: 'tiktok',
    name: 'TikTok',
    description: 'Share your videos on TikTok and reach millions of users worldwide. Perfect for short-form viral content.',
    color: '#000000',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-black">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 1 0-1 13.6 6.84 6.84 0 0 0 6.82-6.82V9.26a8.32 8.32 0 0 0 5 1.55v-3.7a4.47 4.47 0 0 1-1.59-.42z" />
      </svg>
    ),
    features: ['Short-form videos', 'Trending sounds', 'Viral challenges', 'Hashtag campaigns']
  },
  {
    id: 'instagram',
    name: 'Instagram',
    description: 'Connect with your Instagram audience through Reels, Stories, and feed posts. Ideal for visual storytelling.',
    color: '#E1306C',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-pink-600">
        <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
      </svg>
    ),
    features: ['Instagram Reels', 'Stories', 'Feed posts', 'Carousel posts']
  },
  {
    id: 'youtube',
    name: 'YouTube',
    description: 'Upload long-form content to YouTube and grow your channel with high-quality videos.',
    color: '#FF0000',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-red-600">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    features: ['Long-form content', 'Video series', 'Educational content', 'Monetization']
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    description: 'Share professional content on LinkedIn to build your business network and showcase expertise.',
    color: '#0A66C2',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-blue-700">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
    features: ['Professional content', 'Business updates', 'Industry insights', 'Network growth']
  },
  {
    id: 'facebook',
    name: 'Facebook',
    description: 'Reach your audience on Facebook with posts, videos, and stories. Great for community engagement and brand awareness.',
    color: '#1877F2',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-blue-600">
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.15 5.96C15.21 5.96 16.12 6.04 16.12 6.04V8.51H15.01C13.77 8.51 13.38 9.28 13.38 10.07V12.06H16.15L15.71 14.96H13.38V21.96C18.16 21.21 21.82 17.06 21.82 12.06C21.82 6.53 17.32 2.04 12 2.04Z" />
      </svg>
    ),
    features: ['Feed posts', 'Stories', 'Page management', 'Live video']
  },
  {
    id: 'threads',
    name: 'Threads',
    description: 'Post to Threads for text-based conversations and community engagement, integrated with Instagram.',
    color: '#000000',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-black">
        <path d="M12.63 2C15.46 2 17.8 3.17 19.34 4.88L17.91 6.3C16.65 4.9 14.86 4 12.63 4C8.42 4 5 7.42 5 11.63C5 15.84 8.42 19.25 12.63 19.25C15.42 19.25 17.44 17.9 18.23 15.65H12.38V13.65H20.35C20.4 14.07 20.43 14.5 20.43 14.95C20.43 19.53 17.21 22 12.63 22C6.9 22 2.25 17.35 2.25 11.63C2.25 5.9 6.9 1.25 12.63 1.25V2M12.63 7.82C10.53 7.82 8.82 9.53 8.82 11.63C8.82 13.73 10.53 15.44 12.63 15.44C14.73 15.44 16.44 13.73 16.44 11.63C16.44 9.53 14.73 7.82 12.63 7.82Z" />
      </svg>
    ),
    features: ['Text posts', 'Replies', 'Trending topics', 'Instagram integration']
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    description: 'Share updates, news, and engage in real-time conversations on X (Twitter).',
    color: '#1DA1F2',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-gray-900">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    features: ['Tweets', 'Real-time updates', 'Community engagement', 'Hashtag tracking']
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    description: 'Share visual content on Pinterest to inspire users and drive traffic with Pins and Boards.',
    color: '#BD081C',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-red-700">
        <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C8.85,20.77 8.89,19.64 9.1,18.72C9.29,17.9 10.37,13.31 10.37,13.31C10.37,13.31 10.03,12.64 10.03,11.63C10.03,10.04 10.95,8.85 12.1,8.85C13.07,8.85 13.54,9.58 13.54,10.45C13.54,11.42 12.92,12.87 12.6,14.22C12.33,15.34 13.15,16.26 14.28,16.26C16.32,16.26 17.89,14.11 17.89,11.02C17.89,8.27 15.91,6.35 13.08,6.35C9.79,6.35 7.87,8.81 7.87,11.39C7.87,12.4 8.25,13.48 8.73,14.06C8.82,14.18 8.84,14.24 8.81,14.36C8.75,14.62 8.6,15.22 8.55,15.43C8.52,15.54 8.44,15.58 8.32,15.52C7.38,15.09 6.2,13.71 6.2,11.35C6.2,7.63 8.91,4.2 13.92,4.2C17.95,4.2 21.08,7.07 21.08,11.23C21.08,15.65 18.29,19.2 14.41,19.2C13.11,19.2 11.89,18.5 11.47,17.7L10.74,20.48C10.46,21.52 9.75,22.84 9.35,23.5C10.2,23.83 11.09,24 12,24A12,12 0 0,0 24,12A12,12 0 0,0 12,2Z" />
      </svg>
    ),
    features: ['Image & Video Pins', 'Board organization', 'Idea Pins', 'Content Scheduling']
  },
  {
    id: 'reddit',
    name: 'Reddit',
    description: 'Publish text and link posts to subreddits, schedule content, and manage flair and NSFW flags.',
    color: '#FF4500',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-orange-600">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 13.91c-.24.23-.58.35-.91.35-.33 0-.66-.12-.9-.35-1.29-1.22-3.41-1.22-4.66 0-.24.23-.58.35-.91.35s-.66-.12-.9-.35a1.28 1.28 0 0 1 0-1.81c.5-.47 1.15-.73 1.83-.73h.03c1.36 0 2.65 1.05 3.59 1.05.94 0 2.23-1.05 3.59-1.05h.03c.68 0 1.34.26 1.83.73a1.28 1.28 0 0 1 0 1.81zM8.33 10a1.67 1.67 0 1 1 0-3.34 1.67 1.67 0 0 1 0 3.34zm8.34 0a1.67 1.67 0 1 1 0-3.34 1.67 1.67 0 0 1 0 3.34z"/>
      </svg>
    ),
    features: ['Text & Link Posts', 'Scheduling', 'Flair & NSFW', 'Engagement Analytics']
  },
  {
    id: 'bluesky',
    name: 'Bluesky',
    description: 'Share posts and images on Bluesky, the decentralized social network built on the AT Protocol.',
    color: '#3B82F6',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-blue-500">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-2h-2v2zm0-4h2V7h-2v6z"/>
      </svg>
    ),
    features: ['Text Posts', 'Image Posts', 'Decentralized Network', 'Open Protocol']
  }
];

export const PlatformShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % platforms.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + platforms.length) % platforms.length);
  };

  const getSlideStyle = (index: number) => {
    const diff = (index - currentIndex + platforms.length) % platforms.length;
    
    // Logic to handle wrapping correctly for visual positioning
    let visualOffset = diff;
    if (diff > platforms.length / 2) {
      visualOffset = diff - platforms.length;
    }

    const isActive = visualOffset === 0;
    const isPrev = visualOffset === -1;
    const isNext = visualOffset === 1;

    // We only show current, prev, and next clearly. Others fade out more.
    const isVisible = Math.abs(visualOffset) <= 1;
    
    return {
      zIndex: isActive ? 30 : 20 - Math.abs(visualOffset),
      opacity: isActive ? 1 : isVisible ? 0.6 : 0,
      scale: isActive ? 1 : 0.85,
      x: `${visualOffset * 105}%`, // Spacing between cards
      rotateY: isActive ? 0 : visualOffset > 0 ? -15 : 15, // 3D rotation effect
    };
  };

  return (
    <section id="apps" className="py-24 bg-gray-50/90 backdrop-blur-md overflow-hidden border-y border-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Supported Platforms" 
          subtitle="Upload your content to all major social networks from a unified dashboard." 
        />

        <div className="relative h-[600px] md:h-[500px] flex items-center justify-center mt-10 perspective-1000">
          
          {/* Navigation Buttons - Absolute positioned on sides */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 md:left-4 z-40 p-3 rounded-full bg-white shadow-lg border border-gray-100 text-gray-600 hover:text-primary-600 hover:scale-110 transition-all focus:outline-none"
            aria-label="Previous Platform"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 md:right-4 z-40 p-3 rounded-full bg-white shadow-lg border border-gray-100 text-gray-600 hover:text-primary-600 hover:scale-110 transition-all focus:outline-none"
            aria-label="Next Platform"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Track */}
          <div className="relative w-full max-w-sm md:max-w-md h-full flex items-center justify-center perspective-1000">
            {platforms.map((platform, index) => {
               const style = getSlideStyle(index);
               // Only render potentially visible slides to keep DOM light and layout clean
               if (style.opacity === 0) return null;

               return (
                <motion.div
                  key={platform.id}
                  className="absolute w-full bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
                  initial={false}
                  animate={style}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  // Add drag for mobile swipe feeling
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = offset.x;

                    if (swipe < -50) {
                      nextSlide();
                    } else if (swipe > 50) {
                      prevSlide();
                    }
                  }}
                >
                  <div className="p-8 flex flex-col items-center text-center">
                    <div className="mb-6 p-4 rounded-2xl bg-gray-50/80 backdrop-blur-sm">
                      {platform.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{platform.name}</h3>
                    <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                      {platform.description}
                    </p>

                    <div className="w-full space-y-3">
                      {platform.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-left bg-gray-50 p-3 rounded-lg border border-gray-100/50">
                          <div className="flex-shrink-0 mr-3">
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                              <Check className="w-3 h-3 text-green-600" />
                            </div>
                          </div>
                          <span className="text-sm font-medium text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Decorative bottom bar */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-50"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {platforms.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};