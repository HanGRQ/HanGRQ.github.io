import React from "react";
import { motion } from "framer-motion";

const GradientTransition = () => (
  <motion.div
    className="absolute inset-0"
    style={{
      background: "linear-gradient(90deg, #ff6b6b, #1c92d2)",
      filter: "blur(4px)",
    }}
    initial={{ x: "-100%" }}
    animate={{ x: "0%" }}
    exit={{ x: "100%" }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1))",
        mixBlendMode: "overlay",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    />
  </motion.div>
);

export default GradientTransition;