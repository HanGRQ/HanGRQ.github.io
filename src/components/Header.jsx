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
          © Coded by Han GRQ
        </div>

        {/* 右侧 - 导航菜单 */}
        <nav className="hidden md:flex space-x-8">
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#blog">Blog</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
      </div>
    </motion.header>
  );
}

// 导航链接组件
function NavLink({ href, children }) {
  return (
    <a 
      href={href}
      className="text-gray-600 hover:text-black transition-colors relative group"
    >
      {children}
      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
    </a>
  );
}

export default Header;