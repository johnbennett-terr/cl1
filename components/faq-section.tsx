"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Pacifico } from "next/font/google"
import { useState } from "react"
import { cn } from "@/lib/utils"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

const faqs = [
  {
    question: "How realistic are the AI-generated avatars?",
    answer:
      "Our AI avatars are incredibly lifelike, featuring natural facial expressions, lip-sync accuracy, and realistic movements. Using advanced deep learning models, we create avatars that are virtually indistinguishable from real video recordings.",
  },
  {
    question: "How long does it take to create my avatar?",
    answer:
      "Initial avatar creation takes 24-48 hours after you provide your training materials. Once created, you can generate new videos instantly. The setup process involves uploading photos and a short video sample for optimal results.",
  },
  {
    question: "What languages and accents are supported?",
    answer:
      "We support over 40 languages with native accent accuracy. Our voice cloning technology preserves your unique speaking style, tone, and accent across all supported languages, ensuring authentic communication.",
  },
  {
    question: "Can I customize my avatar's appearance and clothing?",
    answer:
      "You can modify your avatar's clothing, hairstyle, background, and even facial expressions. We offer hundreds of professional outfits and backgrounds, plus the ability to upload custom elements.",
  },
  {
    question: "What video quality and formats do you support?",
    answer:
      "We export videos in up to 4K resolution in multiple formats including MP4, MOV, and WebM. All videos are optimized for different platforms like YouTube, LinkedIn, Instagram, and professional presentations.",
  },
  {
    question: "Is my data and likeness secure?",
    answer:
      "Security is our top priority. All data is encrypted end-to-end, stored on secure servers, and never shared with third parties. You maintain full ownership and control over your avatar and can delete it anytime.",
  },
  {
    question: "Do you offer API integration for businesses?",
    answer:
      "Yes, we provide comprehensive API access for businesses looking to integrate avatar generation into their existing workflows. Our enterprise plans include dedicated support, custom integrations, and bulk processing capabilities.",
  },
  {
    question: "What's included in the early access program?",
    answer:
      "Early access members get unlimited avatar creation, priority support, access to beta features, and special pricing that's locked in for life. You'll also have direct input on new features and improvements.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-20 md:py-32 bg-[#030303] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.03] via-transparent to-indigo-500/[0.03]" />

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-32 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-rose-500/10 to-transparent border border-rose-500/20 backdrop-blur-sm"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Frequently Asked
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-rose-300 via-white/90 to-indigo-300",
                  pacifico.className,
                )}
              >
                Questions
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed font-light">
              Everything you need to know about our AI avatar technology and how it can transform your content creation.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-white/[0.08] rounded-xl bg-white/[0.02] backdrop-blur-sm overflow-hidden hover:border-white/[0.15] transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 md:px-8 py-6 text-left flex items-center justify-between hover:bg-white/[0.02] transition-colors duration-200"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-white pr-4 leading-relaxed">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
                  >
                    <div className="w-4 h-0.5 bg-white/60 absolute" />
                    <div className="w-0.5 h-4 bg-white/60 absolute" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 pt-2">
                        <p className="text-white/60 leading-relaxed font-light">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16 md:mt-20"
          >
            <p className="text-white/40 mb-6">Still have questions?</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-rose-500 to-indigo-500 text-white font-medium rounded-lg hover:from-rose-600 hover:to-indigo-600 transition-all duration-200"
            >
              Contact Our Team
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
