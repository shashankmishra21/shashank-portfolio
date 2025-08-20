"use client";
import { motion } from "framer-motion";
// Import Header if you want a separate header only on this page, else remove below line
// import Header from "@/components/Header";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 75 },
        { name: "JavaScript", level: 90 },
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "Django", level: 70 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 65 },
      ],
    },
    {
      title: "Database & Cloud",
      icon: "☁️",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Firebase", level: 85 },
        { name: "AWS", level: 70 },
        { name: "Docker", level: 75 },
        { name: "Supabase", level: 80 },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: "🔧",
      skills: [
        { name: "Git", level: 90 },
        { name: "CI/CD", level: 75 },
        { name: "Linux", level: 80 },
        { name: "Nginx", level: 70 },
        { name: "Kubernetes", level: 60 },
        { name: "Monitoring", level: 65 },
      ],
    },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  const card = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> If desired */}
      <section className="pt-24 md:pt-28 pb-16 md:pb-20 px-5 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-10 md:mb-12"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">
              My <span className="text-blue-500">Skills</span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools used to build robust, scalable, and user-centric software.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-7"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={card}
                className="relative rounded-2xl p-6 md:p-7 bg-card/80 backdrop-blur border border-border shadow-sm hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl md:text-3xl">{category.icon}</span>
                    <h3 className="text-lg md:text-xl font-display font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <span className="text-xs md:text-sm px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                    {category.skills.length} skills
                  </span>
                </div>
                <div className="h-px bg-border mb-5" />
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const delay = categoryIndex * 0.05 + skillIndex * 0.05;
                    return (
                      <motion.div
                        key={`${category.title}-${skill.name}`}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.35, delay }}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm md:text-base font-medium text-foreground">{skill.name}</span>
                          <span className="text-[11px] md:text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                          <motion.div
                            className="h-2 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: delay + 0.15, ease: "easeOut" }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="text-center mt-10 text-xs md:text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Continuously learning and refining — from system design to deployment pipelines.
          </motion.div>
        </div>
      </section>
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          html:focus-within {
            scroll-behavior: auto !important;
          }
          [style*="transform"] {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}
