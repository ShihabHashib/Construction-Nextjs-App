import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import ProjectDisplay from "./ProjectDisplay";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await prisma.project.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!project) {
    notFound();
  }

  return <ProjectDisplay project={project} />;
}
