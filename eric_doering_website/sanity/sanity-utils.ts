import { createClient } from "next-sanity";

export async function getProjects(){
    const client = createClient({
        projectId: "xsvj9bid",
        dataset: "production",
        apiVersion: "2023-05-13",
    })
};