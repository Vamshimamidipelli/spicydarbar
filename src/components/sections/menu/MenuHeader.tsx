import React from 'react';
import { SectionHeader } from '../../ui/SectionHeader';

export const MenuHeader: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-4 md:px-8 bg-bg-base">
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeader
          eyebrow="CURATED CUISINE"
          title="The Royal Menu"
          description="A symphony of spices and heritage, meticulously crafted for the discerning palate."
          centered
        />
      </div>
    </section>
  );
};
