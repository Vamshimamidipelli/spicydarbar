import React from 'react';
import { Dish } from '../../../types';
import { DishCard } from './DishCard';
import { motion, AnimatePresence } from 'motion/react';

export const DishGrid: React.FC<{ dishes: Dish[] }> = ({ dishes }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-24">
      <motion.div 
        layout
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {dishes.map((dish) => (
            <motion.div
              key={dish.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <DishCard dish={dish} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
