import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, MapPin, Mail, Instagram, Facebook, ArrowUp, 
  Home, ShoppingBag, Coffee, ChevronRight 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-royal-950 border-t border-white/5 pt-24 pb-12 text-gray-400 font-sans relative z-10 overflow-hidden mt-10">
      
      {/* --- ULTRA-PREMIUM BACKGROUND EFFECTS --- */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Top Border Glow Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent shadow-[0_0_25px_rgba(212,175,55,0.6)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* --- PERFECTLY ALIGNED "SCROLL TO TOP" BUTTON --- */}
        {/* This floats exactly on the top border line on the right side */}
        {/* <div className="absolute -top-30 right-4 lg:right-10 z-50 transform -translate-y-1/2">
          <button 
            onClick={scrollToTop} 
            className="w-14 h-14 rounded-full bg-royal-950 border border-gold-500 text-gold-500 flex items-center justify-center hover:bg-gold-500 hover:text-royal-950 hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-500 group"
            aria-label="Back to Top"
          >
            <ArrowUp size={22} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div> */}

        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          
          {/* 1. BRAND SECTION */}
          <div className="space-y-8">
            <Link to="/" onClick={scrollToTop} className="inline-block group">
              <h2 className="text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-200 to-gold-500 tracking-widest drop-shadow-sm transition-opacity duration-300">
                SALASAR TEA CO<span className="text-gold-500">.</span>
              </h2>
              <div className="h-0.5 w-0 bg-gradient-to-r from-gold-500 to-transparent group-hover:w-24 transition-all duration-700 mt-2"></div>
            </Link>
            
            <p className="text-base leading-relaxed opacity-80 max-w-xs font-light tracking-wide text-gray-300">
              The gold standard of wholesale tea since 2000. Sourcing the finest leaves from Assam's gardens to your retail counter.
            </p>
            
            {/* Premium Social Orbs */}
            <div className="flex gap-4 pt-4">
              {[Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 flex items-center justify-center rounded-full border border-white/5 bg-white/5 text-gray-400 hover:border-gold-500/50 hover:text-white hover:bg-gold-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-500 hover:-translate-y-1">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. NAVIGATE SECTION */}
          <div>
            <h3 className="text-gold-500 uppercase tracking-[0.2em] text-sm font-bold mb-10 opacity-90">Explore</h3>
            <ul className="space-y-6 text-base font-light">
              {[
                { name: 'Home', path: '/', icon: Home },
                { name: 'Wholesale Catalog', path: '/products', icon: ShoppingBag },
                { name: 'Our Heritage', path: '/about', icon: Coffee },
                { name: 'Contact Us', path: '/contact', icon: Phone }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    onClick={scrollToTop} 
                    className="flex items-center gap-5 group w-fit"
                  >
                    <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
                      <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-gold-500/80 group-hover:scale-110 transition-all duration-500"></div>
                      <div className="absolute inset-2 rounded-full bg-white/5 group-hover:bg-gold-500/20 transition-all duration-500"></div>
                      <link.icon className="relative z-10 opacity-60 group-hover:opacity-100 group-hover:text-gold-400 transition-all duration-300" size={16} />
                    </div>

                    <div className="flex items-center gap-3 group-hover:text-white transition-colors duration-500">
                      <span className="tracking-wide">{link.name}</span>
                      <ChevronRight size={14} className="text-gold-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CONTACT INFO */}
          <div>
            <h3 className="text-gold-500 uppercase tracking-[0.2em] text-sm font-bold mb-10 opacity-90">Get in Touch</h3>
            <div className="space-y-8 text-base font-light">
              
              <div className="flex items-start gap-5 group cursor-default">
                <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
                  <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-gold-500/50 transition-all duration-500"></div>
                  <MapPin className="text-gold-500 opacity-80 group-hover:text-gold-400 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all duration-300" size={18} />
                </div>
                <div className="pt-1 group-hover:text-gray-100 transition-colors duration-300">
                  <p className="uppercase tracking-wider text-[10px] text-gold-500/70 mb-1 font-bold">Headquarters</p>
                  <p>Salasar Tea Company,</p>
                  <p>Rajasthan, India</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5 group">
                <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
                   <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-gold-500/50 transition-all duration-500"></div>
                   <Phone className="text-gold-500 opacity-80 group-hover:text-gold-400 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all duration-300" size={18} />
                </div>
                <div>
                   <p className="uppercase tracking-wider text-[10px] text-gold-500/70 mb-1 font-bold">Phone</p>
                   <a href="tel:+919875052220" className="group-hover:text-white transition-colors duration-300 tracking-wider text-lg">
                    +91 98750 52220
                   </a>
                </div>
              </div>
              
              <div className="flex items-center gap-5 group">
                <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
                   <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-gold-500/50 transition-all duration-500"></div>
                   <Mail className="text-gold-500 opacity-80 group-hover:text-gold-400 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all duration-300" size={18} />
                </div>
                 <div>
                   <p className="uppercase tracking-wider text-[10px] text-gold-500/70 mb-1 font-bold">Email</p>
                   <a href="mailto:info@salasartea.com" className="group-hover:text-white transition-colors duration-300 tracking-wide text-base">
                    info@salasartea.com
                   </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* --- BOTTOM BAR (Clean & Simple) --- */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 text-center md:text-left">
            &copy; {currentYear} Salasar Tea Company.
          </p>
          
          <div className="flex items-center gap-8">
            <span className="text-xs uppercase tracking-[0.1em] text-gray-500 hover:text-gold-500 transition-colors cursor-default">FSSAI Certified</span>
            <span className="text-xs uppercase tracking-[0.1em] text-gray-500 hover:text-gold-500 transition-colors cursor-default">GST Registered</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;