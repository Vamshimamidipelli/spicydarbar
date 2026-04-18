import React from 'react';
import { SectionHeader } from '../../ui/SectionHeader';

export const ContactHeader: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-4 md:px-8 bg-bg-base">
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeader
          eyebrow="REACH OUT"
          title="Connect with the Court"
          description="Whether it's a reservation or a special request, our team is ready to assist you."
          centered
        />
      </div>
    </section>
  );
};
