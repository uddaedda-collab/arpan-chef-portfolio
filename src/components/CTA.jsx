import React from 'react'
import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      <div className="section-divider mb-20" />

      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-chef-orange/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-chef-gold/10 rounded-full blur-[80px] animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-chef-copper/5 rounded-full blur-[120px]" />
      </div>

      {/* Steam particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/10 rounded-full"
          style={{
            left: `${10 + Math.random() * 80}%`,
            bottom: '20%',
          }}
          animate={{
            y: [0, -150],
            opacity: [0, 0.3, 0],
            scale: [1, 2],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          className="font-bebas text-5xl md:text-8xl text-gradient-gold fire-glow mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          LET'S CREATE SOMETHING DELICIOUS
        </motion.h2>

        <motion.p
          className="font-poppins text-base md:text-lg text-chef-cream/60 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Available for professional kitchen opportunities, culinary collaborations, 
          and premium food experiences.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="mailto:arpanbatra605@gmail.com"
            className="glass px-10 py-5 rounded-full font-montserrat text-sm tracking-wider text-chef-gold hover:bg-chef-gold/10 transition-all duration-300 glow-border"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Chef
          </motion.a>
          <motion.a
            href="#intro"
            className="glass px-10 py-5 rounded-full font-montserrat text-sm tracking-wider text-chef-cream/80 hover:text-chef-gold transition-all duration-300"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Portfolio
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
