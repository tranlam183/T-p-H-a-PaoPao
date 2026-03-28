export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  shortBenefit: string;
  whyBuy: string[];
  description: string;
  isBestSeller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  slug: string;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  image?: string;
}
