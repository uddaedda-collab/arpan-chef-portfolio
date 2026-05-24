import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="section-divider mb-20" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-cinzel text-sm tracking-[0.3em] text-chef-gold/70 mb-4">
            THE PERSON BEHIND THE PASSION
          </h3>
          <h2 className="font-playfair text-4xl md:text-5xl text-chef-cream mb-12">
            About <span className="text-gradient-gold">The Chef</span>
          </h2>
        </motion.div>

        {/* Bio text */}
        <motion.div
          className="space-y-6 font-poppins text-chef-cream/70 text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>
            A young and passionate culinary professional driven by creativity, discipline, 
            and modern kitchen excellence. With strong adaptability and dedication toward 
            culinary artistry, Arpan represents the next generation of professional chefs 
            focused on quality, presentation, and innovation.
          </p>
          <p>
            His ability to work across bakery production, live kitchen cooking, and 
            multi-cuisine preparation showcases both versatility and dedication toward 
            professional culinary excellence.
          </p>
          <p>
            Every dish reflects effort, consistency, and an understanding of modern kitchen standards.
          </p>
        </motion.div>

        {/* Personal details */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="glass-light px-6 py-3 rounded-full">
            <span className="font-montserrat text-sm text-chef-cream/60">
              🎂 Born: 14 January 2004
            </span>
          </div>
          <div className="glass-light px-6 py-3 rounded-full">
            <span className="font-montserrat text-sm text-chef-cream/60">
              🇮🇳 Nationality: Indian
            </span>
          </div>
          <div className="glass-light px-6 py-3 rounded-full">
            <span className="font-montserrat text-sm text-chef-cream/60">
              📍 Punjab / Haryana
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
