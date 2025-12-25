import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Notification from '../components/Notification';

const Menu = ({ showAll = false }) => {
  const { addToCart } = useCart();
  const [notification, setNotification] = useState({ message: '', isVisible: false });

  const menuItems = [
    {
      id: 1,
      name: "Donat Coklat",
      description: "Donat dengan lelehan coklat premium dan taburan kacang almond.",
      price: "Rp2.000",
      priceNumber: 2000,
      image: "https://placehold.co/300x200/8B4513/FFFFFF?text=Coklat",
      badge: "Best Seller",
      badgeColor: "bg-orange-500"
    },
    {
      id: 2,
      name: "Donat Stroberi",
      description: "Donat dengan selai stroberi segar dan topping whipped cream.",
      price: "Rp2.000",
      priceNumber: 2000,
      image: "https://placehold.co/300x200/FF69B4/FFFFFF?text=Stroberi",
      badge: "Favorit",
      badgeColor: "bg-pink-500"
    },
    {
      id: 3,
      name: "Donat Karamel",
      description: "Donat dengan saus karamel homemade dan taburan garam laut.",
      price: "Rp2.000",
      priceNumber: 2000,
      image: "https://placehold.co/300x200/DAA520/FFFFFF?text=Karamel",
      badge: "New",
      badgeColor: "bg-green-500"
    },
    {
      id: 4,
      name: "Donat Vanilla",
      description: "Donat klasik dengan krim vanilla dan glazing manis.",
      price: "Rp2.000",
      priceNumber: 2000,
      image: "https://placehold.co/300x200/F5DEB3/333333?text=Vanilla",
      badge: "Classic",
      badgeColor: "bg-blue-500"
    },
    {
      id: 5,
      name: "Donat Keju",
      description: "Donat dengan taburan keju cheddar melimpah dan saus keju.",
      price: "Rp2.500",
      priceNumber: 2500,
      image: "https://placehold.co/300x200/FFD700/333333?text=Keju",
      badge: "Popular",
      badgeColor: "bg-yellow-500"
    },
    {
      id: 6,
      name: "Donat Matcha",
      description: "Donat dengan glazing matcha premium dari Jepang.",
      price: "Rp3.000",
      priceNumber: 3000,
      image: "https://placehold.co/300x200/228B22/FFFFFF?text=Matcha",
      badge: "Premium",
      badgeColor: "bg-emerald-500"
    },
    {
      id: 7,
      name: "Donat Red Velvet",
      description: "Donat merah beludru dengan cream cheese frosting.",
      price: "Rp3.000",
      priceNumber: 3000,
      image: "https://placehold.co/300x200/DC143C/FFFFFF?text=Red+Velvet",
      badge: "Trending",
      badgeColor: "bg-red-500"
    },
    {
      id: 8,
      name: "Donat Tiramisu",
      description: "Donat dengan rasa kopi tiramisu dan taburan coklat bubuk.",
      price: "Rp3.000",
      priceNumber: 3000,
      image: "https://placehold.co/300x200/4A2C2A/FFFFFF?text=Tiramisu",
      badge: "Special",
      badgeColor: "bg-amber-600"
    },
    {
      id: 9,
      name: "Donat Oreo",
      description: "Donat dengan topping Oreo hancur dan krim vanilla.",
      price: "Rp2.500",
      priceNumber: 2500,
      image: "https://placehold.co/300x200/1C1C1C/FFFFFF?text=Oreo",
      badge: "Kids Fav",
      badgeColor: "bg-gray-700"
    },
    {
      id: 10,
      name: "Donat Blueberry",
      description: "Donat dengan selai blueberry asli dan glazing ungu.",
      price: "Rp2.500",
      priceNumber: 2500,
      image: "https://placehold.co/300x200/4169E1/FFFFFF?text=Blueberry",
      badge: "Fresh",
      badgeColor: "bg-indigo-500"
    },
    {
      id: 11,
      name: "Donat Pandan",
      description: "Donat dengan aroma pandan wangi dan kelapa parut.",
      price: "Rp2.000",
      priceNumber: 2000,
      image: "https://placehold.co/300x200/32CD32/FFFFFF?text=Pandan",
      badge: "Local",
      badgeColor: "bg-lime-500"
    },
    {
      id: 12,
      name: "Donat Durian",
      description: "Donat dengan isian durian montong asli yang creamy.",
      price: "Rp4.000",
      priceNumber: 4000,
      image: "https://placehold.co/300x200/9ACD32/333333?text=Durian",
      badge: "Exotic",
      badgeColor: "bg-yellow-600"
    }
  ];

  const displayedItems = showAll ? menuItems : menuItems.slice(0, 4);

  const handleAddToCart = (item) => {
    const cartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      priceNumber: item.priceNumber,
      image: item.image
    };

    addToCart(cartItem);
    setNotification({
      message: `${item.name} ditambahkan ke keranjang!`,
      isVisible: true
    });
  };

  const hideNotification = () => {
    setNotification({ message: '', isVisible: false });
  };

  return (
    <>
      <section id="menu" className="py-16 lg:py-20 bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🍩 Menu Lengkap
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Pilihan Donat <span className="text-primary-600">Terlezat</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              12 varian donat premium yang dibuat fresh setiap hari dengan bahan pilihan berkualitas tinggi.
            </p>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute top-3 right-3 ${item.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
                    {item.badge}
                  </div>

                  {/* Quick Add Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="bg-white text-primary-600 px-6 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-primary-600 hover:text-white"
                    >
                      + Keranjang
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1 text-gray-800 group-hover:text-primary-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{item.description}</p>

                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary-600">{item.price}</span>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="w-10 h-10 bg-primary-100 hover:bg-primary-600 text-primary-600 hover:text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Notification
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={hideNotification}
      />
    </>
  );
};

export default Menu;