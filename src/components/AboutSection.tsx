"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("Skills");

  const tabs = ["Skills", "Experience", "Destination"];

  const tabContent = {
    Skills: {
      text: "Uniquely repurpose client-centered imperatives without distinctive products leverage existing fully researched.",
      points: ["Great Quality Service", "Professional Work Skills"],
    },
    Experience: {
      text: "With over 10 years of experience, we've successfully completed hundreds of renovation projects across the country.",
      points: ["Certified Professionals", "Award-winning Projects"],
    },
    Destination: {
      text: "Transform your space into the destination of your dreams with our innovative design solutions and expert craftsmanship.",
      points: ["Custom Design Solutions", "Timely Project Completion"],
    },
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Images */}
          <div className="relative h-[600px] w-full max-w-[400px] mx-auto">
            <div className="absolute top-0 right-0 w-[300px] h-[400px] z-20 animate-float-1">
              <Image
                src="/ren2.jpg"
                alt="Modern interior design"
                fill
                className="object-cover shadow-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[400px] animate-float-2">
              <Image
                src="/ren1.jpg"
                alt="Interior with hanging lights"
                fill
                className="object-cover shadow-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h3 className="text-sm font-medium text-orange-500 mb-3">
              RENOVATION COMPANY
            </h3>
            <h2 className="text-4xl font-bold mb-8">
              Our Thoughts For Developing
              <br />
              Your Stylish Life Level.
            </h2>

            {/* Tabs */}
            <div className="flex gap-6 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 font-medium transition-colors ${
                    activeTab === tab
                      ? "bg-black text-white"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-8"
              >
                <p className="text-gray-600 mb-6">
                  {tabContent[activeTab as keyof typeof tabContent].text}
                </p>
                <ul className="space-y-3">
                  {tabContent[activeTab as keyof typeof tabContent].points.map(
                    (point, index) => (
                      <motion.li
                        key={point}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="flex items-center gap-3"
                      >
                        <span className="w-2 h-2 bg-orange-500 rounded-full" />
                        {point}
                      </motion.li>
                    )
                  )}
                </ul>
              </motion.div>
            </AnimatePresence>

            <Link
              href="/learn-more"
              className="inline-block bg-black text-white px-8 py-4 font-medium hover:bg-black/90 transition-colors"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
