import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, ShieldCheck, Star, ArrowRight, Phone, Coffee, 
  Leaf, Truck, Award, Users 
} from 'lucide-react';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      
      {/* --- 1. HERO SECTION (STRICTLY PRESERVED) --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-royal-900">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Tea Background" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-900 via-royal-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="text-gold-400 uppercase tracking-[0.4em] text-xs md:text-sm mb-6 animate-pulse">Est. 2000 • Wholesale Excellence</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-none">
              The <span className="bg-gradient-gold bg-clip-text text-transparent">Essence</span> of <br /> True Chai.
            </h1>
            <p className="text-gray-300 text-lg font-light leading-relaxed mb-10 max-w-2xl mx-auto">
              Distributing premium blends of <span className="text-white font-serif italic">Krishna Chai</span> and <span className="text-white font-serif italic">Swati Gold</span> to retailers across the nation.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/products" className="bg-gold-500 text-royal-900 px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 shadow-glow">
                View Catalogue
              </Link>
              <Link to="/contact" className="px-8 py-4 border border-white/20 text-white uppercase tracking-widest hover:border-gold-500 hover:text-gold-500 transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. STATS SECTION (Preserved) --- */}
      <section className="bg-royal-950 border-y border-white/5 py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
          {[
            { val: "20+", label: "Years Experience" },
            { val: "100%", label: "FSSAI Certified" },
            { val: "10kg", label: "Min Order" },
            { val: "Premium", label: "Quality Grade" },
          ].map((stat, i) => (
            <div key={i} className="px-4">
              <p className="text-3xl font-serif text-gold-500 mb-2">{stat.val}</p>
              <p className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. THE PROCESS (NEW: Informative & Attractive) --- */}
      <section className="py-24 bg-royal-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold-500 uppercase tracking-widest text-xs font-bold">From Garden to Packet</span>
            <h2 className="text-4xl font-serif text-white mt-3">Our Quality Promise</h2>
            <div className="w-24 h-0.5 bg-gold-500 mx-auto mt-6 opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>

            {/* Step 1 */}
            <div className="relative text-center group">
              <div className="w-24 h-24 mx-auto bg-royal-800 border-4 border-royal-900 outline outline-1 outline-gold-500/30 rounded-full flex items-center justify-center text-gold-500 mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500 shadow-glow">
                <Leaf size={32} />
              </div>
              <h3 className="text-xl font-serif text-white mb-3">1. Sourcing</h3>
              <p className="text-gray-400 text-sm leading-relaxed px-4">
                We select only the finest tea leaves from premium gardens in Assam and Darjeeling, ensuring rich color and aroma.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative text-center group">
              <div className="w-24 h-24 mx-auto bg-royal-800 border-4 border-royal-900 outline outline-1 outline-gold-500/30 rounded-full flex items-center justify-center text-gold-500 mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500 shadow-glow">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-serif text-white mb-3">2. Testing</h3>
              <p className="text-gray-400 text-sm leading-relaxed px-4">
                Every batch undergoes rigorous tasting and FSSAI safety checks to guarantee consistent 'Kadakpan'.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative text-center group">
              <div className="w-24 h-24 mx-auto bg-royal-800 border-4 border-royal-900 outline outline-1 outline-gold-500/30 rounded-full flex items-center justify-center text-gold-500 mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500 shadow-glow">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-serif text-white mb-3">3. Delivery</h3>
              <p className="text-gray-400 text-sm leading-relaxed px-4">
                Packed in our distinct Krishna & Swati Gold packets and shipped directly to your shop in bulk quantities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. WHY CHOOSE US --- */}
      <section className="py-20 bg-royal-950 border-t border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold-500 uppercase tracking-[0.2em] text-xs font-bold">Why Salasar Tea?</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-3">Business Advantages</h2>
            <div className="w-20 h-0.5 bg-gold-500 mx-auto mt-6 opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <TrendingUp size={32} />, 
                title: "High Margins", 
                desc: "We offer the best wholesale rates in the market, ensuring retailers and distributors maximize their profit." 
              },
              { 
                icon: <ShieldCheck size={32} />, 
                title: "Certified Purity", 
                desc: "Every packet is FSSAI certified. We guarantee consistent taste (rang and kadakpan) in every batch." 
              },
              { 
                icon: <Coffee size={32} />, 
                title: "Diverse Range", 
                desc: "From strong dust (Krishna Red) to premium leaf (Swati Gold), we cater to every tea drinker's preference." 
              }
            ].map((feature, i) => (
              <div key={i} className="bg-royal-800/40 p-8 border border-white/5 hover:border-gold-500/30 transition-all hover:-translate-y-2 group rounded-sm">
                <div className="w-14 h-14 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-500 mb-6 group-hover:bg-gold-500 group-hover:text-royal-900 transition-colors shadow-glow">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. BESTSELLERS PREVIEW --- */}
      <section className="py-24 bg-royal-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-gold-500 uppercase tracking-widest text-xs font-bold">Our Catalog</span>
              <h2 className="text-4xl font-serif text-white mt-2">Bestselling Packets</h2>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-2 text-gold-500 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold mt-4 md:mt-0">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Krishna Red Card */}
            <Link to="/products" className="group relative h-80 overflow-hidden rounded-sm border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
              <img src="https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Krishna Red" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <div className="bg-red-700 text-white text-[10px] font-bold px-2 py-1 inline-block mb-2 rounded-sm shadow-md">MOST POPULAR</div>
                <h3 className="text-3xl font-serif text-white mb-1">Krishna (Red)</h3>
                <p className="text-gray-300 text-sm">Strong Dust • Fast Color • High Caffeine</p>
              </div>
            </Link>

            {/* Swati Gold Card */}
            <Link to="/products" className="group relative h-80 overflow-hidden rounded-sm border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
              <img src="https://images.unsplash.com/photo-1563911302283-d2bc129e7c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Swati Gold" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <div className="bg-gold-500 text-royal-900 text-[10px] font-bold px-2 py-1 inline-block mb-2 rounded-sm shadow-md">PREMIUM</div>
                <h3 className="text-3xl font-serif text-white mb-1">Swati Gold</h3>
                <p className="text-gray-300 text-sm">Long Leaf • Rich Aroma • Golden Liquor</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* --- 6. THE LEGACY (NEW: Info & Trust) --- */}
      <section className="py-24 bg-royal-800 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative">
            <div className="absolute -inset-4 border-2 border-gold-500/20 rounded-sm"></div>
            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Founder" className="w-full grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl rounded-sm" />
          </div>
          
          <div>
            <h2 className="text-4xl font-serif text-white mb-6">Built on <span className="text-gold-500 italic">Trust.</span></h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              "Tea is not just a business for us; it is a tradition. At Salasar Tea Company, we understand that your customers wake up to our tea every morning. That is a responsibility we take seriously."
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8 border-t border-white/10 pt-8">
               <div className="flex items-start gap-3">
                  <Award className="text-gold-500 shrink-0" size={24} />
                  <div>
                    <h4 className="text-white font-serif">Certified</h4>
                    <p className="text-xs text-gray-500 uppercase mt-1">FSSAI & GST Compliant</p>
                  </div>
               </div>
               <div className="flex items-start gap-3">
                  <Users className="text-gold-500 shrink-0" size={24} />
                  <div>
                    <h4 className="text-white font-serif">Support</h4>
                    <p className="text-xs text-gray-500 uppercase mt-1">Dedicated Dealer Support</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 7. FINAL CTA STRIP --- */}
      <section className="bg-gradient-gold py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-royal-900 mb-2 font-bold">Ready to Stock Up?</h2>
            <p className="text-royal-800 font-medium text-lg">
              Minimum order quantity: <span className="font-bold">10kg</span>. <br className="md:hidden"/>
              Join 500+ satisfied retailers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
             <a href="tel:+919875052220" className="bg-royal-900 text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-royal-800 transition-all shadow-2xl flex items-center justify-center gap-3 rounded-sm">
               <Phone size={20} className="text-gold-500" /> Call Owner
             </a>
             <Link to="/contact" className="bg-transparent border-2 border-royal-900 text-royal-900 px-8 py-4 font-bold uppercase tracking-widest hover:bg-royal-900 hover:text-white transition-all rounded-sm">
               Enquire Online
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;