"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"

const faqs = [
  {
  question: "How much do you charge for a website?",
  answer:
    "It depends on the project. Simple landing pages start around $500, while full web apps or complex designs can go up to $10,000+. I always provide flexible pricing based on your needs and timeline.",
},
{
  question: "How long will it take to build my website?",
  answer:
    "Most websites are ready within 2-4 weeks. A small landing page can be done in 1 week, while bigger projects like web apps may take 5-6 weeks, depending on features.",
},
{
  question: "Which technologies do you use?",
  answer:
    "I mainly work with Next.js, React, and Tailwind CSS for websites, but I can also work with Framer, Webflow, or other modern tools depending on your project requirements.",
},
{
  question: "What do you need from me to start?",
  answer:
    "I’ll need your brand assets (logo, colors, fonts), content (text and images), and a clear idea of your goals so I can build something that matches your vision perfectly.",
},
{
  question: "Do you provide support after launch?",
  answer:
    "Yes! I offer ongoing support and maintenance to make sure your website stays up-to-date, secure, and running smoothly after launch.",
}

]

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white relative z-20">
      <div className="container mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-8 lg:gap-12">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[18px] text-muted-foreground tracking-widest uppercase lg::mb-10 block leading-none"
        >
          [FAQs]
        </motion.span>

        

        <div className="space-y-0 flex-1 w-full">
          <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(3.5rem,7vw,5rem)] font-serif font-normal mb-4 tracking-tight leading-none"
        >
          Frequently asked questions
        </motion.h2>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
              className="w-full border-b border-border/60 bg-muted-foreground/20 px-4 sm:px-6 mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-4 sm:py-6 flex items-center justify-between text-left group min-h-11"
              >
                <span className="text-[clamp(0.95rem,2.2vw,1rem)] font-medium pr-4 group-hover:text-muted-foreground transition-colors duration-300 tracking-tight ">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-border/60 group-hover:border-foreground/30 transition-colors duration-300"
                >
                  <Plus className="w-6 h-6 text-muted-foreground" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-[clamp(0.9rem,2.1vw,1rem)] text-muted-foreground leading-relaxed tracking-wide">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
