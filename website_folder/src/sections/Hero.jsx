import React from 'react';
import Button from '../components/Button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-secondary-100 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 lg:w-1/2 mb-10 md:mb-0 lg:pr-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 leading-tight">
            Donat Lezat, Rasa Bahagia!
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-lg">
            Nikmati donat terbaik dengan berbagai varian rasa yang menggugah selera.
            Dibuat dengan bahan-bahan alami dan proses pembuatan yang higienis.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300">Lihat Menu</Button>
            <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-lg rounded-xl border-2 hover:bg-primary-50 transition-all duration-300">Hubungi Kami</Button>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="bg-primary-200 rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center shadow-2xl">
              <img
                src="https://placehold.co/300x300?text=Donat+Delight"
                alt="Donat Delight"
                className="rounded-full w-56 h-56 md:w-72 md:h-72 lg:w-84 lg:h-84 object-cover border-4 border-white"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-secondary-500 text-white px-6 py-3 rounded-full shadow-lg">
              <span className="font-bold">100% Fresh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;