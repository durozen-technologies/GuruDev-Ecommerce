import React from 'react';
import { motion } from 'motion/react';
import { useAppContext } from '../context/AppContext';
import { ShieldCheck, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function CheckoutView() {
  const { cartItems, cartTotal, setView } = useAppContext();
  const [success, setSuccess] = React.useState(false);

  if (success) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-2xl px-md text-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-primary mb-md">
          <CheckCircle2 size={80} />
        </motion.div>
        <h1 className="font-headline-lg text-on-background mb-sm">Order Confirmed!</h1>
        <p className="font-body-lg text-on-surface-variant mb-xl max-w-[28rem] mx-auto">
          Thank you for choosing Gurudev Impex. Your premium spices are being packed with care.
        </p>
        <button onClick={() => setView('shop')} className="bg-primary text-on-primary font-label-md px-8 py-3 rounded-lg shadow-md hover:bg-primary-container transition-colors">
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[80rem] mx-auto px-md md:px-lg py-xl">
      <button onClick={() => setView('shop')} className="flex items-center text-on-surface-variant hover:text-primary transition-colors mb-lg font-label-md">
        <ArrowLeft size={16} className="mr-2" /> Back to Shop
      </button>

      <div className="flex flex-col lg:flex-row gap-xl">
        {/* Form Section */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex-1 glass p-lg md:p-2xl rounded-2xl border border-outline-variant/30">
          <h2 className="font-headline-md text-on-background mb-xl">Checkout</h2>
          
          <form className="space-y-xl" onSubmit={(e) => { e.preventDefault(); setSuccess(true); }}>
            <section>
              <h3 className="font-label-lg text-on-surface mb-md">Contact Information</h3>
              <input type="email" placeholder="Email Address" className="w-full bg-surface-container rounded-lg px-4 py-3 border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md mb-4" required />
            </section>

            <section>
              <h3 className="font-label-lg text-on-surface mb-md">Shipping Address</h3>
              <div className="grid grid-cols-2 gap-md mb-4">
                <input type="text" placeholder="First Name" className="w-full bg-surface-container rounded-lg px-4 py-3 border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md" required />
                <input type="text" placeholder="Last Name" className="w-full bg-surface-container rounded-lg px-4 py-3 border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md" required />
              </div>
              <input type="text" placeholder="Address" className="w-full bg-surface-container rounded-lg px-4 py-3 border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md mb-4" required />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-md">
                <input type="text" placeholder="City" className="w-full bg-surface-container rounded-lg px-4 py-3 border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md md:col-span-1" required />
                <input type="text" placeholder="State" className="w-full bg-surface-container rounded-lg px-4 py-3 border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md md:col-span-1" required />
                <input type="text" placeholder="PIN Code" className="w-full bg-surface-container rounded-lg px-4 py-3 border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md col-span-2 md:col-span-1" required />
              </div>
            </section>

            <section>
              <h3 className="font-label-lg text-on-surface mb-md">Payment Method</h3>
              <div className="p-md border-2 border-primary bg-primary/5 rounded-lg flex items-center justify-between">
                <span className="font-body-md font-semibold text-primary">Cash on Delivery (COD)</span>
                <ShieldCheck className="text-primary" size={24} />
              </div>
            </section>

            <button type="submit" className="w-full bg-primary text-on-primary font-label-lg px-8 py-4 rounded-lg hover:bg-primary-container transition-colors shadow-md mt-lg uppercase tracking-wider">
              Place Order
            </button>
          </form>
        </motion.div>

        {/* Order Summary */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="w-full lg:w-96 glass p-lg rounded-2xl border border-outline-variant/30 h-fit sticky top-24">
          <h3 className="font-headline-sm text-on-background mb-lg pb-sm border-b border-outline-variant/30">Order Summary</h3>
          <div className="space-y-md mb-xl max-h-96 overflow-y-auto custom-scrollbar pr-2">
            {cartItems.map(item => (
              <div key={item.product.id} className="flex items-center gap-sm">
                <div className="relative">
                  <img src={item.product.image} className="w-16 h-16 rounded-md object-cover border border-outline-variant/20" alt={item.product.name} />
                  <span className="absolute -top-2 -right-2 bg-surface-variant text-on-surface-variant text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-sm">{item.quantity}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-label-md text-on-surface truncate pr-2">{item.product.name}</h4>
                  <span className="font-body-md text-on-surface-variant">₹{item.product.price}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t border-outline-variant/30 pt-md space-y-sm text-on-surface-variant font-body-md">
            <div className="flex justify-between"><span>Subtotal</span><span>₹{cartTotal}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>Free</span></div>
            <div className="flex justify-between text-on-surface font-headline-sm mt-md pt-sm border-t border-outline-variant/30">
              <span>Total</span>
              <span className="text-primary">₹{cartTotal}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
