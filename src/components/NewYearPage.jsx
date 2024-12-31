import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function NewYearPage() {
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // 5秒后切换到视频
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black relative">
      {/* 返回按钮 */}
      <motion.img
        src="back-button.png"
        alt="Back"
        className="absolute top-4 left-4 w-12 h-12 cursor-pointer hover:scale-110 transition-transform"
        onClick={handleBack}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      />
      
      <div className="w-[90%] h-[90vh] relative">
        {!showVideo ? (
          // 图片显示
          <motion.img
            src="new.jpg"
            alt="New Year"
            className="w-full h-full object-cover rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        ) : (
          // 视频播放
          <motion.video
            className="w-full h-full object-cover rounded-lg"
            autoPlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <source src="new.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        )}
      </div>
    </div>
  );
}

export default NewYearPage;