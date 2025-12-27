"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Github, Facebook, Linkedin, Instagram, ArrowUpRight } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!imageRef.current) return

    gsap.fromTo(
      imageRef.current,
      { clipPath: "inset(100% 0 0 0)" },
      {
        clipPath: "inset(0% 0 0 0)",
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    )
  }, [])

  const socialLinks = [
    { Icon: Github, href: "https://github.com/codewithbirat1", label: "GitHub" },
    { Icon: Facebook, href: "https://www.facebook.com/birat.pandey.7169", label: "Facebook" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/biratpandey/", label: "LinkedIn" },
    { Icon: Instagram, href: "https://www.instagram.com/biratpandey10", label: "Instagram" },
  ]

  return (
    <section ref={sectionRef} id="about" className="px-4 sm:px-6 lg:px-8 bg-white relative z-20">
      <div className="container mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.6fr] lg:items-center lg:gap-6">

          <motion.div
            ref={imageRef}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-linear-to-br from-neutral-800 to-neutral-900 overflow-hidden relative group rounded-2xl w-full max-w-sm md:max-w-md aspect-3/4 order-2 lg:order-1"
          >
            <Image
              src="/about.png"
              alt="Birat Pandey"
              fill
              sizes="(min-width:1280px) 40vw, (min-width:768px) 50vw, 100vw"
              className="object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          <div className="flex flex-col justify-center w-full order-1 lg:order-2">
            <div className="flex mb-7 lg:mb-10">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-[18px] lg:mr-20 text-muted-foreground uppercase "
              >
                [About]
              </motion.span>

              <h2 className="text-[clamp(1.125rem,3.2vw,2rem)] text-right font-sans font-normal leading-[1.4] tracking-tight break-all overflow-hidden text-ellipsis">
                {"I help startups, brands, and creators build modern, fast, and meaningful digital experiences with clean design and smart development."
                  .split(" ")
                  .map((word, i) => (
                    <span key={i} className="word inline-block mr-[0.3em]">
                      {word}
                    </span>
                  ))}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-prose"
              >
                <h3 className="text-[15px] text-muted-foreground tracking-[0.2em] uppercase mb-4">My Life</h3>
                <p className="text-[clamp(0.9rem,2.1vw,1rem)] text-muted-foreground leading-relaxed tracking-wide">
                  {"I'm born in 2009. I'm a guy. I'm Nepali. I love coding. I love cricket. I love music. I overthink a lot. I work hard. I build things anyway. Mindset is everything."}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-prose"
              >
                <h3 className="text-[15px] text-muted-foreground tracking-[0.2em] uppercase mb-4">Work & Vision</h3>
                <p className="text-[clamp(0.9rem,2.1vw,1rem)] text-muted-foreground leading-relaxed tracking-wide">
                  {"I’m Founder of Nexolinx, where I work on web development, UI/UX, and digital experiences. My goal is to grow, build meaningful projects, and create opportunities for myself and the people around me."}
                </p>
              </motion.div>
            </div>

            <div className="items-center justify-center gap-8 sm:gap-10 pr-2 mb-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-4 mb-5"
              >
                {socialLinks.map(({ Icon, href, label }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    aria-label={label}
                    whileHover={{ y: -4, scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                    className="w-12 h-12 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/50 hover:bg-foreground/5 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="premium-btn flex items-center gap-3 bg-muted-foreground text-background px-6 py-3 text-xs font-medium tracking-widest uppercase min-h-11"
              >
                <span>Unavailable</span>
                <ArrowUpRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
