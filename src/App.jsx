import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ChefIntro from './components/ChefIntro'
import BakerySection from './components/BakerySection'
import BreadGlazing from './components/BreadGlazing'
import LiveCooking from './components/LiveCooking'
import MultiCuisine from './components/MultiCuisine'
import Skills3D from './components/Skills3D'
import Education from './components/Education'
import Experience from './components/Experience'
import Specialization from './components/Specialization'
import Strengths from './components/Strengths'
import Reviews from './components/Reviews'
import About from './components/About'
import Contact from './components/Contact'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ParticleBackground />
          <Navbar />
          <Hero />
          <ChefIntro />
          <BakerySection />
          <BreadGlazing />
          <LiveCooking />
          <MultiCuisine />
          <Skills3D />
          <Education />
          <Experience />
          <Specialization />
          <Strengths />
          <Reviews />
          <About />
          <Contact />
          <CTA />
          <Footer />
        </motion.div>
      )}
    </>
  )
}

export default App
