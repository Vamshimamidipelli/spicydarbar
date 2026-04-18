export interface Dish {
  id: string;
  name: string;
  price: string;
  description: string;
  category: 'all' | 'small-plates' | 'main-course' | 'tandoor' | 'sides' | 'desserts';
  badge: 'spicy' | 'veg' | 'star' | null;
  badgeLabel: string | null;
  tags: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'all' | 'cuisine' | 'ambience' | 'exterior';
  tall?: boolean;
}

export interface DeliveryPartner {
  id: string;
  name: string;
  displayName: string;
  description: string;
  bgColor: string;
  icon: string;
  url: string;
}

export interface Pillar {
  id: string;
  icon: string;
  name: string;
  description: string;
}

export interface InfoCard {
  id: string;
  icon: string;
  title: string;
  details: string[];
  cta: string;
}

export type NavPage = 'home' | 'menu' | 'gallery' | 'about' | 'contact';
export type MenuCategory = 'all' | 'small-plates' | 'main-course' | 'tandoor' | 'sides' | 'desserts';
export type GalleryCategory = 'all' | 'cuisine' | 'ambience' | 'exterior';
