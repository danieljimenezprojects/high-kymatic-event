'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Instagram } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#2a1a28]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-[#c3f6fe] text-lg">Get in touch for any questions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-[#fe4a4a] rounded-full p-3">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-[#c3f6fe]">Thessaloniki, Greece</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-[#fe4a4a] rounded-full p-3">
                  <Instagram className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Instagram</h3>
                  <a 
                    href="https://www.instagram.com/high.kymatic/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#c3f6fe] hover:text-white transition-colors"
                  >
                    @high.kymatic
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-[#fe4a4a] rounded-full p-3">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <a href="mailto:highkymatic@gmail.com" className="text-[#c3f6fe] hover:text-white transition-colors">
                    highkymatic@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.7835278268726!2d22.93860661525001!3d40.63390605047232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838f41428e0ed%3A0x9bae715b8d574a9!2sThessaloniki%2C%20Greece!5e0!3m2!1sen!2sus!4v1625689065396!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

