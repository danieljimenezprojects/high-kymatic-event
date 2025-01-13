'use client'

import { Instagram } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">High-kymatic</h3>
            <p className="text-white/60">
              The ultimate waving dance experience in Greece
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-white/60 hover:text-[#c3f6fe] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#lineup" className="text-white/60 hover:text-[#c3f6fe] transition-colors">
                  Line Up
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="text-white/60 hover:text-[#c3f6fe] transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/60 hover:text-[#c3f6fe] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/high.kymatic/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-[#c3f6fe] transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; {currentYear} High-kymatic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

