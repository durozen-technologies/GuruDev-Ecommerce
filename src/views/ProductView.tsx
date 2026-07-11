import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Minus, Plus, ShoppingBag, ShieldCheck, Factory } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAppContext } from '../context/AppContext';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { products } from '../data';

export default function ProductView() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const currentProduct = products.find(p => p.id === productId);
  const { addToCart } = useAppContext();
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState(currentProduct?.weight || '200g');
  const [activeAccordion, setActiveAccordion] = useState<string | null>('ingredients');
  const [activeImage, setActiveImage] = useState(currentProduct?.image || '');

  React.useEffect(() => {
    if (currentProduct) {
      setActiveImage(currentProduct.image);
    }
  }, [currentProduct?.id]);

  if (!currentProduct) {
    return (
      <div className="p-xl text-center">
        <p>Product not found.</p>
        <Link to="/shop" className="text-primary underline mt-4 inline-block">Return to Shop</Link>
      </div>
    );
  }

  const toggleAccordion = (id: string) => {
    setActiveAccordion(prev => prev === id ? null : id);
  };

  return (
    <div className="max-w-[80rem] mx-auto px-md md:px-lg pt-sm pb-lg md:pt-md md:pb-xl kolam-bg w-full">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex text-on-surface-variant font-caption mb-md">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li><ChevronRight size={14} className="mx-1" /></li>
          <li><Link to="/shop" className="hover:text-primary transition-colors">Shop</Link></li>
          <li><ChevronRight size={14} className="mx-1" /></li>
          <li aria-current="page"><span className="text-on-surface font-medium">{currentProduct.name}</span></li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-md md:gap-xl">
        {/* Gallery */}
        <div className="md:col-span-7 space-y-md relative md:sticky md:top-24 h-fit z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative glass rounded-2xl overflow-hidden border border-outline-variant/30 group h-[400px] md:h-[500px] flex items-center justify-center p-md mb-4"
          >
            <img 
              src={activeImage} 
              alt={currentProduct.name} 
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl"
              fetchPriority="high"
            />
            {currentProduct.isBestseller && (
              <div className="absolute top-md left-md flex flex-col gap-sm">
                <span className="bg-secondary-container text-on-secondary-container font-caption px-3 py-1 rounded-full font-bold shadow-sm">100% Natural</span>
              </div>
            )}
          </motion.div>
          
          {/* Thumbnails */}
          {currentProduct.additionalImages && currentProduct.additionalImages.length > 0 && (
            <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
              {[currentProduct.image, ...currentProduct.additionalImages].map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${activeImage === img ? 'border-primary shadow-md' : 'border-outline-variant/30 hover:border-primary/50'}`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-contain bg-surface-container-lowest p-2" />
                </button>
              ))}
            </div>
          )}

        </div>

        {/* Product Details */}
        <div className="md:col-span-5 flex flex-col">
          <h1 className="font-display-lg text-[36px] md:text-[42px] text-primary mb-1 font-bold leading-tight">{currentProduct.name}</h1>
          <h2 className="font-headline-md text-on-surface opacity-80 mb-md font-['Libre_Caslon_Text']">{currentProduct.name === 'Sambar Podi' ? 'சாம்பார் பொடி' : 'பாரம்பரிய பொடி'}</h2>
          
          <div className="flex items-baseline space-x-4 mb-lg">
            <span className="font-display-lg text-[32px] text-on-surface">₹{currentProduct.price}</span>
            <span className="font-body-md text-on-surface-variant">(Inclusive of all taxes)</span>
          </div>

          <div className="flex flex-wrap gap-sm mb-lg">
            <div className="flex items-center space-x-2 bg-surface-container px-3 py-2 rounded border border-outline-variant/30">
              <ShieldCheck className="text-tertiary-container" size={20} />
              <span className="font-label-md text-on-surface">100% Vegetarian</span>
            </div>
            <div className="flex items-center space-x-2 bg-surface-container px-3 py-2 rounded border border-outline-variant/30">
              <Factory className="text-primary" size={20} />
              <span className="font-label-md text-on-surface">Make in India</span>
            </div>
          </div>

          <div className="glass rounded-xl p-md mb-lg">
            <div className="mb-md">
              <label className="font-label-md text-on-surface block mb-2">Net Weight</label>
              <div className="flex space-x-3">
                <button 
                  onClick={() => setSelectedWeight(currentProduct.weight)}
                  className={`px-5 py-2 border-2 rounded-lg font-label-md transition-colors ${selectedWeight === currentProduct.weight ? 'border-primary bg-primary text-on-primary shadow-md' : 'border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary bg-surface/50'}`}
                >
                  {currentProduct.weight}
                </button>
                <button 
                  onClick={() => setSelectedWeight('500g')}
                  className={`px-5 py-2 border-2 rounded-lg font-label-md transition-colors ${selectedWeight === '500g' ? 'border-primary bg-primary text-on-primary shadow-md' : 'border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary bg-surface/50'}`}
                >
                  500g
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-end space-y-4 sm:space-y-0 sm:space-x-md">
              <div className="w-full sm:w-1/3">
                <label className="font-label-md text-on-surface block mb-2">Quantity</label>
                <div className="flex items-center justify-between border-2 border-outline-variant rounded-lg bg-surface/80 px-3 py-2.5">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-on-surface-variant hover:text-primary transition-colors"><Minus size={18} /></button>
                  <span className="font-body-lg text-on-surface select-none font-semibold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="text-on-surface-variant hover:text-primary transition-colors"><Plus size={18} /></button>
                </div>
              </div>
              <button 
                onClick={() => addToCart(currentProduct, quantity, selectedWeight)}
                className="flex-1 w-full bg-primary text-on-primary py-3.5 rounded-lg font-label-md uppercase tracking-wider hover:bg-primary-container transition-all shadow-lg flex items-center justify-center space-x-2 group hover:-translate-y-0.5"
              >
                <ShoppingBag className="group-hover:scale-110 transition-transform" size={20} />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>

          <div className="prose prose-sm font-body-md text-on-surface-variant mb-xl leading-relaxed">
            <p>Experience the authentic South Indian taste with our premium Aromatic & Traditional Blend. Crafted meticulously with natural ingredients, preserving generational heritage in every pinch.</p>
          </div>
        </div>
      </div>

      {/* Accordions */}
      <div className="mt-xl max-w-[56rem] mx-auto">
        <Accordion 
          id="ingredients"
          title="Ingredients"
          isOpen={activeAccordion === 'ingredients'}
          onToggle={() => toggleAccordion('ingredients')}
        >
          <p className="leading-relaxed">Coriander, Red Chilli, Tuvar Dal, Toor Dal, Chana Dal, Urad Dal, Black Pepper, Cumin, Fenugreek, Mustard, Curry Leaves, Asafoetida & Iodised Salt.</p>
        </Accordion>
        <Accordion 
          id="nutrition"
          title="Nutritional Information"
          isOpen={activeAccordion === 'nutrition'}
          onToggle={() => toggleAccordion('nutrition')}
        >
          <p className="mb-4 font-caption italic">(Approx. per 100g)</p>
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr className="border-b border-outline-variant/30 bg-surface-container-lowest">
                <td className="py-3 px-4 font-medium text-on-surface">Energy</td>
                <td className="py-3 px-4 text-right">375 kcal</td>
              </tr>
              <tr className="border-b border-outline-variant/30 bg-surface">
                <td className="py-3 px-4 font-medium text-on-surface">Protein</td>
                <td className="py-3 px-4 text-right">17.5 g</td>
              </tr>
              <tr className="border-b border-outline-variant/30 bg-surface-container-lowest">
                <td className="py-3 px-4 font-medium text-on-surface">Carbohydrates</td>
                <td className="py-3 px-4 text-right">43.2 g</td>
              </tr>
            </tbody>
          </table>
        </Accordion>
        <Accordion 
          id="storage"
          title="Storage Instructions"
          isOpen={activeAccordion === 'storage'}
          onToggle={() => toggleAccordion('storage')}
        >
          <p>Store in a cool, dry place in an airtight container. Use a dry spoon only.</p>
          <p className="mt-4 font-bold text-on-surface uppercase tracking-wide">Best before 6 months from the date of packing.</p>
        </Accordion>
      </div>
    </div>
  );
}

function Accordion({ id, title, isOpen, onToggle, children }: { id: string, title: string, isOpen: boolean, onToggle: () => void, children: React.ReactNode }) {
  return (
    <div className="border-b border-outline-variant/40">
      <button 
        onClick={onToggle}
        className="w-full py-md flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="font-headline-md text-[20px] text-primary font-bold group-hover:text-primary-container transition-colors">{title}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="text-primary" size={24} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-md font-body-md text-on-surface-variant">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
