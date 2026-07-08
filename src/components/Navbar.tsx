import { ShoppingCart, User, Menu } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function Navbar() {
  const { setCartOpen, cartItems, setMobileMenuOpen } = useAppContext();
  const location = useLocation();
  const path = location.pathname;
  
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="glass sticky top-0 z-40 w-full"
    >
      <div className="flex justify-between items-center w-full px-md md:px-lg py-sm max-w-[80rem] mx-auto">
        <Link 
          to="/"
          className="font-headline-md text-[24px] font-bold text-primary tracking-tight outline-none block"
        >
          GURUDEV IMPEX
        </Link>

        <div className="hidden md:flex items-center gap-lg">
          <Link 
            to="/"
            className={`font-label-md uppercase tracking-wider transition-colors block ${path === '/' ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Home
          </Link>
          <Link 
            to="/shop"
            className={`font-label-md uppercase tracking-wider transition-colors block ${path.startsWith('/shop') || path.startsWith('/product') ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Shop
          </Link>
          <Link 
            to="/about"
            className={`font-label-md uppercase tracking-wider transition-colors block ${path === '/about' ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Our Story
          </Link>
          <Link 
            to="/contact"
            className={`font-label-md uppercase tracking-wider transition-colors block ${path === '/contact' ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-sm md:gap-md text-primary">

          <button 
            onClick={() => setCartOpen(true)}
            className="p-xs hover:bg-surface-container rounded-full transition-colors relative"
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
          <button className="p-xs hover:bg-surface-container rounded-full transition-colors hidden md:block">
            <User size={20} />
          </button>
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="p-xs hover:bg-surface-container text-on-surface-variant rounded-full transition-colors md:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

    </motion.nav>

    </>
  );
}
