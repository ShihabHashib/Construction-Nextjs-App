"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const words = ["EXCELLENCE", "INNOVATION", "QUALITY", "INTEGRITY"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [words.length]);

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
    exit: (i: number) => ({
      opacity: 0,
      y: -20,
      transition: {
        delay: i * 0.05,
        duration: 0.2,
      },
    }),
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative h-screen flex items-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Left gradient */}
      <div className="absolute left-0 top-0 h-full w-[50%] bg-gradient-to-r from-black/90 to-transparent z-10" />

      {/* Right gradient */}
      <div className="absolute right-0 top-0 h-full w-[30%] bg-gradient-to-l from-black/50 to-transparent z-10" />

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/renovation.jpg')",
        }}
      />

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 relative z-20 text-white"
        initial="hidden"
        animate="visible"
        variants={containerAnimation}
      >
        <div className="max-w-3xl">
          <motion.div
            className="text-orange-500 font-medium mb-4"
            variants={itemAnimation}
          >
            Building Excellence Since 1995
          </motion.div>
          <motion.h1
            className="text-5xl sm:text-7xl font-bold mb-6 leading-tight tracking-wide"
            variants={itemAnimation}
          >
            BUILDING THE
            <br />
            FUTURE WITH
            <br />
            <span className="text-outline inline-block h-[1.1em] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[currentWordIndex]}
                  className="inline-block"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ staggerChildren: 0.1 }}
                >
                  {words[currentWordIndex].split("").map((char, i) => (
                    <motion.span
                      key={i}
                      className="inline-block"
                      variants={letterAnimation}
                      custom={i}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>
          <motion.p
            className="text-lg mb-8 text-gray-200 max-w-xl font-light"
            variants={itemAnimation}
          >
            Transforming visions into reality with innovative construction
            solutions. Delivering exceptional quality and reliability in every
            project.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4" variants={itemAnimation}>
            <Link
              href="/portfolio"
              className="border border-white bg-transparent hover:bg-white text-white hover:text-black px-12 py-4 transition-all duration-300 font-semibold hover:-translate-y-0.5 hover:shadow-xl text-lg tracking-wide"
            >
              Our Projects
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
