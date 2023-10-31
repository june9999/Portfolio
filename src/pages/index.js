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

      <main className="flex flex-col justify-center items-center w-full h-auto pb-[5rem]">
        <div className="p-[3rem] ">
          <AnimatedText className="" text={"Fueling Passion into Software"} />
        </div>
        <div className="px-[3rem]">
          <div className="grid grid-cols-8 w-full p-8">
            <section className="col-span-3 flex flex-col ">
              <h1 className="text-dark  uppercase my-[4rem] text-lg  font-bold ">
                Hi there, Welcome to my personal Portfolio.
              </h1>
              <p className="font-medium w-[90%]">
                I am Wenjun, a junior software developer.
              </p>
              <p className="font-medium my-[3rem] w-[90%]">
                Here, you&aposll find the culmination of my passion for
                technology, where every application, website, or software
                solution is a testament to the unwavering dedication that
                springs from within.
              </p>
              <p className="font-medium mb-[3rem] w-[90%]">
                If you have any questions, ideas that you are possionate about,
                or just want to connect, don&apost hesitate to reach out.
                I&aposm always open to collaboration.
              </p>
            </section>
            <section className="col-span-3 relative rounded-2xl ">
              <Image
                alt="profile"
                className="p-[1rem] h-auto rounded-2xl"
                src={profile}
              />
            </section>
            <section className="col-span-2 flex flex-col items-end gap-[2rem] text-dark/75 mt-[5rem] pr-[2rem]">
              <div className="flex flex-col items-end">
                <span className="text-6xl font-bold">10+</span>
                <h2 className="text-xl font-medium capitalize">
                  Projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-6xl font-bold">1</span>
                <h2 className="text-xl font-medium capitalize">
                  year of experience
                </h2>
              </div>
              <div className="text-light flex flex-col gap-[2rem]  ">
                <Link
                  target={"_blank"}
                  href="./CV.pdf"
                  className="flex p-2.5 px-6 bg-dark/75 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark"
                  download={true}
                >
                  Resume <LinkArrow className={"pl-2"} />
                </Link>
                <Link
                  href="mailto:wenjunxue0@gmail.com"
                  className="flex p-2.5 px-6 bg-dark/75 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark"
                >
                  {" "}
                  Contact
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
