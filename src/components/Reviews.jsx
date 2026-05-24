import React from 'react'
import { motion } from 'framer-motion'

const reviews = [
  { name: 'Priya Sharma', text: 'Outstanding presentation and amazing taste. Every dish feels professionally crafted and beautifully balanced.' },
  { name: 'Rahul Verma', text: 'Very hardworking chef with excellent kitchen discipline and impressive multi-cuisine skills.' },
  { name: 'Sneha Kapoor', text: 'The bakery preparations were fresh, soft, and perfectly textured. Truly professional work.' },
  { name: 'Aman Singh', text: 'Fast service, clean workflow, and excellent flavor balance. Highly impressive chef.' },
  { name: 'Kritika Arora', text: 'Professional attitude with strong culinary creativity. The food quality was excellent.' },
  { name: 'Harpreet Gill', text: 'Beautiful presentation and great attention to detail in every preparation.' },
  { name: 'Simran Kaur', text: 'Very talented chef with excellent understanding of modern kitchen operations.' },
  { name: 'Yash Malhotra', text: 'The energy, hygiene, and professionalism inside the kitchen were truly impressive.' },
  { name: 'Neha Bansal', text: 'Excellent bakery handling and strong flavor consistency across dishes.' },
  { name: 'Karan Mehta', text: 'Creative cooking style with premium presentation quality. Amazing experience.' },
]

const Reviews = () => {
  return (
    <section id="reviews" className="relative py-32 px-6 overflow-hidden">
      <div className="section-divider mb-20" />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-chef-warm/20 to-transparent" />

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
            TESTIMONIALS
          </h3>
          <h2 className="font-playfair text-4xl md:text-5xl text-chef-cream">
            What People <span className="text-gradient-gold">Say</span>
          </h2>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              className="glass rounded-2xl p-6 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-chef-gold text-sm">★</span>
                ))}
              </div>

              {/* Review text */}
              <p className="font-poppins text-sm text-chef-cream/70 leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-chef-gold/30 to-chef-copper/30 flex items-center justify-center">
                  <span className="font-montserrat text-sm text-chef-gold font-bold">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <span className="font-montserrat text-sm text-chef-cream/80">
                  {review.name}
                </span>
              </div>

              {/* Hover glow border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-chef-gold/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
