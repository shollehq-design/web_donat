import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-white text-gray-80 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold font-brand text-primary-60">Donat Kafa</Link>
          
          <div className={`md:hidden absolute top-16 left-0 right-0 bg-white z-10 shadow-lg rounded-b-lg ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              <Link to="/" className="hover:text-primary-600 transition-colors py-2 border-b border-gray-200" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/about" className="hover:text-primary-600 transition-colors py-2 border-b border-gray-200" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link to="/menu" className="hover:text-primary-600 transition-colors py-2 border-b border-gray-200" onClick={() => setIsMobileMenuOpen(false)}>Menu</Link>
              <Link to="/promo" className="hover:text-primary-600 transition-colors py-2 border-b border-gray-200" onClick={() => setIsMobileMenuOpen(false)}>Promo</Link>
              <Link to="/contact" className="hover:text-primary-600 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            </div>
          </div>

          <div className="hidden md:flex lg:flex xl:flex space-x-6 lg:space-x-8 xl:space-x-10">
            <Link to="/" className="hover:text-primary-60 transition-colors text-base lg:text-lg font-medium">Home</Link>
            <Link to="/about" className="hover:text-primary-600 transition-colors text-base lg:text-lg font-medium">About</Link>
            <Link to="/menu" className="hover:text-primary-60 transition-colors text-base lg:text-lg font-medium">Menu</Link>
            <Link to="/promo" className="hover:text-primary-600 transition-colors text-base lg:text-lg font-medium">Promo</Link>
            <Link to="/contact" className="hover:text-primary-600 transition-colors text-base lg:text-lg font-medium">Contact</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Ikon Keranjang */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={(e) => {
                  e.stopPropagation(); // Mencegah event bubbling ke button
                  setIsCartOpen(true);
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 0 000-4zm-8 2a2 2 0 11-4 0 2 0 014 0z" />
              </svg>
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
            
            <button
              className="md:hidden text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 cursor-pointer"
              onClick={toggleMobileMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
       
      {/* Modal Keranjang */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;