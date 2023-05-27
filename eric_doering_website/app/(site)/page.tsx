import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
            <div>
              <h1 className="text-7xl text-gray-300 font-extrabold">
                <span className="text-gray-300 bg-clip-text text-transparent"> Eric Doering</span></h1>
                <p className="mt-3 text-xl text-gray-800">Creating technology solutions in Science, Engineering, and Architecture</p>
                <h2 className="mt-10 font-bold text-gray-700 text-3xl">My Projects</h2>

              <div className="mt-5 grid grid-row-2 gap-8">
              {projects.map((project) => (
                 <Link href={`/projects/${project.slug}`} key={project._id} className=" 
                 hover:scale-105 hover:border-blue-500 transition">
                  {project.image && (
                  <Image 
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={150}
                  className="object-cover rounded"
                  /> )}
                  <div className="mt-2 font-extrabold text-gray-800 bg-clip-text text-transparent">
                  {project.name}
                  </div>
                </Link>
              ))}
              </div>
            </div>
          )
        };