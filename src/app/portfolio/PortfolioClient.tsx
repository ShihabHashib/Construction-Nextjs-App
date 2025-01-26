"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

export default function PortfolioClient({
  initialProjects,
}: {
  initialProjects: Project[];
}) {
  const categories = [
    "All",
    ...new Set(initialProjects.map((project) => project.category)),
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = initialProjects.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <main className="pt-24">
      {/* Rest of your existing JSX */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 transition-colors ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <Link href={`/portfolio/${project.slug}`}>
                    <div className="relative aspect-[4/3] overflow-hidden mb-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-medium">
                          View Project
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-2">
                        {project.description}
                      </p>
                      <span className="text-sm font-medium text-orange-500">
                        {project.category}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
