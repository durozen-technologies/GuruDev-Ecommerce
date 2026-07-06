import React, { Suspense, lazy } from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import MobileMenu from './components/MobileMenu';

const HomeView = lazy(() => import('./views/HomeView'));
const ShopView = lazy(() => import('./views/ShopView'));
const ProductView = lazy(() => import('./views/ProductView'));
const AboutView = lazy(() => import('./views/AboutView'));
const ContactView = lazy(() => import('./views/ContactView'));
const TrackOrderView = lazy(() => import('./views/TrackOrderView'));
const CheckoutView = lazy(() => import('./views/CheckoutView'));

function AppContent() {
  const { view } = useAppContext();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow flex flex-col relative z-0">
        <Suspense fallback={
          <div className="flex-1 flex items-center justify-center min-h-[50vh]">
            <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
          </div>
        }>
          {view === 'home' && <HomeView />}
          {view === 'shop' && <ShopView />}
          {view === 'product' && <ProductView />}
          {view === 'about' && <AboutView />}
          {view === 'contact' && <ContactView />}
          {view === 'track' && <TrackOrderView />}
          {view === 'checkout' && <CheckoutView />}
        </Suspense>
      </main>
      <Footer />
      <CartDrawer />
      <MobileMenu />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
