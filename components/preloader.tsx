"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

function usePageReady() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const handleLoad = () => setReady(true)

    if (typeof document !== "undefined" && document.readyState === "complete") {
      setReady(true)
      return
    }

    window.addEventListener("load", handleLoad)

    const fallback = window.setTimeout(() => setReady(true), 4500)

    return () => {
      window.removeEventListener("load", handleLoad)
      window.clearTimeout(fallback)
    }
  }, [])

  return ready
}

export default function Preloader() {
  const ready = usePageReady()
  const prefersReducedMotion = useReducedMotion()
  const [visible, setVisible] = useState(true)
  const mountedAt = useRef(Date.now())

  useEffect(() => {
    if (!ready) return
    const minDuration = 600
    const elapsed = Date.now() - mountedAt.current
    const timeout = window.setTimeout(() => setVisible(false), Math.max(0, minDuration - elapsed))
    return () => window.clearTimeout(timeout)
  }, [ready])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-live="polite"
          className="fixed inset-0 z-9999 flex items-center justify-center bg-neutral-950 text-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: visible ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <motion.div
            className="flex items-center gap-3 text-sm font-medium text-white/80"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <motion.span
              className="relative block h-10 w-10 rounded-full border-2 border-white/15"
              aria-hidden
            >
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-white"
                style={{ borderTopColor: "transparent" }}
                animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
              />
            </motion.span>
            <motion.span
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, repeat: prefersReducedMotion ? 0 : Infinity, repeatType: "reverse", ease: "easeInOut" }}
            >
              Loading
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
