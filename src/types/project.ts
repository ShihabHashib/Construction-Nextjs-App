export interface Project {
    id: string;
    slug: string;
    title: string;
    category: string;
    description: string;
    image: string;
    mainImage: string | null;
    gallery: string[];
    challenge: string | null;
    solution: string | null;
    client: string | null;
    location: string | null;
    year: string | null;
    services: string[];
    createdAt: Date;
    updatedAt: Date;
} 