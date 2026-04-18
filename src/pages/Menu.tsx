import React, { useState } from 'react';
import { dishes } from '../data/dishes';
import { MenuCategory } from '../types';
import { MenuHeader } from '../components/sections/menu/MenuHeader';
import { MenuTabs } from '../components/sections/menu/MenuTabs';
import { DishGrid } from '../components/sections/menu/DishGrid';
import { MenuFeature } from '../components/sections/menu/MenuFeature';

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MenuCategory>('all');

  const filteredDishes = activeTab === 'all' 
    ? dishes 
    : dishes.filter(dish => dish.category === activeTab);

  return (
    <main className="bg-bg-base min-h-screen">
      <MenuHeader />
      <MenuTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <DishGrid dishes={filteredDishes} />
      <MenuFeature />
    </main>
  );
};

export default Menu;
