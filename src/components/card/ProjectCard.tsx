"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

interface Project {
  title: string;
  category: string;
  image: string;
  link: string;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="mb-8"
    >
      <div className="relative group overflow-hidden">
        <div className="aspect-[4/3] relative w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="text-orange-400 font-medium mb-2 text-sm tracking-wider uppercase">
              {project.category}
            </div>
            <h3 className="text-white text-xl font-bold mb-4">
              <a
                href={project.link}
                className="hover:text-orange-400 transition-colors"
              >
                {project.title}
              </a>
            </h3>
            <AnimatedButton href={project.link}>
              <span className="text-white">View Project</span>
            </AnimatedButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
