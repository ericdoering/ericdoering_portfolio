import '../globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { getPages } from '@/sanity/sanity-utils'

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
      <body className="max-w-7xl mx-auto py-10 background background">
        <header className="flex items-center justify-between">
            <Link href="/" className="bg-gray-500 text-lg font-bold">
              Eric
            </Link>
              <div className="flex items-center gap-5 text-sm text-gray-600">
                {pages.map((page) => (
                  <Link key={page._id} href={`/${page.slug}`} className="hover:underline">
                    {page.title}
                  </Link>
                ))}

              </div>
        </header>
        <main className="py-20">{children}</main>
        </body>
    </html>
  )
}
