import React from 'react';

const Promo = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Promo Spesial</h2>
          <p className="max-w-2xl mx-auto text-lg">
            Dapatkan penawaran istimewa dari Donat Delight! Beli 3 dapat 1 gratis untuk semua varian donat.
          </p>
          <div className="w-20 h-1 bg-white mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Paket Hemat</h3>
              <p className="text-gray-600 mb-6">
                Dapatkan donat favoritmu dengan harga spesial! Paket hemat ini cocok untuk keluarga atau kantor.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-primary-50 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Donat Coklat x5</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-primary-50 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Donat Stroberi x3</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Donat Karamel x2</span>
                </li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary-600">Rp 20.000</span>
                <button className="btn-modern btn-primary-modern px-6 py-3 font-bold">
                  Pesan Sekarang
                </button>
              </div>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center p-8 lg:p-12">
              <img
                src="https://placehold.co/300x300?text=Paket+Hemat"
                alt="Paket Hemat"
                className="rounded-xl w-full max-w-xs lg:max-w-sm border-4 border-white shadow-xl"
              />
            </div>
          </div>
        </div>
      
        <div className="mt-12 text-center">
          <h3 className="text-xl lg:text-2xl font-bold mb-4">Diskon Spesial Hari Ini</h3>
          <p className="text-lg mb-6">Beli 2 dapat 1 gratis untuk semua varian donat!</p>
          <div className="inline-block bg-white text-primary-600 px-6 py-3 rounded-xl font-bold text-lg shadow-lg">
            Berlaku Hingga 31 Desember 2025
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;