import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Award, Heart, ArrowRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

export default function AboutView() {

  return (
    <div className="w-full relative">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-surface-container-highest z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-[42rem] px-md"
        >
          <h1 className="font-headline-lg text-[40px] md:text-[56px] text-primary font-bold mb-md drop-shadow-md">Our Heritage</h1>
          <p className="font-body-lg text-on-surface leading-relaxed drop-shadow-sm">
            Rooted in Namakkal, Tamil Nadu, Gurudev Impex brings the authentic taste of tradition to your kitchen.
          </p>
        </motion.div>
      </section>

      {/* Content Grid */}
      <section className="max-w-[80rem] mx-auto px-md md:px-lg pt-sm pb-lg md:pt-md md:pb-xl">
        <div className="grid md:grid-cols-3 gap-lg md:gap-xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="glass p-lg rounded-2xl flex flex-col items-center text-center space-y-md border border-outline-variant/30 hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
              <Leaf size={32} />
            </div>
            <h3 className="font-headline-sm text-[24px] text-on-surface">Sustainable Sourcing</h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              We partner directly with generational farmers, ensuring fair trade practices and preserving the earth's natural balance for future harvests.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="glass p-lg rounded-2xl flex flex-col items-center text-center space-y-md border border-outline-variant/30 hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
              <Award size={32} />
            </div>
            <h3 className="font-headline-sm text-[24px] text-on-surface">Premium Quality</h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Every batch undergoes rigorous quality control. We select only the most aromatic, potent spices to carry the Gurudev name.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
            className="glass p-lg rounded-2xl flex flex-col items-center text-center space-y-md border border-outline-variant/30 hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
              <Heart size={32} />
            </div>
            <h3 className="font-headline-sm text-[24px] text-on-surface">Traditional Care</h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Our packing methods preserve volatile oils and essential aromas, maintaining the soul of the spice exactly as nature intended.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-xl bg-surface-container-low text-center px-md">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[48rem] mx-auto space-y-md"
        >
          <h2 className="font-headline-lg text-[32px] text-on-background">Experience the Authentic Taste</h2>
          <p className="font-body-lg text-on-surface-variant max-w-[42rem] mx-auto mb-lg">
            Explore our curated selection of premium South Indian spices and podis.
          </p>
          <Link 
            to="/shop"
            className="bg-primary text-on-primary font-label-lg px-xl py-4 rounded-lg hover:bg-primary-container transition-all hover:-translate-y-1 shadow-lg inline-flex items-center gap-2 group uppercase tracking-wider"
          >
            Shop Our Spices
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
