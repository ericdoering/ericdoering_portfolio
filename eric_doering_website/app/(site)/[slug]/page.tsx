import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import profile from "../../../assets/website_profile_picture.png";
import profile2 from  "../../../assets/profile2.png"
import profile3 from "../../../assets/profile3.png"
import Image from "next/image";
import LinkedInIcon from '../../../assets/linkedin.svg';
import GithubIcon from '../../../assets/github.svg';

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
            <div className="flex items-center justify-evenly">
              <a href="https://www.linkedin.com/in/eric-doering-3989aa141/" target="_blank"><Image height={50} className="mt-4 mr-2 hover:scale-110"  alt="Linked In" src={LinkedInIcon}/></a>
              <a href="https://github.com/ericdoering" target="_blank"><Image height={50} className="mt-4 hover:scale-110"  alt="Github" src={GithubIcon}/></a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}