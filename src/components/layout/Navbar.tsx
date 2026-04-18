import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Crown } from 'lucide-react';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOrderClick = () => {
    if (location.pathname === '/') {
      document.getElementById('delivery')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('delivery')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 h-16 transition-all duration-300 border-b border-gold/10 ${
          isScrolled ? 'bg-bg-base/95 backdrop-blur-md shadow-lg' : 'bg-bg-base'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <Crown className="text-gold w-8 h-8 group-hover:scale-110 transition-transform" />
            <div className="flex flex-col">
              <span className="font-serif text-xl text-cream leading-none">Spice Darbar</span>
              <span className="bg-bg-amber text-gold text-[8px] uppercase tracking-widest px-1.5 py-0.5 rounded-sm mt-1">
                desi bites & dishes
              </span>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { name: 'HOME', path: '/' },
              { name: 'MENU', path: '/menu' },
              { name: 'GALLERY', path: '/gallery' },
              { name: 'ABOUT', path: '/about' },
              { name: 'CONTACT', path: '/contact' },
            ].map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-sans text-xs font-semibold tracking-widest transition-all duration-300 pb-1 border-b-2 ${
                    isActive
                      ? 'text-cream border-gold'
                      : 'text-muted border-transparent hover:text-gold'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA / Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button variant="primary" className="hidden lg:flex" onClick={handleOrderClick}>
              Order Online
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-cream hover:text-gold transition-colors"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};
