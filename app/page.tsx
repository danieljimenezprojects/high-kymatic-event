
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { LineUp } from '@/components/line-up'
import { Nav } from '@/components/nav'
import { OpenCall } from '@/components/open-call'
import { Schedule } from '@/components/schedule'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <LineUp />
      <Schedule />
      <OpenCall />
      <Contact />
      <Footer/>
      </>
  )
}

