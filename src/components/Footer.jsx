// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  // 技术栈数据
  const technologies = {
    TECHNOLOGY: ['Next.js', 'SCSS', 'LocomotiveScroll', 'FramerMotion', 'GSAP', 'Pipedream'],
    TYPOGRAPHY: ['Montserrat', 'Cormorant Garamond', 'Ma Shan Zheng'],
    SOCIALS: ['Github', 'Linkedin', 'Instagram', 'read.cv']
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Get In Touch 横幅 */}
      <div className="relative overflow-hidden py-20 border-b border-gray-800">
        <motion.div
          className="whitespace-nowrap text-8xl font-light flex items-center"
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* 循环内容 */}
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <React.Fragment key={index}>
                <span className="mx-4">Get In Touch -</span>
                <div
                  className="mx-4 w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-4 border-gray-600"
                  style={{
                    backgroundImage: "url('/photo.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </React.Fragment>
            ))}
        </motion.div>
      </div>

      {/* 主要内容 */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* 技术栈列表 */}
          {Object.entries(technologies).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm text-gray-500 mb-6">{category}</h3>
              <ul className="space-y-4">
                {items.map((item, index) => (
                  <li key={index} className="hover:text-gray-300 transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 联系方式 */}
          <div>
            <h3 className="text-sm text-gray-500 mb-6">EMAIL ME</h3>
            <button className="text-lg hover:text-gray-300 transition-colors">
              Click to Copy
            </button>
            
            <h3 className="text-sm text-gray-500 mt-12 mb-6">REACH OUT</h3>
            <button className="text-lg hover:text-gray-300 transition-colors">
              Send a Message
            </button>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="mt-20 pt-8 border-t border-gray-800 flex justify-between items-center text-sm text-gray-500">
          <div>COPYRIGHT ©2024 Han GRQ</div>
          <button className="hover:text-white transition-colors">
            Back to Top ↑
          </button>
        </div>

        {/* 版本和时间信息 */}
        <div className="mt-8 flex items-center space-x-8 text-sm text-gray-500">
          <span>VERSION</span>
          <span>.v2.5</span>
          <span>LOCAL TIME</span>
          <span>
            {new Date().toLocaleString('en-US', {
              month: 'short',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              hour12: true
            })}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;