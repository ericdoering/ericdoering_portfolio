/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import tighe_profile_pic from "../../../assets/tighe_profile_pic.png";
import sam_profile_pic from "../../../assets/sam_profile_pic.png";

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
          <li className="flex items-center space-x-4 py-4 mt-4">
            <Image
              priority={true}
              placeholder="blur"
              className="border-2 border-gray-100 rounded-xl"
              src={tighe_profile_pic}
              alt="Eric profile"
              width={100}
              height={100}
            />
            <div>
              <p className="text-xl text-gray-200 mb-2">
                "I had the pleasure of mentoring Eric early in his software engineering journey, and he quickly impressed me with his curiosity, work ethic, and ability to grasp
                complex concepts. I would gladly recommend him to any team."
              </p>
              <p className="text-sm text-gray-200 mt-4">
                <span className="font-medium text-gray-200">Tighe Carroll</span>
                {" — Tech Lead at Calibrate"}
              </p>
            </div>
          </li>
          <li className="flex items-center space-x-4 py-4 mt-4">
            <Image
              priority={true}
              placeholder="blur"
              className="border-2 border-gray-100 rounded-xl"
              src={sam_profile_pic}
              alt="Eric profile"
              width={100}
              height={100}
            />
            <div>
              <p className="text-xl text-gray-200 mb-2">
                "Eric has some of the strongest work ethic I have seen. He continues to push himself on mulitple fronts and remain a top contributer
                in the field."
              </p>
              <p className="text-sm text-gray-200 mt-4">
                <span className="font-medium text-gray-200">Sam Pinhero</span>
                {" — Senior Software Engineer at Meta"}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
