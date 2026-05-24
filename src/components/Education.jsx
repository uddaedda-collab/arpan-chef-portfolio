import React from 'react'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="section-divider mb-20" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-cinzel text-sm tracking-[0.3em] text-chef-gold/70 mb-4">
            FOUNDATION
          </h3>
          <h2 className="font-playfair text-4xl md:text-5xl text-chef-cream">
            Culinary <span className="text-gradient-gold">Education</span> Journey
          </h2>
        </motion.div>

        {/* Timeline card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Golden timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-chef-gold/60 via-chef-gold/30 to-transparent" />

          {/* Education card */}
          <div className="ml-16 relative">
            {/* Timeline dot */}
            <motion.div
              className="absolute -left-[2.35rem] top-8 w-4 h-4 rounded-full bg-chef-gold border-4 border-chef-black"
              animate={{ scale: [1, 1.3, 1], boxShadow: ['0 0 0 0 rgba(201, 168, 76, 0)', '0 0 0 10px rgba(201, 168, 76, 0.2)', '0 0 0 0 rgba(201, 168, 76, 0)'] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <motion.div
              className="glass rounded-2xl p-8 md:p-10"
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Year badge */}
              <motion.div
                className="inline-block glass-light px-4 py-1.5 rounded-full mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="font-montserrat text-xs tracking-wider text-chef-gold">
                  COMPLETED 2025
                </span>
              </motion.div>

              <h3 className="font-cinzel text-2xl md:text-3xl text-chef-cream mb-2">
                National Diploma in Hotel Management
              </h3>
              <p className="font-montserrat text-sm text-chef-gold/80 tracking-wider mb-6">
                NFCI Institute of Culinary Arts
              </p>

              <p className="font-poppins text-chef-cream/70 leading-relaxed">
                Professionally trained in culinary fundamentals, bakery techniques, 
                kitchen operations, hygiene standards, food presentation, and 
                multi-cuisine preparation.
              </p>

              {/* Skills learned */}
              <div className="mt-6 flex flex-wrap gap-2">
                {['Culinary Fundamentals', 'Bakery Techniques', 'Kitchen Operations', 'Food Safety', 'Plating'].map((item, i) => (
                  <motion.span
                    key={item}
                    className="px-3 py-1 rounded-full text-xs font-montserrat text-chef-cream/60 border border-chef-gold/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
