import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function ContactView() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="w-full max-w-[80rem] mx-auto px-md md:px-lg pt-sm pb-lg md:pt-md md:pb-xl flex flex-col md:flex-row gap-lg md:gap-xl">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/3 space-y-xl"
      >
        <div>
          <h1 className="font-headline-lg text-[32px] md:text-[40px] text-on-background mb-sm">Get in Touch</h1>
          <p className="font-body-lg text-on-surface-variant">We'd love to hear from you. Whether it's a bulk inquiry or a question about our spices.</p>
        </div>

        <div className="space-y-lg glass p-lg rounded-2xl border border-outline-variant/30">
          <div className="flex items-start gap-md">
            <div className="p-sm bg-primary/10 text-primary rounded-full"><MapPin size={24} /></div>
            <div>
              <h4 className="font-label-lg text-on-surface mb-1">Our Headquarters</h4>
              <p className="font-body-md text-on-surface-variant">Gurudev Impex<br/>Namakkal, Tamil Nadu<br/>India</p>
            </div>
          </div>
          <div className="flex items-start gap-md">
            <div className="p-sm bg-primary/10 text-primary rounded-full"><Mail size={24} /></div>
            <div>
              <h4 className="font-label-lg text-on-surface mb-1">Email Us</h4>
              <a href="mailto:admin@gurudevimpex.in" className="font-body-md text-primary hover:underline">admin@gurudevimpex.in</a>
            </div>
          </div>
          <div className="flex items-start gap-md">
            <div className="p-sm bg-primary/10 text-primary rounded-full"><Phone size={24} /></div>
            <div>
              <h4 className="font-label-lg text-on-surface mb-1">Call Us</h4>
              <a href="tel:+919876543210" className="font-body-md text-primary hover:underline">+91 98765 43210</a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-2/3 glass p-lg md:p-2xl rounded-2xl border border-outline-variant/30 shadow-sm"
      >
        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center h-full text-center py-xl"
          >
            <CheckCircle2 size={64} className="text-primary mb-md" />
            <h3 className="font-headline-md text-on-surface mb-sm">Message Sent Successfully!</h3>
            <p className="font-body-md text-on-surface-variant max-w-[24rem] mb-lg">
              Thank you for reaching out. Our team will get back to you within 24 hours.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="text-primary hover:underline font-label-md"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form className="space-y-lg" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
            <div className="grid md:grid-cols-2 gap-md">
              <div className="space-y-xs">
                <label htmlFor="firstName" className="font-label-md text-on-surface block">First Name</label>
                <input id="firstName" type="text" className="w-full bg-surface-container rounded-lg px-4 py-3 border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md" required />
              </div>
              <div className="space-y-xs">
                <label htmlFor="lastName" className="font-label-md text-on-surface block">Last Name</label>
                <input id="lastName" type="text" className="w-full bg-surface-container rounded-lg px-4 py-3 border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md" required />
              </div>
            </div>
            <div className="space-y-xs">
              <label htmlFor="email" className="font-label-md text-on-surface block">Email Address</label>
              <input id="email" type="email" className="w-full bg-surface-container rounded-lg px-4 py-3 border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md" required />
            </div>
            <div className="space-y-xs">
              <label htmlFor="inquiryType" className="font-label-md text-on-surface block">Inquiry Type</label>
              <select id="inquiryType" className="w-full bg-surface-container rounded-lg px-4 py-3 border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md cursor-pointer" required>
                <option value="general">General Support</option>
                <option value="bulk">Bulk/Wholesale Order</option>
                <option value="press">Press & Media</option>
              </select>
            </div>
            <div className="space-y-xs">
              <label htmlFor="message" className="font-label-md text-on-surface block">Message</label>
              <textarea id="message" rows={5} className="w-full bg-surface-container rounded-lg px-4 py-3 border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md resize-y" required></textarea>
            </div>
            <button type="submit" className="bg-primary text-on-primary font-label-lg px-8 py-4 rounded-lg hover:bg-primary-container transition-colors shadow-md w-full md:w-auto mt-4">
              Send Message
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
