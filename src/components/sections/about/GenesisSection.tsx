import React from 'react';

export const GenesisSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1000"
            alt="Old Delhi Spice Market"
            className="rounded-lg object-cover aspect-[4/5] w-full border border-gold-muted/20 shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-8 -right-8 hidden lg:block w-48 h-48 bg-bg-amber rounded-lg border border-gold p-6 flex flex-col justify-center">
            <span className="font-serif text-4xl text-gold mb-1">1984</span>
            <span className="text-cream text-[10px] font-bold tracking-widest uppercase">FOUNDATION YEAR</span>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-4xl text-cream mb-8 leading-tight">
            From a Small Stall to <br />
            <span className="italic text-gold">A Culinary Empire</span>
          </h2>
          <div className="space-y-6 text-sand text-lg leading-relaxed">
            <p>
              It began with a single copper pot and a handful of family spice blends passed down through generations. 
              Our founder, Chef Vikram Singh, envisioned a place where the grandeur of Mughal hospitality could meet 
              the vibrant energy of contemporary India.
            </p>
            <p>
              Today, Spice Darbar stands as a testament to that vision. We don't just serve food; we serve history, 
              culture, and a relentless pursuit of culinary perfection. Every dish is a chapter of our story.
            </p>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-4">
            <div className="bg-bg-card rounded-full px-6 py-3 border border-gold-muted/20 flex items-center gap-3">
              <span className="text-gold font-serif text-xl">12</span>
              <span className="text-muted text-[10px] font-bold tracking-widest uppercase">AWARDS WON</span>
            </div>
            <div className="bg-bg-card rounded-full px-6 py-3 border border-gold-muted/20 flex items-center gap-3">
              <span className="text-gold font-serif text-xl">150k+</span>
              <span className="text-muted text-[10px] font-bold tracking-widest uppercase">GUESTS SERVED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
