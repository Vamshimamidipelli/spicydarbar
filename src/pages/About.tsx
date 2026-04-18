import React from 'react';
import { AboutHeader } from '../components/sections/about/AboutHeader';
import { GenesisSection } from '../components/sections/about/GenesisSection';
import { PillarsSection } from '../components/sections/about/PillarsSection';
import { AlternatingRows } from '../components/sections/about/AlternatingRows';

const About: React.FC = () => {
  return (
    <main className="bg-bg-base min-h-screen">
      <AboutHeader />
      <GenesisSection />
      <PillarsSection />
      <AlternatingRows />
    </main>
  );
};

export default About;
