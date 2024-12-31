import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // 主页面组件
  const Home = () => (
    <>
      <Hero />
      {/* 弧形过渡区域 */}
      <div className="h-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 w-full h-32 bg-gray-100 rounded-b-[50%]" />
      </div>
      <Works />
    </>
  );

  // 404页面组件
  const NotFound = () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600">Page not found</p>
      </div>
    </div>
  );

  return (
    <Router>
      <div className="relative">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 添加更多路由 */}
          <Route path="/projects" element={<Works />} />
          <Route path="/about" element={<div>About Page Coming Soon</div>} />
          <Route path="/blog" element={<div>Blog Page Coming Soon</div>} />
          <Route path="/contact" element={<div>Contact Page Coming Soon</div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        <Navigation 
          isOpen={isDrawerOpen} 
          onClose={() => setIsDrawerOpen(false)} 
        />
        
        {/* 右上角菜单按钮 */}
        <button
          className="fixed top-4 right-4 z-50 p-2 rounded-full bg-coral-500 text-white"
          onClick={() => setIsDrawerOpen(true)}
        >
          <span>☰</span>
        </button>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;