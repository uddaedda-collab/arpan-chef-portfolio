import React from 'react'
import { motion } from 'framer-motion'

const MultiCuisine = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="section-divider mb-20" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -60, rotateY: -5 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="absolute inset-0 bg-chef-gold/10 rounded-2xl blur-[60px] -z-10" />
          
          <div className="relative rounded-2xl overflow-hidden glow-border">
            <img
              src="/images/chef-wok.jpeg"
              alt="Chef Arpan cooking vegetable dish in wok"
              className="w-full aspect-[2/3] object-cover object-center img-cinematic"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-chef-black/60 via-transparent to-transparent" />
          </div>

          {/* Ingredient particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-lg"
              style={{
                top: `${20 + Math.random() * 50}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {['🌶️', '🧄', '🫑', '🧅', '🌿', '🍋'][i]}
            </motion.div>
          ))}
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h3 className="font-cinzel text-sm tracking-[0.3em] text-chef-gold/70 mb-4">
            VERSATILITY & MASTERY
          </h3>
          <h2 className="font-playfair text-4xl md:text-5xl text-chef-cream mb-8">
            Multi Cuisine <span className="text-gradient-gold">Specialist</span>
          </h2>
          <div className="space-y-4 font-poppins text-chef-cream/70 text-base leading-relaxed">
            <p>
              Versatility is one of Arpan's strongest culinary qualities.
            </p>
            <p>
              From bakery preparations to continental dishes, Chinese cuisine, Indian flavors, 
              and fast food operations — his adaptability allows him to contribute efficiently 
              across multiple kitchen sections.
            </p>
            <p>
              His approach combines taste, presentation, cleanliness, and teamwork into one 
              complete kitchen experience.
            </p>
          </div>

          {/* Cuisine tags */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {['Continental', 'Chinese', 'Indian', 'Italian', 'Bakery', 'Fast Food'].map((cuisine, i) => (
              <motion.div
                key={cuisine}
                className="glass-light px-4 py-3 rounded-xl flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <div className="w-1.5 h-1.5 bg-chef-gold rounded-full" />
                <span className="font-montserrat text-xs tracking-wider text-chef-cream/70">
                  {cuisine}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MultiCuisine
