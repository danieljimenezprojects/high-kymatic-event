'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

const Bubble = ({ size, position, delay }: { size: number, position: { x: string, y: string }, delay: number }) => (
  <motion.div
    className="absolute rounded-full bg-white/10 backdrop-blur-sm"
    style={{
      width: size,
      height: size,
      left: position.x,
      top: position.y,
    }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [0, 1, 1, 0],
      opacity: [0, 0.5, 0.5, 0],
      y: [0, -100],
    }}
    transition={{
      duration: 4,
      delay: delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 2,
    }}
  />
)

export function Hero() {
  const [isMounted, setIsMounted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const bubbles = [
    { size: 30, position: { x: '10%', y: '20%' }, delay: 0 },
    { size: 20, position: { x: '20%', y: '40%' }, delay: 0.5 },
    { size: 40, position: { x: '70%', y: '15%' }, delay: 1 },
    { size: 25, position: { x: '80%', y: '30%' }, delay: 1.5 },
    { size: 35, position: { x: '40%', y: '60%' }, delay: 2 },
    { size: 15, position: { x: '60%', y: '70%' }, delay: 2.5 },
  ]

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      const offsetTop = elem.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen overflow-hidden bg-[#050714]"
      role="banner"
      aria-label="Hero section"
    >      
    {/* Background Gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#050714] via-[#1a1a2e] to-[#2a1a28]"
        style={{ opacity, scale }}
      />

      {/* Bubbles */}
      {bubbles.map((bubble, index) => (
        <Bubble key={index} {...bubble} />
      ))}

      {/* Animated Wave Layers */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y }}>
        <svg
          className="absolute bottom-0 left-0 w-full h-2/3"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#471b1b" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#2a1a28" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c3f6fe" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#a3d8fe" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e6f7ff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Background Wave */}
          <motion.path
            d="M0 600 Q 360 550 720 580 Q 1080 610 1440 580 L1440 800 L0 800 Z"
            fill="url(#wave1)"
            initial={{ y: 100 }}
            animate={{ 
              y: [0, -20, 0],
              scaleY: [1, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Middle Wave */}
          <motion.path
            d="M0 650 Q 360 600 720 630 Q 1080 660 1440 630 L1440 800 L0 800 Z"
            fill="url(#wave2)"
            initial={{ y: 50 }}
            animate={{ 
              y: [0, -15, 0],
              scaleY: [1, 1.05, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          {/* Front Wave */}
          <motion.path
            d="M0 700 Q 360 650 720 680 Q 1080 710 1440 680 L1440 800 L0 800 Z"
            fill="url(#wave3)"
            initial={{ y: 0 }}
            animate={{ 
              y: [0, -10, 0],
              scaleY: [1, 1.02, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4">
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
          style={{ willChange: 'transform' }}
        >
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-[#c3f6fe] leading-tight opacity-100">
                High Kymatic
              </span>
              <span className="block text-white mt-2 opacity-100">
                WAVING FESTIVAL
              </span>
            </h1>
            <div className="flex flex-col gap-4">
              <p className="text-xl md:text-2xl text-[#e6f7ff]/80">
                May 22nd - 26th 2025
              </p>
              <p className="text-lg md:text-xl text-[#e6f7ff]/80 max-w-2xl mx-auto">
                Come and experience the magic of Waving like never before
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          {/* CTA Buttons */}
          <div className="pt-8 pb-16 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="https://www.tickettailor.com/events/highkymatic/1493696" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Get your tickets (opens in new tab)"
            >
              <button 
                className="bg-[#471b1b] hover:bg-[#5a2424] text-white px-8 py-3 rounded-full text-base font-medium transition-colors hover:shadow-lg"
              >
                Get Your Tickets
              </button>
            </Link>
            <Link 
              href="#schedule"
              onClick={(e) => smoothScroll(e, '#schedule')}
              aria-label="View festival schedule"
            >
              <button 
                className="bg-[#c3f6fe] hover:bg-[#a3d8fe] text-[#23153c] px-8 py-3 rounded-full text-base font-medium transition-colors hover:shadow-lg"
              >
                View Schedule
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Section Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a1e] to-transparent z-30" />
    </section>
  )
}

