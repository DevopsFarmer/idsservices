import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import HeroSection from './components/herosection'
import InfoSection from './components/InfoSection'
import GuidingPrinciples from './components/guidingPrinciples'
import Card from './components/card'
import config from '@/payload.config'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
       <>
       <HeroSection/>
       <InfoSection/>
       <GuidingPrinciples/>
       <Card/>
       </>
  )
}
