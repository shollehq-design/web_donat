import React from 'react';
import Button from '../components/Button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🍩 Donat Terlezat di Kediri
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
              Donat Lezat, <span className="text-primary-600">Rasa Bahagia!</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Nikmati donat premium dengan berbagai varian rasa yang menggugah selera.
              Dibuat dengan bahan pilihan dan resep rahasia dari Kafa Donat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                variant="primary"
                className="px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                onClick={() => scrollToSection('menu')}
              >
                Lihat Menu
              </Button>
              <Button
                variant="secondary"
                className="px-8 py-4 text-lg rounded-xl"
                onClick={() => scrollToSection('contact')}
              >
                Hubungi Kami
              </Button>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8 pt-4 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">10+</div>
                <div className="text-sm text-gray-500">Varian Rasa</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">5K+</div>
                <div className="text-sm text-gray-500">Pelanggan</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">100%</div>
                <div className="text-sm text-gray-500">Fresh</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-200 to-primary-300 rounded-full w-72 h-72 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem] flex items-center justify-center shadow-2xl">
                <img
                  src="https://placehold.co/400x400?text=Kafa+Donat"
                  alt="Kafa Donat"
                  className="rounded-full w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 object-cover border-4 border-white shadow-lg"
                />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-2 -right-2 bg-secondary-500 text-white px-5 py-2 rounded-full shadow-lg font-semibold">
                ✓ 100% Fresh
              </div>

              {/* Rating Badge */}
              <div className="absolute -top-2 -left-2 bg-white px-4 py-2 rounded-xl shadow-lg">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">⭐</span>
                  <span className="font-bold text-gray-800">4.9</span>
                </div>
              </div>

              {/* Halal Badge */}
              <div className="absolute top-1/2 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm">
                Halal ✓
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;