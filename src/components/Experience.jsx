import React from 'react'
import { motion } from 'framer-motion'
import { BASE_PATH } from '../config'

const experiences = [
  {
    title: 'Bakery & Artisan Experience',
    image: 'images/chef-dough-2.jpeg',
    description: [
      'Built strong practical expertise in artisan dough preparation, bakery handling, kitchen discipline, and precision food preparation techniques within a professional fast-paced kitchen environment.',
      'Developed consistency, workflow management, and quality-focused preparation methods while maintaining hygiene and presentation standards.',
    ],
    tags: ['Artisan Dough', 'Bakery Handling', 'Kitchen Discipline', 'Quality Focus'],
  },
  {
    title: 'Multi Cuisine Kitchen Experience',
    image: 'images/chef-wok.jpeg',
    description: [
      'Worked across multiple live kitchen sections involving Continental, Chinese, Indian, and fast-food preparation while maintaining speed, flavor balance, consistency, and plating quality.',
      'Adapted efficiently inside dynamic kitchen environments requiring teamwork, coordination, time management, and professional execution.',
    ],
    tags: ['Live Kitchen', 'Multi Cuisine', 'Speed & Precision', 'Team Coordination'],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="relative py-32 px-6 overflow-hidden">
      <div className="section-divider mb-20" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-cinzel text-sm tracking-[0.3em] text-chef-gold/70 mb-4">
            PROFESSIONAL PATH
          </h3>
          <h2 className="font-playfair text-4xl md:text-6xl text-chef-cream">
            Culinary <span className="text-gradient-gold">Journey</span>
          </h2>
        </motion.div>

        {/* Experience cards */}
        <div className="space-y-20">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? 'md:direction-rtl' : ''
              }`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              {/* Image */}
              <motion.div
                className={`relative ${i % 2 === 1 ? 'md:order-2' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-chef-gold/10 rounded-2xl blur-[40px] -z-10" />
                <div className="rounded-2xl overflow-hidden glow-border">
                  <img
                    src={`${BASE_PATH}${exp.image}`}
                    alt={exp.title}
                    className="w-full aspect-[3/4] object-cover object-center img-cinematic"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-chef-black/50 to-transparent" />
                </div>
              </motion.div>

              {/* Content */}
              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <motion.div
                  className="glass rounded-2xl p-8"
                  initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-cinzel text-2xl md:text-3xl text-chef-cream mb-6">
                    {exp.title}
                  </h3>
                  <div className="space-y-3 font-poppins text-chef-cream/70 text-sm leading-relaxed">
                    {exp.description.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full text-xs font-montserrat text-chef-gold/70 border border-chef-gold/20 hover:border-chef-gold/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
