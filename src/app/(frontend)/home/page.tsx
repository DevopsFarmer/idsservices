import React from 'react'
import HeroSection from './components/herosection'
import InfoSection from './components/InfoSection'
import GuidingPrinciples from './components/guidingPrinciples'
import SupportSection from './components/card'
import NDISplan from './components/ndisPlan'
import GetInTouch from './components/Getintouch'


export default async function HomePage() {


  return (
       <>
       <HeroSection/>
       <InfoSection/>
       <GuidingPrinciples/>
       <SupportSection/>
       <NDISplan/>
       <GetInTouch/>
       </>
  )
}
