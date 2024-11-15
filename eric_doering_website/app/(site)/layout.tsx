import '../globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import Image from "next/image";
import Script from "next/script"
import { getPages } from '@/sanity/sanity-utils'
import logo from "../../assets/logo.png"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eric Doering Portfolio',
  description: 'Eric Doering Portfolio',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pages = await getPages()


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
      <nav style={{ height: "60px", position:'fixed'}} className="bg-white dark:bg-gray-900 fixed w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600 flex items-center nav">
        <div className="w-full md:w-32 lg:w-48 flex flex-wrap items-center justify-evenly mx-auto p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            
            <button className="item py-2 px-4 rounded">
              <Link href="/" className="text-gray-500">
                Projects
              </Link>
            </button>
            {pages.map((page) => (
              <button key={page._id} className="item py-2 px-4 ms-20 rounded">
                <Link key={page._id} href={`/${page.slug}`} className="text-gray-500">
                  {page.title}
                </Link>
              </button>
            ))}
          </span>
        </div>
      </nav>
    </header>
    <main className="py-20 ml-1">{children}</main>
  </body>
</html>

  )
}
