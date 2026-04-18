import React from 'react';
import { MenuCategory } from '../../../types';

interface MenuTabsProps {
  activeTab: MenuCategory;
  onTabChange: (tab: MenuCategory) => void;
}

export const MenuTabs: React.FC<MenuTabsProps> = ({ activeTab, onTabChange }) => {
  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'all', label: 'ALL DISHES' },
    { id: 'small-plates', label: 'SMALL PLATES' },
    { id: 'main-course', label: 'MAIN COURSE' },
    { id: 'tandoor', label: 'TANDOOR' },
    { id: 'sides', label: 'SIDES' },
    { id: 'desserts', label: 'DESSERTS' }
  ];

  return (
    <div className="sticky top-16 z-30 bg-bg-base/95 backdrop-blur-sm border-y border-gold-muted/10 py-4 mb-12">
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-center min-w-max gap-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onTabChange(cat.id)}
              className={`font-sans text-[10px] font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${
                activeTab === cat.id ? 'text-gold border-b border-gold' : 'text-muted hover:text-gold'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
