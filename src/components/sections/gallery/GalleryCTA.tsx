import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/Button';

export const GalleryCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 pb-24">
      <div className="bg-bg-band rounded-xl p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8 border border-gold-muted/20">
        <div className="text-center md:text-left">
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-3">Ready to Experience it?</h2>
          <p className="text-sand text-lg">Book your table today and taste the heritage.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <Button variant="primary" onClick={() => navigate('/contact')} className="w-full sm:w-auto">
            RESERVE NOW
          </Button>
          <Button variant="outline" onClick={() => navigate('/menu')} className="w-full sm:w-auto">
            VIEW MENU
          </Button>
        </div>
      </div>
    </section>
  );
};
