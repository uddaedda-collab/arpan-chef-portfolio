import React from 'react'
import { motion } from 'framer-motion'

const strengths = [
  { title: 'Passionate & Hardworking', icon: '🔥', desc: 'Driven by love for culinary arts' },
  { title: 'Quick Learner', icon: '⚡', desc: 'Adapts to new techniques rapidly' },
  { title: 'Team Player', icon: '🤝', desc: 'Thrives in collaborative kitchens' },
  { title: 'Positive Attitude', icon: '✨', desc: 'Brings energy to every shift' },
  { title: 'Adaptable', icon: '🔄', desc: 'Excels in any environment' },
  { title: 'Committed to Quality', icon: '💎', desc: 'Never compromises on standards' },
]

const Strengths = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="section-divider mb-20" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-cinzel text-sm tracking-[0.3em] text-chef-gold/70 mb-4">
            CHARACTER
          </h3>
          <h2 className="font-playfair text-4xl md:text-5xl text-chef-cream">
            Key <span className="text-gradient-gold">Strengths</span>
          </h2>
        </motion.div>

        {/* Strength cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {strengths.map((strength, i) => (
            <motion.div
              key={strength.title}
              className="glass rounded-2xl p-6 md:p-8 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.03 }}
            >
              <motion.div
                className="text-3xl mb-4"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
              >
                {strength.icon}
              </motion.div>
              <h4 className="font-montserrat text-sm md:text-base text-chef-cream/90 font-medium mb-2">
                {strength.title}
              </h4>
              <p className="font-poppins text-xs text-chef-cream/50">
                {strength.desc}
              </p>

              {/* Animated border on hover */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-chef-gold/30 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          className="mt-16 glass rounded-2xl p-8 md:p-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="font-cinzel text-lg text-chef-gold mb-6">Additional Capabilities</h4>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Able to work efficiently across all kitchen sections',
              'Strong understanding of bakery and baking techniques',
              'Deep commitment toward cleanliness, quality, and customer satisfaction',
              'Ready to adapt within professional culinary environments',
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-1.5 h-1.5 bg-chef-gold rounded-full mt-2 shrink-0" />
                <p className="font-poppins text-sm text-chef-cream/70">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          {['Hindi', 'English', 'Punjabi'].map((lang, i) => (
            <motion.div
              key={lang}
              className="glass-light px-6 py-3 rounded-full"
              whileHover={{ scale: 1.1, y: -3 }}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            >
              <span className="font-montserrat text-sm text-chef-cream/70 tracking-wider">
                🗣️ {lang}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Strengths
