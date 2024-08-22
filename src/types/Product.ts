export interface ApiProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  inStock: boolean;
  description?: string; 
}
