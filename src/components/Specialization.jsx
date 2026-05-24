import React from 'react'
import { motion } from 'framer-motion'

const cuisines = [
  { name: 'Continental Cuisine', icon: '🥩', desc: 'European flavors & techniques' },
  { name: 'Chinese Cuisine', icon: '🥡', desc: 'Wok mastery & Asian flavors' },
  { name: 'Indian Cuisine', icon: '🍛', desc: 'Spices & traditional methods' },
  { name: 'Italian Cuisine', icon: '🍝', desc: 'Pasta, pizza & Mediterranean' },
  { name: 'Bakery Specialization', icon: '🥐', desc: 'Artisan breads & pastries' },
  { name: 'Fast Food Expertise', icon: '🍔', desc: 'Speed, consistency & quality' },
  { name: 'Kitchen Operations', icon: '⚡', desc: 'Workflow & management' },
]

const Specialization = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="section-divider mb-20" />

      {/* Background */}
      <div className="absolute top-1/2 left-0 w-full h-[400px] -translate-y-1/2 bg-gradient-to-r from-chef-orange/5 via-chef-gold/5 to-chef-orange/5 blur-[80px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-cinzel text-sm tracking-[0.3em] text-chef-gold/70 mb-4">
            CULINARY RANGE
          </h3>
          <h2 className="font-playfair text-4xl md:text-5xl text-chef-cream">
            Areas of <span className="text-gradient-gold">Specialization</span>
          </h2>
        </motion.div>

        {/* Cuisine cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {cuisines.map((cuisine, i) => (
            <motion.div
              key={cuisine.name}
              className="glass rounded-2xl p-6 text-center group cursor-pointer"
              initial={{ opacity: 0, y: 30, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="text-4xl mb-3"
                whileHover={{ scale: 1.3, rotate: 10 }}
              >
                {cuisine.icon}
              </motion.div>
              <h4 className="font-montserrat text-sm text-chef-cream/90 font-medium mb-1">
                {cuisine.name}
              </h4>
              <p className="font-poppins text-xs text-chef-cream/50">
                {cuisine.desc}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-chef-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specialization
