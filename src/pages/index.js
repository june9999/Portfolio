import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow, LinkedInIcon } from "@/components/Icon";
import React from "react";
import profile from "../../public/images/profile/Picture7.svg";
import { GithubIcon } from "@/components/Icon";

const inter = Inter({ subsets: ["latin"] });

const FeaturedProject = ({
  type,
  title,
  description,
  img,
  link,
  githublink,
}) => {
  return (
    <article className="flex mx-auto border-dark border rounded-3xl border-solid shadow-2xl">
      <Link
        href="./CV.pdf"
        target="_blank"
        className="flex justify-center items-center w-1/2 rounded-lg overflow-hiddedn cursor-pointer h-auto m-[2rem]"
      >
        <Image className="rounded-lg" src={img} alt={title} />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-center  px-6 text-primary">
        <span className="font-medium text-xl mb-10 capitalize">{type}</span>
        <Link href="./CV.pdf" className="hover:underline underline-offset-2">
          <h2 className="w-full my-2 text-4xl font-bold">{title}</h2>
        </Link>
        <p className="mt-2 font-medium text-dark">{description}</p>
        <div className="flex gap-[1rem] pt-[1rem] items-center">
          <Link href="./CV.pdf" target="_blank">
            <GithubIcon className={"w-[30px]"} />
          </Link>
          <Link
            href="./CV.pdf"
            target="_blank"
            className="flex items-center font-semibold bg-dark text-light rounded-lg p-2 "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, description, img, link, githublink }) => {
  return (
    <article className="flex flex-col justify w-[45%]  mx-auto border-dark border rounded-3xl border-solid shadow-2xl">
      <Link
        href="./CV.pdf"
        target="_blank"
        className="flex justify-center items-center rounded-lg overflow-hiddedn cursor-pointer h-auto mx-[2rem] mt-[2rem]"
      >
        <Image className="rounded-lg " src={img} alt={title} />
      </Link>
      <div className="flex  w-full flex-col   px-10 text-primary">
        <div className="flex w-full justify-between">
          <span className="font-medium text-xl">{type}</span>

          <div className="flex justify-around items-center">
            <Link href="./CV.pdf" target="_blank">
              <GithubIcon className={"w-[20px]"} />
            </Link>
          </div>
        </div>
        <Link href="./CV.pdf" className="hover:underline underline-offset-2">
          <h2 className="w-full my-2 text-2xl font-bold">{title}</h2>
        </Link>
      </div>
    </article>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Wenjun Portfolio</title>
        <meta
          name="description"
          content="Code from within: Fueling Passion into Software"
        />
      </Head>

      <main className="flex flex-col justify-center items-center w-full h-auto md:pb-[2rem]">
        <div className="p-[2rem] ">
          <AnimatedText
            className="text-[32px] md:text-6xl"
            text={"Fueling Passion into Software"}
          />
        </div>
        <div className=" w-full px-[2rem] ">
          <div className=" flex flex-col mx-auto w-full md:grid md:grid-cols-8  md:p-8">
            <section className="w-full md:col-span-3 flex flex-col gap-[1rem] items-center ">
              <h1 className="text-dark  uppercase md:my-[1rem] text-lg  font-bold mx-auto  ">
                Welcome to My personal Portfolio.
              </h1>
              <p className="font-sm md:font-medium ">
                I am Wenjun, a junior software developer.
              </p>
              <p className="hidden md:font-medium md:my-[1rem] lg:flex ">
                Here, you&rsquo;ll find the culmination of my passion for
                technology, where every application, website, or software
                solution is a testament to the unwavering dedication that
                springs from within.
              </p>
              <p className="font-sm text-start md:mb-[1rem] md:font-medium ">
                If you have any questions, ideas that you are possionate about,
                or just want to connect, don&rsquo; hesitate to reach out.
                I&rsquo; always open to collaboration.
              </p>
              <div className="text-light flex gap-[1rem] ">
                <Link
                  target={"_blank"}
                  href="./Wenjun_CV.pdf"
                  className="flex w-[8rem] p-2.5 px-6 bg-dark/75 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark"
                  download={true}
                >
                  Resume <LinkArrow className={"pl-2 w-10"} />
                </Link>
                <Link
                  href="mailto:wenjunxue0@gmail.com"
                  className="flex  w-[8rem] p-2.5 px-6 bg-dark/75 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark"
                >
                  Contact
                </Link>
              </div>
            </section>
            <section className="flex justify-center md:col-span-3">
              <Image
                alt="cat"
                className=" h-auto  sm:max-w-[28rem] md:max-w-full"
                src={profile}
              />
            </section>
            <section className="col-span-2 flex flex-col items-center md:items-end gap-[2rem] text-dark/75  my-[3rem]">
              <h1 className="uppercase text-lg font-bold">Overview</h1>
              <div className="flex flex-col md:items-end md:text-end">
                <span className="text-4xl lg:text-6xl font-bold">10+</span>
                <h2 className="text-lg lg:text-xl font-medium capitalize">
                  Projects completed
                </h2>
              </div>
              <div className="flex flex-col md:items-end md:text-end">
                <span className="text-4xl lg:text-6xl font-bold">1</span>
                <h2 className="text-lg lg:text-xl font-medium capitalize">
                  year of experience
                </h2>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
