"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftIcon,
  UserIcon,
  MapPinIcon,
  CalendarIcon,
  WrenchIcon,
  XIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import type { Project } from "@/types/project";

interface ProjectDisplayProps {
  project: Project;
}

export default function ProjectDisplay({ project }: ProjectDisplayProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === null ? null : prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === null ? null : prev === project.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImageIndex === null) return;
    if (e.key === "ArrowLeft") handlePrevImage();
    if (e.key === "ArrowRight") handleNextImage();
    if (e.key === "Escape") setSelectedImageIndex(null);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src={project.mainImage || ""}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative h-full">
          <div className="flex flex-col justify-center h-full text-white">
            <Link
              href="/portfolio"
              className="flex items-center gap-2 text-white/80 hover:text-white mb-6 w-fit"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back to Portfolio
            </Link>
            <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-white/80">{project.category}</p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Project Info */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-gray-600 mb-8">{project.description}</p>

              <div className="mb-12">
                <h3 className="text-xl font-bold mb-4">The Challenge</h3>
                <p className="text-gray-600 mb-8">{project.challenge}</p>

                <h3 className="text-xl font-bold mb-4">Our Solution</h3>
                <p className="text-gray-600">{project.solution}</p>
              </div>

              {/* Project Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {project.gallery.map((image: string, index: number) => (
                  <div
                    key={index}
                    className={`relative ${
                      index === 0
                        ? "md:col-span-2 aspect-[21/9]"
                        : "aspect-square"
                    } group overflow-hidden rounded-2xl cursor-pointer`}
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} gallery image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-medium">
                        View Image {index + 1}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Details Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 shadow-lg">
                <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Project Details
                </h3>

                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <UserIcon className="w-5 h-5 text-blue-500" />
                      </div>
                      <h4 className="text-sm font-medium text-gray-500">
                        Client
                      </h4>
                    </div>
                    <p className="font-semibold text-xl text-gray-900">
                      {project.client}
                    </p>
                  </div>

                  <div className="group p-6 rounded-xl border border-gray-100 transition-all duration-300 hover:bg-white hover:shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <MapPinIcon className="w-5 h-5 text-green-500" />
                      </div>
                      <h4 className="text-sm font-medium text-gray-500">
                        Location
                      </h4>
                    </div>
                    <p className="font-medium text-lg text-gray-900">
                      {project.location}
                    </p>
                  </div>

                  <div className="group p-6 rounded-xl border border-gray-100 transition-all duration-300 hover:bg-white hover:shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-purple-50 rounded-lg">
                        <CalendarIcon className="w-5 h-5 text-purple-500" />
                      </div>
                      <h4 className="text-sm font-medium text-gray-500">
                        Year
                      </h4>
                    </div>
                    <p className="font-medium text-lg text-gray-900">
                      {project.year}
                    </p>
                  </div>

                  <div className="group p-6 rounded-xl border border-gray-100 transition-all duration-300 hover:bg-white hover:shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-orange-50 rounded-lg">
                        <WrenchIcon className="w-5 h-5 text-orange-500" />
                      </div>
                      <h4 className="text-sm font-medium text-gray-500">
                        Services
                      </h4>
                    </div>
                    <ul className="space-y-2 mt-2">
                      {project.services.map(
                        (service: string, index: number) => (
                          <li
                            key={index}
                            className="text-gray-700 flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-300" />
                            {service}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
            >
              <XIcon className="w-8 h-8" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              className="absolute left-4 text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
            >
              <ChevronLeftIcon className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute right-4 text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
            >
              <ChevronRightIcon className="w-8 h-8" />
            </button>

            {/* Image */}
            <div className="relative w-[90vw] h-[90vh]">
              <Image
                src={project.gallery[selectedImageIndex]}
                alt={`${project.title} gallery image ${selectedImageIndex + 1}`}
                fill
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80">
              {selectedImageIndex + 1} / {project.gallery.length}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
