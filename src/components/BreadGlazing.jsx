import React from 'react'
import { motion } from 'framer-motion'
import { BASE_PATH } from '../config'

const BreadGlazing = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="section-divider mb-20" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="absolute inset-0 bg-chef-copper/10 rounded-2xl blur-[50px] -z-10" />
          
          <div className="relative rounded-2xl overflow-hidden glow-border">
            <img
              src={`${BASE_PATH}images/chef-glazing.jpeg`}
              alt="Chef Arpan glazing bread buns"
              className="w-full aspect-[3/4] object-cover object-center img-cinematic"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-chef-black/50 via-transparent to-transparent" />
            
            {/* Steam effect */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-white/10 rounded-full blur-sm"
                style={{
                  bottom: '20%',
                  left: `${20 + i * 12}%`,
                }}
                animate={{
                  y: [0, -60],
                  opacity: [0, 0.4, 0],
                  scale: [0.5, 1.5],
                }}
                transition={{
                  duration: 2.5 + Math.random(),
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              />
            ))}
          </div>

          {/* Light reflection */}
          <motion.div
            className="absolute top-10 right-10 w-16 h-16 bg-chef-gold/20 rounded-full blur-lg"
            animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h3 className="font-cinzel text-sm tracking-[0.3em] text-chef-gold/70 mb-4">
            ATTENTION TO DETAIL
          </h3>
          <h2 className="font-playfair text-4xl md:text-5xl text-chef-cream mb-8">
            The Art of <span className="text-gradient-gold">Finishing</span>
          </h2>
          <div className="space-y-4 font-poppins text-chef-cream/70 text-base leading-relaxed">
            <p>
              Attention to detail defines true culinary excellence.
            </p>
            <p>
              From preparation to finishing touches, Arpan focuses on consistency, 
              hygiene, presentation, and flavor enhancement to ensure every product 
              meets professional kitchen standards.
            </p>
          </div>

          {/* Quality badges */}
          <div className="mt-8 flex flex-wrap gap-4">
            {['Consistency', 'Hygiene', 'Presentation', 'Flavor'].map((item, i) => (
              <motion.div
                key={item}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-chef-gold rounded-full" />
                <span className="font-montserrat text-sm text-chef-cream/60">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BreadGlazing
