import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { GithubIcon, LinkedInIcon } from "./Icon";
import { useRouter } from "next/router";

const NavButton = ({ href, text, className = "" }) => {
  const router = useRouter();

  return (
    <>
      <Link
        href={href}
        className={`${className} flex flex-col group
      `}
      >
        {text}
        <span
          className={` inline-block bg-primary 
          h-[1.5px] group-hover:w-full transition-[width] duration-500
          ${router.asPath === href ? "w-full" : "w-0"}`}
        ></span>
      </Link>
    </>
  );
};
export const Navbar = () => {
  // what I want to do is to create a function to include all link
  return (
    <div className="flex justify-between mx-[1rem] md:mx-[3rem] mt-[1rem] py-[1rem] border-b-2 ">
      <nav className="flex text-primary text-lg font-medium gap-[1rem]">
        <NavButton href="/" text="Home" />
        <NavButton href="/projects" className="" text="Projects" />
      </nav>
      <nav className="flex gap-3 ">
        <a className="w-[1.5rem] h-[1.5rem]" href="https://github.com/june9999">
          <GithubIcon />
        </a>
        <a
          className="w-[1.5rem] h-[1.5rem]"
          href="https://www.linkedin.com/in/wenjunxue/"
        >
          <LinkedInIcon />
        </a>
      </nav>
      {/* <div className="absolute left-[50%] top-[2.5%]">
        <Logo />
      </div> */}
    </div>
  );
};
