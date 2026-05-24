import React from 'react'
import { motion } from 'framer-motion'
import { BASE_PATH } from '../config'

const keywords = ['Live Kitchen', 'High Flame Cooking', 'Multi Cuisine', 'Fast Service', 'Premium Taste']

const LiveCooking = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="section-divider mb-20" />

      {/* Fire glow background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-chef-orange/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 left-1/3 w-[300px] h-[300px] bg-red-900/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-cinzel text-sm tracking-[0.3em] text-chef-orange/80 mb-4">
            THE HEAT OF THE KITCHEN
          </h3>
          <h2 className="font-playfair text-4xl md:text-6xl text-chef-cream">
            Live <span className="text-gradient-gold fire-glow">Cooking</span> Experience
          </h2>
        </motion.div>

        {/* Main image - full width cinematic */}
        <motion.div
          className="relative rounded-2xl overflow-hidden mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="absolute inset-0 bg-chef-orange/10 rounded-2xl blur-[80px] -z-10" />
          
          <div className="relative glow-border rounded-2xl overflow-hidden">
            <img
              src={`${BASE_PATH}images/chef-noodles.jpeg`}
              alt="Chef Arpan cooking noodles in wok with high flame"
              className="w-full aspect-[2/3] object-cover object-top img-cinematic"
              loading="lazy"
            />
            
            {/* Cinematic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-chef-black/80 via-chef-black/20 to-transparent" />
            
            {/* Fire glow at bottom */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-chef-orange/20 to-transparent"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Steam/smoke particles */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full blur-sm"
                style={{
                  bottom: '30%',
                  left: `${15 + Math.random() * 70}%`,
                }}
                animate={{
                  y: [0, -120],
                  x: [0, (Math.random() - 0.5) * 40],
                  opacity: [0, 0.5, 0],
                  scale: [0.5, 2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}

            {/* Heat distortion overlay */}
            <motion.div
              className="absolute bottom-0 left-1/4 right-1/4 h-40 bg-gradient-to-t from-orange-500/10 to-transparent"
              animate={{ opacity: [0.2, 0.5, 0.2], scaleX: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Text content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 font-poppins text-chef-cream/70 text-base leading-relaxed">
              <p>
                Inside a fast-paced kitchen environment, Arpan performs with confidence, 
                speed, and precision.
              </p>
              <p>
                Whether handling high-flame wok cooking or balancing flavors in real time, 
                he maintains professionalism, cleanliness, timing, and presentation under pressure.
              </p>
              <p>
                The energy of the kitchen comes alive through his workflow and culinary focus.
              </p>
            </div>
          </motion.div>

          {/* Floating keywords */}
          <motion.div
            className="flex flex-wrap gap-3 justify-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            {keywords.map((word, i) => (
              <motion.span
                key={word}
                className="glass px-5 py-3 rounded-full font-montserrat text-xs tracking-wider text-chef-orange/90 border border-chef-orange/20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5, borderColor: 'rgba(232, 101, 26, 0.5)' }}
                animate={{ y: [0, -3, 0] }}
                style={{ animationDuration: `${3 + i * 0.5}s` }}
              >
                🔥 {word}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LiveCooking
