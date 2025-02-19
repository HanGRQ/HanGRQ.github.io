import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';  // 添加 Link 导入

function Works() {
  // 项目数据
  const projects = [
    {
      title: "TMDB Movie APP",
      period: "May.2024 - Present",
      description: "TMDB Movie App",
      tags: ["React", "Electron", "Node.js"],
      link: "https://github.com/HanGRQ"  // 外部链接
    },
    {
      title: "Calorie Counter Mobile APP Using Watson Visual Recognition",
      period: "July.2024 - Present",
      description: "Calorie counter mobile app using Watson Visual Recognition",
      tags: ["Android", "Java"],
      link: "https://github.com/HanGRQ"  // 外部链接
    },
    {
      title: "FoodMind",
      period: "Sept.2024 - Present",
      description: "Nutrition and emotional behavior tracking system based on Android",
      tags: ["Android", "Kotlin"],
      link: "/projects/foodmind",  // 内部路由链接
      isInternal: true  // 标记为内部链接
    }
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Works
        </motion.h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectItem 
              key={index} 
              project={project} 
              index={index} 
            />
          ))}
        </div>

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
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-medium">{project.title}</h3>
        <span className="text-sm text-gray-500">{project.period}</span>
      </div>

      <p className="text-gray-600 mb-4">{project.description}</p>

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

      {/* 根据是否为内部链接使用不同的组件 */}
      {project.isInternal ? (
        <Link
          to={project.link}
          className="mt-4 text-sm text-gray-500 hover:text-black flex items-center gap-1"
        >
          Learn more 
          <span className="text-xs">→</span>
        </Link>
      ) : (
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-sm text-gray-500 hover:text-black flex items-center gap-1"
          whileHover={{ x: 5 }}
          transition={{ type: 'tween' }}
        >
          Learn more 
          <span className="text-xs">→</span>
        </motion.a>
      )}
    </motion.div>
  );
}

export default Works;