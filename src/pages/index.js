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
        <div className="w-1/2 flex flex-col mt-[10rem] pl-[6rem] overflow-hidden">
          <div>
            <AnimatedText
              className="!text-6xl "
              text={"turn complexity into clean and sustainable code"}
            />
          </div>
          <p className="my-4 font-medium text-base text-primary">
            As a motivated and ambitious junior software engineer/full-stack web
            developer, I am dedicated to producing clean, sustainable code. As I
            continue on my ongoing professional development journey, I am ready
            to maximize my technological expertise and eagerly embrace new
            challenges.
          </p>
          <div className="text-light flex gap-[1rem]">
            <Link
              target={"_blank"}
              href="./Wenjun_CV.pdf"
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
