import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { Skills } from "@/components/skills";
import Earth from "../../assets/earth-americas-solid.svg"

export default async function Home() {
  const projects = await getProjects();

  return (
            <div className="all" rel="pre-load">
              <h1 className="text-7xl text-gray-400 font-extrabold">
                <span className="text-gray-200"> Eric Doering</span></h1>
                <div className="flex items-center flex-wrap">
                <p className="mt-3 text-xl text-gray-200">Creating solutions for the digital environment.</p>
                <Image className="earth ml-1 mt-3 sm:flex-column" height={30} alt="Earth" src={Earth}/>
                </div>
                <Skills />
                <h2 className="mt-10 font-bold text-gray-200 text-3xl">My Projects</h2>

              <div className="mt-5 grid grid-cols-2 gap-y-8 gap-x-1">
              {projects.map((project) => (
                 <Link href={`/projects/${project.slug}`} key={project._id} className=" 
                 hover:scale-105 hover:border-blue-500 transition project-img">
                  {project.image && (
                  <Image loading="lazy"
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={150}
                  className="object-cover rounded"
                  /> )}
                  <div className="mt-2 font-extrabold text-gray-200">
                  {project.name}
                  </div>
                </Link>
              ))}
              </div>
            </div>
          )
        };