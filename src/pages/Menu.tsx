import React, { useState } from 'react';
import { menuData } from '../data/menuData';
import { DietaryFilter } from '../types';
import { MenuHeader } from '../components/sections/menu/MenuHeader';
import { MenuTabs } from '../components/sections/menu/MenuTabs';
import { DishGrid } from '../components/sections/menu/DishGrid';
import { MenuFeature } from '../components/sections/menu/MenuFeature';

const Menu: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<DietaryFilter>('All');

  return (
    <main className="bg-bg-base min-h-screen">
      <MenuHeader />
      <MenuTabs activeTab={activeFilter} onTabChange={setActiveFilter} />
      <DishGrid menuData={menuData} activeFilter={activeFilter} />
      <MenuFeature />
    </main>
  );
};

export default Menu;
