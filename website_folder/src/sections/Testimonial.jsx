import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Andi Prasetyo",
      role: "Pengusaha",
      content: "Donat Delight adalah tempat terbaik untuk menemukan donat berkualitas tinggi. Rasa dan kualitasnya luar biasa!",
      rating: 5
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      role: "Ibu Rumah Tangga",
      content: "Anak-anak saya sangat suka donat ini. Saya sering memesan untuk acara keluarga.",
      rating: 5
    },
    {
      id: 3,
      name: "Budi Santoso",
      role: "Mahasiswa",
      content: "Harga terjangkau dan rasanya sangat enak. Saya jadi lebih semangat belajar setiap hari karena donat ini!",
      rating: 4
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-secondary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Apa Kata Mereka</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg">
            Ulasan dari pelanggan kami yang telah mencoba produk Donat Delight.
          </p>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-2xl shadow-lg border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-base italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-full w-14 h-14 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800 text-base">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;