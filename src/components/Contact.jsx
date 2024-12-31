import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* 标题部分 */}
      <motion.div
        className="text-center mb-12"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-gray-500">
          Feel free to reach out for any inquiries or collaboration opportunities!
        </p>
      </motion.div>

      {/* 联系方式部分 */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2, // 每个子元素间隔出现
            },
          },
        }}
      >
        {/* 地址 */}
        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full mb-4">
            <img src="/location-pin.png" alt="Address Icon" className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold">ADDRESS</h3>
          <p className="text-gray-500 mt-2">27 13 Lowe Haven</p>
        </motion.div>

        {/* 电话 */}
        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full mb-4">
            <img src="/phone.png" alt="Phone Icon" className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold">PHONE</h3>
          <p className="text-gray-500 mt-2">111 343 43 43</p>
        </motion.div>

        {/* 邮箱 */}
        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full mb-4">
            <img src="/mail.png" alt="Email Icon" className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold">EMAIL</h3>
          <p className="text-gray-500 mt-2">business@info.com</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
