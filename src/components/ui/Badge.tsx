import React from 'react';
import { Star } from 'lucide-react';

interface BadgeProps {
  type: 'spicy' | 'veg' | 'star';
  label?: string;
}

export const Badge: React.FC<BadgeProps> = ({ type, label }) => {
  return (
    <div className="flex items-center gap-1.5">
      {type === 'spicy' && (
        <div className="w-1.5 h-1.5 rounded-full bg-red-badge" />
      )}
      {type === 'veg' && (
        <div className="w-1.5 h-1.5 rounded-full bg-green-badge" />
      )}
      {type === 'star' && (
        <Star className="w-2.5 h-2.5 text-gold fill-gold" />
      )}
      {label && (
        <span className="text-sand text-[10px] uppercase tracking-wider font-sans font-semibold">
          {label}
        </span>
      )}
    </div>
  );
};
