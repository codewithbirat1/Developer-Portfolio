"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: string
  name: string
  company: string
  service: string
  tags: string[]
  quote: string
}

const testimonials: Testimonial[] = [
  {
  id: "1",
  name: "Anant Limbu",
  company: "Somag Korean",
  service: "Software",
  tags: ["STRATEGY", "WEB DEVELOPMENT"],
  quote:
    "Birat was very professional and easy to work with. The website design was clean, modern, and well-structured, and he helped guide us with smart suggestions throughout the project.",
},
{
  id: "2",
  name: "Ajit Pariyar",
  company: "Jhankar Band",
  service: "Website",
  tags: ["BRANDING", "WEB DESIGN"],
  quote:
    "Great communication, fast turnaround, and strong technical work. The project was executed smoothly, and the final result perfectly matched what we needed for our brand and event platform.",
},
{
  id: "3",
  name: "Fransisco Palacios",
  company: "Avante Firm",
  service: "Website",
  tags: ["WEB DESIGN", "CONTENT STRATEGY"],
  quote:
    "Working with Birat was a great experience. He understood our goals clearly, provided helpful feedback, and delivered a solution that improved our online presence and engagement.",
},
{
  id: "4",
  name: "Prashant Pandey",
  company: "Nexolinx",
  service: "Development",
  tags: ["UI/UX DESIGN", "WEB DEVELOPMENT"],
  quote:
    "Very focused, reliable, and skilled. Birat offered valuable insights, refined our design direction, and delivered high-quality work within the expected timeline without compromising on details.",
}

]

export function TestimonialsSection() {
  const [activeId, setActiveId] = useState<string>(testimonials[0].id)
  const activeTestimonial = testimonials.find((t) => t.id === activeId) || testimonials[0]

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-20 bg-white relative z-20">
      <div className="container mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-8 lg:gap-12">
        {/* Left Sidebar */}
        <div className="lg:block pt-10">
          <span className="text-[18px] font-medium tracking-widest uppercase text-muted-foreground">
            [TESTIMONIALS]
          </span>
        </div>

        {/* Main Content */}
        <div className="space-y-12 lg:space-y-20">
          {/* Quote Area */}
          <div className="flex flex-col justify-start">
            <div className="mb-8">
              <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H5c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 4-4 4-4 4" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-3c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 4-4 4-4 4" />
                </svg>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={activeId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="text-[clamp(1.25rem,5.5vw,3rem)] font-medium leading-[1.1] tracking-tight text-balance max-w-5xl"
              >
                {activeTestimonial.quote}
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Table Area */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeId}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-[18px]  tracking-widest uppercase"
                >
                  {activeTestimonial.tags.join(", ")}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="w-full overflow-hidden border-t border-zinc-200">
            

              {/* Rows */}
              <div className="divide-y divide-zinc-200">
                {testimonials.map((t) => (
                  <motion.div
                    key={t.id}
                    onMouseEnter={() => setActiveId(t.id)}
                    onClick={() => setActiveId(t.id)}
                    className={cn(
                      "grid grid-cols-1 md:grid-cols-3 px-4 sm:px-6 py-4 sm:py-6 cursor-pointer transition-colors ease-in-out duration-300",
                      activeId === t.id ? "bg-black text-white" : "hover:bg-zinc-50",
                    )}
                  >
                    <div className="font-medium text-[clamp(0.95rem,2.1vw,1rem)]">{t.name}</div>
                    <div className="text-[clamp(0.9rem,2.1vw,1rem)] opacity-80">{t.company}</div>
                    <div className="text-[clamp(0.9rem,2.1vw,1rem)] opacity-80 md:text-right">{t.service}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default TestimonialsSection;