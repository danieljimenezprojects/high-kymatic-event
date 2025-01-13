'use client'

import { useEffect, useState } from 'react'
import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { LineUp } from '@/components/line-up'
import { Schedule } from '@/components/schedule'
import { OpenCall } from '@/components/open-call'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return null // or a loading spinner
  }

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <LineUp />
      <Schedule />
      <OpenCall />
      <Contact />
      <Footer />
    </>
  )
}

