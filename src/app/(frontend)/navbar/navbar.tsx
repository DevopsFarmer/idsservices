// Navbar.jsx
'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaPhoneAlt, FaMobileAlt, FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { RiArrowDropUpLine } from 'react-icons/ri'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [timeoutId, setTimeoutId] = useState<number | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  return (
    <>
      <div className="relative  w-full font-Arial">
        {/* Navbar (example) */}
        <header className="w-full">
          {/* Top Contact Bar */}
          <div className="w-full flex items-center justify-between md:px-40 pt-4 bg-white">
            {/* Left - Contact Buttons */}
            <div className="flex space-x-4">
              <div className="md:flex items-center hidden space-x-4 bg-orange-400 text-white px-8 py-2 rounded-t-xl text-xl">
                <FaMobileAlt />
                <span>0414 849 637</span>
              </div>
              <div className="md:flex items-center hidden space-x-4 bg-emerald-400 text-white  py-2 px-8  rounded-t-xl text-xl">
                <div className=" rotate-180">
                  <FaPhoneAlt className=" rotate-90" />
                </div>
                <span>1300 468 428</span>
              </div>
              <div className="flex md:hidden items-center  bg-emerald-400 text-white   py-2 px-8   rounded-t-xl text-xl">
                <div className=" rotate-180">
                  <FaPhoneAlt className=" rotate-90" />
                </div>
                <span>1300 468 428</span>
              </div>
            </div>

            {/* Right - NDIS + Social */}
            <div className="flex items-center pr-10 md:pr-0 pb-3 md:space-x-4 space-x-8">
              <div className="md:flex hidden items-center  space-x-2 pr-10">
                <Image 
                  src="/idis.png" 
                  alt="NDIS" 
                  width={100} 
                  height={100} 
                  className="h-8 w-auto" />
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
            <div className="max-w-7xl mx-auto px-4 pt-4 flex items-center justify-between">
              {/* Logo */}
              <Link href="/">
              <div className="flex items-center space-x-2">
                <Image 
                  src="/LilyCare.svg" 
                  alt="Invictus Logo" 
                  width={200} 
                  height={96} 
                  className="h-24 w-auto"
                  priority
                  unoptimized
                />
              </div>
              </Link>

              {/* Nav Items */}
              <ul className="hidden md:flex space-x-12 font-mono">
                <Link href="/">
                  <span className={`tracking-widest uppercase ${pathname === '/' ? 'text-yellow-300' : 'hover:text-yellow-300'}`}>
                    HOME
                  </span>
                </Link>
                <Link href="/about">
                  <li className={`tracking-widest cursor-pointer ${pathname === '/about' ? 'text-yellow-300' : 'hover:text-yellow-300'}`}>
                    ABOUT
                  </li>
                </Link>
                <li
                  className="relative group cursor-pointer"
                  onMouseEnter={() => {
                    if (timeoutId !== null) {
                      clearTimeout(timeoutId)
                    }
                    setIsOpen(true)
                  }}
                  onMouseLeave={() => {
                    const id = setTimeout(() => setIsOpen(false), 200) as unknown as number
                    setTimeoutId(id)
                  }}
                >
                  <Link href="/services">
                    <div className={`tracking-widest flex items-center gap-1 ${pathname.startsWith('/services') ? 'text-yellow-300' : 'hover:text-yellow-300'}`}>
                      <span>SERVICES</span>
                      <RiArrowDropUpLine className="rotate-180 w-6 h-6" />
                    </div>
                  </Link>

                  {isOpen && (
                    <div className="absolute left-0 text-sm mt-2 w-96 bg-[rgb(66,73,79)] text-white shadow-lg rounded-md space-y-1 py-2 z-10">
                      <ul>
                        <Link href="/services/support-coordination-in-home-support-ndis-services-idss">
                          <li className="px-6 py-3 border-b border-gray-800 hover:bg-gray-700 cursor-pointer">
                            Support Coordination & In Home Support
                          </li>
                        </Link>
                        <Link href="/services/community-participation-skills-development">
                          <li className="px-6 py-3 border-b border-gray-800 hover:bg-gray-700 cursor-pointer">
                            Community Participation & Skills Development
                          </li>
                        </Link>
                        <Link href="/services/respite-accommodationsil-invictus-disability-support-services">
                          <li className="px-6 py-3 border-b border-gray-800 hover:bg-gray-700 cursor-pointer">
                            Respite, Accommodation & Supported Independent Living
                          </li>
                        </Link>
                        <Link href="/services/aged-care">
                          <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">Aged Care</li>
                        </Link>
                      </ul>
                    </div>
                  )}
                </li>

                <Link href="/contact">
                  <li className={`tracking-widest cursor-pointer ${pathname === '/contact' ? 'text-yellow-300' : 'hover:text-yellow-300'}`}>
                    CONTACT
                  </li>
                </Link>
              </ul>

              {/* Right Side */}
              <div className="hidden md:flex items-center  space-x-4">
                <Link href="/contact">
                  <button className="border border-yellow-400 text-yellow-400 text-xl px-6 py-2 rounded-xl hover:bg-yellow-500 hover:text-white transition">
                    ENQUIRE NOW
                  </button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white text-2xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
            {/* AnimatePresence wraps conditional rendering */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  className="md:hidden w-full text-white flex flex-col items-center py-4 space-y-4 shadow-md"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href="/"
                    className=" font-bold text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    HOME
                  </Link>
                  <Link
                    href="/about"
                    className=" font-bold text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ABOUT
                  </Link>
                  <div className="relative inline-block text-left">
                    {/* Toggle Button */}
                    <button className="flex items-center justify-between font-bold text-lg space-x-2">
                      <Link href="/services">
                        {' '}
                        <span>SERVICES</span>
                      </Link>
                      <RiArrowDropUpLine
                        className={`text-3xl transition-transform duration-300 ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`}
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="absolute mt-2 w-72 bg-[#F9F7E9] shadow-xl z-50 rounded-md"
                        >
                          {[
                            {
                              label: 'Support Coordination & In Home Support',
                              navlink:
                                '/services/support-coordination-in-home-support-ndis-services-idss',
                            },
                            {
                              label: 'Community Participation & Skills Development',
                              navlink: '/services/community-participation-skills-development',
                            },
                            {
                              label: 'Respite, Accommodation & Supported Independent Living',
                              navlink:
                                '/services/respite-accommodationsil-invictus-disability-support-services',
                            },
                            {
                              label: 'Aged-Care',
                              navlink: '/services/aged-care',
                            },
                          ].map((service, index) => (
                            <Link
                              key={index}
                              href={service.navlink}
                              className="block px-4 py-2 text-black text-sm hover:bg-[#FF8239] transition-all"
                              onClick={() => {
                                setIsServicesOpen(false)
                                setIsMenuOpen(false)
                              }}
                            >
                              {service.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <Link
                    href="/contact"
                    className=" font-bold text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    CONTACT US
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </header>
      </div>
    </>
  )
}

export default Navbar
