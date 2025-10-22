import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "BrainCache",
    img: "/BrainCache-thumb.png",
    live: "https://braincache.vercel.app/",
    code: "https://github.com/shashankmishra21/Frontend-Brain-App.git",
    tech: ["React.js", "TypeScript", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "JWT"],
    blurb: "A full-stack productivity platform that enables users to collect, organize & share knowledge efficiently. Features real-time data sync, secure JWT-based authentication, advanced multi-tag filtering & shareable collections optimized for performance & scalability",
  },
  {
    title: "CourseStack",
    img: "/coursestack-thumb.png",
    live: "https://course-stack-seven.vercel.app/",
    code: "https://github.com/shashankmishra21/CourseStack.git",
    tech: ["React.js", "TypeScript", "MongoDB", "Node.js", "Express.js", "Stripe"],
    blurb: "An end-to-end learning management system using React, Node.js, Express, and MongoDB with real-time enrollment, role-based access control, and progress tracking. Designed with modular architecture and optimized APIs to deliver a seamless, scalable learning experience.",
  },
  {
    title: "Personal Portfolio",
    img: "/Portfolio.png",
    live: "https://shashanktech.vercel.app/",
    code: "https://github.com/shashankmishra21/shashank-portfolio.git",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    blurb: "An immersive, animated developer portfolio focused on accessibility, performance, and recruiter experience—built with Next.js and Framer Motion.",
  },
];

export default function ProjectsPage() {
  return (
    <section className="bg-background">
      <div className="max-w-6xl mx-auto px-5 md:px-6 py-2 md:py-20">
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm tracking-widest font-semibold uppercase mt-5">
            Projects
          </p>
          <h2 className="mt-2 text-3xl md:text-5xl font-display font-extrabold tracking-tight">
            <span className="text-blue-500">
              Crafted with Purpose, Built for Users
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Outcome-driven work across SaaS and learning platforms, built with performance in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[16/8] overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg md:text-xl font-display font-bold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-7">{p.blurb}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.slice(0, 10).map((t) => (
                    <span key={t} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                      {t}
                    </span>
                  ))}
                  {/* {p.tech.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full">
                      +{p.tech.length - 4} more
                    </span>
                  )} */}
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
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
