import React from 'react';
import { MapPin, Utensils } from 'lucide-react';

export const MapCard: React.FC = () => {
  return (
    <div className="md:col-span-3 flex flex-col rounded-lg overflow-hidden border border-gold-muted/20">
      <div className="flex-grow bg-[#5C4A38] flex items-center justify-center p-12 min-h-[300px]">
        <MapPin className="text-sand/40 w-32 h-32" />
      </div>
      <div className="bg-bg-card p-8">
        <div className="flex items-center gap-3 mb-4">
          <Utensils className="text-gold w-5 h-5" />
          <span className="font-serif text-xl text-cream">Spice Darbar</span>
          <span className="text-gold text-[10px] font-bold tracking-widest uppercase ml-auto">PREMIUM FINE DINING</span>
        </div>
        <p className="text-sand text-sm leading-relaxed mb-6">
          Located in the heart of the diplomatic enclave, our flagship restaurant offers 
          valet parking and a dedicated concierge for all guests.
        </p>
        <a 
          href="https://maps.google.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gold font-sans text-xs font-bold tracking-widest uppercase hover:text-yellow-400 transition-colors"
        >
          OPEN IN GOOGLE MAPS →
        </a>
      </div>
    </div>
  );
};
