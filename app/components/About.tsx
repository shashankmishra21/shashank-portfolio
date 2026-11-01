"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { Code2, Server, Cloud, Wrench, Target, Rocket, Gauge, Layers } from "lucide-react";

const easeOut = [0.16, 1, 0.3, 1] as const;

type Stat = { label: string; value: string; hint?: string };
type Section = { title: string; icon: React.ElementType; items: string[] };

export default function About() {
  const stats: Stat[] = useMemo(
    () => [
      { label: "Years Experience", value: "1.5+", hint: "Hands-on Software & Systems" },
      { label: "Projects Delivered", value: "5+", hint: "Full-Stack & Distributed Systems" },
      { label: "Roles / Internships", value: "2", hint: "SWE Intern & Engineer" },
      { label: "CGPA", value: "8.80", hint: "Consistent Academic Performance" },
    ],
    []
  );

  const sections: Section[] = useMemo(
    () => [
      {
        title: "Core Engineering",
        icon: Target,
        items: [
          "Backend Engineering",
          "System Reliability",
          "Problem Solving",
          "Data Structures & Algorithms",
          "Performance Optimization",
        ],
      },
      {
        title: "Backend & APIs",
        icon: Server,
        items: [
          "Node.js",
          "Express.js",
          "TypeScript",
          "REST API Design",
          "Authentication (JWT + RBAC)",
          "Microservices",
        ],
      },
      {
        title: "Databases & Storage",
        icon: Cloud,
        items: [
          "PostgreSQL",
          "MongoDB",
          "Query Optimization",
          "Indexing",
          "Transactions",
        ],
      },
      {
        title: "AI / RAG Systems",
        icon: Rocket,
        items: [
          "RAG Architecture",
          "LLM Integration",
          "Vector DB (Qdrant)",
          "Embeddings",
          "Retrieval Pipelines",
        ],
      },
      {
        title: "Infrastructure & DevOps",
        icon: Wrench,
        items: [
          "Docker",
          "Linux / Ubuntu",
          "Git & GitHub",
          "Nginx",
          "Logging & Monitoring",
          "System Operations",
        ],
      },
      {
        title: "Frontend",
        icon: Code2,
        items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
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
    <section id="about" className="relative bg-background">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-16 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-6 py-16 md:py-20">
        {/* Title */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <p className="text-xs md:text-sm tracking-widest font-semibold uppercase">
            About
          </p>
          <h2 className="mt-2 text-2xl md:text-5xl font-display font-extrabold tracking-tight">
            <span className="text-blue-500">
              Builder of Scalable, Resilient Software
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Product‑minded software engineer engineering clean, performant backend systems and infrastructure with precise attention to reliability.
          </p>
        </motion.div>

        {/* Credibility and Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Credibility stats */}
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

          {/* Principles / Highlights */}
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
                <Target className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                Build for scale — modular architecture, clean boundaries, and long-term maintainability
              </li>
              <li className="flex items-start gap-2">
                <Layers className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                Performance first — optimized APIs, efficient query indexing, and low-latency systems
              </li>
              <li className="flex items-start gap-2">
                <Gauge className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                Engineering rigor — from system design to production observability and infrastructure health
              </li>
              <li className="flex items-start gap-2">
                <Rocket className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                Solve complex problems — DSA-driven thinking, systematic debugging, and optimization
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Core bio */}
        <motion.div
          className="rounded-2xl bg-card/80 border border-border p-6 md:p-7 shadow-sm mb-12"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            I design and build scalable backend systems, robust APIs, and distributed architectures with a strong focus on high availability, performance, and operational reliability. Experienced in managing high-volume production infrastructure, maintaining service uptime, and developing end-to-end applications including enterprise RAG platforms and microservices using Node.js, TypeScript, and PostgreSQL. I thrive on solving intricate engineering challenges and building systems that scale seamlessly under load.
          </p>
        </motion.div>

        {/* Skill stacks */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-7"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {sections.map((sec) => (
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

              <div className="flex flex-wrap gap-2">
                {sec.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-muted hover:bg-blue-500/10 border border-border transition-colors"
                  >
                    {skill}
                  </span>
                ))}
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
            Available for core backend & software engineering roles with 0-day joining availability.
          </p>
        </motion.div>
      </div>
    </section>
  );
}