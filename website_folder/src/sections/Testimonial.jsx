import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Andi Prasetyo",
      role: "Pengusaha",
      content: "Kafa Donat adalah tempat terbaik untuk menemukan donat berkualitas tinggi. Rasa dan kualitasnya luar biasa!",
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
      content: "Harga terjangkau dan rasanya sangat enak. Sangat recommended untuk pecinta donat!",
      rating: 5
    }
  ];

  return (
    <section id="testimonial" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            💬 Testimoni
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Apa Kata <span className="text-primary-600">Pelanggan</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Dengarkan pengalaman dari pelanggan setia Kafa Donat
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-12 mt-12 pt-8 border-t border-gray-200 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">500+</div>
            <div className="text-gray-500">Ulasan</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">4.9</div>
            <div className="text-gray-500">Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">98%</div>
            <div className="text-gray-500">Puas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;