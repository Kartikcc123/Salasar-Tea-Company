import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Package, TrendingUp, Truck, CheckCircle2, ArrowRight, ShieldCheck, Star } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const wholesaleProducts = [
  {
    name: "Krishna Chai (Red)",
    subtitle: "Fine Dust • Extra Strong",
    image: "https://images.unsplash.com/photo-1576092762791-dd9e2220afa1?q=80&w=1000&auto=format&fit=crop",
    description: "Our absolute bestseller. Engineered for tea stalls and households that demand instant color (Rang) and a strong, robust kick (Kadakpan).",
    sizes: ["₹10 / ₹20 Retail Packs", "250g", "500g", "1kg"],
    badge: "HIGHEST DEMAND"
  },
  {
    name: "Swati Gold",
    subtitle: "Premium Leaf Blend",
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=1000&auto=format&fit=crop",
    description: "A sophisticated blend featuring long Assam leaves. Delivers a highly aromatic, smooth cup with a rich golden liquor. Perfect for premium retail shelves.",
    sizes: ["250g", "500g", "1kg Premium Box"],
    badge: "PREMIUM MARGIN"
  }
];

const Wholesale = () => {
  return (
    <div className="bg-royal-950 min-h-screen overflow-hidden font-sans">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-40 pb-20 flex items-center justify-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent shadow-[0_0_30px_rgba(212,175,55,0.4)]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="text-gold-500 uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">The Catalog</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
              Premium Wholesale <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 italic">Collections.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Engineered for high retail margins and absolute consistency. Discover the blends that power India's daily cup.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- NEW OPTION 5: SOCIAL PROOF / TRUSTED BY SECTION --- */}
      <section className="border-y border-white/5 bg-royal-900/30 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
            <div className="px-4">
              <h4 className="text-3xl font-serif text-gold-500 mb-1">500+</h4>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Active Retailers</p>
            </div>
            <div className="px-4">
              <h4 className="text-3xl font-serif text-gold-500 mb-1">20,000+</h4>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">KGs Sold Monthly</p>
            </div>
            <div className="px-4">
              <h4 className="text-3xl font-serif text-gold-500 mb-1">100%</h4>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Batch Consistency</p>
            </div>
            <div className="px-4 flex flex-col items-center justify-center">
              <div className="flex gap-1 text-gold-500 mb-2">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Trusted Since 2000</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. PRODUCT GRID --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {wholesaleProducts.map((product, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="group relative bg-royal-900/30 border border-white/10 rounded-sm overflow-hidden hover:border-gold-500/50 transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col h-full"
              >
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-royal-950/20 group-hover:bg-transparent transition-all duration-700 z-10"></div>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                  />
                  <div className="absolute top-6 right-6 z-20 bg-royal-950/90 backdrop-blur-md border border-gold-500/30 px-4 py-1.5 rounded-sm">
                    <span className="text-gold-500 text-[9px] uppercase tracking-widest font-bold">{product.badge}</span>
                  </div>
                </div>

                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <span className="text-gold-500 uppercase tracking-[0.2em] text-[10px] font-bold mb-2">{product.subtitle}</span>
                  <h3 className="text-3xl font-serif text-white mb-4 group-hover:text-gold-400 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-8 flex-grow">
                    {product.description}
                  </p>
                  
                  <div className="border-t border-white/10 pt-6 mb-8">
                    <p className="text-white text-xs uppercase tracking-widest font-bold mb-4">Available Packaging</p>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs rounded-sm">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- NEW OPTION 6: TIERED PRICING / VOLUME DISCOUNTS --- */}
      <section className="py-24 bg-royal-900 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold-500 uppercase tracking-[0.3em] text-[10px] font-bold">Grow Your Margins</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">Volume Discount Tiers</h2>
            <p className="text-gray-400 font-light mt-4 max-w-2xl mx-auto">The more you stock, the higher your retail profit. Choose the tier that matches your business size.</p>
            <div className="w-16 h-0.5 bg-gold-500/50 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            
            {/* Tier 1: Retailer */}
            <div className="bg-royal-950 border border-white/10 p-10 rounded-sm text-center relative group hover:border-gold-500/30 transition-all duration-300 h-[90%]">
              <h3 className="text-xl font-serif text-white mb-2">Retailer</h3>
              <p className="text-gold-500 text-sm font-bold uppercase tracking-widest mb-6">10kg - 50kg</p>
              <p className="text-gray-400 font-light text-sm mb-8 border-b border-white/5 pb-8">Perfect for new shops wanting to test our quality and consistency.</p>
              <ul className="text-sm text-gray-300 space-y-4 font-light text-left mb-8">
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-gold-500" /> Standard Factory Rate</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-gold-500" /> Mixed SKUs Allowed</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-gold-500" /> Courier Delivery</li>
              </ul>
              <Link to="/contact" className="block w-full py-3 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">Inquire Rate</Link>
            </div>

            {/* Tier 2: Wholesaler (HIGHLIGHTED) */}
            <div className="bg-royal-900 border border-gold-500 p-10 rounded-sm text-center relative shadow-[0_0_30px_rgba(212,175,55,0.2)] transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-royal-950 px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm">Most Popular</div>
              <h3 className="text-2xl font-serif text-white mb-2">Wholesaler</h3>
              <p className="text-gold-400 text-lg font-bold uppercase tracking-widest mb-6">50kg - 200kg</p>
              <p className="text-gray-300 font-light text-sm mb-8 border-b border-white/10 pb-8">For established shops looking to maximize their monthly profit margins.</p>
              <ul className="text-sm text-white space-y-4 font-light text-left mb-8">
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-gold-500" /> <span className="font-bold text-gold-400">Distributor Pricing (-X%)</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-gold-500" /> Priority Dispatch</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-gold-500" /> Transport Booking Support</li>
              </ul>
              <Link to="/contact" className="block w-full py-4 bg-gold-500 text-royal-950 text-xs font-bold uppercase tracking-widest hover:bg-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-colors">Get Distributor Rate</Link>
            </div>

            {/* Tier 3: Super Stockist */}
            <div className="bg-royal-950 border border-white/10 p-10 rounded-sm text-center relative group hover:border-gold-500/30 transition-all duration-300 h-[90%]">
              <h3 className="text-xl font-serif text-white mb-2">Super Stockist</h3>
              <p className="text-gold-500 text-sm font-bold uppercase tracking-widest mb-6">200kg +</p>
              <p className="text-gray-400 font-light text-sm mb-8 border-b border-white/5 pb-8">For large-scale suppliers and those seeking white-label / loose sack tea.</p>
              <ul className="text-sm text-gray-300 space-y-4 font-light text-left mb-8">
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-gold-500" /> Highest Margin Tier</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-gold-500" /> Dedicated Account Manager</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-gold-500" /> Loose 30kg Sacks Available</li>
              </ul>
              <Link to="/contact" className="block w-full py-3 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">Contact Owner</Link>
            </div>

          </div>
        </div>
      </section>

      {/* --- 4. BOTTOM CTA --- */}
      <section className="py-24 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Ready to Stock Salasar?</h2>
          <p className="text-gray-400 font-light text-lg mb-10">
            Contact Mr. Rajkumar Agarwal directly to discuss minimum order quantities, transport logistics, and current market rates.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-4 bg-gold-500 text-royal-950 px-10 py-5 font-bold uppercase tracking-[0.2em] text-sm hover:bg-gold-400 transition-all shadow-[0_10px_30px_rgba(212,175,55,0.3)] rounded-sm group"
          >
            Start Your Order
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Wholesale;