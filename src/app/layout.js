import './globals.css'
import Header from "@/app/components/Header";

import { Mulish } from 'next/font/google'
import ContactCard from "@/app/components/ContactCard";
import Footer from "@/app/components/Footer";

const mulish = Mulish({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
})
export const metadata = {
  title: 'Create Next App'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}
