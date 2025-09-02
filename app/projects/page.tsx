import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Linkify — Link Management SaaS",
    img: "/images/projects/linkify-thumb.jpg",
    live: "https://linkify-web.netlify.app",
    code: "https://github.com/shashankmishra21",
    category: "SaaS",
    year: "2024",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "JWT"],
    blurb: "Role-based access, analytics, branded links, and secure auth for teams and creators.",
  },
  {
    title: "CourseStack — eLearning Web App",
    img: "/images/projects/coursestack-thumb.jpg",
    live: "https://coursestack.vercel.app",
    code: "https://github.com/shashankmishra21",
    category: "eLearning",
    year: "2024",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe"],
    blurb: "Streaming, progress tracking, quiz modules, dashboards, and payments.",
  },
  {
    title: "Portfolio — Performance-first",
    img: "/images/projects/portfolio-thumb.jpg",
    live: "#",
    code: "https://github.com/shashankmishra21",
    category: "Portfolio",
    year: "2025",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    blurb: "Animated, accessible, recruiter-friendly portfolio with a premium feel.",
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
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-blue-500/90 text-white rounded-full">
                    {p.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-black/50 text-white rounded-full">
                    {p.year}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg md:text-xl font-display font-bold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.blurb}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.slice(0, 4).map((t) => (
                    <span key={t} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full">
                      +{p.tech.length - 4} more
                    </span>
                  )}
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
