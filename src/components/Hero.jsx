import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-chef-black via-chef-warm to-chef-black" />
      
      {/* Cinematic fog overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-chef-orange/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-chef-gold/10 rounded-full blur-[80px] animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-chef-copper/10 rounded-full blur-[60px] animate-float" />
      </div>

      {/* Steam particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="steam-particle"
            style={{
              left: `${10 + Math.random() * 80}%`,
              bottom: '10%',
              animationDelay: `${Math.random() * 3}s`,
            }}
            animate={{
              y: [0, -200],
              opacity: [0, 0.4, 0],
              scale: [1, 2.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Floating utensil icons */}
      <motion.div
        className="absolute top-20 right-20 text-4xl opacity-20"
        animate={{ y: [-10, 10], rotate: [-5, 5] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
      >
        🔪
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-16 text-3xl opacity-15"
        animate={{ y: [10, -10], rotate: [5, -5] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
      >
        🍳
      </motion.div>
      <motion.div
        className="absolute top-40 left-32 text-2xl opacity-10"
        animate={{ y: [-5, 15], rotate: [-3, 3] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
      >
        🌿
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Tagline */}
        <motion.p
          className="font-montserrat text-xs md:text-sm tracking-[0.4em] text-chef-gold/70 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          PASSION FOR COOKING • TASTE FOR EXCELLENCE
        </motion.p>

        {/* Main title */}
        <motion.h1
          className="font-bebas text-7xl md:text-[10rem] leading-none text-gradient-gold fire-glow mb-4"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
        >
          ARPAN
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="font-cinzel text-xl md:text-3xl text-chef-cream/90 tracking-[0.15em] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          PROFESSIONAL CHEF
        </motion.h2>

        {/* Description */}
        <motion.p
          className="font-poppins text-base md:text-lg text-chef-cream/60 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          Crafting Flavors With Passion & Precision
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.a
            href="#intro"
            className="glass px-8 py-4 rounded-full font-montserrat text-sm tracking-wider text-chef-gold hover:bg-chef-gold/10 transition-all duration-300 glow-border"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Journey
          </motion.a>
          <motion.a
            href="#skills"
            className="glass px-8 py-4 rounded-full font-montserrat text-sm tracking-wider text-chef-cream/80 hover:text-chef-gold hover:bg-white/5 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            View Signature Skills
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-chef-gold/40 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-chef-gold/60 rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
