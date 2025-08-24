"use client";
import { motion, useAnimationControls } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image"; // Add this import

type Project = {
  title: string;
  img: string;
  liveDemo: string;
  github: string;
  category?: string;
  year?: string;
};

const projects: Project[] = [
  {
    title: "Linkify – Link Management SaaS Platform",
    img: "/images/projects/linkify-thumb.jpg",
    liveDemo: "https://linkify-web.netlify.app",
    github: "https://github.com/shashankmishra21",
    category: "SaaS",
    year: "2024",
  },
  {
    title: "CourseStack – eLearning Web App",
    img: "/images/projects/coursestack-thumb.jpg",
    liveDemo: "https://coursestack.vercel.app",
    github: "https://github.com/shashankmishra21",
    category: "eLearning",
    year: "2024",
  },
  {
    title: "Personal Portfolio",
    img: "/images/projects/portfolio-thumb.jpg",
    liveDemo: "#",
    github: "https://github.com/shashankmishra21",
    category: "Portfolio",
    year: "2025",
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
          x: { repeat: Infinity, repeatType: "loop", duration, ease: "linear" },
        },
      });
    };
    const id = requestAnimationFrame(start);
    return () => cancelAnimationFrame(id);
  }, [controls]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const totalWidth = el.scrollWidth / 2;
    if (!totalWidth) return;
    const duration = totalWidth / SPEED_PX_PER_SEC;

    if (isPaused) {
      controls.stop();
    } else {
      controls.start({
        // Fix: Remove 'as any' and use proper type
        x: [0, -totalWidth],
        transition: {
          x: { repeat: Infinity, repeatType: "loop", duration, ease: "linear" },
        },
      });
    }
  }, [isPaused, controls]);

  return (
    <section
      id="projects"
      className="relative py-16 md:py-20 px-4 md:px-6 bg-background overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(60% 60% at 18% 62%, rgba(59,130,246,0.12), transparent 60%)",
            "radial-gradient(60% 60% at 80% 30%, rgba(139,92,246,0.12), transparent 60%)",
            "radial-gradient(60% 60% at 42% 82%, rgba(59,130,246,0.12), transparent 60%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="mt-2 text-xs md:text-sm text-muted-foreground">
              Selected work with an emphasis on outcomes and polish.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 text-sm md:text-base font-medium"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div
          className="relative overflow-hidden rounded-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 md:w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 md:w-16 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div ref={listRef} className="flex gap-5 md:gap-7 will-change-transform" animate={controls}>
            {loopData.map((p, i) => (
              <button
                key={`${p.title}-${i}`}
                type="button"
                onClick={() => router.push("/projects")}
                className={`
                  group relative shrink-0
                  w-[78%] xs:w-[70%] sm:w-[58%] md:w-[42%] lg:w-[32%] xl:w-[28%]
                  rounded-2xl overflow-hidden
                  bg-card/70 backdrop-blur-xl
                  border border-border hover:border-blue-500/30
                  text-left shadow-[0_10px_40px_-12px_rgba(59,130,246,0.28)]
                  hover:shadow-[0_20px_60px_-12px_rgba(59,130,246,0.38)]
                  transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50
                `}
              >
                <div className="relative aspect-[16/10]">
                  {/* Fix: Replace img with Next.js Image component */}
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 78vw, (max-width: 1024px) 42vw, 28vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {(p.category || p.year) && (
                    <>
                      {p.category && (
                        <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-semibold rounded-full bg-blue-500/90 text-white">
                          {p.category}
                        </span>
                      )}
                      {p.year && (
                        <span className="absolute top-3 right-3 px-2.5 py-1 text-[11px] font-semibold rounded-full bg-black/60 text-white">
                          {p.year}
                        </span>
                      )}
                    </>
                  )}
                </div>

                <div className="relative px-4 py-3">
                  <h3 className="flex-1 text-sm md:text-base font-semibold text-foreground line-clamp-1 pr-24">
                    {p.title}
                  </h3>
                  <div
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2"
                    // Fix: Properly type the event handler
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                  >
                    <a
                      href={p.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-blue-500 hover:bg-blue-600 text-white shadow hover:shadow-lg transition-all"
                      aria-label={`Live: ${p.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white shadow hover:shadow-lg transition-all"
                      aria-label={`GitHub: ${p.title}`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/6 to-purple-500/6 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </motion.div>
        </div>

        <div className="mt-3 text-center text-xs text-muted-foreground md:hidden">
          Auto-scrolls • Tap and hold to pause
        </div>
      </div>

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
