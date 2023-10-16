import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Logo = () => {
  const Motion = motion(Link);
  return (
    <Motion
      href="/ "
      className=" bg-[#112D4E] text-light  rounded-full text-sm w-[2.8rem] h-[2.8rem] flex text-center items-center justify-center font-bold"
      whileHover={{
        backgroundColor: [
          "#121212",
          "rgba(131,58,180,1)",
          "rgba(253,29,29,1)",
          "rgba(252,176,69,1)",
          "rgba(131,58,180,1)",
          "#121212",
        ],
        transition: { duration: 1, repeat: Infinity },
      }}
    >
      {" June "}
    </Motion>
  );
};

export default Logo;
