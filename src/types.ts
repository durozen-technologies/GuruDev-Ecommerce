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
  additionalImages?: string[];
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedWeight: string;
}
