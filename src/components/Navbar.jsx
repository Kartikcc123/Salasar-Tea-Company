import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight, Globe, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Prevents background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  // Scroll detection for transparent-to-solid transition
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close menu on page navigation
  useEffect(() => setIsMenuOpen(false), [location]);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Heritage', path: '/about' },
    { name: 'Wholesale Catalog', path: '/products' },
    { name: 'Connect', path: '/contact' }
  ];

  return (
    <>
      {/* MAIN HEADER BAR */}
      <nav 
        className={`fixed w-full z-[999] transition-all duration-700 ${
          isScrolled || isMenuOpen
            ? 'bg-royal-950 py-4 shadow-2xl border-b border-white/10' 
            : 'bg-transparent py-8 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* BRAND LOGO */}
          <Link to="/" className="flex items-center gap-4 group relative z-[1001]">
            <div className="w-12 h-12 rounded-full border border-gold-500/50 flex items-center justify-center transition-all duration-500 group-hover:border-gold-500 bg-royal-900 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              <span className="text-gold-500 font-serif font-bold text-2xl">S</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-serif font-bold text-white tracking-[0.15em] leading-none">
                SALASAR<span className="text-gold-500">.</span>
              </h1>
              <span className="text-[9px] uppercase tracking-[0.3em] text-gold-500/60 mt-1 font-bold">Premium Tea Co.</span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 relative group py-2 ${
                  isActive(item.path) ? 'text-gold-500' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-[1px] bg-gold-500 transition-all duration-500 ${
                  isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-gold-500 z-[1001] relative p-2 hover:scale-110 transition-transform"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={36} strokeWidth={1.5} /> : <Menu size={36} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* FULL-SCREEN PROFESSIONAL MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-royal-950 z-[998] md:hidden flex flex-col pt-36 px-8 overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="flex flex-col h-full relative z-10">
              {/* MOBILE MENU LINKS */}
              <div className="space-y-2 mb-12">
                <p className="text-gold-500/40 uppercase tracking-[0.4em] text-[10px] font-bold mb-6">Menu Selection</p>
                <div className="flex flex-col">
                  {navLinks.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (index * 0.1) }}
                    >
                      <Link 
                        to={item.path} 
                        className={`text-5xl font-serif tracking-tight flex items-center justify-between py-4 border-b border-white/5 group ${
                          isActive(item.path) ? 'text-gold-500' : 'text-white'
                        }`}
                      >
                        {item.name}
                        <ChevronRight className={`text-gold-500/50 group-hover:translate-x-2 transition-transform ${isActive(item.path) ? 'opacity-100' : 'opacity-0'}`} size={28} />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* QUICK CONNECT SECTION */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-2 gap-4">
                  <a href="tel:+919875052220" className="flex flex-col gap-3 p-5 bg-white/5 border border-white/10 rounded-sm">
                    <Phone className="text-gold-500" size={20} />
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Wholesale Call</span>
                    <span className="text-white font-serif text-sm italic">Connect with Mr. Rajkumar</span>
                  </a>
                  <div className="flex flex-col gap-3 p-5 bg-white/5 border border-white/10 rounded-sm">
                    <Award className="text-gold-500" size={20} />
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Certified</span>
                    <span className="text-white font-serif text-sm italic">FSSAI & GST Compliant</span>
                  </div>
                </div>

                <Link 
                  to="/contact" 
                  className="block w-full bg-gold-500 text-royal-950 text-center py-6 font-bold uppercase tracking-[0.3em] text-xs shadow-[0_10px_40px_rgba(212,175,55,0.2)] active:scale-95 transition-transform"
                >
                  Start Wholesale Inquiry
                </Link>
              </motion.div>

              {/* FOOTER OF MENU */}
              <div className="mt-auto pb-10 flex justify-between items-center text-[10px] text-gray-600 uppercase tracking-[0.4em] font-bold">
                <span className="flex items-center gap-2"><Globe size={12} /> Rajasthan, India</span>
                <span>Est. 2000</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;