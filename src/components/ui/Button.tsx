import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'inline';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  className = '',
  type = 'button'
}) => {
  const baseStyles = 'inline-flex items-center justify-center transition-all duration-300';
  
  const variants = {
    primary: 'bg-gold text-btn-dark font-sans font-semibold text-sm px-7 py-3 rounded-md hover:bg-yellow-400',
    outline: 'border border-gold text-gold font-sans font-semibold text-sm px-7 py-3 rounded-md hover:bg-gold hover:text-btn-dark',
    inline: 'text-gold-muted font-sans text-xs uppercase tracking-cta hover:text-gold'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
