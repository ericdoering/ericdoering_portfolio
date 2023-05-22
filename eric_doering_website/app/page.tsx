import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import background from "../assets/background.png"
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
            <div className="max-w-5xl mx-auto py-20">
              <h1 className="text-7xl font-extrabold">Hi I&apos;m 
                <span className="bg-gradient-to-r from-red-800 to-green-200 bg-clip-text text-transparent"> Eric Doering</span></h1>
                <p className="mt-3 text-xl text-gray-600">Browse my personal projects</p>
                <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>

              <div className="mt-5 grid grid-row-2 gap-8">
              {projects.map((project) => (
                 <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-gray-500 rounded-lg p-1 
                 hover:scale-105 hover:border-blue-500 transition">
                  {project.image && (
                  <Image 
                  src={project.image}
                  alt={project.name}
                  width={500}
                  height={150}
                  className="object-cover rounded-lg border border-gray-500"
                  /> )}
                  <div className="mt-2 font-extrabold bg-gradient-to-r from-red-800 to-green-200 bg-clip-text text-transparent">
                  {project.name}
                  </div>
                </Link>
              ))}
              </div>
            </div>
          )
        };