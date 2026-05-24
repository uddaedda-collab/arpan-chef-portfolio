import React from 'react'
import { motion } from 'framer-motion'

const floatingWords = ['Precision', 'Passion', 'Creativity', 'Flavor', 'Excellence']

const ChefIntro = () => {
  return (
    <section id="intro" className="relative py-32 px-6 overflow-hidden">
      <div className="section-divider mb-20" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -80, rotateY: -10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-chef-orange/20 rounded-2xl blur-[60px] -z-10" />
          
          <div className="relative rounded-2xl overflow-hidden glow-border">
            <img
              src="/images/chef-portrait.jpeg"
              alt="Chef Arpan in professional kitchen"
              className="w-full aspect-[2/3] object-cover object-center img-cinematic"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-chef-black/60 via-transparent to-transparent" />
          </div>

          {/* Floating light reflections */}
          <motion.div
            className="absolute -top-4 -right-4 w-20 h-20 bg-chef-gold/20 rounded-full blur-xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h3
            className="font-cinzel text-sm tracking-[0.3em] text-chef-gold/70 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            THE CULINARY ARTIST
          </motion.h3>

          <motion.h2
            className="font-playfair text-4xl md:text-5xl text-chef-cream mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            Meet <span className="text-gradient-gold">Arpan</span>
          </motion.h2>

          <motion.div
            className="space-y-4 font-poppins text-chef-cream/70 text-base leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              A passionate culinary artist dedicated to creating memorable food experiences 
              through creativity, precision, and authentic flavors.
            </p>
            <p>
              With strong understanding of bakery craftsmanship, multi-cuisine preparation, 
              fast kitchen operations, and modern plating techniques — bringing both energy 
              and professionalism into every kitchen environment.
            </p>
            <p>
              His cooking style blends discipline, cleanliness, presentation, and taste 
              into one complete culinary experience.
            </p>
          </motion.div>

          {/* Floating words */}
          <div className="mt-10 flex flex-wrap gap-3">
            {floatingWords.map((word, i) => (
              <motion.span
                key={word}
                className="glass px-4 py-2 rounded-full text-sm font-montserrat text-chef-gold/80 tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                animate={{ y: [0, -5, 0] }}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ChefIntro
