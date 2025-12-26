import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Portfolio of BIRAT — Founder & Web Developer crafting fast, memorable websites and software experiences.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "BIRAT — Portfolio Home",
    url: "/",
  },
}
import HeroSection from "@/components/hero-section"
import WorkSection from "@/components/work-section"
import AboutSection from "@/components/about-section"
import TestimonialsSection from "@/components/testimonials-section"
import FAQSection from "@/components/faq-section"
import SmoothScroll from "@/components/smooth-scroll"
import CustomCursor from "@/components/cursor"
import PageTransition from "@/components/page-transition"

export default function Home() {
  return (
    <SmoothScroll>
      <PageTransition>
        <CustomCursor />
       
        <main>
          <HeroSection />
          <WorkSection />
          <AboutSection />
          <TestimonialsSection />
          <FAQSection />
        </main>
      
      </PageTransition>
    </SmoothScroll>
  )
}
