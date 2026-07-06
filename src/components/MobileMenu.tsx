import { X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function MobileMenu() {
  const { view, setView, mobileMenuOpen, setMobileMenuOpen } = useAppContext();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-surface-container-highest/80 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[24rem] glass backdrop-blur-3xl bg-surface/95 shadow-2xl z-50 flex flex-col md:hidden border-l border-outline-variant/30 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-md border-b border-outline-variant/30">
          <span className="font-headline-md text-[20px] font-bold text-primary">MENU</span>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 hover:bg-surface-container text-on-surface-variant rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col p-md gap-md">
          <button 
            onClick={() => { setView('home'); setMobileMenuOpen(false); }}
            className={`text-left font-label-lg uppercase tracking-wider p-sm rounded-lg transition-colors ${view === 'home' ? 'bg-primary-container text-on-primary-container font-bold' : 'text-on-surface hover:bg-surface-container'}`}
          >
            Home
          </button>
          <button 
            onClick={() => { setView('shop'); setMobileMenuOpen(false); }}
            className={`text-left font-label-lg uppercase tracking-wider p-sm rounded-lg transition-colors ${view === 'shop' || view === 'product' ? 'bg-primary-container text-on-primary-container font-bold' : 'text-on-surface hover:bg-surface-container'}`}
          >
            Shop
          </button>
          <button 
            onClick={() => { setView('about'); setMobileMenuOpen(false); }}
            className={`text-left font-label-lg uppercase tracking-wider p-sm rounded-lg transition-colors ${view === 'about' ? 'bg-primary-container text-on-primary-container font-bold' : 'text-on-surface hover:bg-surface-container'}`}
          >
            Our Story
          </button>
          <button 
            onClick={() => { setView('contact'); setMobileMenuOpen(false); }}
            className={`text-left font-label-lg uppercase tracking-wider p-sm rounded-lg transition-colors ${view === 'contact' ? 'bg-primary-container text-on-primary-container font-bold' : 'text-on-surface hover:bg-surface-container'}`}
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
}
