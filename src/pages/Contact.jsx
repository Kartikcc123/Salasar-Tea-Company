import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Send, Building, ShieldCheck, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    interest: 'Krishna (Red) - Fine Dust',
    quantity: '10kg - 50kg',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate an API call / Email sending
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section className="pt-32 pb-24 bg-royal-950 min-h-screen relative overflow-hidden flex flex-col items-center">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-gold-500 uppercase tracking-[0.3em] text-[10px] font-bold"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white mt-4"
          >
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 italic">Wholesale</span> Journey
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
            className="w-24 h-0.5 bg-gold-500/50 mx-auto mt-6"
          ></motion.div>
        </div>

        {/* --- TOP GRID: INFO & FORM --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          
          {/* LEFT COLUMN: CONTACT INFO */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-serif text-white mb-4">Direct Contact</h3>
              <p className="text-gray-400 font-light leading-relaxed max-w-md">
                We supply premium tea to retailers, hotels, and distributors across India. Reach out to Mr. Rajkumar Agarwal directly for the best market rates.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-gold-500/50 group-hover:bg-gold-500/10 transition-all duration-300">
                  <Phone className="text-gold-500" size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Call the Owner</p>
                  <a href="tel:+919875052220" className="text-2xl font-serif text-white hover:text-gold-400 transition-colors duration-300">
                    +91 98750 52220
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-gold-500/50 group-hover:bg-gold-500/10 transition-all duration-300">
                  <Mail className="text-gold-500" size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Email Us</p>
                  <a href="mailto:info@salasartea.com" className="text-lg text-white hover:text-gold-400 transition-colors duration-300">
                    info@salasartea.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-gold-500/50 group-hover:bg-gold-500/10 transition-all duration-300">
                  <MapPin className="text-gold-500" size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Headquarters</p>
                  <p className="text-lg text-white">Salasar Tea Company</p>
                  <p className="text-gray-400 font-light mt-1">Rajasthan, India</p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-white/10 flex gap-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-gold-500" size={24} />
                <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">FSSAI Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <Building className="text-gold-500" size={24} />
                <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">GST Registered</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: ENQUIRY FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
            className="bg-royal-900/50 border border-white/10 p-8 md:p-10 relative overflow-hidden backdrop-blur-sm rounded-sm shadow-2xl"
          >
            {/* Top Border Glow Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600"></div>

            {isSubmitted ? (
              // SUCCESS STATE
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16 h-full"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6 border border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                  <CheckCircle className="text-green-500" size={40} />
                </div>
                <h3 className="text-3xl font-serif text-white mb-4">Inquiry Received</h3>
                <p className="text-gray-400 font-light mb-8 max-w-sm">
                  Thank you for your interest, <span className="text-white font-medium">{formData.name}</span>. Mr. Rajkumar Agarwal will contact you shortly regarding your wholesale requirements.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-gold-500 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors border-b border-gold-500 pb-1"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              // FORM STATE
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-serif text-white mb-6">Request Wholesale Pricing</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Your Name *</label>
                    <input 
                      type="text" required name="name" value={formData.name} onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 focus:bg-white/10 transition-all rounded-sm font-light placeholder-gray-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Business / Shop Name *</label>
                    <input 
                      type="text" required name="businessName" value={formData.businessName} onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 focus:bg-white/10 transition-all rounded-sm font-light placeholder-gray-600"
                      placeholder="e.g. Sharma Traders"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Phone Number *</label>
                  <input 
                    type="tel" required name="phone" value={formData.phone} onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 focus:bg-white/10 transition-all rounded-sm font-light placeholder-gray-600"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Product of Interest</label>
                    <select 
                      name="interest" value={formData.interest} onChange={handleChange}
                      className="w-full bg-royal-900 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-all rounded-sm font-light appearance-none cursor-pointer"
                    >
                      <option>Krishna (Red) - Fine Dust</option>
                      <option>Krishna (Std) - Granular</option>
                      <option>Swati Gold - Premium Leaf</option>
                      <option>Loose Tea Sacks (30kg)</option>
                      <option>Mixed Assortment</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Est. Monthly Requirement</label>
                    <select 
                      name="quantity" value={formData.quantity} onChange={handleChange}
                      className="w-full bg-royal-900 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-all rounded-sm font-light appearance-none cursor-pointer"
                    >
                      <option>10kg - 50kg (Startup)</option>
                      <option>50kg - 100kg (Retailer)</option>
                      <option>100kg - 500kg (Wholesaler)</option>
                      <option>500kg+ (Distributor)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Additional Requirements</label>
                  <textarea 
                    name="message" value={formData.message} onChange={handleChange} rows="3"
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 focus:bg-white/10 transition-all rounded-sm font-light placeholder-gray-600 resize-none"
                    placeholder="Tell us about your target market or specific packing needs..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-4 font-bold uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 transition-all duration-300 rounded-sm ${
                    isSubmitting 
                      ? 'bg-royal-800 text-gray-400 cursor-not-allowed border border-white/10' 
                      : 'bg-gold-500 text-royal-950 hover:bg-gold-400 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Processing...</span>
                  ) : (
                    <>
                      Submit Inquiry <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* --- BOTTOM SECTION: INTERACTIVE GOOGLE MAP --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="relative w-full h-[450px] rounded-sm overflow-hidden border border-white/10 shadow-2xl group mt-10"
        >
          {/* Custom Dark/Gold Filter applied to iframe */}
          <div className="absolute inset-0 pointer-events-none z-10 bg-royal-950/20 group-hover:bg-transparent transition-all duration-700"></div>
          
          {/* REPLACE this src with your actual Google Maps Embed link */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115133.01016839352!2d74.56934419519097!3d25.32128711466085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c2368ee3a409%3A0xc07cecfeb0db5a27!2sBhilwara%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            className="filter grayscale contrast-125 opacity-70 group-hover:filter-none group-hover:opacity-100 transition-all duration-1000 ease-in-out border-0"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Floating Address Overlay on the Map */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 bg-royal-950/90 backdrop-blur-md border border-gold-500/30 p-6 rounded-sm shadow-glow transform group-hover:-translate-y-2 transition-transform duration-500">
            <p className="text-gold-500 uppercase tracking-widest text-[10px] font-bold mb-2 flex items-center gap-2">
              <MapPin size={12} /> Visit Our Office
            </p>
            <p className="text-white font-serif text-xl mb-1">Salasar Tea Company</p>
            <p className="text-gray-400 text-sm font-light">Bhilwara, Rajasthan</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;