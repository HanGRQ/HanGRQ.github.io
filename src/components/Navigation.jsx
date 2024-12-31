// src/components/Navigation.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navigation({ isOpen, onClose }) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          />

          {/* 抽屉导航面板 */}
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 w-80 h-full bg-gray-900 text-white z-50"
          >
            {/* 关闭按钮 */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white hover:opacity-75"
            >
            </button>

            {/* 导航标题 */}
            <div className="p-8 pt-20">
              <h2 className="text-xl font-light mb-8 uppercase tracking-wider">Navigation</h2>
              
              {/* 导航链接列表 */}
              <div className="space-y-6">
                <NavLink href="/">Home</NavLink>
                <NavLink href="projects">Projects</NavLink>
                <NavLink href="about">About</NavLink>
                <NavLink href="blog">Blog</NavLink>
                <NavLink href="contact">Contact</NavLink>
              </div>

              {/* 社交链接 */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="grid grid-cols-2 gap-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                     className="text-sm hover:text-gray-300">Github</a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                     className="text-sm hover:text-gray-300">LinkedIn</a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                     className="text-sm hover:text-gray-300">Instagram</a>
                  <a href="https://read.cv" target="_blank" rel="noopener noreferrer" 
                     className="text-sm hover:text-gray-300">read.cv</a>
                </div>

                {/* 版本信息 */}
                <div className="mt-8 pt-8 border-t border-gray-800">
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date().toLocaleString('en-US', { 
                      month: 'short',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true 
                    })}
                  </p>
                </div>
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}

// 导航链接组件
function NavLink({ href, children }) {
  return (
    <motion.a
      href={href}
      className="block text-2xl font-light hover:text-gray-300 transition-colors"
      whileHover={{ x: 10 }}
      transition={{ type: 'tween' }}
    >
      {children}
    </motion.a>
  );
}

export default Navigation;