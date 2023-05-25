import './globals.css'
import { Inter } from 'next/font/google'
import background from "../assets/background.png"
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eric Doering Portfolio',
  description: 'Eric Doering Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">
        <header>
          <Link href="/" className="bg-gray-500 text-lg font-bold">Eric</Link>
        </header>
        <main className="py-20">{children}</main>
        </body>
    </html>
  )
}
