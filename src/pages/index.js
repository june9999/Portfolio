import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ProImg from "@/components/ProImg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow, LinkedInIcon } from "@/components/Icon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Wenjun Portfolio</title>
        <meta name="description" content="the index page" />
      </Head>
      <div className="w-full flex">
        <div className="w-1/2 flex flex-col mt-[7rem] pl-[6rem] overflow-hidden">
          <div>
            <AnimatedText
              className="!text-6xl "
              text={"turn complexity into clean and sustainable code"}
            />
          </div>
          <p className="mt-10 font-medium text-base text-primary">
            Welcome to my personal Site.
          </p>
          <p className="mt-10 mb-10 font-medium text-base text-primary">
            My name is Wenjun. As a motivated and ambitious junior software
            engineer/full-stack web developer, I am dedicated to producing
            clean, sustainable code.
          </p>
          <div className="text-light flex gap-[1rem]">
            <Link
              target={"_blank"}
              href="./CV.pdf"
              className="flex p-2.5 px-6 bg-dark rounded-lg text-lg font-semibold hover:bg-light hover:text-dark"
              download={true}
            >
              Resume <LinkArrow className={"pl-2"} />
            </Link>
            <Link
              href="mailto:wenjunxue0@gmail.com"
              className="flex p-2.5 px-6 bg-dark rounded-lg text-lg font-semibold hover:bg-light hover:text-dark"
            >
              {" "}
              Contact
            </Link>
          </div>
        </div>
        <div className="w-1/2 ">
          <ProImg className="" />
        </div>
      </div>
    </>
  );
}
