export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  colors: string[];
  sizes?: string[];
  description?: string;
  rating?: number;
  reviews?: number;
  images?: string[]; // Additional images for gallery
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export interface FilterState {
  category: string[];
  priceRange: number;
  colors: string[];
  sizes: string[];
}