"use client";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Mail, SendHorizonal, Github, Linkedin, Twitter, ArrowRight, CheckCircle2 } from "lucide-react";

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
    setTimeout(() => setSent(false), 2400);
  };

  // Fewer particles, lighter motion
  const particles = useMemo(
    () =>
      [
        { left: "12%", top: "30%", delay: 0.1 },
        { left: "46%", top: "72%", delay: 0.25 },
        { left: "78%", top: "22%", delay: 0.4 },
      ] as const,
    []
  );

  const socialLinks = [
    { icon: Github, href: "https://github.com/shashankmishra21", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/shashankmishra2106", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/mishrashashank_", label: "Twitter" },
  ] as const;

  return (
    <section id="contact" className="relative px-4 md:px-6 py-12 md:py-16 bg-background overflow-hidden">
      {/* Subtle ambient glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(50% 50% at 18% 62%, rgba(59,130,246,0.10), transparent 60%)",
            "radial-gradient(50% 50% at 80% 30%, rgba(139,92,246,0.10), transparent 60%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />

      {/* Sparse particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/25 rounded-full"
            style={{ left: p.left, top: p.top }}
            animate={{ y: [-8, 8, -8], opacity: [0.25, 0.65, 0.25], scale: [1, 1.3, 1] }}
            transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: easeOut, delay: p.delay }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: easeOut }}
        >
          <p className="text-[10px] sm:text-xs tracking-widest font-semibold uppercase mb-1.5">Contact</p>
          <h2 className="text-xl sm:text-2xl md:text-5xl font-display font-bold tracking-tight">
            <span className="text-blue-500">Let’s build something exceptional</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
            Open to full‑time roles and collaborations. Share goals and timelines—happy to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: easeOut }}
          >
            <div className="relative overflow-hidden rounded-xl border border-border/60 bg-card/60 backdrop-blur-xl p-5 sm:p-6 shadow-[0_6px_28px_-12px_rgba(59,130,246,0.20)]">
              <form onSubmit={onSubmit} className="relative space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-foreground">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full h-10 rounded-lg border border-border/60 bg-background/60 px-3 text-sm text-foreground placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/40 transition"
                      placeholder="Rishab Tripathi"
                      name="name"
                      autoComplete="name"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-foreground">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full h-10 rounded-lg border border-border/60 bg-background/60 px-3 text-sm text-foreground placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/40 transition"
                      placeholder="rishabtripathi@gmail.com"
                      name="email"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-medium text-foreground">Subject</label>
                  <input
                    type="text"
                    className="w-full h-10 rounded-lg border border-border/60 bg-background/60 px-3 text-sm text-foreground placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/40 transition"
                    placeholder="Let’s discuss your project..."
                    name="subject"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-medium text-foreground">Message *</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full rounded-lg border border-border/60 bg-background/60 px-3 py-2 text-sm text-foreground placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/40 transition resize-none"
                    placeholder="Share context, scope, and timeline..."
                    name="message"
                  />
                </div>

                {/* Success Note */}
                <motion.div
                  initial={false}
                  animate={sent ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                  transition={{ duration: 0.25, ease: easeOut }}
                  className="flex items-center gap-2 p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-600 dark:text-emerald-400 text-xs"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-medium">Message sent! Reply within 24 hours.</span>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ duration: 0.12, ease: easeOut }}
                >
                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <SendHorizonal className="w-4 h-4" />
                        Send Message
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right: Socials & Stats */}
          <motion.div
            className="lg:col-span-5 space-y-4"
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: easeOut }}
          >
            {/* Social Links */}
            <div className="rounded-xl p-4 bg-card/60 backdrop-blur-xl border border-border/60">
              <h4 className="font-semibold text-sm mb-3">Follow</h4>
              <div className="flex gap-3">
                {socialLinks.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-2.5 rounded-lg bg-background/60 border border-border/60 hover:border-blue-500/30 hover:bg-blue-500/10 transition"
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.97 }}
                      initial={{ opacity: 0, scale: 0.94 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: i * 0.06, ease: easeOut }}
                    >
                      <Icon className="w-4 h-4 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="rounded-xl p-4 border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
              <h4 className="font-semibold text-sm mb-3 text-blue-600 dark:text-blue-400">Response Time</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Email</span>
                  <span className="font-medium text-blue-600 dark:text-blue-400">&lt; 24 hours</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Project Inquiries</span>
                  <span className="font-medium text-blue-600 dark:text-blue-400">&lt; 2 hours</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Availability</span>
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">Open for opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-10 pt-6 border-t border-border/60"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, ease: easeOut }}
        >
          <p className="text-xs text-muted-foreground mb-3">Prefer a direct approach?</p>
          <motion.a
            href="mailto:mishrashashank2106@gmail.com"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/15 hover:border-blue-500/50 transition font-medium text-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail className="w-4 h-4" />
            mishrashashank2106@gmail.com
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
