import React from 'react'
import { motion } from 'framer-motion'
import { BASE_PATH } from '../config'

const keywords = ['Fresh Dough', 'Artisan Baking', 'Perfect Texture', 'Precision Craftsmanship']

const BakerySection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="section-divider mb-20" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-chef-orange/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h3 className="font-cinzel text-sm tracking-[0.3em] text-chef-gold/70 mb-4">
            BAKERY CRAFTSMANSHIP
          </h3>
          <h2 className="font-playfair text-4xl md:text-5xl text-chef-cream mb-8">
            Artisan <span className="text-gradient-gold">Bakery</span> Experience
          </h2>
          <div className="space-y-4 font-poppins text-chef-cream/70 text-base leading-relaxed">
            <p>
              From handcrafted dough preparation to precision baking techniques, 
              Arpan demonstrates exceptional patience and consistency inside the bakery section.
            </p>
            <p>
              Every preparation reflects attention to texture, balance, freshness, and perfection. 
              His workflow combines discipline with artistic presentation, creating bakery products 
              that feel both premium and comforting.
            </p>
          </div>

          {/* Keywords */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {keywords.map((word, i) => (
              <motion.div
                key={word}
                className="glass-light px-4 py-3 rounded-xl text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(201, 168, 76, 0.4)' }}
              >
                <span className="font-montserrat text-xs tracking-wider text-chef-gold/80">
                  {word}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="order-1 md:order-2 relative"
          initial={{ opacity: 0, x: 60, rotateY: 5 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="absolute inset-0 bg-chef-gold/10 rounded-2xl blur-[50px] -z-10" />
          
          <div className="relative rounded-2xl overflow-hidden glow-border">
            <img
              src={`${BASE_PATH}images/chef-dough.jpeg`}
              alt="Chef Arpan preparing artisan dough"
              className="w-full aspect-[3/4] object-cover object-center img-cinematic"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-chef-black/50 via-transparent to-transparent" />
          </div>

          {/* Flour particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-chef-cream/30 rounded-full"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default BakerySection
