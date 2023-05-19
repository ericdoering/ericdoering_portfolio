import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import background from "../assets/background.png"

export default async function Home() {
  const projects = await getProjects();

  return (
            <div className="max-w-5xl mx-auto py-20" style={{ backgroundImage: `url(${background})` }}>
              <h1 className="text-7xl font-extrabold">Hi I&apos;m 
                <span className="bg-gradient-to-r from-red-800 to-green-200 bg-clip-text text-transparent"> Eric Doering</span></h1>
                <p className="mt-3 text-xl text-gray-600">Browse my personal projects</p>
                <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>

              <div className="mt-5 grid grid-row-2 gap-8">
              {projects.map((project) => (
                 <div key={project._id} className="border border-gray-500 rounded-lg p-3">
                  {project.image && (
                  <Image 
                  src={project.image}
                  alt={project.name}
                  width={250}
                  height={100}
                  className="object-cover rounded-lg border border-gray-500"
                  /> )}
                  <div className="font-extrabold bg-gradient-to-r from-red-800 to-green-200 bg-clip-text text-transparent">
                  {project.name}
                  </div>
                </div>
              ))}
              </div>
            </div>
          )
        };