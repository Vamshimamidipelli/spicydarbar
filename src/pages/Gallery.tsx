import React, { useState } from 'react';
import { galleryItems } from '../data/galleryItems';
import { GalleryCategory } from '../types';
import { GalleryHeader } from '../components/sections/gallery/GalleryHeader';
import { GalleryTabs } from '../components/sections/gallery/GalleryTabs';
import { MasonryGrid } from '../components/sections/gallery/MasonryGrid';
import { GalleryCTA } from '../components/sections/gallery/GalleryCTA';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<GalleryCategory>('all');

  const filteredItems = activeTab === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <main className="bg-bg-base min-h-screen">
      <GalleryHeader />
      <GalleryTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <MasonryGrid items={filteredItems} />
      <GalleryCTA />
    </main>
  );
};

export default Gallery;
