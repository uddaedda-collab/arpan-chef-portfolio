import React from 'react'
import { motion } from 'framer-motion'

const contactItems = [
  { icon: '📱', label: 'Phone', value: '7404204603', href: 'tel:7404204603' },
  { icon: '✉️', label: 'Email', value: 'arpanbatra605@gmail.com', href: 'mailto:arpanbatra605@gmail.com' },
  { icon: '📍', label: 'Location', value: 'Bathinda, Punjab / Dabwali, Haryana', href: null },
]

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="section-divider mb-20" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-chef-gold/5 rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-cinzel text-sm tracking-[0.3em] text-chef-gold/70 mb-4">
            GET IN TOUCH
          </h3>
          <h2 className="font-playfair text-4xl md:text-5xl text-chef-cream">
            Connect With <span className="text-gradient-gold">Chef Arpan</span>
          </h2>
        </motion.div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.label}
              className="glass rounded-2xl p-8 text-center group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              {/* Icon */}
              <motion.div
                className="text-4xl mb-4"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              >
                {item.icon}
              </motion.div>

              {/* Label */}
              <h4 className="font-montserrat text-xs tracking-[0.2em] text-chef-gold/70 mb-3">
                {item.label}
              </h4>

              {/* Value */}
              {item.href ? (
                <a
                  href={item.href}
                  className="font-poppins text-sm text-chef-cream/80 hover:text-chef-gold transition-colors break-all"
                >
                  {item.value}
                </a>
              ) : (
                <p className="font-poppins text-sm text-chef-cream/80">
                  {item.value}
                </p>
              )}

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-chef-gold/30 transition-all duration-500" />
              <motion.div
                className="absolute inset-0 rounded-2xl bg-chef-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
