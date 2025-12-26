"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "WORK", href: "/works" },
    { name: "ABOUT", href: "/#about" },
    { name: "CONTACT", href: "/#contact" },
  ]

  const mobileNavItems = navItems.filter((item) => item.name !== "CONTACT")

  const contactLinks = [
    { label: "SCHEDULE A MEET", href: "https://calendly.com/biratpandey9/30min" },
    { label: "WHATSAPP", href: "tel:+977 9743462728" },
  { label: "EMAIL", href: "mailto:biratpandey9@gmail.com" },
  ]

  const socialLinks = [
  { label: "INSTAGRAM", href: "https://www.instagram.com/biratpandey10" },
  { label: "FACEBOOK", href: "https://www.facebook.com/birat.pandey.7169" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/biratpandey/" },
  ]

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-gray-200 border-b border-border/50 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-11 lg:min-h-14">
            <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.4 }} className="relative mr-6">
              <Link href="/" className="text-[clamp(0.875rem,2.5vw,1rem)] font-medium tracking-[0.2em] uppercase relative group">
                <span className="relative z-10">Birat</span>
                <motion.span
                  className="absolute -bottom-0.5 left-0 h-px bg-foreground origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.9, ease: [0.30, 2, 0.40, 1] }}
                  style={{ width: "100%" }}
                />
              </Link>
            </motion.div>

            <nav className="hidden md:flex items-center gap-6 md:gap-8 lg:gap-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    className="text-[clamp(0.75rem,2vw,0.875rem)] font-medium tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 relative group py-2"
                  >
                    <span>{item.name}</span>
                    <motion.span
                      className="absolute bottom-0 left-0 h-px bg-foreground origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      style={{ width: "100%" }}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 relative group rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 min-h-11 min-w-11"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-4 relative flex flex-col justify-between">
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 7 : 0,
                    width: isMobileMenuOpen ? "100%" : "100%",
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-[1.5px] bg-foreground origin-center"
                />
                <motion.span
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    x: isMobileMenuOpen ? 10 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-3/4 h-[1.5px] bg-foreground ml-auto"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -7 : 0,
                    width: isMobileMenuOpen ? "100%" : "50%",
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="h-[1.5px] bg-foreground origin-center ml-auto"
                />
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100%" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl overflow-y-auto"
            >
              <nav className="flex flex-col h-full px-6 pt-10 pb-8">
                <div className="container mx-auto w-full max-w-screen-sm flex flex-col gap-8">
                  <div className="flex items-center justify-between">
                    <Link
                      href="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-[clamp(1rem,4vw,1.25rem)] font-medium tracking-[0.2em] uppercase"
                    >
                      Birat
                    </Link>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-label="Close menu"
                      className="p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-12">
                    <div className=" leading-none">
                      {mobileNavItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ delay: 0.05 * index, duration: 0.3 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="py-3 block text-[clamp(1rem,3.5vw,1.125rem)] font-medium tracking-widest text-foreground transition-colors duration-300 border-b border-border/30"
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-row gap-6 sm:gap-10">
                      <div className="flex-1 space-y-3">
                        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Contact</p>
                        <div className="flex flex-col gap-2">
                          {contactLinks.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              className="text-[clamp(0.95rem,3vw,1rem)] text-muted-foreground hover:text-foreground transition-colors duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="flex-1 space-y-3">
                        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Social</p>
                        <div className="flex flex-col gap-2">
                          {socialLinks.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              className="text-[clamp(0.95rem,3vw,1rem)] text-muted-foreground hover:text-foreground transition-colors duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
