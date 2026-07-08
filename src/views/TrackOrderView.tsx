import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Package, Truck, CheckCircle } from 'lucide-react';

export default function TrackOrderView() {
  const [orderId, setOrderId] = useState('');
  const [tracked, setTracked] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim()) setTracked(true);
  };

  return (
    <div className="w-full max-w-[56rem] mx-auto px-md md:px-lg pt-sm pb-lg md:pt-md md:pb-xl flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full text-center space-y-md mb-xl"
      >
        <h1 className="font-headline-lg text-[32px] md:text-[40px] text-on-background">Track Your Order</h1>
        <p className="font-body-lg text-on-surface-variant max-w-[42rem] mx-auto">
          Enter your Order ID below to see the real-time status of your premium spices.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="w-full max-w-[42rem] glass p-lg rounded-2xl border border-outline-variant/30 shadow-sm"
      >
        <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-sm">
          <input 
            type="text" 
            placeholder="e.g. GDI-849302" 
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="flex-1 bg-surface-container rounded-lg px-4 py-3 border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md"
            required 
          />
          <button type="submit" className="bg-primary text-on-primary font-label-md px-8 py-3 rounded-lg hover:bg-primary-container transition-colors shadow-md flex items-center justify-center gap-2">
            <Search size={18} />
            <span>Track</span>
          </button>
        </form>
      </motion.div>

      {tracked && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="w-full max-w-[42rem] mt-xl overflow-hidden"
        >
          <div className="glass p-lg rounded-2xl border border-outline-variant/30 shadow-sm relative">
            <h3 className="font-headline-sm text-on-surface mb-xl text-center">Order #{orderId.toUpperCase()} Status</h3>
            
            <div className="relative flex justify-between items-center px-4 md:px-xl">
              {/* Progress Line */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-surface-container -z-10 -translate-y-1/2 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-1/2"></div>
              </div>
              
              <div className="flex flex-col items-center gap-sm bg-surface p-2 rounded-xl">
                <div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-md">
                  <Package size={24} />
                </div>
                <span className="font-label-md text-on-surface">Packed</span>
              </div>

              <div className="flex flex-col items-center gap-sm bg-surface p-2 rounded-xl">
                <div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-md">
                  <Truck size={24} />
                </div>
                <span className="font-label-md text-on-surface">Shipped</span>
              </div>

              <div className="flex flex-col items-center gap-sm bg-surface p-2 rounded-xl">
                <div className="w-12 h-12 bg-surface-container text-on-surface-variant rounded-full flex items-center justify-center border-2 border-outline-variant/30">
                  <CheckCircle size={24} />
                </div>
                <span className="font-label-md text-on-surface-variant">Delivered</span>
              </div>
            </div>

            <p className="text-center font-body-md text-on-surface-variant mt-xl">
              Estimated Delivery: <strong>Tomorrow by 9:00 PM</strong>
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
