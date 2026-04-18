import React from 'react';
import { useNavigate } from 'react-router-dom';
import { dishes } from '../../../data/dishes';
import { DishCard } from '../menu/DishCard';
import { SectionHeader } from '../../ui/SectionHeader';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';

export const SignatureDishes: React.FC = () => {
  const navigate = useNavigate();
  const signatureDishes = dishes.filter(d => d.badge === 'star' || d.badge === 'spicy').slice(0, 4);

  return (
    <section className="py-24 px-4 md:px-8 bg-bg-base">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <SectionHeader
            eyebrow="CHEF'S SELECTION"
            title="Signature Masterpieces"
            className="max-w-2xl"
          />
          <Button variant="inline" onClick={() => navigate('/menu')}>
            Explore Full Menu →
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {signatureDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </section>
  );
};
