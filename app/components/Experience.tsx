"use client";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  highlight?: boolean;
};

const experiences: ExperienceItem[] = [

  {
    title: "Software Engineer Intern",
    company: "Innoeed Systems",
    location: "Hybrid",
    period: "May – June 2025",
    description: [
      "Developed 12+ full-stack RESTful APIs and integrated them with reusable React components for a healthcare platform serving 50+ clinics, ensuring smooth frontend–backend communication and consistent user experience across modules",
      "Boosted appointment workflow speed by 30% via query optimization & API response tuning, reducing overall system latency",
      "Worked across the complete SDLC, including requirements analysis, API development, debugging, and UI integration, while building 10+ frontend components that ensured seamless feature delivery and stable system behavior"
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Aon Digieon",
    location: "On-Site",
    period: "May – June 2024",
    description: [
      "Co-developed CarSahayak (e-commerce platform) targeting 10k+ users; built responsive UI using Bootstrap and integrated it with Node.js APIs",
      "Refactored MongoDB schema and added targeted indexes, reducing query latency by 60% on high-traffic operations",
      "Improved platform usability and interaction flow by collaborating with UI/UX teams, increasing session duration by 25%",
    ],
  },
];

// Typed-safe easing
const easeOut = [0.16, 1, 0.3, 1] as const;

// Stagger container
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

// Glass card entrance
const enterCard = {
  hidden: { opacity: 0, x: -56, y: 8, scale: 0.985, filter: "blur(6px)" },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: easeOut },
  },
};

// Inner content lift
const innerLift = {
  hidden: { y: 8, opacity: 0.95 },
  show: { y: 0, opacity: 1, transition: { duration: 0.45, ease: easeOut, delay: 0.05 } },
};

export default function Experience() {
  const railRef = useRef<HTMLDivElement>(null);
  const inView = useInView(railRef, { once: true, amount: 0.25 });
  const railControls = useAnimationControls();

  useEffect(() => {
    if (inView) {
      railControls.start({
        height: "100%",
        transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
      });
    }
  }, [inView, railControls]);

  return (
    <section
      id="experience"
      className="relative px-4 md:px-6 py-16 md:py-20 bg-background overflow-hidden"
    >
      {/* Ambient background glows */}
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(60% 60% at 20% 55%, rgba(59,130,246,0.12), transparent 60%)",
            "radial-gradient(60% 60% at 78% 28%, rgba(139,92,246,0.12), transparent 60%)",
            "radial-gradient(60% 60% at 42% 82%, rgba(59,130,246,0.12), transparent 60%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <p className="text-[11px] md:text-xs tracking-widest font-semibold uppercase">
            Experience
          </p>
          <h2 className="mt-1 text-2xl md:text-5xl font-display font-extrabold tracking-tight">
            <span className="text-blue-500">
              Impact & Outcomes
            </span>
          </h2>
          <p className="text-[12px] md:text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
            A timeline of roles with measurable improvements and shipped features.
          </p>
        </motion.div>

        {/* Timeline rail (md+) */}
        <div ref={railRef} className="relative max-w-5xl mx-auto">
          {/* Static faint rail */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/25 via-blue-500/15 to-transparent"
            aria-hidden="true"
          />
          {/* Animated active rail */}
          <motion.div
            initial={{ height: 0 }}
            animate={railControls}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-blue-500 rounded-full"
            aria-hidden="true"
          />

          {/* Cards */}
          <motion.ol
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <li key={`${exp.company}-${exp.title}-${idx}`} className="relative">
                  {/* Marker (md+) */}
                  <div
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-7 z-10"
                    aria-hidden="true"
                  >
                    <div
                      className={`relative w-4 h-4 rounded-full ${exp.highlight ? "bg-blue-500" : "bg-muted"
                        } ring-4 ring-background`}
                    >
                      {exp.highlight && (
                        <span className="absolute inset-0 rounded-full bg-blue-500/40 animate-ping" />
                      )}
                    </div>
                  </div>

                  {/* Row layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 max-w-5xl mx-auto py-3 md:py-5">
                    <div className={isLeft ? "md:col-start-1" : "md:col-start-2"}>
                      <motion.div
                        variants={enterCard}
                        whileHover={{ y: -6, scale: 1.012 }}
                        transition={{ type: "spring", stiffness: 280, damping: 22 }}
                        className={`relative w-full rounded-2xl border border-border bg-card/80 backdrop-blur-xl shadow-[0_10px_40px_-12px_rgba(59,130,246,0.28)] hover:shadow-[0_20px_60px_-12px_rgba(59,130,246,0.38)] overflow-hidden ${isLeft ? "md:mr-10" : "md:ml-10"
                          }`}
                      >
                        {/* Connector pointer (md+) */}
                        <div
                          className={`hidden md:block absolute top-7 ${isLeft ? "right-[-12px] border-l-[12px]" : "left-[-12px] border-r-[12px]"
                            } border-y-[12px] border-y-transparent border-border`}
                          aria-hidden="true"
                        />

                        {/* Hover veil */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/6 to-purple-500/6 opacity-0 transition-opacity duration-300 hover:opacity-100" />

                        {/* Content */}
                        <motion.div className="relative z-10 p-5 md:p-7" variants={innerLift}>
                          {/* Title / company */}
                          <div className="flex flex-col md:items-start text-center md:text-left gap-1.5 md:gap-2 mb-2.5">
                            <h3
                              className={`font-display font-bold leading-tight text-[15.5px] md:text-xl ${exp.highlight ? "text-blue-500" : "text-foreground"
                                }`}
                            >
                              {exp.title}
                            </h3>
                            <p className="text-blue-500 font-semibold text-[13px] md:text-base">
                              {exp.company}
                            </p>

                            {/* Meta pills */}
                            <div className="flex flex-wrap gap-2 mt-1 justify-center md:justify-start">
                              <span className="px-2.5 py-1 rounded-full bg-muted/60 text-muted-foreground text-[10.5px] md:text-xs">
                                {exp.location}
                              </span>
                              <span className="px-2.5 py-1 rounded-full bg-muted/60 text-muted-foreground text-[10.5px] md:text-xs">
                                {exp.period}
                              </span>
                              {exp.highlight && (
                                <span className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-[10px] md:text-xs">
                                  Now
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="h-px bg-border mb-3" />

                          {/* Impact bullets */}
                          <ul className="space-y-2 md:space-y-2.5">
                            {exp.description.map((line, li) => (
                              <motion.li
                                key={li}
                                initial={{ opacity: 0, x: -12 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.3, delay: li * 0.06, ease: easeOut }}
                                className="flex items-start gap-2"
                              >
                                <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                <p className="text-[13px] md:text-[15px] text-muted-foreground leading-relaxed">
                                  {line}
                                </p>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </li>
              );
            })}
          </motion.ol>
        </div>
      </div>

      {/* Reduced motion */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-ping {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
