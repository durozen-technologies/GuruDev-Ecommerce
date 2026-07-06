import { ShoppingCart, User, Menu, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useAppContext } from '../context/AppContext';

export default function Navbar() {
  const { view, setView, setCartOpen, cartItems, setMobileMenuOpen } = useAppContext();
  
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
        <button 
          onClick={() => setView('home')}
          className="font-headline-md text-[24px] font-bold text-primary tracking-tight outline-none"
        >
          GURUDEV IMPEX
        </button>

        <div className="hidden md:flex items-center gap-lg">
          <button 
            onClick={() => setView('home')}
            className={`font-label-md uppercase tracking-wider transition-colors ${view === 'home' ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Home
          </button>
          <button 
            onClick={() => setView('shop')}
            className={`font-label-md uppercase tracking-wider transition-colors ${view === 'shop' || view === 'product' ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Shop
          </button>
          <button 
            onClick={() => setView('about')}
            className={`font-label-md uppercase tracking-wider transition-colors ${view === 'about' ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Our Story
          </button>
          <button 
            onClick={() => setView('contact')}
            className={`font-label-md uppercase tracking-wider transition-colors ${view === 'contact' ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Contact
          </button>
        </div>

        <div className="flex items-center gap-sm md:gap-md text-primary">
          <button className="p-xs hover:bg-surface-container rounded-full transition-colors hidden md:block">
            <Search size={20} />
          </button>
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
