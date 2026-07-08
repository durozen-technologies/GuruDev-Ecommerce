import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="glass-dark border-t border-outline-variant/20 w-full mt-auto relative z-10 overflow-hidden">
      <div className="absolute inset-0 kolam-bg opacity-5 mix-blend-overlay"></div>
      <div className="w-full py-xl px-md md:px-lg grid grid-cols-1 md:grid-cols-4 gap-md max-w-[80rem] mx-auto relative z-20">
        <div className="col-span-1 md:col-span-2 space-y-md">
          <div className="font-headline-md text-[20px] text-surface-container-highest font-bold">
            <Link to="/" className="hover:text-surface-variant transition-colors block">
              GURUDEV IMPEX
            </Link>
          </div>
          <p className="font-caption text-surface-variant/80 max-w-[24rem] leading-relaxed">
            Traditional Excellence. Packing and marketing premium spices from Namakkal, Tamil Nadu, to the world.
          </p>
          <p className="font-caption text-surface-variant/60">
            © 2026 Gurudev Impex. Namakkal, Tamil Nadu.
          </p>
        </div>
        
        <div className="col-span-1">
          <h4 className="font-label-md text-surface-container-highest mb-sm uppercase tracking-widest font-bold">Quick Links</h4>
          <ul className="space-y-sm font-caption">
            <li><Link to="/about" className="text-surface-variant/80 hover:text-surface-variant transition-colors block">Sourcing</Link></li>
            <li><Link to="/about" className="text-surface-variant/80 hover:text-surface-variant transition-colors block">Sustainability</Link></li>
            <li><Link to="/about" className="text-surface-variant/80 hover:text-surface-variant transition-colors block">Heritage</Link></li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h4 className="font-label-md text-surface-container-highest mb-sm uppercase tracking-widest font-bold">Support</h4>
          <ul className="space-y-sm font-caption">
            <li><Link to="/contact" className="text-surface-variant/80 hover:text-surface-variant transition-colors block">Bulk Inquiry</Link></li>
            <li><Link to="/track" className="text-surface-variant/80 hover:text-surface-variant transition-colors block">Track Order</Link></li>
            <li><Link to="/contact" className="text-surface-variant/80 hover:text-surface-variant transition-colors block">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
