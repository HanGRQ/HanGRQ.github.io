import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // 替换为 HashRouter
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import NewYearPage from './components/NewYearPage';

// 颜色渐变组件
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

      <div className="sticky top-0 z-20">
        <GradientTransition /> 
      </div>

      <div className="relative z-30 bg-gray-100">
        <Works />
      </div>

      <div className="sticky top-0 z-40">
        <GradientTransition /> 
      </div>

      <div className="relative z-50 bg-gray-900">
        <Footer />
      </div>
    </div>
  );

  return (
    <Router> {/* 使用 HashRouter */}
      <div className="relative">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newyear" element={<NewYearPage />} />
        </Routes>

        <Navigation
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />

        <button
          className="fixed top-4 right-4 z-50 p-2 rounded-full bg-transparent"
          onClick={() => setIsDrawerOpen((prevState) => !prevState)}
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
