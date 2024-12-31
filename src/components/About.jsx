import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* 标题部分 */}
      <motion.header
        className="py-10 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 className="text-5xl font-bold">ME</h1>
      </motion.header>

      <motion.div
        className="flex items-center my-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* 左侧虚到实 */}
        <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-200 to-gray-600"></div>
        {/* 中间实 */}
        <div className="w-8 h-px bg-gray-500"></div>
        {/* 右侧实到虚 */}
        <div className="flex-grow h-px bg-gradient-to-l from-transparent via-gray-200 to-gray-600"></div>
      </motion.div>

      {/* 主要内容 */}
      <div className="max-w-[1400px] mx-auto px-4 pb-20">
        {/* 图片轮播部分 - 长宽比2:1 */}
        <div className="relative w-full aspect-[2/1] overflow-hidden bg-gray-100 rounded-lg mb-16">
          {[1, 2, 3, 4, 5].map((num, index) => (
            <motion.div
              key={num}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{
                opacity: currentSlide === index ? 1 : 0,
                scale: currentSlide === index ? 1 : 1.05,
              }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
            >
              <img
                src={`${num}.png`}
                alt={`Slide ${num}`}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}

          {/* 轮播指示器 */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          {/* 前后按钮 */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center"
            onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
          >
            ←
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center"
            onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
          >
            →
          </button>
        </div>

        {/* 文字部分 - 宽度适应屏幕 */}
        <motion.div
          className="w-full flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 左侧文字部分 */}
          <div className="flex-1">
            <motion.div
              className="uppercase text-sm tracking-wider text-gray-500 mb-4"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              ABOUT
            </motion.div>
            <motion.h2
              className="text-4xl font-light mb-6"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Oddly Unique Me
            </motion.h2>
            <motion.p
              className="text-gray-600 leading-relaxed mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Forever young, forever having midnight epiphanies; I love sleeping so much, it feels like resting in eternal peace. My journey to becoming a wealthy lady is kicking off again—manifesting fortune, every second of every day!
            </motion.p>
            <motion.p
              className="text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              After spending so much time on Earth, I really miss the feeling of being in space. Today, a fellow spacefarer brought me a Xizhilang jelly from space—still the same familiar taste. It reminded me of my days as an astronaut in the universe. Truly wonderful.
            </motion.p>
          </div>

          {/* 右侧图片部分 */}
          <motion.div
            className="ml-12 w-1/4 max-w-[200px] flex-shrink-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="name.jpg"
              alt="Unique representation"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
