import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profile from "../../public/images/profile/profile.png";
import Skills from "@/components/Skills";
const about = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Detailed Infromation" />
      </Head>
      <main>
        <div className="mt-[2rem] px-[3rem]">
          <AnimatedText className="pl-8" text={"Test' Rest' repeat'"} />
          <div className="grid grid-cols-8 w-full p-8">
            <section className="col-span-3 flex flex-col ">
              <h2 className="text-dark/75  uppercase mt-[4rem] text-lg  font-bold ">
                The Will from within
              </h2>
              <p className="font-medium w-[90%]">
                Hi, I am Wenjun. I am a junior software developer. With a robust
                educational foundation derived from a reputable bootcamp and
                university program, I have demonstrated a remarkable proficiency
                in JavaScript, React, Java.
              </p>
              <p className="font-medium my-[3rem] w-[90%]">
                I am fully prepared to lend my technical expertise to tackle
                novel challenges, fostering my ongoing professional development.
                Through addressing practical software problem, I get huge
                satisfaction and enjoyment.
              </p>
              <p className="font-medium mb-[3rem] w-[90%]">
                My unrelenting commitment to perfection is a trademark of my
                work. I look forward to the opportunity to bring my skills and
                passion to your next project.
              </p>
            </section>
            <section className="col-span-3 relative rounded-2xl border-2 border-solid border-dark bg-[] ">
              <Image
                alt="profile"
                className="p-[1rem] h-auto rounded-2xl"
                src={profile}
              />
            </section>
            <section className="col-span-2 flex flex-col items-end gap-[2rem] text-dark/75 mt-[5rem]">
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
            </section>
          </div>
        </div>
        <div>
          <Skills />
        </div>
      </main>
    </>
  );
};

export default about;
