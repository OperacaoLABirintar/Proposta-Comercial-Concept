
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Introduction from './components/Introduction.tsx';
import PersonasSection from './components/PersonasSection.tsx';
import AxesSection from './components/AxesSection.tsx';
import PricingSection from './components/PricingSection.tsx';
import NextStepsSection from './components/NextStepsSection.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="font-sans text-[#3a3a3a] bg-[#f4f0e8]">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <PersonasSection />
        <AxesSection />
        <PricingSection />
        <NextStepsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;