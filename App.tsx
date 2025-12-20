
import React from 'react';
import { Header, Footer } from './components/Layout';
import { Hero } from './components/Hero';
import { Features, WhyChoose } from './components/Features';
import { PlatformShowcase } from './components/PlatformShowcase';
import { UseCases } from './components/UseCases';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { SocialMarquee, IntegrationsSection } from './components/MarqueeSections';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-gray-900 font-sans selection:bg-primary-100 selection:text-primary-900 overflow-x-hidden">
      {/* Global Animated Background */}
      <div className="fixed inset-0 z-0 animate-gradient">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <SocialMarquee />
          <Features />
          <PlatformShowcase />
          <IntegrationsSection />
          <UseCases />
          <WhyChoose />
          <Testimonials />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;