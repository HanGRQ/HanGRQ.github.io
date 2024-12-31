import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="min-h-screen relative bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col justify-center items-center">
      {/* 主标题 */}
      <motion.h1 
        className="text-6xl md:text-8xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Han GRQ
      </motion.h1>

      {/* 副标题 */}
      <motion.p 
        className="text-xl text-gray-600 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Sophomore @ Your University
      </motion.p>

      {/* 简历按钮 */}
      <motion.button
        className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Resume
      </motion.button>

      {/* 滚动提示 */}
      <motion.div 
        className="absolute bottom-10 text-sm text-gray-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          ease: "easeInOut"
        }}
      >
        [ SCROLL TO EXPLORE ]
      </motion.div>

      {/* 版本号 */}
      <div className="absolute bottom-4 left-4 text-sm text-gray-400">
        v2.5
      </div>
    </section>
  );
}

export default Hero;