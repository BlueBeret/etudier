import './globals.css'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'


const PoppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  title: 'Étudier',
  description: 'Get your fancy study result card, special for UGM students',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </head>
      <body className={`${PoppinsFont.className} flex flex-col bg-primary`}>
        <Navbar />
        <main className='w-max-lg w-min-[360px] w-full mx-auto px-4'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
