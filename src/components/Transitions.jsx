/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Transitions = ({ children }) => {
  return (
    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3, delayChildren: 0.3, staggerChildren: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export { Transitions };

// NOTE: While using transitions in future check the animated page of this app
