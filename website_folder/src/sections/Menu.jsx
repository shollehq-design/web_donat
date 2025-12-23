import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Notification from '../components/Notification';

const Menu = () => {
  const { addToCart } = useCart();
  const [notification, setNotification] = useState({ message: '', isVisible: false });
  
 const menuItems = [
    {
      id: 1,
      name: "Donat Coklat",
      description: "Donat dengan isi coklat lezat dan taburan kacang.",
      price: "Rp2.000",
      priceNumber:2000,
      image: "https://placehold.co/300x200?text=Donat+Coklat"
    },
    {
      id: 2,
      name: "Donat Stroberi",
      description: "Donat dengan isi stroberi dan topping krim.",
      price: "Rp2.000",
      priceNumber:2000,
      image: "https://placehold.co/300x200?text=Donat+Stroberi"
    },
    {
      id: 3,
      name: "Donat Karamel",
      description: "Donat dengan isi karamel dan taburan kacang.",
      price: "Rp2.000",
      priceNumber:2000,
      image: "https://placehold.co/300x200?text=Donat+Karamel"
    },
    {
      id: 4,
      name: "Donat Vanilla",
      description: "Donat klasik dengan isi vanilla dan topping krim.",
      price: "Rp2.000",
      priceNumber:2000,
      image: "https://placehold.co/300x200?text=Donat+Vanilla"
    }
  ];

  const handleAddToCart = (item) => {
    // Membuat salinan item tanpa menyertakan informasi DOM yang tidak perlu
    const cartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      priceNumber: item.priceNumber,
      image: item.image
    };
    
    addToCart(cartItem);
    
    // Menampilkan notifikasi
    setNotification({
      message: `${item.name} berhasil ditambahkan keranjang!`,
      isVisible: true
    });
  };

  const hideNotification = () => {
    setNotification({ message: '', isVisible: false });
  };

  return (
    <>
      <section className="py-16 bg-gradient-to-b from-white to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Menu Donat Unggulan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Temukan berbagai varian donat lezat yang kami tawarkan. Semua donat dibuat dengan bahan berkualitas tinggi.
            </p>
            <div className="w-20 h-1 bg-primary-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {menuItems.map((item) => (
              <div key={item.id} className="card card-hover bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Best Seller
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary-600">{item.price}</span>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="btn-modern btn-primary-modern px-4 py-2 text-sm rounded-lg"
                    >
                      Tambah ke Keranjang
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