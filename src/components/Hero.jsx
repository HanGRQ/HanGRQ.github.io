import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center">
      {/* 视频背景 */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/background.mp4" // 视频路径（在 public 文件夹下）
        autoPlay
        loop
        muted
      ></video>

      {/* 主标题 */}
      <motion.h1
        className="text-6xl md:text-8xl font-bold mb-4 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hello
      </motion.h1>

      {/* 副标题 */}
      <motion.p
        className="text-xl text-gray-200 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Welcome to GUA's Website
      </motion.p>

      {/* 简历按钮 */}
      <motion.button
        className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Click Me
      </motion.button>

      {/* 滚动提示 */}
      <motion.div
        className="absolute bottom-10 text-sm text-gray-500"
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: 'easeInOut',
        }}
      >
        [ SCROLL TO EXPLORE ]
      </motion.div>

    </section>
  );
}

export default Hero;
