import { prisma } from "@/lib/db";
import { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";
import Loading from "@/components/ui/Loading";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Our Portfolio | BUILDCO",
  description:
    "Explore our diverse portfolio of construction and renovation projects",
};

// Server component to fetch projects
async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

// Main portfolio page component
export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen">
      <Suspense fallback={<Loading />}>
        <PortfolioClient initialProjects={projects} />
      </Suspense>
    </main>
  );
}
