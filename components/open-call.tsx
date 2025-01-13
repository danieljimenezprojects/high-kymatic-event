'use client'

import { motion } from 'framer-motion'
import { OpenCallForm } from './open-call-form'
import Image from 'next/image'
import { Mail, Clock } from 'lucide-react'

export function OpenCall() {
  return (
    <section id="open-call" className="py-20 bg-gradient-to-br from-[#1a1a2e] via-[#2a1a28] to-[#3a1a22]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Open Call for <span className="text-[#fe4a4a]">Waving Performances</span>
            </h2>
            <p className="text-[#c3f6fe] text-lg mb-8">
              We invite you to take the stage at our Theater Night on Sunday, May 25th!
            </p>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">What We're Looking For</h3>
              <ul className="text-[#c3f6fe] space-y-2">
                <li>• Five Waving performances</li>
                <li>• Duration: 5 to 20 minutes each</li>
                <li>• Solo, duet, or group performances</li>
                <li>• Completed works or works in progress</li>
              </ul>
            </div>
            <p className="text-white text-lg mb-6">
              This is your chance to showcase your unique artistic journey & interpretation of Waving. We can't wait to see your vision come to life!
            </p>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">How to Apply</h3>
              <p className="text-[#c3f6fe] mb-4">
                Email us with:
              </p>
              <ul className="text-[#c3f6fe] space-y-2 mb-4">
                <li>• A brief description of your concept</li>
                <li>• A direct link to a video of the full performance or work-in-progress footage</li>
              </ul>
              <div className="flex items-center text-white">
                <Mail className="mr-2" />
                <a href="mailto:highkymatic@gmail.com" className="text-[#c3f6fe] hover:text-white transition-colors">
                  highkymatic@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center text-white">
              <Clock className="mr-2" />
              <span className="font-semibold">Application Deadline: March 31st, 2025</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/opencall.webp"
                alt="Waving performance"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

