import React from "react";
import { motion } from "framer-motion";

const FYP = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <motion.section
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, 
            rgba(255, 255, 255, 0.8), 
            rgba(255, 255, 255, 0)
          ), url("/FYPback.jpg")`
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Content */}
        <div className="relative h-full max-w-6xl mx-auto px-4">
          <motion.div
            className="flex flex-col justify-center h-full"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-9xl font-bold mb-4 text-gray-800 font-['Brush_Script_MT']">
                FoodMind
            </h1>
            <p className="text-3xl text-gray-600 max-w-2xl">
                <b>Android-Based Nutrition and Emotional Behavior Tracking System</b>
            </p>
          </motion.div>
        </div>

        {/* Gradient transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-50"></div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
            {/* GitHub Repository */}
            <motion.div
              className="bg-white rounded-lg p-6 shadow-lg"
              whileHover={{ y: -8 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg mb-4 flex items-center justify-center">
                <svg 
                  className="w-6 h-6 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">GitHub Repository</h3>
              <p className="text-gray-600 mb-4">
                Check out my source code and contribute to the project.
              </p>
              <a
                href="https://github.com/HanGRQ/FinalProject"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-indigo-600 hover:text-indigo-800"
              >
                View Repository →
              </a>
            </motion.div>

            {/* YouTube Demo */}
            <motion.div
              className="bg-white rounded-lg p-6 shadow-lg"
              whileHover={{ y: -8 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg mb-4 flex items-center justify-center">
                <svg 
                  className="w-6 h-6 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">YouTube Demo</h3>
              <p className="text-gray-600 mb-4">
                Watch my detailed demonstration video of FoodMind in action.
              </p>
              <a
                href="https://youtu.be/W0x_YiADmMs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-red-600 hover:text-red-800"
              >
                Watch Demo →
              </a>
            </motion.div>

            {/* Poster */}
            <motion.div
              className="bg-white rounded-lg p-6 shadow-lg"
              whileHover={{ y: -8 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                <svg 
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Poster</h3>
              <p className="text-gray-600 mb-4">
                View my academic poster presentation of the project.
              </p>
              <a
                href="/poster.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-green-600 hover:text-green-800"
              >
                View Poster →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FYP;