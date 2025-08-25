"use client";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  Mail,
  SendHorizonal,
  Github,
  Linkedin,
  Twitter,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSent(true);
    setIsSubmitting(false);
    setTimeout(() => setSent(false), 3000);
  };

  // Deterministic particles for SSR/CSR consistency
  const particles = useMemo(
    () =>
      [
        { left: "8%", top: "24%", delay: 0.1 },
        { left: "22%", top: "78%", delay: 0.25 },
        { left: "38%", top: "18%", delay: 0.4 },
        { left: "50%", top: "66%", delay: 0.55 },
        { left: "62%", top: "28%", delay: 0.2 },
        { left: "74%", top: "82%", delay: 0.35 },
        { left: "86%", top: "20%", delay: 0.5 },
        { left: "92%", top: "58%", delay: 0.65 },
      ] as const,
    []
  );

  const socialLinks = [
    { icon: Github, href: "https://github.com/shashankmishra21", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/shashankmishra2106", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/mishrashashank_", label: "Twitter" },
  ] as const;

  return (
    <section
      id="contact"
      className="relative px-4 md:px-6 py-20 md:py-28 bg-background overflow-hidden"
    >
      {/* Ambient radial glows */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(60% 60% at 18% 62%, rgba(59,130,246,0.12), transparent 60%)",
            "radial-gradient(60% 60% at 80% 30%, rgba(139,92,246,0.12), transparent 60%)",
            "radial-gradient(60% 60% at 42% 82%, rgba(59,130,246,0.12), transparent 60%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
            style={{ left: p.left, top: p.top }}
            animate={{ y: [-10, 10, -10], opacity: [0.3, 0.8, 0.3], scale: [1, 1.45, 1] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: easeOut, delay: p.delay }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14 md:mb-16"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <div className="inline-flex items-center gap-3 mb-3">
           
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest">
              Contact
            </span>
            
          </div>

          {/* HEADLINE OPTIONS — pick one and keep it */}
          {/* Option A (default): */}
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
            <span className="text-blue-500">
              Build Something Exceptional Together
            </span>
          </h2>

          {/* Option B:
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Let’s Turn Ideas Into Impact
            </span>
          </h2> */}

          {/* Option C:
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              From Concept to Production—Let’s Ship
            </span>
          </h2> */}

          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Open to full‑time roles and meaningful collaborations. Share a bit about your goals and
            timeline—let’s see how I can help.
          </p>
          <div className="mt-3 h-px w-40 md:w-56 mx-auto bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/70 backdrop-blur-xl p-8 md:p-10 shadow-[0_10px_40px_-12px_rgba(59,130,246,0.25)]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500/12 via-purple-500/12 to-cyan-500/12 rounded-3xl blur-xl" />
              <div className="pointer-events-none absolute -top-px -left-px -right-px h-px bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-t-3xl" />

              <form onSubmit={onSubmit} className="relative space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-border/50 bg-background/60 backdrop-blur-sm px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all"
                      placeholder="John Doe"
                      name="name"
                      autoComplete="name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-xl border border-border/50 bg-background/60 backdrop-blur-sm px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all"
                      placeholder="john@company.com"
                      name="email"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Subject</label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-border/50 bg-background/60 backdrop-blur-sm px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all"
                    placeholder="Let’s discuss your project..."
                    name="subject"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Message *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full rounded-xl border border-border/50 bg-background/60 backdrop-blur-sm px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all resize-none"
                    placeholder="Tell me about your project, timeline, and how we can work together..."
                    name="message"
                  />
                </div>

                {/* Success Note */}
                <motion.div
                  initial={false}
                  animate={sent ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.3, ease: easeOut }}
                  className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-600 dark:text-emerald-400"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-medium">Message sent! I’ll reply within 24 hours.</span>
                </motion.div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15, ease: easeOut }}
                >
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <SendHorizonal className="w-5 h-5" />
                        Send Message
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right: Social + Quick Stats (Other ways removed) */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            {/* Social Links */}
            <div className="rounded-2xl p-6 bg-card/70 backdrop-blur-xl border border-border/50">
              <h4 className="font-semibold text-lg mb-4">Follow My Journey</h4>
              <div className="flex gap-4">
                {socialLinks.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3 rounded-xl bg-background/60 border border-border/50 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all"
                      whileHover={{ scale: 1.1, rotate: 4 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.08, ease: easeOut }}
                    >
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="rounded-2xl p-6 border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
              <h4 className="font-semibold text-lg mb-4 text-blue-600 dark:text-blue-400">
                Response Time
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Email</span>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    &lt; 24 hours
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Project Inquiries</span>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    &lt; 2 hours
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Availability</span>
                  <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    Open for opportunities
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          className="text-center mt-16 pt-8 border-t border-border/50"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: easeOut }}
        >
          <p className="text-muted-foreground mb-4">Prefer a direct approach?</p>
          <motion.a
            href="mailto:mishrashashank2106@gmail.com"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            mishrashashank2106@gmail.com
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
