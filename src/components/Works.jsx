// src/components/Works.jsx
import React from 'react';
import { motion } from 'framer-motion';

function Works() {
  // 项目数据
  const projects = [
    {
      title: "TMDB Movie APP",
      period: "May.2024 - Present",
      description: "TMDB电影应用",
      tags: ["React", "Electron", "Node.js"]
    },
    {
      title: "Calorie Counter Mobile APP Using Watson Visual Recognition",
      period: "July.2024 - Present",
      description: "使用 Watson Visual Recognition 的卡路里计数器移动应用程序",
      tags: ["Android", "Java"]
    },
    {
      title: "FoodMind",
      period: "Sept.2024 - Present",
      description: "基于Android的营养和情绪行为跟踪系统",
      tags: ["Android", "Kotlin"]
    }
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 标题 */}
        <motion.h2 
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Works
        </motion.h2>

        {/* 项目列表 */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectItem 
              key={index} 
              project={project} 
              index={index} 
            />
          ))}
        </div>

        {/* 技能说明文本 */}
        <motion.p 
          className="mt-20 text-xl leading-relaxed text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          I am currently learning and developing skills in Front-end Design, Back-end Algorithms, and Mechanical Systems to gain a deeper understanding of the end-to-end product development process.
        </motion.p>
      </div>
    </section>
  );
}

// 单个项目组件
function ProjectItem({ project, index }) {
  return (
    <motion.div 
      className="border-t border-gray-200 pt-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* 项目标题和时间 */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-medium">{project.title}</h3>
        <span className="text-sm text-gray-500">{project.period}</span>
      </div>

      {/* 项目描述 */}
      <p className="text-gray-600 mb-4">{project.description}</p>

      {/* 技术标签 */}
      <div className="flex gap-2">
        {project.tags.map((tag, tagIndex) => (
          <span 
            key={tagIndex}
            className="px-3 py-1 text-sm bg-gray-100 rounded-full text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 查看更多按钮 */}
      <motion.a
        href="https://github.com/HanGRQ"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-sm text-gray-500 hover:text-black flex items-center gap-1"
        whileHover={{ x: 5 }}
        transition={{ type: 'tween' }}
      >
        Learn more 
        <span className="text-xs">→</span>
      </motion.a>

    </motion.div>
  );
}

export default Works;