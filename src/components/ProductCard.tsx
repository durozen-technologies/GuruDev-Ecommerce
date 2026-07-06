import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';
import { useAppContext } from '../context/AppContext';

export default function ProductCard({ product }: { product: Product, key?: React.Key }) {
  const { setView, setCurrentProduct, addToCart } = useAppContext();

  const handleProductClick = () => {
    setCurrentProduct(product);
    setView('product');
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <motion.article 
      onClick={handleProductClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      className="glass rounded-xl overflow-hidden group hover:shadow-2xl hover:border-primary/30 transition-all duration-300 ease-out flex flex-col h-full cursor-pointer"
    >
      <div className="relative aspect-[4/5] bg-surface-container-lowest overflow-hidden flex items-center justify-center p-md">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-xl"
          loading="lazy"
          decoding="async"
        />
        {product.isBestseller && (
          <div className="absolute top-sm right-sm bg-tertiary-container text-on-tertiary-container px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-sm">
            Bestseller
          </div>
        )}
      </div>
      <div className="p-md flex flex-col flex-grow border-t border-outline-variant/10">
        <div className="flex justify-between items-start mb-sm">
          <h2 className="font-label-md text-on-surface line-clamp-1">{product.name}</h2>
          <span className="font-caption text-on-surface-variant bg-surface-container px-2 py-0.5 rounded ml-2 whitespace-nowrap">
            {product.weight}
          </span>
        </div>
        <p className="font-caption text-on-surface-variant mb-md flex-grow line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto pt-sm border-t border-outline-variant/20">
          <span className="font-body-lg font-bold text-primary">₹{product.price}</span>
          <button 
            onClick={handleAddToCart}
            className="bg-primary text-on-primary hover:bg-primary-container px-sm py-2 rounded font-label-md transition-colors shadow-sm flex items-center gap-2"
          >
            <ShoppingBag size={16} /> <span>Add</span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}
