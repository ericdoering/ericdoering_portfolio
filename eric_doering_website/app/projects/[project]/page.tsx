import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
    params: { project: string }
}

export default async function Project({ params }: Props){
    const slug = params.project;
    const project = await getProject(slug)

    return (
        <div className="max-w-3xl mx-auto py-20">
            <header className="flex items-center justify-between">
                <h1 className="bg-gradient-to-r from-red-800 to-green-200 bg-clip-text text-transparent text-3xl drop-shadow font-extrabold"
                >{project.name}</h1>
                <a 
                href={project.url} 
                title="View Project" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 rounded lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-gray-900 hover:text-gray-100 transition"
                >View Project</a>
            </header>
            <div className="text-lg text-gray-900 mt-5">
                <PortableText value={project.content}/>
            </div>
            <Image 
            src={project.image}
            alt={project.name}
            width={1920}
            height={1080}
            className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
            />
        </div>
    )
};