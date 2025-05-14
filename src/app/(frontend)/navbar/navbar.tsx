'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaPhoneAlt, FaMobileAlt, FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { RiArrowDropUpLine } from 'react-icons/ri'
import { Navebardata } from './navbardata' 

type NavItem = {
  label: string
  link: string
}

type NavbarItem = {
  title: string
  dropdown?: NavItem[]
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [timeoutId, setTimeoutId] = useState<number | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const servicesItem = Navebardata.navbaritem.find((item) => item.item === 'SERVICES')

  return (
    <div className="relative w-full font-Arial">
      <header className="w-full">
        {/* Top Contact Bar */}
        <div className="w-full flex items-center justify-between md:px-40 pt-4 bg-white">
          <div className="flex space-x-4">
            <div className="md:flex items-center hidden space-x-4 bg-orange-400 text-white px-8 py-2 rounded-t-xl text-xl">
              <FaMobileAlt />
              <span>0414 849 637</span>
            </div>
            <div className="md:flex items-center hidden space-x-4 bg-emerald-400 text-white  py-2 px-8  rounded-t-xl text-xl">
              <div className="rotate-180">
                <FaPhoneAlt className="rotate-90" />
              </div>
              <span>1300 468 428</span>
            </div>
            <div className="flex md:hidden items-center bg-emerald-400 text-white py-2 px-8 rounded-t-xl text-xl">
              <div className="rotate-180">
                <FaPhoneAlt className="rotate-90" />
              </div>
              <span>1300 468 428</span>
            </div>
          </div>

          {/* Right - NDIS + Social */}
          <div className="flex items-center pr-10 md:pr-0 pb-3 md:space-x-4 space-x-8">
            <div className="md:flex hidden items-center space-x-2 pr-10">
              <img src="/idis.png" alt="NDIS" className="h-8 w-auto" />
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
              <img src={Navebardata.logo} alt="Logo" className="h-24" />
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden md:flex space-x-12 font-mono items-center">
              {Navebardata.navbaritem.map((navItem, idx) =>
                navItem.item === 'SERVICES' ? (
                  <li
                    key={idx}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => {
                      if (timeoutId !== null) clearTimeout(timeoutId)
                      setIsOpen(true)
                    }}
                    onMouseLeave={() => {
                      const id = setTimeout(() => setIsOpen(false), 200) as unknown as number
                      setTimeoutId(id)
                    }}
                  >
                    <Link key={idx} href={navItem.link ?? '/'}>
                      <div className="hover:text-yellow-300 tracking-widest flex items-center gap-1">
                        <span>{navItem.item}</span>
                        <RiArrowDropUpLine className="rotate-180 w-6 h-6" />
                      </div>
                    </Link>
                    {isOpen && (
                      <div className="absolute left-0 text-sm mt-2 w-96 bg-[rgb(66,73,79)] text-white shadow-lg rounded-md space-y-1 py-2 z-10">
                        <ul>
                          {navItem.dropdown?.map((service, i) => (
                            <Link key={i} href={service.link}>
                              <li className="px-6 py-3 border-b border-gray-800 hover:bg-gray-700 cursor-pointer">
                                {service.label}
                              </li>
                            </Link>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ) : (
                  <Link key={idx} href={navItem.link ?? '/'}>
                    <li className="hover:text-yellow-300 tracking-widest cursor-pointer">
                      {navItem.item}
                    </li>
                  </Link>
                ),
              )}
            </ul>

            {/* Enquire Now */}
            <div className="hidden md:flex items-center space-x-4">
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

          {/* Mobile Dropdown */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="md:hidden w-full text-white flex flex-col items-center py-4 space-y-4 shadow-md"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {Navebardata.navbaritem.map((navItem, idx) =>
                  navItem.item === 'SERVICES' ? (
                    <div key={idx} className="relative inline-block text-left">
                      <button className="flex items-center justify-between font-bold text-lg space-x-2">
                        <Link href='/services'> <span>SERVICES</span></Link>
                       
                        <RiArrowDropUpLine
                          className={`text-3xl transition-transform duration-300 ${
                            isServicesOpen ? 'rotate-180' : ''
                          }`}
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                        />
                      </button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="absolute mt-2 w-72 bg-[rgb(66,73,79)]  shadow-xl z-50 rounded-md"
                          >
                            {navItem.dropdown?.map((item, i) => (
                              <Link
                                key={i}
                                href={item.link ?? '#'}
                                className="block px-4 py-2 text-white text-sm hover:bg-[#FF8239] transition-all"
                                onClick={() => {
                                  setIsServicesOpen(false)
                                  setIsMenuOpen(false)
                                }}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={idx}
                      href={navItem.link ?? '/'}
                      className="font-bold text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {navItem.item}
                    </Link>
                  ),
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
