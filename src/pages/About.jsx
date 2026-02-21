import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, Users, Target, Leaf, ArrowRight, CheckCircle2 } from 'lucide-react';

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const About = () => {
  return (
    <div className="overflow-x-hidden bg-royal-950 min-h-screen">
      
      {/* --- 1. CINEMATIC HERO SECTION --- */}
      <section className="relative pt-40 pb-32 flex items-center justify-center overflow-hidden border-b border-white/5">
        {/* Background Parallax Texture */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=2070&auto=format&fit=crop" 
            alt="Tea Leaves" 
            className="w-full h-full object-cover opacity-20 scale-105 animate-[pulse_15s_ease-in-out_infinite]" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-royal-950 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="text-gold-500 uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">Our Heritage</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight drop-shadow-2xl">
              A Legacy Brewed in <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 italic">Trust & Tradition.</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Since the year 2000, Salasar Tea Company has been the silent backbone of countless successful retail tea businesses across the nation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 2. THE FOUNDER'S STORY --- */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative Gold Glow */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              {/* Luxury Frame Accents */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-gold-500/40 transition-all duration-500"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-gold-500/40 transition-all duration-500"></div>
              
              <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] group">
                <div className="absolute inset-0 bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Mr. Rajkumar Agarwal" 
                  className="w-full grayscale hover:grayscale-0 transition-all duration-1000 scale-100 hover:scale-105" 
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -right-8 bottom-12 bg-royal-900 border border-gold-500/30 p-6 rounded-sm shadow-glow backdrop-blur-md z-20 hidden md:block">
                <p className="text-4xl font-serif text-gold-500 font-bold">20+</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1 font-bold">Years of Excellence</p>
              </div>
            </motion.div>
            
            {/* Text Side */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 space-y-8"
            >
              <div>
                <span className="text-gold-500 uppercase tracking-[0.2em] text-[10px] font-bold">The Visionary</span>
                <h2 className="text-4xl md:text-5xl font-serif text-white mt-3 mb-6 leading-tight">
                  Meet <span className="text-gold-500">Rajkumar Agarwal.</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg">
                <p>
                  Two decades ago, Mr. Rajkumar Agarwal identified a gap in the wholesale tea market: the lack of a consistent, high-quality blend that retailers could confidently sell day after day.
                </p>
                <p>
                  Thus, <strong className="text-white font-medium">Salasar Tea Company</strong> was born. From humble beginnings in the year 2000, his dedication to the perfect "Kadakpan" (strength) and "Rang" (color) transformed the business into a trusted supplier for over 500+ partners.
                </p>
                <p className="italic border-l-2 border-gold-500 pl-6 my-8 text-gray-400">
                  "We don't just sell tea leaves; we sell the morning energy of thousands of families. Consistency in our Krishna and Swati Gold packets is our ultimate promise."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-gold-500" size={24} />
                  <div>
                    <p className="text-white font-serif text-lg">Certified</p>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">FSSAI Compliant</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="text-gold-500" size={24} />
                  <div>
                    <p className="text-white font-serif text-lg">Registered</p>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">GST Approved Business</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- 3. OUR PHILOSOPHY (Values) --- */}
      <section className="py-24 bg-royal-900 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold-500 uppercase tracking-[0.3em] text-[10px] font-bold">Why Partner With Us</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">The Salasar Standard</h2>
            <div className="w-16 h-0.5 bg-gold-500/50 mx-auto mt-6"></div>
          </div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Leaf />,
                title: "Uncompromising Purity",
                desc: "We source directly from premium estates. Whether it's the fine dust of Krishna Chai or the long leaves of Swati Gold, purity is guaranteed."
              },
              {
                icon: <Target />,
                title: "Absolute Consistency",
                desc: "Your customers expect the same great taste every time. Our rigorous blending and testing process ensures zero variation batch-to-batch."
              },
              {
                icon: <Users />,
                title: "Retailer First",
                desc: "We operate on low minimum order quantities (10kg) and high margins, empowering local shops and distributors to grow their business profitably."
              }
            ].map((value, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="bg-royal-950/50 p-10 border border-white/5 hover:border-gold-500/30 transition-all duration-500 group rounded-sm"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-500 mb-8 group-hover:bg-gold-500 group-hover:text-royal-900 group-hover:border-gold-500 transition-all duration-500 shadow-glow">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold-400 transition-colors">{value.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 4. QUALITY CHECKLIST --- */}
      <section className="py-24 bg-royal-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-gold-500 uppercase tracking-[0.3em] text-[10px] font-bold">Processing</span>
            <h2 className="text-4xl font-serif text-white mt-4 mb-8 leading-tight">
              From the Gardens, <br/> Packaged with Perfection.
            </h2>
            <p className="text-gray-400 font-light leading-relaxed mb-8 text-lg">
              We handle the complex supply chain so you don't have to. Our loose tea arrives in bulk and is carefully processed and packed into our signature branded pouches.
            </p>

            <ul className="space-y-5">
              {[
                "Careful selection of Assam and Doars tea grades.",
                "Automated, hygienic packaging into retail-ready pouches.",
                "Availability in all SKUs: 250g, 500g, 1kg, and ₹10/₹20 packs.",
                "Ready-to-ship 30kg loose tea sacks for commercial buyers."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-gold-500 shrink-0 mt-1" size={20} />
                  <span className="text-gray-300 font-light text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <Link to="/products" className="inline-flex items-center gap-3 text-gold-500 font-bold uppercase tracking-[0.2em] text-sm hover:text-white transition-colors group">
                Explore Our Products 
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="relative h-[500px] rounded-sm overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-royal-950/80 via-transparent to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=1000&auto=format&fit=crop" 
              alt="Golden Tea Brew" 
              className="w-full h-full object-cover" 
            />
          </div>

        </div>
      </section>

      {/* --- 5. GOLDEN CTA STRIP --- */}
      <section className="bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 py-20 relative overflow-hidden">
        {/* Shine effect overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_5s_infinite]"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-royal-950 mb-6 font-bold">
            Become a Part of Our Legacy
          </h2>
          <p className="text-royal-900 font-medium text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Whether you are opening a new shop or scaling an established retail chain, Salasar Tea Company is equipped to supply your exact needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contact" 
              className="bg-royal-950 text-gold-500 px-10 py-5 font-bold uppercase tracking-[0.2em] text-sm hover:bg-black hover:text-white transition-all shadow-[0_10px_30px_rgba(0,0,0,0.3)] rounded-sm"
            >
              Start Wholesale Inquiry
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;