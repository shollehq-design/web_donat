import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Cart = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  const handleWhatsAppOrder = () => {
    setIsSubmitting(true);
    
    // Format pesanan untuk WhatsApp
    let orderMessage = "*Pesanan Donat Baru*\n\n";
    orderMessage += "Detail Pesanan:\n";
    
    cart.forEach(item => {
      orderMessage += `- ${item.name}: ${item.quantity} pcs (${formatRupiah(item.priceNumber * item.quantity)})\n`;
    });
    
    orderMessage += `\nTotal: ${formatRupiah(getTotalPrice())}\n\n`;
    orderMessage += "Mohon konfirmasi pesanan ini.";
    
    // Encode pesan untuk URL WhatsApp
    const encodedMessage = encodeURIComponent(orderMessage);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
    
    setIsSubmitting(false);
    onClose(); // Tutup modal setelah mengirim pesanan
 };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Backdrop */}
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div 
            className="absolute inset-0 bg-gray-500 opacity-75"
            onClick={onClose}
          ></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Keranjang Belanja
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-600"
                    onClick={onClose}
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="mt-4">
                  {cart.length === 0 ? (
                    <p className="text-gray-500">Keranjang Anda kosong</p>
                  ) : (
                    <div className="max-h-96 overflow-y-auto">
                      <ul className="divide-y divide-gray-200">
                        {cart.map((item) => (
                          <li key={item.id} className="py-4">
                            <div className="flex items-center justify-between">
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                                <p className="text-sm text-gray-500">{formatRupiah(item.priceNumber)}</p>
                              </div>
                              <div className="flex items-center space-x-3">
                                <div className="flex items-center border rounded">
                                  <button
                                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                    className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                  >
                                    -
                                  </button>
                                  <span className="px-3 py-1">{item.quantity}</span>
                                  <button
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                  >
                                    +
                                  </button>
                                </div>
                                <p className="text-sm font-medium text-gray-900">
                                  {formatRupiah(item.priceNumber * item.quantity)}
                                </p>
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="text-red-500 hover:text-red-700 ml-2"
                                >
                                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-6 pt-4 border-t border-gray-200">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Total:</p>
                          <p>{formatRupiah(getTotalPrice())}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              {cart.length > 0 && (
                <React.Fragment>
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleWhatsAppOrder}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    {isSubmitting ? 'Mengirim...' : 'Pesan via WhatsApp'}
                  </button>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Kosongkan Keranjang
                  </button>
                </React.Fragment>
              )}
              <button
                type="button"
                onClick={onClose}
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                {cart.length > 0 ? 'Lanjut Belanja' : 'Tutup'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;