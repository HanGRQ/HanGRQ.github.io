import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// 颜色渐变过渡组件
const GradientTransition = () => (
  <motion.div
    className="absolute inset-0"
    style={{
      background: "linear-gradient(to right, #f8f9fa, #343a40)", // 颜色渐变
    }}
    initial={{ x: "-100%" }} // 初始位置在左侧
    animate={{ x: "0%" }} // 动画到中心
    exit={{ x: "100%" }} // 退出时滑向右侧
    transition={{ duration: 0.7, ease: "easeInOut" }} // 动画持续时间与缓动效果
  />
);

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const Home = () => (
    <div className="relative">
      <div className="min-h-screen relative z-10 bg-blue-500">
        <Hero />
      </div>

      {/* Hero到Works过渡 */}
      <div className="sticky top-0 z-20">
        <GradientTransition /> 
      </div>

      {/* Works部分 */}
      <div className="relative z-30 bg-gray-100">
        <Works />
      </div>

      {/* Works到Footer过渡 */}
      <div className="sticky top-0 z-40">
        <GradientTransition /> 
      </div>

      {/* Footer部分 */}
      <div className="relative z-50 bg-gray-900">
        <Footer />
      </div>
    </div>
  );

  return (
    <Router>
      <div className="relative">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Works />} />
          <Route path="/about" element={<div>About Page Coming Soon</div>} />
          <Route path="/blog" element={<div>Blog Page Coming Soon</div>} />
          <Route path="/contact" element={<div>Contact Page Coming Soon</div>} />
        </Routes>

        <Navigation
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />

        <button
          className="fixed top-4 right-4 z-50 p-2 rounded-full bg-transparent"
          onClick={() => setIsDrawerOpen(true)}
        >
          <img
            src="/menu-button.png"
            alt="Menu Button"
            className="w-8 h-8"
          />
        </button>
      </div>
    </Router>
  );
}

export default App; 