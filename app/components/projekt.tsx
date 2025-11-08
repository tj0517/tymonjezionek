"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  image: string;
  tags: string[];
  description: string;
  buttonText: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}            // start: lekko w dół i niewidoczny
      whileInView={{ y: 0, opacity: 1 }}        // koniec: normalna pozycja i pełna widoczność
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}     // animacja odpala się dopiero przy scrollu
      className="w-[95%] mx-auto lg:mx-0 lg:w-[45%] flex flex-col relative"
    >
      {/* Obrazek projektu */}
<div className="w-full h-[50vw] lg:h-[25vw] relative overflow-hidden rounded-4xl">
  <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-cover"
  />
</div>


      {/* Tag list */}
      <div className="w-full flex space-x-4 mt-4 font-light">
        {project.tags.map((tag, i) => (
          <div key={i} className="px-4 py-2 bg-blue-400 rounded-xl">
            {tag}
          </div>
        ))}
      </div>

      {/* Opis */}
      <div className="w-full md:w-[90%] lg:w-[80%] mt-6 md:mt-10 lg:mt-6 xl:mt-10  md:text-lg lg:text-[14px] xl:text-[16px]">{project.description}</div>

      {/* Przycisk */}
      <button className="bg-stone-800 py-3 border-2 border-blue-400 rounded-2xl w-1/2 xl:w-[40%] text-lg xl:text-xl mt-8 md:mt-10 ld:mt-6 xl:mt-10 shadow-[-5px_4px_10px_2px_#3B82F6]">
        {project.buttonText}
      </button>
    </motion.div>
  );
}
