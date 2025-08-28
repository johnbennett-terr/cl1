"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

const benefits = [
  {
    title: "Personalized Demo",
    description: "See how our AI avatars can work specifically for your content needs and brand.",
    icon: "👤",
  },
  {
    title: "Custom Solutions",
    description: "Discover tailored features and integrations that fit your workflow perfectly.",
    icon: "⚙️",
  },
  {
    title: "Expert Guidance",
    description: "Get insights from our team on best practices and advanced techniques.",
    icon: "🎯",
  },
]

export default function BookDemoSection() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <section className="relative py-20 md:py-32 bg-[#030303] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.03] via-transparent to-cyan-500/[0.03]" />

      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-violet-500/10 to-transparent border border-violet-500/20 backdrop-blur-sm"
      />

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-32 right-16 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20 backdrop-blur-sm"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">Book a</span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-white/90 to-cyan-300",
                  pacifico.className,
                )}
              >
                Demo Call
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed font-light">
              Experience the future of content creation firsthand. Schedule a personalized demo with our team.
            </p>
          </motion.div>

          {/* Benefits grid */}
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className="text-center p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-2xl mx-auto p-8 md:p-12 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.08] backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Transform Your Content?</h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                Join hundreds of creators who are already using AI avatars to scale their content production and engage
                their audiences like never before.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-violet-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-violet-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Schedule Demo Call
                </motion.button>

                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Available today • 15 min call</span>
                </div>
              </div>

              <p className="text-xs text-white/30 mt-6 leading-relaxed">
                No commitment required. See the technology in action and ask any questions you have.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
