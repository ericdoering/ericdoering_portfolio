import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import profile from "../../../assets/website_profile_picture.png";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div>
      <h1 className="text-4xl drop-shadow font-extrabold text-gray-100">{page.title}</h1>
      {page.title && page.title.includes("About") ? (
        <div>
          <Image
            className="mt-10 border-white rounded"
            src={profile}
            alt="Eric profile"
            width={200}
            height={300}
          />
        </div>
      ) : null}
      <div className="max-w-lg rounded shadow-lg bg-gray-200 pb-5">
        <div className="text-md text-gray-700 mt-10 px-6 pt-4">
          <PortableText value={page.content} />
        </div>
      </div>
    </div>
  );
}
