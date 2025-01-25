"use client";
import { motion } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import { ProjectCard } from "@/components/card/ProjectCard";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

const projects = [
  {
    title: "Healthcare Facility",
    category: "Healthcare",
    image: "/work1.jpg",
    link: "/portfolio/healthcare-facility",
  },
  {
    title: "Luxury Home Renovation",
    category: "Residential",
    image: "/work2.jpg",
    link: "/portfolio/luxury-home-renovation",
  },
  {
    title: "Community Center",
    category: "Public Spaces",
    image: "/work3.jpg",
    link: "/portfolio/community-center",
  },
  {
    title: "Industrial Warehouse",
    category: "Industrial",
    image: "/work4.jpg",
    link: "/portfolio/industrial-warehouse",
  },
];

export default function WorkSection() {
  return (
    <ParallaxProvider>
      <section className="py-24 relative">
        {/* Main Content */}
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Sticky Content */}
            <div className="lg:sticky lg:top-32 lg:min-h-fit">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="text-orange-400 font-medium mb-4 text-sm tracking-wider uppercase">
                  Latest Creations
                </div>
                <h2 className="text-4xl font-bold mb-6">
                  View Our Completed Projects
                </h2>
                <p className="text-gray-600 mt-6 mb-8 max-w-lg">
                  Explore our portfolio of successful projects across various
                  sectors. From healthcare facilities to luxury homes, each
                  project showcases our commitment to excellence and attention
                  to detail.
                </p>
                <AnimatedButton href="/portfolio">All Projects</AnimatedButton>
              </motion.div>
            </div>

            {/* Right Scrolling Content */}
            <div className="space-y-8">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
}
