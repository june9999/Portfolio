import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex md:absolute bottom-0 justify-between text-lg border-t-2 px-[1rem] md:px-[3rem] py-8  w-full font-medium  text-primary">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div>Build by Wenjun</div>
      </div>
    </footer>
  );
};

export default Footer;
