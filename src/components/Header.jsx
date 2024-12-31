// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  // 监听滚动改变头部样式
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* 左侧 - 作者信息 */}
        <div className="text-sm">
          © Coded by Sihan Ma
        </div>
      </div>
    </motion.header>
  );
}

export default Header;