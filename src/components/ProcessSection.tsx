"use client";
import { motion } from "framer-motion";
import { useParallax } from "react-scroll-parallax";
import {
  ChatBubbleBottomCenterTextIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "Initial meeting to discuss your vision and requirements",
    Icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    number: "02",
    title: "Detailed Proposal",
    description: "Comprehensive plan with timeline and cost breakdown",
    Icon: ClipboardDocumentCheckIcon,
  },
  {
    number: "03",
    title: "Project Installation",
    description: "Expert execution of the renovation project",
    Icon: WrenchScrewdriverIcon,
  },
  {
    number: "04",
    title: "Final Inspection",
    description: "Quality assurance and project completion review",
    Icon: MagnifyingGlassIcon,
  },
];

export default function ProcessSection() {
  const parallax = useParallax<HTMLDivElement>({
    speed: -5,
  });

  const stepsParallax = useParallax<HTMLDivElement>({
    translateY: [0, 20],
    scale: [1, 1.1],
    easing: "easeInQuad",
  });

  return (
    <section className="py-24 relative overflow-hidden">
      <div
        ref={parallax.ref}
        className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-sm font-medium tracking-wider text-orange-400 uppercase mb-4">
            RENOVATION COMPANY
          </h3>
          <h2 className="text-4xl font-bold mb-6">Working Easy Process</h2>
        </motion.div>

        <div
          ref={stepsParallax.ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 relative flex items-center justify-center bg-white rounded-xl shadow-sm">
                  <step.Icon className="w-8 h-8 text-orange-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              <div className="absolute -z-10 top-0 right-0 text-gray-100 text-[120px] font-bold opacity-20">
                {step.number}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
