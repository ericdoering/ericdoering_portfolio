import { createClient, groq } from "next-sanity";

export async function getProjects(){
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
