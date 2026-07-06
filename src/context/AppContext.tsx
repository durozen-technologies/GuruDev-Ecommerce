import { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { Product, CartItem } from '../types';

export type ViewType = 'home' | 'shop' | 'product' | 'about' | 'contact' | 'track' | 'checkout';

interface AppContextType {
  view: ViewType;
  setView: (view: ViewType) => void;
  currentProduct: Product | null;
  setCurrentProduct: (product: Product | null) => void;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  cartTotal: number;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<ViewType>('home');
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems(items => {
      const existing = items.find(item => item.product.id === product.id);
      if (existing) {
        return items.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...items, { product, quantity }];
    });
    setCartOpen(true);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId: string) => {
    setCartItems(items => items.filter(item => item.product.id !== productId));
  };

  const cartTotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }, [cartItems]);

  return (
    <AppContext.Provider
      value={{
        view,
        setView,
        currentProduct,
        setCurrentProduct,
        cartOpen,
        setCartOpen,
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        cartTotal,
        mobileMenuOpen,
        setMobileMenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
