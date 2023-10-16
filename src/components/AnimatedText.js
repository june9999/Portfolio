import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <>
      <motion.h1
        className=" flex flex-wrap w-full "
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((element, index) => (
          <span
            className={`inline-block capitalize font-bold text-8xl text-dark ${className} `}
            key={`${element}${index}`}
          >
            {element}&nbsp;
          </span>
        ))}
      </motion.h1>
    </>
  );
};

export default AnimatedText;
