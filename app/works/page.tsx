"use client";

import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    id: 1,
    title: "Somang Korean",
    category: "Software",
    image: "/works/work-1.svg",
    color: "bg-gradient-to-br from-rose-500/90 to-rose-700/90",
  },
  {
    id: 2,
    title: "Avante Firm",
    category: "Website",
    image: "/works/work-2.jpg",
    color: "bg-transparent",
  },
  {
    id: 3,
    title: "Jhankar Band",
    category: "Website",
    image: "/works/work-3.jpg",
    color: "bg-gradient-to-br from-violet-400/90 to-violet-600/90",
  },
  {
    id: 4,
    title: "GyanJyoti",
    category: "Software",
    image: "/works/work-4.jpg",
    color: "bg-neutral-900",
  },
  {
    id: 5,
    title: "Nexo Talks",
    category: "Chat App",
    image: "/works/work-5.jpg",
    color: "bg-gradient-to-br from-orange-400/90 to-orange-500/90",
  },
  {
    id: 6,
    title: "Blog App Model",
    category: "Website",
    image: "/works/work-6.jpg",
    color: "bg-gradient-to-br from-gray-50 to-gray-100",
  },
];

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  color: string;
};

type ProjectCardProps = {
  project: Project;
  itemVariants: {
    hidden: { opacity: number; y: number };
    visible: {
      opacity: number;
      y: number;
    };
  };
};

function ProjectCard({ project, itemVariants }: ProjectCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 200, damping: 20, mass: 0.5 });
  const [visible, setVisible] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  return (
    <motion.div
      variants={itemVariants}
      className="group cursor-pointer relative"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        whileHover={{ y: -12, scale: 1.02 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`relative aspect-4/3 overflow-hidden mb-3 md:mb-5 ${project.color} shadow-sm hover:shadow-xl transition-shadow duration-500`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
          className="object-cover transition-all duration-700 group-hover:scale-110"
        />
        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.95 }}
          transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
          style={{ x: springX, y: springY }}
        >
          <div className="relative w-full h-full">
            <div className="absolute -translate-x-1/2 -translate-y-1/2">
              <div className="flex items-center gap-2 bg-black/85 text-white text-[11px] px-3 py-2  shadow-lg border border-white/10 backdrop-blur-sm">
                <span className="tracking-wide">Live site</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className="flex items-center gap-2">
        <h3 className="font-medium tracking-tight text-[clamp(0.95rem,2.1vw,1rem)]">{project.title}</h3>
        <span className="text-muted-foreground tracking-wide text-[clamp(0.8rem,1.9vw,0.875rem)]">
          — {project.category}
        </span>
      </div>
    </motion.div>
  );
}

export default function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!headingRef.current) return;

    const words = headingRef.current.querySelectorAll(".word");

    gsap.fromTo(
      words,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      ref={sectionRef}
      id="work"
      className="py-24 lg:py-40 px-4 sm:px-6 lg:px-8 bg-white relative z-20"
    >
      <div className="container mx-auto w-full">
        {/* Section header */}
        <div ref={headingRef} className="flex mb-10 lg:mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3 }}
            className="text-[18px] ml-3 text-muted-foreground uppercase"
          >
            [Work]
          </motion.span>
          <h2 className="text-2xl lg:text-4xl xl:text-5xl font-sans font-normal leading-[1.4] tracking-tight">
            {"                 I help service and software businesses create memorable, optimised website experiences as quickly as they need. "
              .split(" ")
              .map((word, i) => (
                <span key={i} className="word inline-block mr-[0.3em]">
                  {word}
                </span>
              ))}
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              itemVariants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
