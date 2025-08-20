"use client";
import { motion } from "framer-motion";
import { MonitorSmartphone, Server, Database, Cloud, CircuitBoard } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.45, ease: "easeOut" },
};

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 px-4 md:px-6 bg-background relative overflow-hidden">
      {/* Subtle animated background */}
      <motion.div
        className="absolute inset-0 opacity-15 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.12) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 30%, rgba(139,92,246,0.12) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, rgba(59,130,246,0.12) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-8 md:mb-10" {...fadeUp}>
          <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="h-px w-12 md:w-20 bg-blue-500/60 mx-auto mt-3" />
        </motion.div>

        {/* Grid: stacked on mobile, two-column on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Left: content */}
          <motion.div className="md:col-span-7 lg:col-span-8" {...fadeUp}>
            <div className="space-y-4 md:space-y-5">
              <p className="text-[13.5px] md:text-[15px] text-muted-foreground">
                Hi, I'm <span className="text-foreground font-semibold">Shashank Mishra</span> — Full Stack Developer | Backend Engineer | DevOps Practitioner | Web3 Learner.
              </p>

              <p className="text-[13.5px] md:text-[15px] text-muted-foreground">
                I'm a final-year Computer Science student and a Backend Intern at a Gurgaon-based startup, contributing to backend systems. I build scalable, user-friendly applications across frontend, backend, databases, and DevOps (AWS, CI/CD, Docker), while learning Web3 fundamentals.
              </p>

              <div className="h-px bg-border" />

              {/* Skills categories with compact chips */}
              <div>
                <h4 className="text-base md:text-xl font-display font-semibold mb-3">I specialize in:</h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-card/60 border border-border rounded-lg p-3 md:p-4">
                    <div className="flex items-center gap-2.5 mb-2">
                      <MonitorSmartphone className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                      <span className="text-sm md:text-base font-medium">Frontend</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {["React.js", "Next.js", "Bootstrap", "Tailwind CSS"].map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-full text-[11px] md:text-xs bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-card/60 border border-border rounded-lg p-3 md:p-4">
                    <div className="flex items-center gap-2.5 mb-2">
                      <Server className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
                      <span className="text-sm md:text-base font-medium">Backend</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {["Node.js", "Express.js", "Django"].map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-full text-[11px] md:text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-card/60 border border-border rounded-lg p-3 md:p-4">
                    <div className="flex items-center gap-2.5 mb-2">
                      <Database className="w-4 h-4 md:w-5 md:h-5 text-amber-500" />
                      <span className="text-sm md:text-base font-medium">Databases</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {["MongoDB", "PostgreSQL"].map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-full text-[11px] md:text-xs bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-card/60 border border-border rounded-lg p-3 md:p-4">
                    <div className="flex items-center gap-2.5 mb-2">
                      <Cloud className="w-4 h-4 md:w-5 md:h-5 text-purple-500" />
                      <span className="text-sm md:text-base font-medium">DevOps</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {["AWS", "CI/CD pipelines", "Docker"].map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-full text-[11px] md:text-xs bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-card/60 border border-border rounded-lg p-3 md:p-4 sm:col-span-2">
                    <div className="flex items-center gap-2.5 mb-2">
                      <CircuitBoard className="w-4 h-4 md:w-5 md:h-5 text-cyan-500" />
                      <span className="text-sm md:text-base font-medium">Web3</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {["Blockchain fundamentals", "Smart Contracts (Learning)"].map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-full text-[11px] md:text-xs bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-[13.5px] md:text-[15px] text-muted-foreground">
                Beyond development, I'm sharpening DSA via Striver A2Z, LeetCode, and my <span className="text-foreground font-medium">#200DaysOfGrindingDSA</span> challenge.
              </p>

              <p className="text-[13.5px] md:text-[15px] text-muted-foreground">
                🚀 Goal: grow as a versatile engineer across frontend, backend, cloud, and blockchain.
              </p>
            </div>
          </motion.div>

          {/* Right: highlights (compact on mobile) */}
          <motion.aside className="md:col-span-5 lg:col-span-4" {...fadeUp} transition={{ duration: 0.45, delay: 0.06 }}>
            <div className="bg-card/70 border border-border rounded-xl p-4 md:p-6 h-full flex flex-col gap-4 md:gap-5">
              <div className="text-[13px] md:text-sm text-muted-foreground">
                Clean architectures, product thinking, and delivery excellence.
              </div>
              <div className="h-px bg-border" />
              <div className="text-[13px] md:text-sm text-muted-foreground">
                Comfortable across UI, APIs, DBs, and infra automation.
              </div>
              <div className="h-px bg-border" />
              <div className="text-[13px] md:text-sm text-muted-foreground">
                Hands-on with AWS, CI/CD, Docker for robust workflows.
              </div>
              <div className="h-px bg-border" />
              <div className="text-[13px] md:text-sm text-muted-foreground">
                Learning blockchain to align with emerging tech.
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12 pt-5 border-t border-border"
          {...fadeUp}
          transition={{ duration: 0.4, delay: 0.08 }}
        >
          <div className="text-center">
            <div className="text-xl md:text-3xl font-bold text-blue-500">8.9</div>
            <div className="text-[11px] md:text-sm text-muted-foreground">CPI</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-3xl font-bold text-blue-500">6+</div>
            <div className="text-[11px] md:text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-3xl font-bold text-blue-500">2</div>
            <div className="text-[11px] md:text-sm text-muted-foreground">Internships</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
