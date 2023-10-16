import React from "react";
import { motion } from "framer-motion";

const SkillPoinr = ({ name, x, y }) => {
  return (
    <>
      <motion.span
        className={`p-3 bg-dark/75 absolute text-light rounded-full capitalize cursor-pointer`}
        whileHover={{ scale: 1.2 }}
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y }}
        transition={{ duration: 1.5 }}
      >
        {name}
      </motion.span>
    </>
  );
};

const Skills = () => {
  return (
    <div>
      <h2 className="flex justify-center text-dark font-bold text-6xl mt-[6rem] ">
        Skills
      </h2>
      <section className=" justify-center text-center  flex mx-[10rem] h-screen items-center justify-center rounded-full bg-round relative">
        <SkillPoinr name="web" x="50px" y="30px" />
        <SkillPoinr name="React" x="-50px" y="30px" />
        <SkillPoinr name="Javascript" x="50px" y="-30px" />
        <SkillPoinr name="Java" x="-200px" y="30px" />
        <SkillPoinr name="Typerscript" x="200px" y="30px" />
        <SkillPoinr name="AWS sst" x="400px" y="-20px" />
        <SkillPoinr name="CSS" x="150px" y="100px" />
        <SkillPoinr name="HTML" x="-150px" y="100px" />
      </section>
    </div>
  );
};

export default Skills;
