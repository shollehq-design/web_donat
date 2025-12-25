import React from 'react';

const Promo = () => {
  const promos = [
    {
      id: 1,
      title: "Paket Hemat Keluarga",
      description: "10 donat pilihan untuk momen kebersamaan keluarga",
      items: ["3x Donat Coklat", "3x Donat Stroberi", "2x Donat Karamel", "2x Donat Vanilla"],
      originalPrice: 28000,
      discountPrice: 20000,
      discount: "30%",
      badge: "Best Value",
      gradient: "from-primary-500 to-primary-600"
    },
    {
      id: 2,
      title: "Paket Premium",
      description: "6 donat premium untuk pecinta rasa eksklusif",
      items: ["2x Donat Matcha", "2x Donat Red Velvet", "2x Donat Tiramisu"],
      originalPrice: 20000,
      discountPrice: 15000,
      discount: "25%",
      badge: "Premium",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  return (
    <section id="promo" className="py-16 lg:py-20 bg-gradient-to-br from-pink-100 via-rose-50 to-pink-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl">🍩</div>
        <div className="absolute top-1/3 right-20 text-6xl">🍩</div>
        <div className="absolute bottom-20 left-1/4 text-7xl">🍩</div>
        <div className="absolute bottom-10 right-10 text-9xl">🍩</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🔥 Promo Spesial
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
            Penawaran <span className="text-primary-600">Istimewa</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hemat lebih banyak dengan paket-paket spesial kami!
          </p>
        </div>

        {/* Promo Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {promos.map((promo) => (
            <div
              key={promo.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${promo.gradient} p-6 text-white relative`}>
                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-800 text-xs font-bold px-3 py-1 rounded-full">
                  {promo.badge}
                </div>
                <div className="text-6xl mb-2">🍩</div>
                <h3 className="text-2xl font-bold mb-1">{promo.title}</h3>
                <p className="text-white/80 text-sm">{promo.description}</p>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Items List */}
                <div className="space-y-2 mb-6">
                  {promo.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Spacer to push price and button to bottom */}
                <div className="flex-grow"></div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-gray-400 line-through text-lg">{formatRupiah(promo.originalPrice)}</span>
                  <span className="bg-red-100 text-red-600 text-sm font-bold px-2 py-1 rounded">-{promo.discount}</span>
                </div>
                <div className="text-3xl font-bold text-primary-600 mb-6">
                  {formatRupiah(promo.discountPrice)}
                </div>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/6285972503239?text=Halo,%20saya%20mau%20pesan%20${encodeURIComponent(promo.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-xl font-bold text-center transition-all shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Pesan Sekarang
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Countdown / Limited Time */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-white shadow-lg text-gray-700 px-8 py-4 rounded-2xl">
            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="font-semibold text-lg">Promo berlaku hingga <span className="font-bold text-primary-600">31 Desember 2025</span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;