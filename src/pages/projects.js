import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icon";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/project1.png";
import whatapp from "../../public/images/projects/whatapp.png";

const FeaturedProject = ({
  type,
  title,
  description,
  img,
  link,
  githublink,
  TechlogyStack,
}) => {
  return (
    <article className="flex flex-col w-full md:flex-row mx-auto border-dark border rounded-3xl border-solid shadow-2xl">
      <Link
        href={link}
        target="_blank"
        className="flex justify-center items-center  md:w-1/2 rounded-lg overflow-hiddedn cursor-pointer h-auto m-[1rem] md:m-[2rem]"
      >
        <Image className="rounded-lg" src={img} alt={title} />
      </Link>
      <div className="flex w-full md:w-1/2 flex-col items-start justify-center px-6 text-primary">
        <span className="md:font-medium md:text-xl md:my-4 capitalize ">
          {type}
        </span>
        <h2 className="w-full my-2 md:text-4xl font-bold">{title}</h2>
        <p className="mt-2 font-medium text-dark max-h-[10rem] overflow-auto">
          General description: {description}
        </p>
        <p className="mt-2 font-medium text-dark max-h-[10rem] overflow-auto">
          Technology Stack: {TechlogyStack}
        </p>
        <div className="flex gap-[1rem] pt-[1rem] items-center pb-[1rem]">
          {githublink && (
            <Link href={githublink} target="_blank">
              <GithubIcon className={"w-[50px]"} />
            </Link>
          )}
          <Link
            href={link}
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
        href={link}
        target="_blank"
        className="flex justify-center items-center rounded-lg overflow-hiddedn cursor-pointer h-auto mx-[2rem] mt-[2rem]"
      >
        <Image className="rounded-lg " src={img} alt={title} />
      </Link>
      <div className="flex  w-full flex-col   px-10 text-primary">
        <div className="flex w-full justify-between">
          <span className="font-medium text-xl">{type}</span>

          {githublink && (
            <div className="flex justify-around items-center">
              <Link href={githublink} target="_blank">
                <GithubIcon className={"w-[40px]"} />
              </Link>
            </div>
          )}
        </div>
        <Link href={link} className="hover:underline underline-offset-2">
          <h2 className="w-full my-2 text-2xl font-bold">{title}</h2>
        </Link>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects Page</title>
        <meta name="description" content="showing the projects" />
      </Head>
      <main className="flex flex-col justify-center items-center w-full h-auto pb-[5rem]">
        <div className="p-[3rem] ">
          <AnimatedText
            className="text-[32px]  md:text-6xl"
            text={"Experience is the best teacher"}
          />
        </div>
        <div className="flex flex-wrap mb-8 gap-8 w-[80%]">
          <FeaturedProject
            type={"Ongoing Web App"}
            img={whatapp}
            link="https://whatsap.whatsap.dpschool.app/"
            githublink=""
            description="Digital Product to help Supply chain managers to detect external factors and collect data for forecast model "
            TechlogyStack="
             React, Node.js, Express.js, Typerscript. Amazon lambda& serverless services. "
            title="X-factor"
          />
          <FeaturedProject
            type={"Web App"}
            img={project1}
            link="https://wbs-delivery.onrender.com/"
            githublink="https://github.com/june9999/Wbs_Delivery"
            description="Final project created during Bootcamp, an web app to enable emergency delivery witin city. Continuously update to complete more feature."
            TechlogyStack="
             React, Node.js, Express.js, MongoDB Atlas, and Mongoose. We've seamlessly integrated a chatbot, Google Maps, added real-time communication facilitated by Socket.io, ensuring efficient deliveries."
            title="RapidCats"
          />
          {/* <Project
            type={"web App"}
            img={project1}
            description="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
            githublink="https://github.com/june9999/Portfolio"
            title="Delivery App"
          />
          <Project
            type={"web App"}
            img={project1}
            description="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
            githublink="https://github.com/june9999/Portfolio"
            title="Delivery App"
          /> */}
        </div>
      </main>
    </>
  );
};

export default Projects;
