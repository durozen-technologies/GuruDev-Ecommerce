import { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { Product, CartItem } from '../types';

interface AppContextType {
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedWeight?: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  removeFromCart: (cartItemId: string) => void;
  cartTotal: number;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const addToCart = (product: Product, quantity: number = 1, selectedWeight: string = product.weight) => {
    const cartItemId = `${product.id}-${selectedWeight}`;
    setCartItems(items => {
      const existing = items.find(item => item.id === cartItemId);
      if (existing) {
        return items.map(item =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...items, { id: cartItemId, product, quantity, selectedWeight }];
    });
    setCartOpen(true);
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === cartItemId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (cartItemId: string) => {
    setCartItems(items => items.filter(item => item.id !== cartItemId));
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
