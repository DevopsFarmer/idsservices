// Navbar.jsx
import Link from 'next/link'
import React from 'react'
import { FaPhoneAlt, FaMobileAlt, FaFacebookF, FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <>





    <div className="relative w-full">
      {/* Navbar (example) */}
      <header className="w-full">
      {/* Top Contact Bar */}
      <div className="w-full flex items-center justify-between px-20 pt-4 bg-white">
        {/* Left - Contact Buttons */}
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2 bg-orange-400 text-white px-4 py-1 rounded-t-md text-xl">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v22M5 5h14M5 19h14" />
            </svg>
            <span>0414 849 637</span>
          </div>
          <div className="flex items-center space-x-2 bg-pink-400 text-white px-4 py-1 rounded-t-md text-xl">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.1 4.18 2 2 0 0 1 4.12 2h3a2 2 0 0 1 2 1.72c.2 1.38.64 2.71 1.29 3.94a2 2 0 0 1-.45 2.11L9.54 11a16 16 0 0 0 6 6l1.23-1.23a2 2 0 0 1 2.11-.45c1.23.65 2.56 1.09 3.94 1.29a2 2 0 0 1 1.72 2z"
              />
            </svg>
            <span>1300 468 428</span>
          </div>
        </div>

        {/* Right - NDIS + Social */}
        <div className="flex items-center  space-x-4">
          <div className="flex items-center  space-x-2">
            <img src="/idis.png" alt="NDIS" className="h-8  w-auto" />
          </div>

          <a href="#" className="text-gray-700 hover:text-blue-500">
            <FaFacebookF className="text-black hover:text-gray-400 cursor-pointer" />
          </a>
          <a href="#" className="text-gray-700 hover:text-pink-500">
            <FaInstagram className="text-black hover:text-gray-400 cursor-pointer" />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[rgb(66,73,79)] text-white">
        <div className="max-w-7xl mx-auto px-4 pt-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/image.png" alt="Invictus Logo" className="h-16" />
          </div>

          {/* Nav Items */}
          <ul className="flex space-x-6 text-sm font-medium">
            <li className="hover:text-yellow-300 cursor-pointer">HOME</li>
            <Link href="/about"> <li className="hover:text-yellow-300 cursor-pointer">ABOUT</li></Link>
            <li className="relative group cursor-pointer">
              <span className="hover:text-yellow-300">SERVICES</span>
              {/* Dropdown */}
              <ul className="absolute hidden group-hover:block bg-white text-black mt-1 shadow-md rounded-md p-2">
                <li className="px-4 py-1 hover:bg-gray-100">Support Coordination & In Home Support</li>
                <li className="px-4 py-1 hover:bg-gray-100">Community Participation & Skills Development</li>
              </ul>
            </li>
           <Link href="/contact"><li className="hover:text-yellow-300 cursor-pointer">CONTACT</li></Link>
          </ul>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
           
            <button className="border border-yellow-400 text-yellow-400 px-4 py-1 rounded-md hover:bg-yellow-500 hover:text-white transition">
              ENQUIRE NOW
            </button>
          </div>
        </div>

         </nav>
    </header>

      {/* SVG separator */}
      <div className="overflow-hidden bg-[rgb(66,73,79)] leading-none">
        <svg
          className="block w-full"
          viewBox="0 0 1900 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
         <defs>
  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stopColor="#fde68a" />
    <stop offset="50%" stopColor="#fb923c" />
    <stop offset="100%" stopColor="#f472b6" />
  </linearGradient>
</defs>

          <path
            d="M0,40 C150,20 350,60 500,40 C650,20 850,50 1000,30 C1150,10 1350,50 1500,30 C1650,10 1800,50 1900,30 L1900,80 L0,80 Z"
            fill="url(#waveGradient)"
          />
        </svg>
      </div>
    </div>
  
    </>
  )
}

export default Navbar
