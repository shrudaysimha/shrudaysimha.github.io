import React from 'react';
import type { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({ 
  variant="primary", 
  children, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "rounded-full px-8 py-3 font-medium transition-all duration-300 ease-out flex items-center justify-center gap-2 transform active:scale-95";
  
 const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20 border border-transparent",
  secondary: "bg-transparent text-dark-grey border border-gray-300 hover:border-gray-800 hover:bg-gray-50",
};


  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  );
};

export default Button;