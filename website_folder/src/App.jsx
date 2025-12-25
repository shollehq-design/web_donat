import React from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Menu from './sections/Menu';
import Promo from './sections/Promo';
import About from './sections/About';
import Testimonial from './sections/Testimonial';
import Contact from './sections/Contact';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Menu showAll={true} />
          <Promo />
          <Testimonial />
          <Contact />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;