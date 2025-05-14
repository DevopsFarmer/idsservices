// app/layout.tsx or app/layout.js
import React from 'react'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import './globals.css'

export const metadata = {
  title: 'Lily Care',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/LilyCare1.svg" type="image/svg+xml" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
