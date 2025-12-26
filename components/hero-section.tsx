"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!nameRef.current) return;

    const chars = nameRef.current.querySelectorAll(".char");

    gsap.fromTo(
      chars,
      {
        y: 120,
        opacity: 0,
        rotateX: -90,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.06,
        duration: 1.4,
        ease: "power4.out",
        delay: 0.6,
      }
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nameChars = "BIRAT".split("");

  return (
    <section className="relative h-screen">
      <div className="fixed inset-0 bg-gray-200">
        <div
          className="relative h-full flex flex-col justify-center lg:justify-end gap-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
          style={{ zIndex: 10 }}
        >
          {/* Parallax effect on background */}
          <motion.div
            className="absolute inset-0 -z-10"
            style={{
              y: scrollY * 0.5,
              opacity: Math.max(0.1, 1 - scrollY / 500),
            }}
          />

          <div className="container mx-auto w-full">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-end lg:pr-[8%] gap-4 lg:gap-16 mb-8 lg:mb-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className=""
              >
                <h2 className="text-[clamp(1.125rem,3.2vw,1.875rem)] font-serif font-normal mb-1 tracking-wide">
                  Web Developer
                </h2>
                <h2 className="text-[clamp(1.125rem,3.2vw,1.875rem)] caret-transparent font-serif font-normal mb-4 tracking-widw">
                  Founder of
                  {" "}
                  <Link
                    href="https://nexolinx.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nexolinx
                  </Link>
                </h2>
                <p className="text-muted-foreground caret-transparent text-[clamp(0.95rem,2.2vw,1.25rem)] -tracking-wider leading-relaxed">
                  For service and software businesses.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-start lg:items-end gap-4"
              >
                <p className="text-xs caret-transparent text-foreground/90 tracking-wider">
                  *Updates on my socials
                </p>
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="premium-btn flex items-center caret-transparent gap-3 bg-muted-foreground text-background px-6 py-3 text-xs font-medium tracking-widest uppercase min-h-11"
                >
                  <span>Unavailable</span>
                  <ArrowUpRight className="w-6 h-6" />
                </motion.button>
              </motion.div>
            </div>

            <div className="flex items-end justify-between gap-8">
              <h1
                ref={nameRef}
                className="text-[clamp(5.688rem,27.3vw,27.3rem)] font-serif font-normal leading-[0.92] tracking-[0.01em]"
                style={{ perspective: "1000px" }}
              >
                {nameChars.map((char, index) => (
                  <motion.span
                    key={index}
                    className="char inline-block caret-transparent"
                    style={{ transformStyle: "preserve-3d"  }}
                    whileHover={{
                      scale: 1.05,
                      color: "#525252",
                      transition: { duration: 0.2 },
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h1>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-4"
              >
                <motion.div
                  whileHover={{ scale: 2.18, rotate: 3 }}
                  transition={{ duration: 0.35 }}
                  className="relative w-20 h-20 lg:mr-8 lg:mb-10 rounded-full overflow-hidden ring-1 ring-border/50 shadow-lg"
                >
                  <Image
                    src="/birat.png"
                    alt="Birat"
                    fill
                    sizes="(min-width:1024px) 80px, 0px"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="absolute bottom-8 left-6 lg:left-8"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  dev
                </span>
                <div className="w-px h-8 bg-border relative overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 w-full bg-foreground"
                    animate={{
                      height: ["0%", "100%", "0%"],
                      top: ["0%", "0%", "100%"],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
