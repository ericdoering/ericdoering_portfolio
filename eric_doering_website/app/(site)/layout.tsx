import "../globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getPages } from "@/sanity/sanity-utils";
import logo from "../../assets/logo.png";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Eric Doering Portfolio",
  description: "Eric Doering Portfolio",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto py-10 background">
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <header>
          <nav
            style={{ height: "60px", position: "fixed" }}
            className="bg-white dark:bg-gray-900 w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600 flex items-center"
          >
            <div className="w-full flex items-center justify-center mx-auto p-4">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                <Link href="/" className="text-gray-600 link-text">
                  <button className="item py-2 px-8 rounded m-8 nav-txt">
                    Projects
                  </button>
                </Link>
                {pages.map((page) => (
                  <Link
                    href={`/${page.slug}`}
                    className="text-gray-600 link-text"
                    key={page._id}
                  >
                    <button
                      key={page._id}
                      className="item py-2 px-8 m-8 rounded nav-txt"
                    >
                      {page.title}
                    </button>
                  </Link>
                ))}
                 <Link href="/endorsements" className="text-gray-600 link-text">
                  <button className="item py-2 px-8 rounded m-8 nav-txt">
                    Endorsements
                  </button>
                </Link>
              </span>
            </div>
          </nav>
        </header>
        <main className="py-20 ml-1">{children}</main>
      </body>
    </html>
  );
}
