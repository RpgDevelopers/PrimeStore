import React, { useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductPage } from './pages/Product';
import { Cart } from './pages/Cart';
import { About } from './pages/About';

// ScrollToTop component to reset scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [cartCount, setCartCount] = useState(2); // Initial mocked count

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    // In a real app, this would add the item to a context/state array
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div class="flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display">
        <Header cartCount={cartCount} />
        <main class="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductPage addToCart={handleAddToCart} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            {/* Fallback to shop for demo if unknown product */}
            <Route path="/product" element={<ProductPage addToCart={handleAddToCart} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
