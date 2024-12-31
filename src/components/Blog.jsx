import React, { useState } from "react";
import { motion } from "framer-motion";

const blogData = {
  "Advancement of Cooking": [
    { image: "a.jpg", description: "Explore the journey of a culinary master." },
    { image: "b.jpg", description: "Discover recipes that change the game." },
    { image: "c.jpg", description: "Mastering the art of plating." },
    { image: "d.jpg", description: "Behind the scenes of a chef's life." },
    { image: "e.jpg", description: "Secrets to perfect flavors." },
    { image: "f.jpg", description: "Building a kitchen of your dreams." },
  ],
  "Freedom and Wind": [
    { image: "1.1.jpg", description: "Feel the freedom in the open air." },
    { image: "1.2.jpg", description: "Winds that guide the traveler." },
    { image: "1.3.jpg", description: "Journeys beyond the horizon." },
    { image: "1.4.jpg", description: "Discovering nature's secrets." },
    { image: "1.5.jpg", description: "The perfect camping spots." },
    { image: "1.6.jpg", description: "Chasing the winds of adventure." },
    { image: "1.7.jpg", description: "Finding peace in motion." },
    { image: "1.8.jpg", description: "Experience the beauty of solitude." },
  ],
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("Advancement of Cooking");
  const [likedCards, setLikedCards] = useState([]);

  const toggleLike = (index) => {
    if (likedCards.includes(index)) {
      setLikedCards(likedCards.filter((item) => item !== index)); // 取消点赞
    } else {
      setLikedCards([...likedCards, index]); // 点赞
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* 标题部分 */}
      <motion.header
        className="py-3 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-bold">Blog</h1>
      </motion.header>

      {/* 分割线动画 */}
      <motion.div
        className="flex items-center my-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-200 to-gray-600"></div>
        <div className="w-8 h-px bg-gray-500"></div>
        <div className="flex-grow h-px bg-gradient-to-l from-transparent via-gray-200 to-gray-600"></div>
      </motion.div>

      {/* 视频区域 */}
      <motion.div
        className="flex justify-center mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.video
          src="travel.mp4"
          autoPlay
          muted
          loop
          className="w-[30%] rounded-lg shadow-lg border-4 border-black-500"
        />
      </motion.div>

      {/* 按钮区域 */}
      <motion.div
        className="flex justify-center space-x-8 my-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.button
          className={`text-lg flex items-center space-x-2 ${
            activeCategory === "Advancement of Cooking"
              ? "text-blue-500 font-bold"
              : "text-gray-600 font-medium"
          }`}
          onClick={() => setActiveCategory("Advancement of Cooking")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {activeCategory === "Advancement of Cooking" && (
            <motion.img
              src="cooking.png"
              alt="Cooking Icon"
              className="w-6 h-6"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
          <span>Advancement of Cooking</span>
        </motion.button>

        <motion.button
          className={`text-lg flex items-center space-x-2 ${
            activeCategory === "Freedom and Wind"
              ? "text-blue-500 font-bold"
              : "text-gray-600 font-medium"
          }`}
          onClick={() => setActiveCategory("Freedom and Wind")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {activeCategory === "Freedom and Wind" && (
            <motion.img
              src="travel-bag.png"
              alt="Travel Icon"
              className="w-6 h-6"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
          <span>Freedom and Wind</span>
        </motion.button>
      </motion.div>

      {/* 卡片区域 */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {blogData[activeCategory].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden relative"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={item.image}
              alt={`Blog card ${index}`}
              className="w-full h-48 object-cover cursor-pointer"
              onClick={() => toggleLike(index)}
            />
            <div className="p-4 flex justify-between items-center">
              <p className="text-gray-700">{item.description}</p>
              <motion.span
                className={`text-2xl cursor-pointer ${
                  likedCards.includes(index) ? "text-red-500" : "text-gray-400"
                }`}
                initial={{ scale: 1 }}
                animate={{ scale: likedCards.includes(index) ? 1.2 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {likedCards.includes(index) ? "❤️" : "🤍"}
              </motion.span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Blog;
