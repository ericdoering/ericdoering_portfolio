"use client"; 

import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { useState } from "react";
import profile from "../../../assets/website_profile_picture.png";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
    const [isImageClicked, setIsImageClicked] = useState<boolean>(false);
  const page = await getPage(params.slug);

  const handleImageClick = () => {
    setIsImageClicked(true);
  };

  return (
    <div>
      <h1 className="text-3xl drop-shadow font-extrabold">{page.title}</h1>
      {page.title && page.title.includes("About") ? (
        <div onClick={handleImageClick} className="cursor-pointer">
          <Image
            className="mt-10 border-white rounded-3xl"
            src={profile}
            alt="Eric profile"
            width={200}
            height={300}
          />
        </div>
      ) : null}
      <div className="max-w-lg rounded shadow-lg bg-gray-200 pb-5">
        <div className="text-sm text-gray-700 mt-10 px-6 pt-4">
          {isImageClicked && <p>Testing</p>}
          <PortableText value={page.content} />
        </div>
      </div>
    </div>
  );
}
