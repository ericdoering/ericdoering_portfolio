import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";

export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: "xsvj9bid",
        dataset: "production",
        apiVersion: "2023-05-13",
    });

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": img.asset->url,
            url,
            content
        }`
    ) 
};
