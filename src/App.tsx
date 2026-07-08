import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Wait for Suspense layout shift to complete before forcing scroll
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow flex flex-col relative z-0">
        <Suspense fallback={
          <div className="flex-1 flex items-center justify-center min-h-[50vh]">
            <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/shop" element={<ShopView />} />
            <Route path="/product/:productId" element={<ProductView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/contact" element={<ContactView />} />
            <Route path="/track" element={<TrackOrderView />} />
            <Route path="/checkout" element={<CheckoutView />} />
          </Routes>
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
    <BrowserRouter>
      <AppProvider>
        <ScrollToTop />
        <AppContent />
      </AppProvider>
    </BrowserRouter>
  );
}
