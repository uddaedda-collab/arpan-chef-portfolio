import React, { useState } from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: 'Multi Cuisine Cooking', icon: '🍳', color: 'from-orange-500/20 to-red-500/20' },
  { name: 'Baking Specialist', icon: '🍞', color: 'from-amber-500/20 to-yellow-500/20' },
  { name: 'Fast Food Preparation', icon: '🍔', color: 'from-red-500/20 to-orange-500/20' },
  { name: 'Food Presentation', icon: '🎨', color: 'from-purple-500/20 to-pink-500/20' },
  { name: 'Kitchen Management', icon: '📋', color: 'from-blue-500/20 to-cyan-500/20' },
  { name: 'Teamwork & Leadership', icon: '🤝', color: 'from-green-500/20 to-emerald-500/20' },
  { name: 'Kitchen Hygiene & Safety', icon: '✨', color: 'from-teal-500/20 to-cyan-500/20' },
  { name: 'Time Management', icon: '⏱️', color: 'from-indigo-500/20 to-blue-500/20' },
  { name: 'Continental Cuisine', icon: '🥘', color: 'from-rose-500/20 to-pink-500/20' },
  { name: 'Chinese Cuisine', icon: '🥡', color: 'from-red-500/20 to-amber-500/20' },
  { name: 'Indian Cuisine', icon: '🍛', color: 'from-yellow-500/20 to-orange-500/20' },
]

const Skills3D = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      <div className="section-divider mb-20" />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-chef-warm/30 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-cinzel text-sm tracking-[0.3em] text-chef-gold/70 mb-4">
            CULINARY EXPERTISE
          </h3>
          <h2 className="font-playfair text-4xl md:text-6xl text-chef-cream">
            Signature <span className="text-gradient-gold">Skills</span>
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className={`relative glass rounded-2xl p-6 cursor-pointer transition-all duration-500 ${
                hoveredIndex === i ? 'scale-105 z-10' : ''
              }`}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{
                y: -10,
                rotateY: 5,
                rotateX: -5,
                transition: { duration: 0.3 },
              }}
              style={{ perspective: '1000px' }}
            >
              {/* Glow effect on hover */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0`}
                animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <div className="relative z-10 text-center">
                <motion.div
                  className="text-3xl mb-3"
                  animate={hoveredIndex === i ? { scale: 1.2, rotate: [0, -10, 10, 0] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {skill.icon}
                </motion.div>
                <h4 className="font-montserrat text-xs md:text-sm text-chef-cream/80 tracking-wider">
                  {skill.name}
                </h4>
              </div>

              {/* Border glow */}
              {hoveredIndex === i && (
                <motion.div
                  className="absolute inset-0 rounded-2xl border border-chef-gold/40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  layoutId="skillGlow"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills3D
