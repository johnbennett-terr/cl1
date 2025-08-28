"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

const features = [
  {
    title: "AI-Powered Avatars",
    description: "Create lifelike digital avatars that speak and move naturally using advanced AI technology.",
    icon: "🤖",
    gradient: "from-indigo-500/20 to-purple-500/20",
    border: "border-indigo-500/30",
  },
  {
    title: "Real-Time Generation",
    description:
      "Generate high-quality video content in minutes, not hours. Perfect for content creators on tight schedules.",
    icon: "⚡",
    gradient: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/30",
  },
  {
    title: "Voice Cloning",
    description:
      "Clone your voice with just a few minutes of audio. Maintain your unique speaking style across all content.",
    icon: "🎤",
    gradient: "from-rose-500/20 to-pink-500/20",
    border: "border-rose-500/30",
  },
  {
    title: "Multi-Language Support",
    description:
      "Create content in over 40 languages. Break language barriers and reach global audiences effortlessly.",
    icon: "🌍",
    gradient: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/30",
  },
  {
    title: "Custom Backgrounds",
    description: "Choose from hundreds of professional backgrounds or upload your own. Perfect for any brand or style.",
    icon: "🎨",
    gradient: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/30",
  },
  {
    title: "HD Video Export",
    description:
      "Export your videos in stunning 4K quality. Professional results ready for any platform or presentation.",
    icon: "📹",
    gradient: "from-emerald-500/20 to-green-500/20",
    border: "border-emerald-500/30",
  },
]

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <section className="relative py-12 md:py-16 bg-[#030303] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03]" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">Advanced</span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300",
                  pacifico.className,
                )}
              >
                Features
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed font-light">
              Discover the cutting-edge capabilities that make our AI avatar technology the future of content creation.
            </p>
          </motion.div>

          {/* Features grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className={cn(
                  "group relative p-6 md:p-8 rounded-2xl",
                  "bg-white/[0.02] backdrop-blur-sm",
                  "border border-white/[0.08] hover:border-white/[0.15]",
                  "transition-all duration-300",
                  "hover:shadow-[0_20px_40px_0_rgba(255,255,255,0.05)]",
                )}
              >
                {/* Card gradient overlay */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    "bg-gradient-to-br",
                    feature.gradient,
                  )}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed font-light">{feature.description}</p>
                </div>

                {/* Hover border effect */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    "border-2",
                    feature.border,
                  )}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
