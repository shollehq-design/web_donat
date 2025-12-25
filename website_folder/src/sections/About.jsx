import React from 'react';

const About = () => {
  const features = [
    { icon: '🍩', title: 'Bahan Premium', desc: 'Bahan pilihan berkualitas tinggi' },
    { icon: '👨‍🍳', title: 'Resep Rahasia', desc: 'Resep turun-temurun teruji' },
    { icon: '🧡', title: 'Dibuat dengan Cinta', desc: 'Penuh ketelitian dan cinta' },
    { icon: '✅', title: 'Terjamin Halal', desc: 'Bersertifikat dan higienis' }
  ];

  return (
    <section id="about" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🏠 Tentang Kami
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Cerita <span className="text-primary-600">Kafa Donat</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Berdiri sejak 2010, kami berkomitmen menghadirkan donat berkualitas dengan rasa yang tak terlupakan.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-2/5">
            <div className="relative">
              <img
                src="https://placehold.co/500x400?text=Kafa+Donat"
                alt="Tentang Kafa Donat"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary-600 text-white px-6 py-3 rounded-xl shadow-lg font-bold">
                15+ Tahun Pengalaman
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-3/5">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Menghadirkan Kebahagiaan dengan Setiap Gigitan
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Kafa Donat hadir dengan satu misi sederhana: membuat hari Anda lebih manis. Berawal dari dapur rumah di Kediri, kini kami telah menjadi pilihan favorit pecinta donat.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Setiap donat dibuat dengan bahan pilihan, tanpa pengawet, dan dengan resep rahasia turun-temurun. Kualitas adalah segalanya bagi kami.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <h4 className="font-bold text-gray-800">{feature.title}</h4>
                    <p className="text-sm text-gray-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;