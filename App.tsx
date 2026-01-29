import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductPage } from './pages/Product';
import { Cart } from './pages/Cart';
import { About } from './pages/About';
import { ShopProvider, useShop } from './context/ShopContext';

// ScrollToTop component to reset scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Wrapper for Header to access context
const HeaderWrapper = () => {
    const { getCartCount } = useShop();
    return <Header cartCount={getCartCount()} />;
}

const App: React.FC = () => {
  return (
    <ShopProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div class="flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display">
          <HeaderWrapper />
          <main class="flex-grow flex flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              {/* Fallback */}
              <Route path="*" element={<Shop />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ShopProvider>
  );
};

export default App;