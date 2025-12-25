import React, { useEffect, useState } from 'react';

const Notification = ({ message, isVisible, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setTimeout(onClose, 300);
      }, 2700);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`fixed top-24 right-4 z-50 transition-all duration-300 ${isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden max-w-sm">
        {/* Progress bar */}
        <div className="h-1 bg-gray-100">
          <div
            className="h-full bg-gradient-to-r from-green-400 to-green-500 transition-all duration-[2700ms] ease-linear"
            style={{ width: isAnimating ? '0%' : '100%' }}
          ></div>
        </div>

        <div className="p-4 flex items-start gap-4">
          {/* Success Icon */}
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/25">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 pt-1">
            <h4 className="font-bold text-gray-800 text-sm mb-1">Berhasil Ditambahkan!</h4>
            <p className="text-gray-600 text-sm truncate">{message}</p>
          </div>

          {/* Close Button */}
          <button
            onClick={() => {
              setIsAnimating(false);
              setTimeout(onClose, 300);
            }}
            className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-colors flex-shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Donut emoji decoration */}
        <div className="absolute -bottom-2 -right-2 text-3xl opacity-20">🍩</div>
      </div>
    </div>
  );
};

export default Notification;