import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Journey', href: '#intro' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'glass py-3' : 'py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="font-cinzel text-xl md:text-2xl font-bold text-gradient-gold"
          whileHover={{ scale: 1.05 }}
        >
          ARPAN
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="font-montserrat text-sm text-chef-cream/70 hover:text-chef-gold transition-colors duration-300 tracking-wider"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ y: -2 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="w-6 h-0.5 bg-chef-gold block"
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-chef-gold block"
            animate={{ opacity: menuOpen ? 0 : 1 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-chef-gold block"
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
          />
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 glass p-6 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 font-montserrat text-chef-cream/80 hover:text-chef-gold transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
