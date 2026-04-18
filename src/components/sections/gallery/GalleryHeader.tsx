import React from 'react';
import { SectionHeader } from '../../ui/SectionHeader';

export const GalleryHeader: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-4 md:px-8 bg-bg-base">
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeader
          eyebrow="VISUAL HERITAGE"
          title="The Darbar Gallery"
          description="A glimpse into the soul of Spice Darbar — where every detail tells a story of royalty."
          centered
        />
      </div>
    </section>
  );
};
