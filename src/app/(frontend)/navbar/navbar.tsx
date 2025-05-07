// Navbar.jsx
import Link from 'next/link'
import React from 'react'
import { FaPhoneAlt, FaMobileAlt, FaFacebookF, FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
      <div className="relative w-full font-Arial">
        {/* Navbar (example) */}
        <header className="w-full">
          {/* Top Contact Bar */}
          <div className="w-full flex items-center justify-between px-40 pt-4 bg-white">
            {/* Left - Contact Buttons */}
            <div className="flex space-x-4">
              <div className="flex items-center space-x-4 bg-orange-400 text-white px-8 py-2 rounded-t-xl text-xl">
                <FaMobileAlt />
                <span>0414 849 637</span>
              </div>
              <div className="flex items-center space-x-4 bg-emerald-400 text-white  py-2 px-8  rounded-t-xl text-xl">
                <div className=" rotate-180">
                  <FaPhoneAlt className=" rotate-90" />
                </div>
                <span>1300 468 428</span>
              </div>
            </div>

            {/* Right - NDIS + Social */}
            <div className="flex items-center pb-3 space-x-4">
              <div className="flex items-center  space-x-2 pr-10">
                <img src="/idis.png" alt="NDIS" className="h-8  w-auto" />
              </div>

              <a href="#" className="text-gray-600 hover:text-blue-500">
                <FaFacebookF className="h-5 cursor-pointer" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-500">
                <FaInstagram className="h-8 cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Main Navbar */}
          <nav className="bg-[rgb(66,73,79)] text-white">
            <div className="max-w-6xl mx-auto px-4 pt-4 flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <img src="/image.png" alt="Invictus Logo" className="h-20" />
              </div>

              {/* Nav Items */}
              <ul className="flex space-x-14 text-xl font-Arial">
                <Link href="/">
                  <li className="hover:text-yellow-300 cursor-pointer">HOME</li>
                </Link>
                <Link href="/about">
                  {' '}
                  <li className="hover:text-yellow-300 cursor-pointer">ABOUT</li>
                </Link>
                <li className="relative group cursor-pointer">
                  <span className="hover:text-yellow-300">SERVICES</span>
                  {/* Dropdown */}
                  <ul className="absolute hidden group-hover:block bg-white text-black mt-1 shadow-md rounded-md p-2">
                    <li className="px-4 py-1 hover:bg-gray-100">
                      Support Coordination & In Home Support
                    </li>
                    <li className="px-4 py-1 hover:bg-gray-100">
                      Community Participation & Skills Development
                    </li>
                  </ul>
                </li>
                <Link href="/contact">
                  <li className="hover:text-yellow-300 cursor-pointer">CONTACT</li>
                </Link>
              </ul>

              {/* Right Side */}
              <div className="flex items-center  space-x-4">
                <button className="border border-yellow-400 text-yellow-400 text-xl px-6 py-2 rounded-xl hover:bg-yellow-500 hover:text-white transition">
                  ENQUIRE NOW
                </button>
              </div>
            </div>
          </nav>
        </header>

   
      </div>

      
    </>
  )
}

export default Navbar
