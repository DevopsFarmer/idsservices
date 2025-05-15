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
          <div className="w-full bg-white pt-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              {/* Left - Contact Buttons */}
              <div className="flex space-x-4">
                <div className="md:flex items-center hidden space-x-4 bg-orange-400 text-white px-8 py-2 rounded-t-xl text-xl">
                  <FaMobileAlt />
                  <span>0414 849 637</span>
                </div>
                <div className="md:flex items-center hidden space-x-4 bg-emerald-400 text-white py-2 px-8 rounded-t-xl text-xl">
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
                <div className="md:flex hidden items-center space-x-2">
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
                <div className="w-full -mb-2 rotate-180 border-t border-gray-800 h-5 relative">
                      <Image
                        src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%22100%25%22%20viewBox%3D%220%200%201667%20102%22%20preserveAspectRatio%3D%22none%22%20fill%3D%22rgba%2866%2C73%2C79%2C1%29%22%3E%3Cpath%20d%3D%22M0%20102V18L14%2023H34L43%2028H70L83%2023L88%2018L110%2023L165%2038C169.13%2036.9132%20174.712%2035.4721%20180.5%2034.0232C184.719%2032.9671%20190.047%2035.9301%20194%2035C201.258%2033.2924%20206.255%2028%20208%2028C209.361%2028%20213.031%2030.7641%20215.5%2029.5C216.777%2028.8461%20216.634%2024.4684%20218%2023.652C221.756%2021.407%20227.081%2029.2742%20229.5%2027.5L240.5%2020.625H249.5L256%2017.4737L267%2014L278%2025L280.5%2031.652L287%2029.5L291.5%2035.5L298%2038L304%2035.5L314%2038L325%2037L329.5%2038H336L348%2035.5L354%2028H365L370.5%2020.5L382.5%2020.875L389.5%2017L402%2020.875L409.5%2017L424.5%2018.5L435.5%2017L451%2018.5L463%2017L471.5%2023L478.5%2020.875L487%2024.5L498.5%2025.5L505%2028H510C510.958%2029.5968%20510.605%2033.4726%20512.5%2035.5C514.561%2037.7047%20518.916%2038%20521%2038H530L585%2028L616%2017L632%2010L651.5%2013.5L668.5%2021.7L676.5%2018.1L686%2023.5L694.5%2021.7L705.5%2027.5L717%2026.2L727%2030.6786H733.5L744%2037.5L754%2038L786%2028H814L868%2017L887%2019.1111L898%2023L910%2021.6667L917%2024L927%2022.3333L933%2024L943.5%2020.1957L956.5%2021L964%2017.5217L968%2017L980%2010H1005L1015%2017H1052L1110%2010L1132%200L1141%201.8L1156.5%208L1165.5%206.7L1180.5%2011.625H1188.75L1195.5%2014.6944H1201.5L1209.5%2018L1221%2019.3889L1235%2027L1268%2038L1311%2028L1316%2023L1338%2017L1354%2028L1364%2038L1392%2028.6667L1404.5%2030L1409%2023H1419.5L1427%2017L1437%2020L1445%2028.6667L1456%2023L1470.5%2028.6667L1497.5%2017L1505%2010L1514%2013L1522%2010L1530.5%2012L1536%205L1543.5%208.05L1553%205.40854L1563%2010L1567%200L1584%208.05L1594%206.55L1604.5%202L1614.5%204.75L1631%2011.5L1647.5%208.05L1667%2018V102H0Z%22%20fill%3D%22var%28--awb-color6%29%22%2F%3E%3C%2Fsvg%3E"
                        alt=""
                        fill
                        className="object-cover w-full h-full"
                        priority
                      />
                    </div>
        </header>
      </div>
    </>
  )
}

export default Navbar
