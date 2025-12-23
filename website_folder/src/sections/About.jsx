import React from 'react';

const About = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-secondary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">Tentang Donat Delight</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-6">
            Sejak tahun 2010, kami berkomitmen untuk menyajikan donat berkualitas tinggi dengan rasa yang lezat dan kemasan yang menarik.
          </p>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-2/5">
            <div className="relative">
              <img
                src="https://placehold.co/600x400?text=Tentang+Donat+Delight"
                alt="Tentang Donat Delight"
                className="rounded-xl shadow-2xl w-full border-8 border-white"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white px-6 py-3 rounded-lg shadow-lg">
                <span className="font-bold">15 Tahun Pengalaman</span>
              </div>
            </div>
          </div>
          
         <div className="lg:w-3/5">
           <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-800">Menghadirkan Kebahagiaan dengan Setiap Gigitan</h3>
           <p className="text-gray-60 mb-6 text-base lg:text-lg leading-relaxed">
             Donat Delight adalah brand donat yang telah hadir sejak tahun 2010. Kami berkomitmen untuk menyajikan donat berkualitas tinggi dengan rasa yang lezat dan kemasan yang menarik.
           </p>
           <p className="text-gray-600 mb-8 text-base lg:text-lg leading-relaxed">
             Setiap donat kami dibuat dengan bahan-bahan alami, tanpa penggunaan bahan kimia sintetis. Kami menggunakan resep turun-temurun yang telah teruji dan disukai oleh banyak orang.
           </p>
           
           <div className="card p-6">
             <h4 className="text-xl lg:text-2xl font-bold mb-4 text-gray-800">Visi & Misi</h4>
             <div className="space-y-4">
               <div className="flex items-start">
                 <div className="bg-primary-100 p-2 rounded-full mr-4 mt-1">
                   <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                   </svg>
                 </div>
                 <div>
                   <h5 className="font-bold text-gray-800 text-lg">Visi</h5>
                   <p className="text-gray-600 text-base">Menjadi brand donat terdepan di Indonesia dengan memberikan produk berkualitas tinggi dan layanan terbaik.</p>
                 </div>
               </div>
               <div className="flex items-start">
                 <div className="bg-primary-100 p-2 rounded-full mr-4 mt-1">
                   <svg className="w-5 h-5 text-primary-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                   </svg>
                 </div>
                 <div>
                   <h5 className="font-bold text-gray-800 text-lg">Misi</h5>
                   <p className="text-gray-600 text-base">Menghadirkan kebahagiaan melalui rasa donat yang lezat, menjaga kualitas produk, serta membangun komunitas pelanggan yang loyal.</p>
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

export default About;