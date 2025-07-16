/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import tighe_profile_pic from "../../../assets/tighe_profile_pic.png";
import sam_profile_pic from "../../../assets/sam_profile_pic.png";
import kent_profile_pic from "../../../assets/kent_profile_pic.png"
import testimonials from './endorsmentHelper.json';

export default async function EndorsementsPage() {
  return (
    <>
      <h1 className="mt-12 mb-8 font-bold text-gray-200 text-3xl">
        Endorsements
      </h1>
      <h2 className="text-gray-200 text-xl">
        Discover what colleagues, clients, and collaborators have to say about
        working with me. These testimonials offer honest, first-hand insights
        into my work ethic, skills, and impact — helping you understand why I am
        the right person for your next role.
      </h2>
      <div className="flex items-center justify-center mt-8">
        <ul className="max-w-[800px]">
        {testimonials.map(({ name, role, image, alt, quote }, index) => (
          <li key={index} className="flex items-center space-x-4 py-4 mt-4">
            <Image
              priority={true}
              placeholder="blur"
              className="border-2 border-gray-100 rounded-xl"
              src={image}
              alt={alt}
              width={100}
              height={100}
              blurDataURL={image}
            />
            <div>
              <p className="text-lg text-gray-200 mb-2">
                {quote}
              </p>
              <p className="text-sm text-gray-200 mt-4">
                <span className="font-medium text-gray-200">{name}</span>
                { } - {role}
              </p>
            </div>
          </li>
        ))}
        </ul>
      </div>
    </>
  );
}
