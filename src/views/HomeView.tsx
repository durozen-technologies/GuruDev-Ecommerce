import { ArrowRight, Leaf, ShieldCheck, Soup } from 'lucide-react';
import { motion } from 'motion/react';
import { products } from '../data';
import ProductCard from '../components/ProductCard';
import { useAppContext } from '../context/AppContext';
import { Link, useNavigate } from 'react-router-dom';

export default function HomeView() {
  const navigate = useNavigate();
  const bestsellers = products.slice(0, 4);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-surface-container-low">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQduNs6lQyQ9LxPlpG8htTxZXqo9Hf12dKSoFRWCVRnqaosHy1zTgqF1EONTtSgOfK1mEMXmXQOhz7o_npBRMsrxwRYTwel2SXyPj2SRoMg2ZHzGP0ZHr_hmULZs78entVUVUz91V9O34N1XuLHj85AYRxEeqiwOOgtOolZms1rB74gXfYYIpcT8kNRynRyTCp6i5jPjW4zPMGUsA8die5UPELtIrGmkaBPiWVk5d-ISG3x82sgSLbu6pyYSnWKjs7TKv2F6C4pF0" 
            alt="Spices" 
            className="w-full h-full object-cover opacity-80 mix-blend-multiply"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-highest/95 to-surface-container/50"></div>
        </div>
        
        <div className="relative z-10 max-w-[80rem] mx-auto px-md md:px-lg pt-sm pb-lg md:pt-md md:pb-xl grid md:grid-cols-2 gap-lg items-center w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-md text-center md:text-left"
          >
            <div className="inline-flex items-center gap-xs px-sm py-1.5 bg-secondary-container text-on-secondary-container rounded-full font-label-md shadow-sm border border-secondary/20 mx-auto md:mx-0">
              <ShieldCheck size={16} />
              100% Natural Ingredients
            </div>
            <h1 className="font-display-lg text-[40px] md:text-[48px] text-on-background text-balance leading-tight">
              Authentic South Indian <span className="text-primary italic">Taste</span>
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-[36rem] mx-auto md:mx-0">
              Generational culinary heritage brought to your kitchen. Premium, artisanal spice blends crafted in Namakkal, Tamil Nadu.
            </p>
            <div className="flex flex-col sm:flex-row gap-sm pt-sm justify-center md:justify-start">
              <Link 
                to="/shop"
                className="bg-primary text-on-primary font-label-md px-lg py-3 rounded hover:bg-primary-container transition-all hover:-translate-y-0.5 shadow-md uppercase tracking-wider"
              >
                Shop Collections
              </Link>
              <Link 
                to="/about"
                className="bg-transparent text-on-background border-2 border-outline font-label-md px-lg py-3 rounded hover:bg-surface-container-high transition-all uppercase tracking-wider"
              >
                Our Heritage
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-xl bg-surface kolam-bg relative">
        <div className="max-w-[80rem] mx-auto px-md md:px-lg">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-between items-end mb-lg"
          >
            <div>
              <h2 className="font-headline-lg text-[32px] text-on-background">Our Bestsellers</h2>
              <p className="font-body-md text-on-surface-variant mt-2">Premium blends for everyday magic.</p>
            </div>
            <Link 
              to="/shop"
              className="hidden md:flex items-center text-primary font-label-md hover:underline group"
            >
              View All Spices 
              <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md md:gap-lg">
            {bestsellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-xl bg-surface-container-lowest">
        <div className="max-w-[80rem] mx-auto px-md md:px-lg">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-lg md:gap-xl items-center"
          >
            <div className="relative rounded-lg overflow-hidden border border-outline-variant/30 shadow-lg bg-surface">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnoCfl6OpblQoWagoHmGGG_h1r74XGbjviyNrn_33Xzey-39qoqoY2riDSplNj0VvFkLnEZo530bYC6xUpu1zKyposJqNOCcvh0d6W5N0-Vo8AgwtmhkeVyFf-RTuKZSdfFEPNUTsBTaCpsGKI6bgBCwnE4iq6CpI4mj790y9eTDOIiq7aMNZk-g2hS7rI7p9hiLcFoR194qfcb4coJe8L5dm07Gq3sX3h8pdgYZsvcIaW2remb9MgptIaSILF_mweSmmady_uVqw" 
                alt="Gurudev Impex Sambar Podi" 
                className="w-full h-auto object-cover p-md"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="space-y-md">
              <h2 className="font-display-lg text-[40px] text-on-background">The Roots of Flavor</h2>
              <h3 className="font-headline-md text-primary font-medium">From Namakkal to the World</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                At Gurudev Impex, we believe that true taste lies in tradition. Born in the heartland of Namakkal, Tamil Nadu, our journey began with a simple mission: to preserve the authentic, unadulterated flavors of South Indian kitchens.
              </p>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Every batch of our artisanal spice blends is crafted using 100% natural ingredients, meticulously sourced and ground to perfection. We avoid artificial colors and preservatives, ensuring that what reaches your plate is nothing but pure heritage.
              </p>
              
              <div className="grid grid-cols-2 gap-sm pt-sm border-t border-outline-variant/30 mt-md">
                <div className="flex items-center gap-2">
                  <Leaf className="text-tertiary-container" size={24} />
                  <span className="font-label-md text-on-surface">100% Natural</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-secondary" size={24} />
                  <span className="font-label-md text-on-surface">Premium Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <Soup className="text-primary" size={24} />
                  <span className="font-label-md text-on-surface">Authentic Taste</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-on-surface" size={24} />
                  <span className="font-label-md text-on-surface">FSSAI Certified</span>
                </div>
              </div>
              
              <div className="pt-lg">
                <Link 
                  to="/about"
                  className="bg-surface border-2 border-outline text-on-surface font-label-md px-lg py-3 rounded hover:bg-surface-container transition-colors inline-flex items-center gap-2 group uppercase tracking-wider"
                >
                  Read Our Full Story
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
