'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Instagram } from 'lucide-react'
import Link from 'next/link'

const founders = [
  {
    name: "Alexandra Filippidou",
    image: "/placeholder.svg?height=400&width=300",
    instagram: "https://www.instagram.com/alex__waves"
  },
  {
    name: "Kalliopi Tarasidou",
    image: "/placeholder.svg?height=400&width=300",
    instagram: "https://www.instagram.com/kalli_tarasidou"
  }
]

export function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-[#0a0a1e] to-[#1a1a2e] overflow-hidden">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h2>
          <p className="text-xl text-[#c3f6fe] max-w-3xl mx-auto">
            Dive into the world of High Kymatic, where the art of Waving comes to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#fe4a4a] to-[#471b1b] opacity-20 rounded-lg"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Our Aim</h3>
                <p className="text-[#e6f7ff]">
                  Our aim is to deliver a space for the community where we can dive deep into the
                  artistic side of Waving & honor the magic this style has to offer. We strive to create
                  an environment that nurtures creativity, fosters connections, and pushes the boundaries
                  of this unique dance form.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#c3f6fe] to-[#a3d8fe] opacity-20 rounded-lg"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-all duration-300 h-full">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Philosophy</h3>
              <p className="text-[#e6f7ff]">
                For us, Waving is not just a way of moving, but a connection to our deepest selves. 
                Through the practice of this style, we have created a philosophy of life that helps 
                us discover our true essence. Waving is a very open-minded style, where everyone can 
                incorporate their personal element, making it unique and deeply personal.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Meet the Founders</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="relative w-full md:w-2/3 aspect-[3/2] rounded-lg overflow-hidden">
              <Image
                src="/aboutus.webp"
                alt="Alexandra Filippidou and Kalliopi Tarasidou"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h4 className="text-xl font-semibold text-white mb-2">{founder.name}</h4>
                <Link href={founder.instagram} target="_blank" rel="noopener noreferrer" 
                  className="inline-flex items-center text-[#c3f6fe] hover:text-white transition-colors">
                  <Instagram className="mr-2" size={20} />
                  <span>Instagram</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#fe4a4a] to-[#471b1b] opacity-10 rounded-lg"></div>
          <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">Our History</h3>
            <div className="text-[#e6f7ff] space-y-4">
              <p>
                High Kymatic, established in 2019, is a dance duo that embraces the Waving style. 
                Our name combines "high" and "kymatic" (meaning wave), representing our expressive 
                approach to the Waving style.
              </p>
              <p>
                We organize events that serve as a platform for Waving enthusiasts to meet, express 
                themselves, and learn from each other. Our goal is to contribute to the cultural 
                development of our city and country through the Waving community.
              </p>
              <p>
                With our extensive experience and international recognition, we're dedicated to 
                sharing our knowledge and providing a safe, inspiring environment for dancers to grow.
              </p>
              <p>
                Through our events, we foster a multifaceted cultural dialogue, promoting not just 
                the Waving culture, but also enhancing the emotional and spiritual well-being of 
                all participants.
              </p>
              <p>
                Our journey has taken us across different countries, connecting with the global 
                Waving community and acting as a bridge for communication and cultural exchange.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

