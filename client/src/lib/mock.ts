import imgSneakers from '@assets/stock_images/minimalist_white_run_53b5573c.jpg';
import imgArmchair from '@assets/stock_images/modern_grey_fabric_a_36bc6d53.jpg';
import imgHeadphones from '@assets/stock_images/wireless_noise_cance_b589f836.jpg';
import imgWatch from '@assets/stock_images/smart_watch_black_st_b960d143.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  stock: number;
}

export const CATEGORIES = ['All', 'Electronics', 'Furniture', 'Fashion', 'Accessories'];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Lumina X-1 Sneakers',
    price: 129.00,
    category: 'Fashion',
    image: imgSneakers,
    description: 'Ultra-lightweight running shoes designed for maximum comfort and performance. Breathable mesh upper with responsive cushioning.',
    rating: 4.8,
    reviews: 124,
    stock: 15,
  },
  {
    id: '2',
    name: 'Nordic Lounge Chair',
    price: 349.00,
    category: 'Furniture',
    image: imgArmchair,
    description: 'Mid-century modern inspired armchair with premium grey fabric upholstery and solid oak legs. Perfect for your reading corner.',
    rating: 4.9,
    reviews: 89,
    stock: 5,
  },
  {
    id: '3',
    name: 'Sonic Pro Headphones',
    price: 299.00,
    category: 'Electronics',
    image: imgHeadphones,
    description: 'Industry-leading noise cancellation technology met with premium sound quality. 30-hour battery life and fast charging.',
    rating: 4.7,
    reviews: 450,
    stock: 42,
  },
  {
    id: '4',
    name: 'Chronos Smart Watch',
    price: 199.00,
    category: 'Electronics',
    image: imgWatch,
    description: 'Track your fitness, health, and notifications in style. Features an always-on retina display and water resistance up to 50m.',
    rating: 4.6,
    reviews: 210,
    stock: 20,
  },
  {
    id: '5',
    name: 'Minimalist Desk Lamp',
    price: 89.00,
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1507473888900-52e1adad54ac?auto=format&fit=crop&q=80&w=800',
    description: 'Adjustable LED desk lamp with touch controls and wireless charging base.',
    rating: 4.5,
    reviews: 67,
    stock: 30,
  },
  {
    id: '6',
    name: 'Canvas Weekender',
    price: 145.00,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
    description: 'Durable canvas travel bag with leather accents. Spacious main compartment and multiple pockets.',
    rating: 4.8,
    reviews: 32,
    stock: 12,
  },
];
