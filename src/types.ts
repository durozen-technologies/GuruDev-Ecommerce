export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: string;
  image: string;
  category: 'Masalas' | 'Snacks';
  spiceLevel: 'Mild' | 'Medium' | 'Hot';
  isBestseller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
