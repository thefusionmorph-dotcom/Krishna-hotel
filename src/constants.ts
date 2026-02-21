export const RESTAURANT_INFO = {
  name: "Shree Krishna Pure Veg",
  subName: "by Maratha Curry",
  tagline: "Authentic Maharashtrian Soul Food",
  description: "Experience the true essence of Maharashtrian culture with our premium pure vegetarian cuisine. From spicy Misal to comforting Thalis, we bring you the taste of home in a warm, family-friendly ambience.",
  address: "College Road, Nashik, Maharashtra 422005",
  phone: "+91 98221 48358",
  hours: "11:00 AM - 11:00 PM",
  zomatoLink: "https://www.zomato.com/nashik/original-shri-krishna-veg-restaurant-college-road",
  swiggyLink: "#", // Placeholder as source didn't provide
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=20.0082385838,73.7562430522"
};

export const MENU_CATEGORIES = [
  {
    id: 'maharashtrian',
    title: 'Maharashtrian Specials',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop', // Misal/Spicy Indian
    items: [
      { name: 'Special Misal Pav', price: '₹120', desc: 'Spicy sprouted curry topped with farsan, served with pav.' },
      { name: 'Puran Poli Thali', price: '₹250', desc: 'Sweet flatbread served with katachi amti and rice.' },
      { name: 'Thalipeeth', price: '₹100', desc: 'Multigrain savory pancake served with curd and thecha.' },
      { name: 'Sabudana Khichdi', price: '₹90', desc: 'Tapioca pearls sautéed with peanuts and mild spices.' }
    ]
  },
  {
    id: 'thali',
    title: 'Premium Thalis',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop', // Thali
    items: [
      { name: 'Maharaja Thali', price: '₹350', desc: 'Unlimited assortment of 3 veggies, dal, rice, roti, sweet, and farsan.' },
      { name: 'Mini Thali', price: '₹180', desc: 'Perfect meal with 2 veggies, chapati, dal, and rice.' }
    ]
  },
  {
    id: 'south-indian',
    title: 'South Indian',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop', // Dosa
    items: [
      { name: 'Mysore Masala Dosa', price: '₹140', desc: 'Crispy crepe smeared with spicy red chutney and potato filling.' },
      { name: 'Idli Sambar', price: '₹80', desc: 'Steamed rice cakes served with lentil soup and coconut chutney.' }
    ]
  },
  {
    id: 'chinese',
    title: 'Desi Chinese',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop', // Noodles
    items: [
      { name: 'Veg Hakka Noodles', price: '₹150', desc: 'Stir-fried noodles with fresh vegetables.' },
      { name: 'Paneer Chilli', price: '₹180', desc: 'Cottage cheese tossed in spicy soya sauce.' }
    ]
  }
];

export const REVIEWS = [
  {
    name: "Rahul Deshpande",
    rating: 5,
    text: "The most authentic Misal in Nashik! The ambience is very premium and family-friendly."
  },
  {
    name: "Priya Patil",
    rating: 4,
    text: "Great place for a Sunday family lunch. The Thali is a must-try. Very clean and hygienic."
  },
  {
    name: "Amit Joshi",
    rating: 5,
    text: "Loved the vibe. It feels like a proper Maharashtrian cultural experience. Highly recommended!"
  }
];

export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=800&auto=format&fit=crop", // Ambience/Food
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop", // Restaurant interior
  "https://images.unsplash.com/photo-1606491956689-2ea28c674456?q=80&w=800&auto=format&fit=crop", // Food
  "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=800&auto=format&fit=crop", // Curry
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop", // Samosa/Snack
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop"  // Thali
];
