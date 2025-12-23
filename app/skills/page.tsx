"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import {
  Code2,
  Server,
  Cloud,
  Wrench,
  Target,
  Rocket,
  Gauge,
  Layers,
} from "lucide-react";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

type Stat = { label: string; value: string; hint?: string };
type Skill = { name: string; level: number };
type Section = { title: string; icon: React.ElementType; items: Skill[] };

export default function SkillsPage() {
  const stats: Stat[] = useMemo(
    () => [
      { label: "Years Experience", value: "1.5+", hint: "Hands-on production work" },
      { label: "Projects Delivered", value: "5+", hint: "eLearning, Collaborative Tool, Portfolio" },
      { label: "Internships", value: "2", hint: "Full‑Stack" },
      { label: "CPI", value: "8.9", hint: "Consistently high" },
    ],
    []
  );

  const sections: Section[] = useMemo(
    () => [
      {
        title: "Frontend Engineering",
        icon: Code2,
        items: [
          { name: "React", level: 90 },
          { name: "Next.js", level: 85 },
          { name: "TypeScript", level: 85 },
          { name: "Tailwind CSS", level: 95 },
        ],
      },
      {
        title: "Backend & APIs",
        icon: Server,
        items: [
          { name: "Node.js", level: 85 },
          { name: "Express.js", level: 90 },
          { name: "Python", level: 80 },
          { name: "Django", level: 70 },
        ],
      },
      {
        title: "Cloud & Databases",
        icon: Cloud,
        items: [
          { name: "MongoDB", level: 85 },
          { name: "PostgreSQL", level: 80 },
          { name: "AWS", level: 70 },
          { name: "Docker", level: 75 },
        ],
      },
      {
        title: "DevOps & Tooling",
        icon: Wrench,
        items: [
          { name: "Git", level: 90 },
          { name: "CI/CD", level: 75 },
          { name: "Linux", level: 80 },
          { name: "Nginx", level: 70 },
        ],
      },
    ],
    []
  );

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const card = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: easeOut },
    },
  };

  return (
    <>
      {/* Ambient background accents - positioned relative to viewport */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -left-16 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* Content - no container constraints */}
      <div className="max-w-6xl mx-auto px-5 md:px-6 py-2 md:py-20 max-[768px]:pb-[calc(96px+env(safe-area-inset-bottom))]">
        {/* Title */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <p className="mt-5 text-xs md:text-sm tracking-widest font-semibold uppercase">
            Skills
          </p>
          <h2 className="mt-2 text-3xl md:text-5xl font-display font-extrabold tracking-tight">
            <span className="text-blue-500">
              Expertise & Tech Stack
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Product‑minded full stack developer focused on scalable systems, performance, and UX polish.
          </p>
        </motion.div>

        {/* Stats + Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Stats */}
          <motion.div
            className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={card}
                className="rounded-2xl bg-card/80 border border-border p-5 text-center shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl md:text-4xl font-display font-extrabold text-foreground tracking-tight">
                  {s.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
                {s.hint && (
                  <div className="mt-1 text-[11px] text-muted-foreground/80">{s.hint}</div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Principles */}
          <motion.div
            className="rounded-2xl bg-card/80 border border-border p-6 shadow-sm"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <h3 className="text-base md:text-lg font-display font-semibold mb-4">
              Principles I work by
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Target className="w-4 h-4 text-blue-500 mt-0.5" />
                Ship with intent — measure impact, iterate quickly, and keep the bar high.
              </li>
              <li className="flex items-start gap-2">
                <Layers className="w-4 h-4 text-indigo-500 mt-0.5" />
                Design for change — clean abstractions, clear boundaries, maintainable code.
              </li>
              <li className="flex items-start gap-2">
                <Gauge className="w-4 h-4 text-purple-500 mt-0.5" />
                Performance first — fast APIs, optimized queries, smooth UI.
              </li>
              <li className="flex items-start gap-2">
                <Rocket className="w-4 h-4 text-blue-400 mt-0.5" />
                Ownership — from architecture to deployment and observability.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Skill groups */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-7"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {sections.map((sec, sIndex) => (
            <motion.div
              key={sec.title}
              variants={card}
              className="rounded-2xl p-6 md:p-7 bg-card/80 border border-border shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <sec.icon className="w-5 h-5 text-blue-500" />
                  <h4 className="text-lg md:text-xl font-display font-semibold">{sec.title}</h4>
                </div>
                <span className="text-xs md:text-sm px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                  {sec.items.length} skills
                </span>
              </div>

              <div className="space-y-4">
                {sec.items.map((skill, i) => {
                  const delay = sIndex * 0.05 + i * 0.05;
                  return (
                    <motion.div
                      key={`${sec.title}-${skill.name}`}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.35, delay, ease: easeOut }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm md:text-base font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-[11px] md:text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                        <motion.div
                          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                          initial={{ width: "0%" }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: delay + 0.15, ease: easeOut }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing line */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <p className="text-xs md:text-sm text-muted-foreground">
            Available for full‑time roles and impactful collaborations.
          </p>
        </motion.div>
      </div>
    </>
  );
}
