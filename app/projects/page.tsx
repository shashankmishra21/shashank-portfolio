"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Code } from "lucide-react";
import Link from "next/link";

const allProjects = [
  {
    title: "Linkify – Link Management SaaS Platform",
    img: "/images/projects/linkify-thumb.jpg",
    liveDemo: "https://linkify-web.netlify.app",
    github: "https://github.com/shashankmishra21",
    description: "A comprehensive SaaS platform for managing and organizing links with analytics, custom domains, and team collaboration features.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Stripe"],
    category: "SaaS Platform",
    year: "2024"
  },
  {
    title: "CourseStack – eLearning Web App",
    img: "/images/projects/coursestack-thumb.jpg",
    liveDemo: "https://coursestack.vercel.app",
    github: "https://github.com/shashankmishra21",
    description: "Modern eLearning platform with course management, progress tracking, video streaming, and interactive quizzes.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe"],
    category: "eLearning",
    year: "2024"
  },
  {
    title: "Personal Portfolio",
    img: "/images/projects/portfolio-thumb.jpg",
    liveDemo: "#",
    github: "https://github.com/shashankmishra21",
    description: "Professional portfolio website showcasing projects, skills, and experience with modern animations and responsive design.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Portfolio",
    year: "2025"
  },
];

export default function ProjectsPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-24 md:pt-28 pb-16 md:pb-20 px-4 md:px-6 relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-15 pointer-events-none"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.12) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(139,92,246,0.12) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(59,130,246,0.12) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
              All <span className="text-blue-500">Projects</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive showcase of my development work, from SaaS platforms to full-stack applications.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 mt-4 text-blue-500 hover:text-blue-600 text-sm font-medium"
            >
              ← Back to Home
            </Link>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {allProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={item}
                className="group relative bg-card/80 backdrop-blur border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Project Image */}
                <div className="relative aspect-[16/10] bg-muted overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-blue-500/90 text-white rounded-full backdrop-blur">
                      {project.category}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-black/50 text-white rounded-full backdrop-blur flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700 hover:bg-gray-800 text-white rounded-full transition-colors"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-display font-bold mb-2 text-foreground group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Bottom Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Code className="w-3 h-3" />
                      {project.technologies.length} Technologies
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-500 hover:text-blue-600 font-medium"
                      >
                        Live Demo
                      </a>
                      <span className="text-muted-foreground">•</span>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground hover:text-foreground font-medium"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-muted-foreground mb-4">
              Want to work together on your next project?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
