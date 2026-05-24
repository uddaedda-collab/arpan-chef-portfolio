import React from 'react'
import { motion } from 'framer-motion'

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-chef-black"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Steam particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-chef-gold/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 50,
              opacity: 0,
            }}
            animate={{
              y: -100,
              opacity: [0, 0.6, 0],
              scale: [1, 2, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Main text animation */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.p
          className="font-cinzel text-lg md:text-xl text-chef-gold/80 tracking-[0.3em] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3, times: [0, 0.3, 0.7, 1] }}
        >
          COOK WITH PASSION • SERVE WITH HEART
        </motion.p>

        <motion.h1
          className="font-bebas text-5xl md:text-7xl text-gradient-gold tracking-wider"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          ARPAN
        </motion.h1>

        <motion.p
          className="font-montserrat text-sm text-chef-cream/60 tracking-[0.2em] mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          PROFESSIONAL CHEF
        </motion.p>
      </motion.div>

      {/* Loading bar */}
      <motion.div
        className="absolute bottom-20 w-48 h-[2px] bg-chef-charcoal rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-chef-gold to-chef-copper"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 3, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  )
}

export default Preloader
