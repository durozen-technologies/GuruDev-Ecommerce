import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function CartDrawer() {
  const { cartOpen, setCartOpen, cartItems, updateQuantity, cartTotal } = useAppContext();
  const navigate = useNavigate();

  return (
    <AnimatePresence>
        {cartOpen && (
          <motion.div
            key="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-inverse-surface/40 z-50 transition-opacity"
          />
        )}
        {cartOpen && (
          <motion.aside
            key="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-[60] flex flex-col glass backdrop-blur-3xl bg-surface/95 shadow-2xl border-l border-outline-variant/30 w-full max-w-[24rem] md:max-w-[28rem] h-full"
          >
            <div className="p-md flex flex-col h-full">
              <header className="flex items-center justify-between mb-md pb-sm border-b border-outline-variant/30">
                <div>
                  <h2 className="font-headline-md text-[24px] text-primary">Your Basket</h2>
                  <p className="font-caption text-on-surface-variant">Premium Artisanal Spices</p>
                </div>
                <button 
                  onClick={() => setCartOpen(false)}
                  className="text-on-surface-variant hover:text-primary transition-colors focus:outline-none p-xs"
                >
                  <X size={24} />
                </button>
              </header>

              <div className="flex-1 overflow-y-auto pr-xs custom-scrollbar">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-on-surface-variant opacity-70">
                    <p className="font-body-md">Your basket is empty</p>
                  </div>
                ) : (
                  <div className="space-y-sm">
                    {cartItems.map((item) => (
                      <div 
                        key={item.id} 
                        className="flex items-center gap-sm bg-surface/50 p-sm rounded-xl border border-outline-variant/20 hover:border-primary/40 hover:bg-surface transition-all group"
                      >
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          className="w-16 h-16 object-cover rounded-md border border-outline-variant/10 shadow-sm"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-label-md text-on-surface group-hover:text-primary transition-colors truncate">
                            {item.product.name}
                          </h3>
                          <p className="font-caption text-on-surface-variant mb-xs">{item.selectedWeight} Pack</p>
                          <div className="flex items-center justify-between mt-xs">
                            <span className="font-body-md font-semibold text-on-surface">
                              ₹{item.product.price}
                            </span>
                            <div className="flex items-center bg-surface-container rounded-md border border-outline-variant/30">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="px-2 py-1 text-on-surface-variant hover:text-primary transition-colors"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="font-body-md px-2 min-w-[2ch] text-center">
                                {item.quantity}
                              </span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="px-2 py-1 text-on-surface-variant hover:text-primary transition-colors"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-md pt-sm border-t border-outline-variant/30">
                <div className="flex justify-between items-center mb-md">
                  <span className="font-body-md text-on-surface-variant">Subtotal</span>
                  <span className="font-headline-md text-[24px] text-on-surface font-semibold">₹{cartTotal}</span>
                </div>
                <p className="font-caption text-on-surface-variant mb-sm">Shipping and taxes calculated at checkout.</p>
                <button 
                  disabled={cartItems.length === 0}
                  onClick={() => {
                    navigate('/checkout');
                    setCartOpen(false);
                  }}
                  className="w-full bg-primary text-on-primary font-label-md py-sm rounded-lg hover:bg-primary-container transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </motion.aside>
        )}
    </AnimatePresence>
  );
}
