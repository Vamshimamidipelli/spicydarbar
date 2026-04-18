import { MenuData } from '../types';

export const menuData: MenuData = {
  'South Indian': [
    { name: 'Plain Dosa', description: 'Crispy fermented crepe made from rice and lentils.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Onion Dosa', description: 'Classic dosa topped with finely chopped onions.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'Masala Dosa', description: 'Golden dosa stuffed with a spiced potato filling.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'Cheese Dosa', description: 'Fusion dosa generously layered with melted cheese.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'Ghee Karam Dosa', description: 'Spicy dosa smeared with ghee and special spice mix.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'Egg Dosa', description: 'Protein-packed dosa spread with a seasoned egg wash.', options: [{ price: 6 }], diet: 'non-veg' },
    { name: 'Idly', description: 'Soft and fluffy steamed rice cakes served with chutney.', options: [{ price: 4 }], diet: 'veg' },
    { name: 'Vada', description: 'Crispy, savory deep-fried lentil donuts.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Bonda', description: 'Deep-fried potato dumplings encased in chickpea batter.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Poori', description: 'Puffed deep-fried bread served with spiced potato curry.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Uttapam', description: 'Thick, savory pancake topped with fresh vegetables.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Punugulu', description: 'Crispy bite-sized fritters made from dosa batter.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Chole Bhature', description: 'Spicy chickpea curry paired with fluffy fried bread.', options: [{ price: 6 }], diet: 'veg' },
  ],

  'Desi special': [
    { name: 'Halwa Poori', description: 'Traditional sweet semolina halwa with fried poori.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'Plain Paratha', description: 'Flaky, buttery whole wheat flatbread.', options: [{ price: 2 }], diet: 'veg' },
    { name: 'Naan', description: 'Soft and fluffy oven-baked flatbread.', options: [{ price: 2 }], diet: 'veg' },
    { name: 'Garlic Naan', description: 'Classic naan infused with aromatic minced garlic.', options: [{ price: 2.5 }], diet: 'veg' },
    { name: 'Butter Naan', description: 'Rich naan brushed generously with melted butter.', options: [{ price: 2.5 }], diet: 'veg' },
    { name: 'Chilli Garlic Naan', description: 'Spicy naan topped with fresh chillies and garlic.', options: [{ price: 2.5 }], diet: 'veg' },
    { name: 'Coriander Naan', description: 'Fresh naan baked with chopped coriander leaves.', options: [{ price: 2.5 }], diet: 'veg' },
    { name: 'Haleem', description: 'Slow-cooked stew of meat, lentils, and pounded wheat.', options: [{ price: 8 }], diet: 'non-veg' },
    { name: 'Paya', description: 'Rich, gelatinous soup made from slow-cooked trotters.', options: [{ price: 8 }], diet: 'non-veg' },
    { name: 'Nihari', description: 'Slow-cooked meat stew known for its rich, spicy gravy.', options: [{ price: 8 }], diet: 'non-veg' },
  ],

  'Chat corner': [
    { name: 'Samosa Chaat', description: 'Crushed samosas topped with yogurt, chutneys, and spices.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Pani Puri', description: 'Crispy hollow puris filled with tangy, spicy water.', options: [{ price: 4 }], diet: 'veg' },
    { name: 'Aloo Papdi Chaat', description: 'Crispy wafers with potatoes, yogurt, and sweet chutney.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Dahi Puri', description: 'Puris loaded with sweetened yogurt and tangy chutneys.', options: [{ price: 4 }], diet: 'veg' },
    { name: 'Pav Bhaji', description: 'Spiced vegetable mash served with butter-toasted buns.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Aloo Tikki with Chana', description: 'Crispy potato patties topped with spicy chickpea curry.', options: [{ price: 5 }], diet: 'veg' },
  ],

  'Burger & Wrap': [
    { name: 'Plain Burger', description: 'Classic veggie patty with fresh lettuce and mayo.', options: [{ price: 4 }], diet: 'veg' },
    { name: 'Chicken Cheese Burger', description: 'Juicy chicken patty topped with melted cheese.', options: [{ price: 4 }], diet: 'non-veg' },
    { name: 'Supreme Burger', description: 'Our signature double-patty burger with all the fixings.', options: [{ price: 5 }], diet: 'veg-friendly' },
    { name: 'Mega Mix Burger', description: 'A towering creation packed with mixed ingredients.', options: [{ price: 5 }], diet: 'veg-friendly' },
    { name: 'Chicken Wrap', description: 'Tender chicken strips wrapped with fresh veggies.', options: [{ price: 4 }], diet: 'non-veg' },
    { name: 'Seekh Kabab Wrap', description: 'Spiced minced meat grilled and rolled in flatbread.', options: [{ price: 5 }], diet: 'non-veg' },
    { name: 'Fries', description: 'Crispy golden potato fries seasoned to perfection.', options: [{ price: 2.5 }], diet: 'veg' },
    { name: 'Loaded Fries', description: 'Hot fries smothered in your choice of toppings.', options: [{ type: 'Cheese', price: 3 }, { type: 'Chicken', price: 4 }], diet: 'veg-friendly' },
    { name: 'Chicken Wings', description: 'Crispy fried wings tossed in our signature spices.', options: [{ price: 5 }], diet: 'non-veg' },
    { name: 'Chicken Strips', description: 'Tender, breaded strips of chicken breast.', options: [{ price: 5 }], diet: 'non-veg' },
  ],

  'Starters': [
    { name: 'Chicken 65', description: 'Spicy, deep-fried chicken bites with curry leaves.', options: [{ price: 7 }], isSpicy: true, diet: 'non-veg' },
    { name: 'Chilli Chicken', description: 'Stir-fried chicken tossed in a fiery chili sauce.', options: [{ price: 7 }], isSpicy: true, diet: 'non-veg' },
    { name: 'Chicken Majestic', description: 'Dry chicken strips tossed in a tangy yogurt sauce.', options: [{ price: 7 }], diet: 'non-veg' },
    { name: 'Chicken Kungpao', description: 'Classic stir-fry with peanuts and vegetables.', options: [{ price: 7 }], diet: 'non-veg' },
    { name: 'Chicken Manchurian', description: 'Indo-Chinese classic with a sweet and savory sauce.', options: [{ price: 7 }], diet: 'non-veg' },
    { name: 'Chicken Lollipops', description: 'Frenched chicken winglets, batter-fried until crispy.', options: [{ price: 7 }], diet: 'non-veg' },
    { name: 'Gobi 65', description: 'Spicy and crispy deep-fried cauliflower florets.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'Mushroom 65', description: 'Crispy mushrooms tossed in south Indian spices.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'Chilli Mushroom', description: 'Spicy stir-fried mushrooms with bell peppers.', options: [{ price: 6 }], isSpicy: true, diet: 'veg' },
    { name: 'Paneer 65', description: 'Spicy fried cottage cheese cubes.', options: [{ price: 7 }], diet: 'veg' },
    { name: 'Chilli Paneer', description: 'Fiery Indo-Chinese paneer toss.', options: [{ price: 7 }], isSpicy: true, diet: 'veg' },
    { name: 'Gobi Manchurian', description: 'Cauliflower tossed in a dark soy and garlic sauce.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'Paneer Manchurian', description: 'Crispy paneer in a tangy Indo-Chinese gravy.', options: [{ price: 7 }], diet: 'veg' },
    { name: 'Mirchi Bhaji', description: 'Large chili peppers stuffed, battered, and deep-fried.', options: [{ price: 5 }], diet: 'veg' },
  ],

  'Curries': [
    { name: 'Paneer Butter Masala', description: 'Cottage cheese cubes in a rich tomato and butter gravy.', options: [{ price: 8 }], diet: 'veg' },
    { name: 'Chana Masala', description: 'Spicy and tangy chickpea curry.', options: [{ price: 7 }], diet: 'veg' },
    { name: 'Veg Kadai', description: 'Mixed vegetables cooked with bell peppers in a thick gravy.', options: [{ price: 7 }], diet: 'veg' },
    { name: 'Veg Korma', description: 'Vegetables simmered in a creamy, mildly spiced sauce.', options: [{ price: 7 }], diet: 'veg' },
    { name: 'Palak Paneer', description: 'Cottage cheese cooked in a pureed spinach gravy.', options: [{ price: 8 }], diet: 'veg' },
    { name: 'Methi Chaman', description: 'Paneer cooked with fresh fenugreek leaves.', options: [{ price: 8 }], diet: 'veg' },
    { name: 'Gutti Vankaya', description: 'Stuffed baby eggplants in a rich peanut and sesame gravy.', options: [{ price: 7 }], diet: 'veg' },
    { name: 'Tadka Dal', description: 'Yellow lentils tempered with cumin, garlic, and chilies.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'Butter Chicken', description: 'Tender chicken in a velvety tomato-butter sauce.', options: [{ price: 8 }], diet: 'non-veg' },
    { name: 'Chicken Kadai', description: 'Chicken pieces cooked in a traditional iron wok with spices.', options: [{ price: 8 }], diet: 'non-veg' },
    { name: 'Spicy Chicken Masala', description: 'Chicken simmered in a robust, fiery masala.', options: [{ price: 8 }], isSpicy: true, diet: 'non-veg' },
    { name: 'Chicken Korma', description: 'Rich and creamy mild chicken curry.', options: [{ price: 8 }], diet: 'non-veg' },
    { name: 'Palak Chicken', description: 'Chicken cooked in a vibrant spinach gravy.', options: [{ price: 8 }], diet: 'non-veg' },
    { name: 'Chicken Fry', description: 'Dry, spicy roasted chicken chunks.', options: [{ price: 8 }], diet: 'non-veg' },
    { name: 'Egg Masala', description: 'Boiled eggs simmered in a spiced onion-tomato gravy.', options: [{ price: 7 }], diet: 'non-veg' },
    { name: 'Lamb Rogan Josh', description: 'Classic aromatic Kashmiri lamb curry.', options: [{ price: 10 }], diet: 'non-veg' },
    { name: 'Lamb on Bone', description: 'Traditional slow-cooked bone-in lamb curry.', options: [{ price: 10 }], diet: 'non-veg' },
    { name: 'Gongura Mutton', description: 'Spicy lamb cooked with tangy sorrel leaves.', options: [{ price: 10 }], isSpicy: true, diet: 'non-veg' },
    { name: 'Palak Gosht', description: 'Tender lamb chunks cooked in spinach puree.', options: [{ price: 10 }], diet: 'non-veg' },
    { name: 'Lamb Korma', description: 'Mild lamb curry in a rich cashew and cream sauce.', options: [{ price: 10 }], diet: 'non-veg' },
    { name: 'Punjabi Gosht', description: 'Robust, spicy lamb curry cooked in a traditional Punjabi style.', options: [{ price: 10 }], diet: 'non-veg' },
  ],

  'Breads': [
    { name: 'Naan', description: 'Soft, oven-baked leavened flatbread.', options: [{ price: 2 }], diet: 'veg' },
    { name: 'Chapathi', description: 'Thin, unleavened whole wheat flatbread.', options: [{ price: 1.5 }], diet: 'veg' },
    { name: 'Paratha', description: 'Layered and flaky whole wheat pan-fried bread.', options: [{ price: 2 }], diet: 'veg' },
    { name: 'Poori', description: 'Deep-fried, puffed whole wheat bread.', options: [{ price: 1.5 }], diet: 'veg' },
    { name: 'Bhatura', description: 'Fluffy, deep-fried leavened sourdough bread.', options: [{ price: 1.5 }], diet: 'veg' },
  ],

  'Rice': [
    { name: 'Chicken Biryani', description: 'Aromatic basmati rice layered with spiced chicken.', options: [{ price: 7.5 }], diet: 'non-veg' },
    { name: 'Lamb Biryani', description: 'Fragrant rice cooked slowly with tender lamb.', options: [{ price: 9.5 }], diet: 'non-veg' },
    { name: 'Veg Biryani', description: 'Mixed vegetables and rice cooked with aromatic spices.', options: [{ price: 6.5 }], diet: 'veg' },
    { name: 'Bagara Rice', description: 'Flavorful tempered rice dish from Hyderabad.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Jeera Rice', description: 'Basmati rice tempered with cumin seeds.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Sambar Rice', description: 'Rice mixed with a lentil-based vegetable stew.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Plain Rice', description: 'Steamed, fluffy basmati rice.', options: [{ price: 4 }], diet: 'veg' },
  ],

  'Indo Chinese': [
    { name: 'Veg Noodles', description: 'Stir-fried noodles loaded with vegetables.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'Egg Noodles', description: 'Noodles tossed with scrambled eggs and veggies.', options: [{ price: 7 }], diet: 'non-veg' },
    { name: 'Chicken Noodles', description: 'Wok-tossed noodles with chicken strips and soy sauce.', options: [{ price: 7.5 }], diet: 'non-veg' },
    { name: 'Veg Fried Rice', description: 'Classic stir-fried rice with mixed vegetables.', options: [{ price: 6 }], diet: 'veg' },
    { name: 'Egg Fried Rice', description: 'Flavorful fried rice mixed with scrambled eggs.', options: [{ price: 7 }], diet: 'non-veg' },
    { name: 'Chicken Fried Rice', description: 'Savory fried rice cooked with tender chicken pieces.', options: [{ price: 7.5 }], diet: 'non-veg' },
  ],

  'Hot Drinks': [
    { name: 'Masala Tea', description: 'Traditional spiced Indian milk tea.', options: [{ price: 2 }], diet: 'veg' },
    { name: 'Gur Wali Chai', description: 'Rustic tea sweetened with natural jaggery.', options: [{ price: 2 }], diet: 'veg' },
    { name: 'Filter Coffee', description: 'Strong, frothy South Indian style coffee.', options: [{ price: 2 }], diet: 'veg' },
    { name: 'Hot Chocolate', description: 'Rich and creamy hot chocolate drink.', options: [{ price: 4 }], diet: 'veg' },
  ],

  'Milk Shakes': [
    { name: 'Regular Shakes', description: 'Classic, creamy milkshakes available in various flavors.', options: [{ type: 'All Flavours', price: 5 }], diet: 'veg' },
    { name: 'Premier Shakes', description: 'Thick, premium shakes with gourmet toppings.', options: [{ type: 'All Flavours', price: 6 }], diet: 'veg' },
    { name: 'Frappuccino', description: 'Iced, blended coffee drink topped with whipped cream.', options: [{ type: 'All Flavours', price: 6 }], diet: 'veg' },
  ],

  'Bubble Tea': [
    { name: 'Fruit Tea', description: 'Refreshing fruit-infused tea with tapioca pearls.', options: [{ type: 'All Flavours', price: 5 }], diet: 'veg' },
    { name: 'Milk Tea', description: 'Classic creamy bubble tea with chewy boba.', options: [{ type: 'All Flavours', price: 5 }], diet: 'veg' },
  ],

  'Ice-cream': [
    { name: 'Ice Cream Scoop', description: 'A generous scoop of premium, creamy ice cream.', options: [{ price: 3.5 }], diet: 'veg' },
  ],

  'Desserts': [
    { name: 'Qurbani Ka Meetha', description: 'Traditional Hyderabadi apricot dessert.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Gulab Jamun', description: 'Deep-fried milk dumplings soaked in rose-scented syrup.', options: [{ price: 4 }], diet: 'veg' },
    { name: 'Rasmalai', description: 'Soft cheese patties immersed in sweetened, thickened milk.', options: [{ price: 5 }], diet: 'veg' },
    { name: 'Rava Kesari', description: 'Sweet, saffron-infused semolina pudding.', options: [{ price: 4 }], diet: 'veg' },
    { name: 'Sweet Pan', description: 'A refreshing post-meal digestive made with betel leaves.', options: [{ price: 3 }], diet: 'veg' },
  ],
};
