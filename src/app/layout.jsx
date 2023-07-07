import './globals.css'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/navbar'
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
      <body className={`${PoppinsFont.className}`}>
        <Navbar />
        <main className='w-[360px] mx-auto'>
          {children}
        </main>
      </body>
    </html>
  )
}
