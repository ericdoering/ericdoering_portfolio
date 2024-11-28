import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import profile from "../../../assets/website_profile_picture.png";
import profile2 from  "../../../assets/profile2.png"
import profile3 from "../../../assets/profile3.png"
import Image from "next/image";
import LinkedInIcon from '../../../assets/linkedin.svg';
import GithubIcon from '../../../assets/github.svg';
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div>
      {page.title && page.title.includes("About") ? (
        <div className="content-container all">
          <h1 className="text-4xl drop-shadow font-extrabold text-gray-100">{page.title}</h1>
          <div className="profile-container">
            <Image 
              priority={true}
              placeholder="blur"
              className="mt-10 border-2 border-gray-100 rounded move-profile-1"
              src={profile}
              alt="Eric profile"
              width={150}
              height={250}
            />
            <Image 
              priority={true}
              placeholder="blur"
              className="mt-10 ml-20 border-2 border-gray-100 rounded move-profile-2"
              src={profile3}
              alt="Eric profile"
              width={150}
              height={250}
            />
            <Image 
              priority={true}
              placeholder="blur"
              className="mt-10 ml-20 border-2 border-gray-100 rounded move-profile-3"
              src={profile2}
              alt="Eric profile"
              width={150}
              height={250}
            />
          </div>
          <div className="rounded shadow-lg bg-gray-100 pb-5 content">
            <div className="text-sm text-gray-700 mt-8 px-6 pt-4">
              <PortableText value={page.content} />
            </div>
          </div>
        </div>
      ) : null}
  
      {page.title && page.title.includes("Contact") ? (
        <div className="max-w-sm rounded shadow-lg bg-gray-100 pb-5 border-4 border-gray-900 ml-2 content">
          <div className="text-md text-gray-700 mt-4 px-6">
            <PortableText value={page.content} />
            <div className="flex items-center justify-evenly mt-2">
              <a href="https://www.linkedin.com/in/eric-doering-3989aa141/" target="_blank"><Image height={50} className="mt-4 mr-2 hover:scale-110"  alt="Linked In" src={LinkedInIcon}/></a>
              <a href="https://github.com/ericdoering" target="_blank"><Image height={50} className="mt-4 hover:scale-110"  alt="Github" src={GithubIcon}/></a>
            </div>
            <div className="flex justify-center mt-8">
                <button className="resume bg-gray-900 hover:bg-gray-600 px-20 py-4 rounded-md">
                        <a className="text-white" href="/eric_doering_resume_2024.pdf"  download>
                          Download Resume
                          <div className="flex justify-center">
                            <svg className="res-img mt-4" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" version="1.1" id="resume" width="30px" height="30px" viewBox="0 0 61.994 61.994">
                                <g>
                                  <g>
                                    <path d="M54.988,23.789l-0.031-0.113c-0.025-0.193-0.07-0.38-0.135-0.572l-0.064-0.192l-0.046-0.099    c-0.103-0.222-0.222-0.418-0.358-0.597l-0.033-0.068L33.05,0.884c-0.248-0.248-0.537-0.446-0.9-0.613l-0.253-0.094    c-0.187-0.064-0.378-0.109-0.581-0.137L31.169,0H17C11.486,0,7,4.485,7,10v41.994c0,5.514,4.486,10,10.001,10h27.996    c5.515,0,9.998-4.484,9.998-10V24.073L54.988,23.789z M48.994,51.993c0,2.203-1.793,3.997-3.997,3.997H17    c-2.205,0-3.999-1.794-3.999-3.997V9.999C13.001,7.794,14.794,6,17,6h10.921v11.072c0,5.514,4.486,10.001,10,10.001h11.072V51.993    z"/>
                                    <path d="M14.675,34.112c0,1.291,1.046,2.337,2.337,2.337h26.487c1.291,0,2.337-1.047,2.337-2.337s-1.046-2.337-2.337-2.337H17.012    C15.721,31.775,14.675,32.822,14.675,34.112z"/>
                                    <path d="M43.499,38.008H17.012c-1.291,0-2.337,1.047-2.337,2.336c0,1.291,1.046,2.338,2.337,2.338h26.487    c1.291,0,2.337-1.047,2.337-2.338C45.836,39.055,44.79,38.008,43.499,38.008z"/>
                                    <path d="M43.499,44.24H17.012c-1.291,0-2.337,1.046-2.337,2.337s1.046,2.337,2.337,2.337h26.487c1.291,0,2.337-1.047,2.337-2.337    S44.79,44.24,43.499,44.24z"/>
                                  </g>
                                </g>
                            </svg>
                          </div>
                        </a>
                </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}