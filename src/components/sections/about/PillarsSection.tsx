import React from 'react';
import { ShieldCheck, Leaf, Users } from 'lucide-react';
import { SectionHeader } from '../../ui/SectionHeader';

export const PillarsSection: React.FC = () => {
  const pillars = [
    {
      id: '1',
      icon: <ShieldCheck className="w-8 h-8 text-gold" />,
      name: 'Authentic Integrity',
      description: 'We never compromise on traditional techniques, using slow-cooking methods that preserve the soul of the dish.'
    },
    {
      id: '2',
      icon: <Leaf className="w-8 h-8 text-gold" />,
      name: 'Ethical Sourcing',
      description: 'Our spices are sourced directly from small-scale farmers in Kerala and Rajasthan, ensuring the highest quality.'
    },
    {
      id: '3',
      icon: <Users className="w-8 h-8 text-gold" />,
      name: 'Royal Hospitality',
      description: 'Inspired by the "Mehman-Nawazi" of the royal courts, we treat every guest like a visiting dignitary.'
    }
  ];

  return (
    <section className="bg-bg-band py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="OUR VALUES"
          title="The Three Pillars"
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-bg-amber rounded-xl flex items-center justify-center mb-8 border border-gold/20">
                {pillar.icon}
              </div>
              <h3 className="font-serif text-2xl text-cream mb-4">{pillar.name}</h3>
              <p className="text-sand leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
