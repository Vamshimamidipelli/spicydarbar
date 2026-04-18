import React from 'react';

export const StatsBand: React.FC = () => {
  const stats = [
    { value: '38+', label: 'YEARS OF HERITAGE' },
    { value: '24k', label: 'GOLD LEAF DESSERTS' },
    { value: '100%', label: 'AUTHENTIC SPICES' }
  ];

  return (
    <section className="bg-[#2E1800] border-y border-gold/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gold/10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center py-6 px-4">
              <span className="font-serif text-4xl text-gold mb-1">{stat.value}</span>
              <span className="text-muted text-[10px] font-bold tracking-widest uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
