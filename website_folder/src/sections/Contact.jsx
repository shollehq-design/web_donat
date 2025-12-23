import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-secondary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">Hubungi Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ada pertanyaan atau ingin memesan donat? Hubungi kami melalui formulir di bawah atau melalui media sosial.
          </p>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6 lg:space-y-8 bg-white p-8 rounded-2xl shadow-lg">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 text-lg font-medium">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base transition-all"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 text-lg font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base transition-all"
                  placeholder="Masukkan email Anda"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 text-lg font-medium">Pesan</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base transition-all"
                  placeholder="Tulis pesan Anda"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-primary-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-700 transition-colors w-full text-lg shadow-md hover:shadow-lg"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg h-full">
              <h3 className="text-xl lg:text-2xl font-bold mb-6 text-gray-800">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-10 p-3 rounded-xl mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Alamat</h4>
                    <p className="text-gray-600 text-base">dsn.sentonorejo ds.tambibendo kec.mojo kab.kediri<br />kediri, Jawa timur</p>
                  </div>
                </div>
               
               <div className="flex items-start">
                  <div className="bg-primary-10 p-3 rounded-xl mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Telepon</h4>
                    <p className="text-gray-600 text-base">+6285972503239</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-10 p-3 rounded-xl mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Email</h4>
                    <p className="text-gray-600 text-base">kafadonat@gmail.com</p>
                  </div>
                </div>
              
                <div className="mt-8">
                  <h4 className="font-bold text-gray-800 mb-4 text-lg">Ikuti Kami</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-primary-10 text-primary-60 p-3 rounded-xl hover:bg-primary-600 hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 2 12z"/>
                      </svg>
                    </a>
                    <a href="#" className="bg-primary-10 text-primary-600 p-3 rounded-xl hover:bg-primary-600 hover:text-white transition-colors">
                      <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.316 3.051a1.5 0 00-1.632 0 1.5 0 00-.574 1.316 1.5 0 00.574 1.316 1.5 0 001.632 0 1.5 0 00.574-1.316 1.5 0 00-.574-1.316zM11.25 10.5a1.5 0 00-1.5 1.5v.75a1.5 0 003 0v-.75a1.5 0 00-1.5zm4.5 0a1.5 0 00-1.5 1.5v.75a1.5 0 003 0v-.75a1.5 0 00-1.5zm-7.5 3a1.5 0 00-1.5 1.5v.75a1.5 0 003 0v-.75a1.5 0 00-1.5zm12 0a1.5 0 00-1.5 1.5v.75a1.5 0 003 0v-.75a1.5 0 00-1.5zm-3 0a1.5 0 00-1.5 1.5v.75a1.5 0 003 0v-.75a1.5 0 00-1.5z"/>
                      </svg>
                    </a>
                    <a href="#" className="bg-primary-10 text-primary-600 p-3 rounded-xl hover:bg-primary-600 hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;