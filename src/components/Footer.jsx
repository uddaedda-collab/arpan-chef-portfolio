import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-chef-gold/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-cinzel text-2xl text-gradient-gold font-bold">ARPAN</h3>
            <p className="font-montserrat text-xs text-chef-cream/50 tracking-wider mt-1">
              Professional Chef
            </p>
          </motion.div>

          {/* Social icons */}
          <div className="flex gap-4">
            {['Instagram', 'LinkedIn', 'WhatsApp'].map((social, i) => (
              <motion.a
                key={social}
                href="#"
                className="w-10 h-10 glass-light rounded-full flex items-center justify-center text-chef-cream/60 hover:text-chef-gold hover:border-chef-gold/30 transition-all duration-300"
                whileHover={{ y: -3, scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                aria-label={social}
              >
                <span className="text-sm">
                  {social === 'Instagram' && '📷'}
                  {social === 'LinkedIn' && '💼'}
                  {social === 'WhatsApp' && '💬'}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-poppins text-xs text-chef-cream/40">
            © 2025 Chef Arpan. Crafted with passion.
          </p>
        </div>

        {/* Golden line animation */}
        <motion.div
          className="mt-8 h-[1px] bg-gradient-to-r from-transparent via-chef-gold/30 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
      </div>
    </footer>
  )
}

export default Footer
