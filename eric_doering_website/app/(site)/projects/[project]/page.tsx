import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
    params: { project: string }
}

export default async function Project({ params }: Props){
    const navigateLink = "https://github.com/ericdoering/navigate_for_rate"
    const chordLink = "https://github.com/ericdoering/chord_progress"
    const positiveLink = "https://github.com/ericdoering/project_positive"
    const slug = params.project;
    const project = await getProject(slug)
    let code;

    if(project.name.includes("Expensed")){
        code = navigateLink
    }
    else if(project.name.includes("Project")){
        code = positiveLink
    }
    else if(project.name.includes("Chord")) {
        code = chordLink
    }

    return (
        <div className="content all">
            <header className="flex items-center justify-between">
                <h1 className="text-gray-100 text-3xl drop-shadow font-extrabold"
                >{project.name}</h1>
                <div>
                <a 
                href={code} 
                title="View Code" 
                target="_blank" 
                rel="noopener noreferrer"
                className="link-button bg-gray-100 rounded lg text-gray-500 font-bold py-3 px-4 mr-3 whitespace-nowrap hover:bg-gray-900 hover:text-gray-100 transition"
                >View Code</a>
                <a 
                href={project.url} 
                title="View Project" 
                target="_blank" 
                rel="noopener noreferrer"
                className="link-button bg-gray-100 rounded lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-gray-900 hover:text-gray-100 transition"
                >View Project</a>
                </div>
            </header>
            <div className="text-lg text-gray-900 mt-5">
                <div className="rounded shadow-lg bg-gray-100 p-3">
                    <PortableText value={project.content}/>
                </div>
            </div>
            <Image loading="lazy"
            src={project.image}
            alt={project.name}
            width={1920}
            height={1080}
            className="mt-10 border-2 border-white object-cover rounded-xl"
            />
        </div>
    )
};