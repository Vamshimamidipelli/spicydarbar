import React from 'react';
import { MenuData, DietaryFilter } from '../../../types';
import { TextDishCard } from './TextDishCard';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from '../../ui/SectionHeader';

interface DishGridProps {
  menuData: MenuData;
  activeFilter: DietaryFilter;
}

export const DishGrid: React.FC<DishGridProps> = ({ menuData, activeFilter }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-24 space-y-16">
      {Object.entries(menuData).map(([categoryName, dishes]) => {
        const filteredDishes = dishes.filter(dish => {
          if (activeFilter === 'All') return true;
          if (activeFilter === 'Veg') return dish.diet === 'veg' || dish.diet === 'veg-friendly';
          if (activeFilter === 'Non-Veg') return dish.diet === 'non-veg';
          return true;
        });

        if (filteredDishes.length === 0) return null;

        return (
          <div key={categoryName}>
            <SectionHeader
              eyebrow="CATEGORY"
              title={categoryName}
              className="mb-8"
            />
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredDishes.map((dish, idx) => (
                  <motion.div
                    key={`${categoryName}-${dish.name}-${idx}`}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TextDishCard dish={dish} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};
