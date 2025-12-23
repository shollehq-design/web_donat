import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutPage from '../pages/AboutPage';
import MenuPage from '../pages/MenuPage';
import PromoPage from '../pages/PromoPage';
import ContactPage from '../pages/ContactPage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AppRouter = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/promo" element={<PromoPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;