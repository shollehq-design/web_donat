import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Menu from '../sections/Menu';
import Promo from '../sections/Promo';
import Testimonial from '../sections/Testimonial';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Menu />
      <Promo />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;