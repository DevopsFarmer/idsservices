import React from 'react'
import HeroSection from './components/herosection'
import InfoSection from './components/InfoSection'
import Support from './components/PERSON-CENTRED'
import InHomesport from './components/inHomesport'

import Link from 'next/link'
export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <Support />
      <InHomesport />
 
      <div className="bg-[rgb(66,73,79)] relative pb-40 py-16">
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 items-center pt-12 px-4">
          <button className="flex items-center gap-2 bg-orange-500 text-white text-base sm:text-lg px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-md hover:bg-orange-600 transition text-center w-full sm:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m2 0a2 2 0 100-4H7a2 2 0 100 4m12 0v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6m16 0H5"
              />
            </svg>
            COMPLETE OUR REFERRAL FORM
          </button>
          <button className="flex items-center gap-2 bg-orange-500 text-white text-base sm:text-lg px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-md hover:bg-orange-600 transition text-center w-full sm:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m2 0a2 2 0 100-4H7a2 2 0 100 4m12 0v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6m16 0H5"
              />
            </svg>
            <Link href="/contact"> MAKE AN INITIAL ENQUIRY </Link>
          </button>
        </div>
      </div>
    </>
  )
}
