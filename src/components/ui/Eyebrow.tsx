import React from 'react';

export const Eyebrow: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={`text-gold-muted font-sans text-xs uppercase tracking-eyebrow ${className}`}>
    {children}
  </p>
);
