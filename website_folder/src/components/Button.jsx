import React from 'react';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseClasses = 'btn-modern';

  const variantClasses = {
    primary: 'btn-primary-modern',
    secondary: 'btn-secondary-modern',
    outline: 'btn-secondary-modern',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;