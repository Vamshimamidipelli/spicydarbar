import React from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-50 bg-bg-base flex flex-col p-8"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-cream hover:text-gold transition-colors"
      >
        <X size={32} />
      </button>

      <div className="flex flex-col gap-8 mt-16">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={onClose}
            className={({ isActive }) =>
              `font-serif text-4xl ${
                isActive ? 'text-gold' : 'text-cream'
              } hover:text-gold transition-colors`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      <div className="mt-auto">
        <NavLink to="/contact" onClick={onClose}>
          <button className="w-full bg-gold text-btn-dark font-sans font-semibold text-lg py-4 rounded-md">
            Order Online
          </button>
        </NavLink>
      </div>
    </motion.div>
  );
};
