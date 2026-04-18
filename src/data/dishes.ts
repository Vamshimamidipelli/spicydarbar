import { Dish } from '../types';

export const dishes: Dish[] = [
  {
    id: '1',
    name: 'Shahi Murgh Makhani',
    price: '₹845',
    description: "Old Delhi style pulled chicken, slow-cooked in a velvet tomato and tempered butter gravy.",
    category: 'main-course',
    badge: 'spicy',
    badgeLabel: 'Spicy',
    tags: ['Chicken', 'Butter'],
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800'
  },
  {
    id: '2',
    name: 'Darbar Gosht Biryani',
    price: '₹1,125',
    description: "Tender lamb leg, long grain Basmati rice, saffron, and house-made 'Potli' spices.",
    category: 'main-course',
    badge: 'star',
    badgeLabel: 'Signature',
    tags: ['Lamb', 'Rice'],
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800'
  },
  {
    id: '3',
    name: 'Malai Paneer Tikka',
    price: '₹725',
    description: "Chargrilled cottage cheese, cardamom, green chili, and roasted almond crust.",
    category: 'tandoor',
    badge: 'veg',
    badgeLabel: 'Vegetarian',
    tags: ['Paneer', 'Tandoor'],
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800'
  },
  {
    id: '4',
    name: 'Dal Darbar',
    price: '₹595',
    description: "Black lentils slow-cooked for 24 hours on coal, finished with hand-churned butter.",
    category: 'main-course',
    badge: 'veg',
    badgeLabel: 'Vegetarian',
    tags: ['Lentils', 'Slow-cooked'],
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800'
  },
  {
    id: '5',
    name: 'Moilee Tiger Prawns',
    price: '₹1,245',
    description: "Fresh jumbo prawns simmered in ginger and curry leaf infused coconut milk.",
    category: 'main-course',
    badge: 'star',
    badgeLabel: 'Signature',
    tags: ['Seafood', 'Coconut'],
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800'
  },
  {
    id: '6',
    name: 'Kesar Phirni Tart',
    price: '₹495',
    description: "Traditional rice pudding in a shortbread crust, topped with 24k gold leaf.",
    category: 'desserts',
    badge: null,
    badgeLabel: null,
    tags: ['Dessert', 'Saffron'],
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800'
  }
];
