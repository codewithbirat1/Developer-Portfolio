"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const contactLinks = [
  { label: "WHATSAPP", href: "tel:+977 9743462728" },
  { label: "EMAIL", href: "mailto:biratpandey9@gmail.com" },
  { label: "INSTAGRAM", href: "https://www.instagram.com/biratpandey10" },
  { label: "FACEBOOK", href: "https://www.facebook.com/birat.pandey.7169" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/biratpandey/" },
  { label: "SCHEDULE A MEET", href: "https://calendly.com/biratpandey9/30min" },
  
]

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!nameRef.current) return

    const chars = nameRef.current.querySelectorAll(".char")

    gsap.fromTo(
      chars,
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: nameRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      },
    )
  }, [])

  const nameChars = "BIRAT".split("")

  return (
    <footer
      ref={sectionRef}
      id="contact"
      className="pt-10 lg:pt-20 px-4 sm:px-6 lg:px-8 border-t border-border/50 bg-white relative z-20"
    >
      <div className="container mx-auto w-full">
        {/* Contact section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[18px] text-muted-foreground tracking-wider uppercase"
          >
            [Contact]
          </motion.span>

          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.05 * index, ease: [0.22, 1, 0.36, 1] }}
                className="text-xs lg:text-xl tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 animated-underline w-max"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-end mb-4"
        >
           <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="premium-btn flex items-center gap-3 bg-muted-foreground text-background px-6 py-3 text-xs font-medium tracking-widest uppercase min-h-11"
                >
                  <span>Unavailable</span>
                  <ArrowUpRight className="w-6 h-6" />
                </motion.button>
        </motion.div>
      </div>
        <div className="flex flex-1 items-end justify-between gap-6 overflow-hidden">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-[18px] text-muted-foreground tracking-[0.2em]"
          >
            ©2025
          </motion.div>

          <h2
            ref={nameRef}
            className="mb-0 text-[clamp(4.375rem,21vw,21rem)] font-serif font-normal leading-[0.85] tracking-[-0.03em] text-right"
          >
            {nameChars.map((char, index) => (
              <motion.span
                key={index}
                className="char inline-block"
                whileHover={{
                  scale: 1.05,
                  color: "#525252",
                  transition: { duration: 0.2 },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
        </div>
</div>
    </footer>
  )
}
