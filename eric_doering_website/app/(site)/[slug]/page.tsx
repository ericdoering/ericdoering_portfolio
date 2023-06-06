import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import profile from "../../../assets/website_profile_picture.png";
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
      <h1 className="text-4xl drop-shadow font-extrabold text-gray-100">{page.title}</h1>
      {page.title && page.title.includes("About") ? (
        <>
          <div>
            <Image
              className="mt-10 border-white rounded"
              src={profile}
              alt="Eric profile"
              width={200}
              height={300}
            />
          </div>
          <div className="max-w-md rounded shadow-lg bg-gray-200 pb-5">
            <div className="text-md text-gray-700 mt-10 px-6 pt-4">
              <PortableText value={page.content} />
            </div>
          </div>
        </>
        ) : null}




      {page.title && page.title.includes("Contact") ? (
      <div>
      <div className="max-w-md rounded shadow-lg bg-gray-200 pb-5">
        <div className="text-md text-gray-700 mt-10 px-6 pt-4">
          <PortableText value={page.content} />
            <div className="flex items-center justify-evenly">
              <a href="https://www.linkedin.com/in/eric-doering-3989aa141/" target="_blank"><Image height={50} className="mt-4 mr-2 hover:scale-110"  alt="Linked In" src={LinkedInIcon}/></a>
              <a href="https://github.com/ericdoering" target="_blank"><Image height={50} className="mt-4 hover:scale-110"  alt="Github" src={GithubIcon}/></a>
            </div>
        </div>
      </div>
      </div>
      ) : null}
    </div>
  );
}
