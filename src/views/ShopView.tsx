import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { products } from '../data';
import ProductCard from '../components/ProductCard';

export default function ShopView() {
  const allCategories = ['Masalas', 'Snacks'];
  const [selectedCategories, setSelectedCategories] = useState<string[]>(allCategories);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(p.category);
      return matchCategory;
    });
  }, [selectedCategories]);
  return (
    <div className="w-full max-w-[80rem] mx-auto px-md md:px-lg pt-sm pb-lg md:pt-md md:pb-xl flex flex-col md:flex-row gap-md md:gap-xl kolam-bg">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 flex-shrink-0 space-y-sm md:space-y-lg">
        {/* Mobile Filter Toggle */}
        <button 
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="md:hidden w-full bg-surface-container py-3 px-4 rounded-lg flex justify-between items-center font-label-md text-on-surface border border-outline-variant/30"
        >
          <span>Filters</span>
          <ChevronDown className={`transform transition-transform ${showMobileFilters ? 'rotate-180' : ''}`} size={20} />
        </button>

        <div className={`space-y-lg md:space-y-xl ${showMobileFilters ? 'block' : 'hidden md:block'}`}>
          <div>
            <h3 className="font-label-md uppercase text-on-surface-variant mb-md border-b border-outline-variant/30 pb-2">Categories</h3>
            <ul className="space-y-3">
              {allCategories.map(cat => (
                <li key={cat}>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="w-4 h-4 text-primary border-outline rounded-sm focus:ring-primary focus:ring-offset-surface bg-surface group-hover:border-primary transition-colors accent-primary" 
                    />
                    <span className="text-on-surface group-hover:text-primary transition-colors">{cat}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      {/* Product Grid */}
      <div className="flex-grow">
        <div className="flex justify-between items-end mb-lg border-b border-outline-variant/30 pb-sm">
          <h1 className="font-headline-lg text-[32px] text-primary">Authentic Blends</h1>
          <span className="text-on-surface-variant font-caption">Showing {filteredProducts.length} of {products.length} products</span>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md"
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full py-xl text-center text-on-surface-variant font-body-lg">
              No products found matching your filters. Try adjusting them!
            </div>
          )}
        </motion.div>


      </div>
    </div>
  );
}
