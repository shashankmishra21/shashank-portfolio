"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const projects = [
  {
    title: "AchievR- Digital Certification & Portfolio Platform",
    img: "/AchievR.png",
    live: "http://achievr-frontend-shashank-0121.s3-website.eu-north-1.amazonaws.com/",
    code: "https://github.com/OmkarMishr/HackTitans-AchievR.git",
    tech: ["React.js", "TailwindCSS", "MongoDB", "Node.js", "Express.js", "JWT", "REST APIs", "AWS (EC2, S3)"],
    blurb:
      "A full-stack achievement & portfolio management platform enabling students to track, verify, and showcase academic and extracurricular accomplishments in one place. Features secure authentication, role-based access (Student/Admin), certificate generation, and a dynamic public portfolio. Built with scalable architecture and optimized APIs for a clean, responsive, real-world experience.",
  },
  {
    title: "BrainCache- Personal Knowledge & Productivity Platform",
    img: "/BrainCache-thumb.png",
    live: "https://braincache.vercel.app",
    code: "https://github.com/shashankmishra21/Frontend-Brain-App.git",
    tech: ["React.js", "TypeScript", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "JWT"],
    blurb:
      "A full-stack productivity platform that enables users to collect, organize & share knowledge efficiently. Features real-time data sync, secure JWT-based authentication, advanced multi-tag filtering & shareable collections optimized for performance & scalability",
  },
  {
    title: "CourseStack- eLearning Platform",
    img: "/coursestack-thumb.png",
    live: "https://coursestack-elearning.vercel.app",
    code: "https://github.com/shashankmishra21/CourseStack.git",
    tech: ["React.js", "TypeScript", "MongoDB", "Node.js", "Express.js", "Stripe"],
    blurb:
      "An end-to-end learning management system using React, Node.js, Express, and MongoDB with real-time enrollment, role-based access control, and progress tracking. Designed with modular architecture and optimized APIs to deliver a seamless, scalable learning experience.",
  },
   {
    title: "AstraSky - Real-Time Astronomy Dashboard ",
    img: "/AstraSky.png",
    live: "https://astrasky.vercel.app",
    code: "https://github.com/shashankmishra21/AstraSky.git",
    tech: ["React.js", "TypeScript", "TailwindCSS", 'Framer Motion'],
    blurb:
      "A responsive web interface designed to help astronomy clubs, students, and sky-watchers identify the best night-sky viewing locations across Chhattisgarh. It displays **real-time metrics** such as star visibility score, cloud cover, and light pollution levels through an interactive and user-friendly UI.",
  },
  {
    title: "Personal Portfolio",
    img: "/Portfolio.png",
    live: "https://shashanktech.vercel.app/",
    code: "https://github.com/shashankmishra21/shashank-portfolio.git",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    blurb:
      "An immersive, animated developer portfolio focused on accessibility, performance, and recruiter experience—built with Next.js and Framer Motion.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.06,
    },
  },
};

const easeOut = [0.16, 1, 0.3, 1] as const;

const card: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: easeOut },
  },
};
const imageIn: Variants = {
  hidden: { scale: 0.98, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.45, ease: easeOut },
  },
};

export default function ProjectsPage() {
  return (
    <section className="bg-background">
      <div className="max-w-6xl mx-auto px-5 md:px-6 py-2 md:py-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs md:text-sm tracking-widest font-semibold uppercase mt-5">Projects</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-display font-extrabold tracking-tight">
            <span className="text-blue-500">Crafted with Purpose, Built for Users</span>
          </h2>
        </motion.div>

        {/* Staggered grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={card}
              className="group rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[16/9] bg-black/40">
  <Image
    src={p.img}
    alt={p.title}
    fill
    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
    className="object-contain group-hover:scale-105 transition-transform duration-500"
  />
</div>
              <div className="p-5">
                <h3 className="text-lg md:text-xl font-display font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-7">{p.blurb}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.slice(0, 10).map((t) => (
                    <span key={t} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-4">
                  <Link
                    href={p.live}
                    target={p.live.startsWith("#") ? undefined : "_blank"}
                    className="text-sm font-medium text-blue-500 hover:text-blue-600"
                  >
                    Live
                  </Link>
                  <span className="text-muted-foreground">•</span>
                  <Link
                    href={p.code}
                    target="_blank"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    Code
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            Get in touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
