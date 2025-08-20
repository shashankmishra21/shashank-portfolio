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
    title: "Backend Intern",
    company: "Paynexa Systems & Technologies",
    location: "Gurgaon (Remote)",
    period: "Aug 2025 – Present",
    description: [
      "Contributing to backend systems for scalable applications.",
      "Designing and delivering backend solutions aligned with business needs.",
      "Hands-on DevOps with AWS, CI/CD, Docker.",
    ],
    highlight: true,
  },
  {
    title: "Software Engineer Intern",
    company: "Innoeed Systems",
    location: "Hybrid",
    period: "May – June",
    description: [
      "JWT auth & sessions via REST; -35% auth failures.",
      "Real-time booking module (Node/Express); -40% latency, 1,200+/mo.",
      "Rebuilt 10+ UI components; +25% engagement across 20+ portals.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Aon Digieon",
    location: "On-Site",
    period: "May – June",
    description: [
      "CarSahayak features projected for 10,000+ users.",
      "15+ Bootstrap components; -30% frontend cycle time.",
      "MongoDB schema + indexes; -60% retrieval time.",
    ],
  },
];

// Stagger the list a bit
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

// Single, consistent "from left" variant for all cards
const fromLeft = {
  hidden: { opacity: 0, x: -60, y: 8, scale: 0.985, filter: "blur(6px)" },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Slight inner content lift for depth
const innerParallax = {
  hidden: { y: 8, opacity: 0.95 },
  show: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut", delay: 0.05 } },
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
    <section id="experience" className="relative px-4 md:px-6 py-16 md:py-20 bg-background overflow-hidden">
      {/* Ambient background */}
      <motion.div
        className="absolute inset-0 opacity-15 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(60% 60% at 20% 50%, rgba(59,130,246,0.12), transparent 60%)",
            "radial-gradient(60% 60% at 80% 30%, rgba(139,92,246,0.12), transparent 60%)",
            "radial-gradient(60% 60% at 40% 80%, rgba(59,130,246,0.12), transparent 60%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="text-2xl md:text-4xl font-display font-extrabold">
            My <span className="text-blue-500">Experience</span>
          </h2>
          <p className="text-[12px] md:text-sm text-muted-foreground mt-2 max-w-2xl mx-auto">
            A timeline of roles with visible impact and shipped outcomes.
          </p>
        </motion.div>

        {/* Timeline rail (md+) */}
        <div ref={railRef} className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/25 via-blue-500/15 to-transparent" />
          <motion.div
            initial={{ height: 0 }}
            animate={railControls}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-blue-500 rounded-full"
          />

          {/* Cards list */}
          <motion.ol
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0; // For pointer direction on md+, but animation is same for all now

              return (
                <li key={`${exp.company}-${exp.title}-${idx}`} className="relative">
                  {/* Marker (md+) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-7 z-10">
                    <div
                      className={`relative w-4 h-4 rounded-full ${
                        exp.highlight ? "bg-blue-500" : "bg-muted"
                      } ring-4 ring-background`}
                    >
                      {exp.highlight && (
                        <span className="absolute inset-0 rounded-full bg-blue-500/40 animate-ping" />
                      )}
                    </div>
                  </div>

                  {/* Grid row: 1col on mobile; 2col on md+ */}
                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 max-w-5xl mx-auto py-3 md:py-5">
                    <div className={`${isLeft ? "md:col-start-1" : "md:col-start-2"}`}>
                      <motion.div
                        variants={fromLeft} // force from-left animation for all cards
                        whileHover={{ y: -6, scale: 1.012 }}
                        transition={{ type: "spring", stiffness: 280, damping: 22 }}
                        className={`relative w-full rounded-2xl border border-border bg-card/80 backdrop-blur-xl shadow-[0_10px_40px_-12px_rgba(59,130,246,0.28)] hover:shadow-[0_20px_60px_-12px_rgba(59,130,246,0.38)] overflow-hidden ${
                          isLeft ? "md:mr-10" : "md:ml-10"
                        }`}
                      >
                        {/* Pointer connector (md+) */}
                        <div
                          className={`hidden md:block absolute top-7 ${
                            isLeft ? "right-[-12px] border-l-[12px]" : "left-[-12px] border-r-[12px]"
                          } border-y-[12px] border-y-transparent border-border`}
                          aria-hidden="true"
                        />
                        {/* Hover veil */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 hover:opacity-100" />

                        {/* Inner content with slight lift */}
                        <motion.div className="relative z-10 p-5 md:p-7" variants={innerParallax}>
                          {/* Top meta */}
                          <div className="flex flex-col md:items-start text-center md:text-left gap-1.5 md:gap-2 mb-2.5">
                            <h3
                              className={`font-display font-bold leading-tight text-[15.5px] md:text-xl ${
                                exp.highlight ? "text-blue-500" : "text-foreground"
                              }`}
                            >
                              {exp.title}
                            </h3>
                            <p className="text-blue-500 font-semibold text-[13px] md:text-base">
                              {exp.company}
                            </p>

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

                          {/* Bullets */}
                          <ul className="space-y-2 md:space-y-2.5">
                            {exp.description.map((line, li) => (
                              <motion.li
                                key={li}
                                initial={{ opacity: 0, x: -12 }} // each bullet also glides a bit from left
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.3, delay: li * 0.06, ease: "easeOut" }}
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
