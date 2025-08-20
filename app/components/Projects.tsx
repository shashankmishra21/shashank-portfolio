"use client";
import { motion, useAnimationControls } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

type Project = {
  title: string;
  img: string;
  liveDemo: string;
  github: string;
};

const projects: Project[] = [
  {
    title: "Linkify – Link Management SaaS Platform",
    img: "/images/projects/linkify-thumb.jpg",
    liveDemo: "https://linkify-web.netlify.app",
    github: "https://github.com/shashankmishra21",
  },
  {
    title: "CourseStack – eLearning Web App",
    img: "/images/projects/coursestack-thumb.jpg",
    liveDemo: "https://coursestack.vercel.app",
    github: "https://github.com/shashankmishra21",
  },
  {
    title: "Personal Portfolio",
    img: "/images/projects/portfolio-thumb.jpg",
    liveDemo: "#",
    github: "https://github.com/shashankmishra21",
  },
];

const SPEED_PX_PER_SEC = 80;

export default function Projects() {
  const router = useRouter();
  const listRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [isPaused, setIsPaused] = useState(false);

  const loopData = useMemo(() => [...projects, ...projects], []);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const start = () => {
      const totalWidth = el.scrollWidth / 2;
      if (!totalWidth) return;

      const duration = totalWidth / SPEED_PX_PER_SEC;
      controls.start({
        x: [-0, -totalWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        },
      });
    };

    const id = requestAnimationFrame(start);
    return () => cancelAnimationFrame(id);
  }, [controls]);

  useEffect(() => {
    if (isPaused) {
      controls.stop();
    } else {
      const el = listRef.current;
      if (!el) return;
      const totalWidth = el.scrollWidth / 2;
      if (!totalWidth) return;
      const duration = totalWidth / SPEED_PX_PER_SEC;
      controls.start({
        x: [undefined as any, -totalWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        },
      });
    }
  }, [isPaused, controls]);

  return (
    <section id="projects" className="py-16 md:py-20 px-4 md:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header row */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 text-sm md:text-base font-medium"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Masked marquee container */}
        <div
          className="relative overflow-hidden rounded-xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* subtle gradient masks left/right */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 md:w-12 bg-gradient-to-r from-muted/30 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 md:w-12 bg-gradient-to-l from-muted/30 to-transparent z-10" />

          <motion.div
            ref={listRef}
            className="flex gap-4 md:gap-6 will-change-transform"
            animate={controls}
          >
            {loopData.map((p, i) => (
              <button
                key={`${p.title}-${i}`}
                type="button"
                onClick={() => router.push("/projects")}
                className="relative shrink-0 w-[78%] xs:w-[70%] sm:w-[58%] md:w-[42%] lg:w-[32%] xl:w-[28%] rounded-xl overflow-hidden bg-card border border-border text-left shadow-lg hover:shadow-2xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/60"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] bg-muted">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                </div>

                {/* Bottom bar: name + tiny actions */}
                <div className="flex items-center gap-2 px-4 py-3">
                  <h3 className="flex-1 text-sm md:text-base font-semibold text-foreground line-clamp-1">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={p.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-blue-500 hover:bg-blue-600 text-white"
                      aria-label={`Live: ${p.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-gray-700 hover:bg-gray-800 text-white"
                      aria-label={`GitHub: ${p.title}`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </button>
            ))}
          </motion.div>
        </div>

        <div className="mt-3 text-center text-xs text-muted-foreground md:hidden">
          Auto-scrolls • Tap and hold to pause
        </div>
      </div>

      {/* Reduced motion: stop marquee */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          #projects .will-change-transform {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
