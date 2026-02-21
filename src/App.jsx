import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import WhatsAppWidget from './components/WhatsappWidget';
import Wholesale from './pages/Wholesale';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-royal-900 text-gray-100 flex flex-col">
        <ScrollToTop />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wholesale" element={<Wholesale />} />
          </Routes>
        </main>
        <WhatsAppWidget />
        <Footer />
      </div>
    </Router>
  );
}

export default App;