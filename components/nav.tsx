'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      const offsetTop = elem.getBoundingClientRect().top + window.pageYOffset - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    if (isMenuOpen) setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50)
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
      }`} 
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center" aria-label="Go to homepage">
            <Image
              src="/logo-kymatic.webp"
              alt="High Kymatic Logo"
              width={40}
              height={40}
              className="w-auto h-8"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="#about" 
              onClick={(e) => smoothScroll(e, '#about')} 
              className="text-white hover:text-[#c3f6fe] transition-colors text-sm"
              aria-label="Go to About section"
            >
              About
            </Link>
            <Link 
              href="#lineup" 
              onClick={(e) => smoothScroll(e, '#lineup')} 
              className="text-white hover:text-[#c3f6fe] transition-colors text-sm"
              aria-label="Go to Line Up section"
            >
              Line Up
            </Link>
            <Link 
              href="#schedule" 
              onClick={(e) => smoothScroll(e, '#schedule')} 
              className="text-white hover:text-[#c3f6fe] transition-colors text-sm"
              aria-label="Go to Schedule section"
            >
              Schedule
            </Link>
            <Link 
              href="#contact" 
              onClick={(e) => smoothScroll(e, '#contact')} 
              className="text-white hover:text-[#c3f6fe] transition-colors text-sm"
              aria-label="Go to Contact section"
            >
              Contact
            </Link>
            <Link 
              href="https://www.tickettailor.com/events/highkymatic/1493696" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center"
              aria-label="Buy tickets (opens in new tab)"
            >
              <button className="bg-[#471b1b] hover:bg-[#5a2424] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                Buy Tickets
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-[#c3f6fe] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className="md:hidden fixed top-16 left-0 right-0 w-full bg-black/95 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <div className="flex flex-col items-center p-4">
              <Link 
                href="#about" 
                onClick={(e) => smoothScroll(e, '#about')}
                className="text-white hover:text-[#c3f6fe] transition-colors py-2 px-4 w-full text-center text-sm"
                aria-label="Go to About section"
              >
                About
              </Link>
              <Link 
                href="#lineup" 
                onClick={(e) => smoothScroll(e, '#lineup')}
                className="text-white hover:text-[#c3f6fe] transition-colors py-2 px-4 w-full text-center text-sm"
                aria-label="Go to Line Up section"
              >
                Line Up
              </Link>
              <Link 
                href="#schedule" 
                onClick={(e) => smoothScroll(e, '#schedule')}
                className="text-white hover:text-[#c3f6fe] transition-colors py-2 px-4 w-full text-center text-sm"
                aria-label="Go to Schedule section"
              >
                Schedule
              </Link>
              <Link 
                href="#contact" 
                onClick={(e) => smoothScroll(e, '#contact')}
                className="text-white hover:text-[#c3f6fe] transition-colors py-2 px-4 w-full text-center text-sm"
                aria-label="Go to Contact section"
              >
                Contact
              </Link>
              <Link 
                href="https://www.tickettailor.com/events/highkymatic/1493696" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full"
                aria-label="Buy tickets (opens in new tab)"
              >
                <button className="bg-[#471b1b] hover:bg-[#5a2424] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors mt-4">
                  Buy Tickets
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

