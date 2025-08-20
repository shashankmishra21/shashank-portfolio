"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Mail, 
  SendHorizonal, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Calendar,
  MessageCircle,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSent(true);
    setIsSubmitting(false);
    setTimeout(() => setSent(false), 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "mishrashashank2106@gmail.com",
      action: "mailto:mishrashashank2106@gmail.com",
      color: "blue"
    },
    {
      icon: Phone,
      title: "Let's Talk",
      description: "Schedule a call",
      action: "#",
      color: "emerald"
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Gurgaon, India",
      action: "#",
      color: "purple"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <section id="contact" className="relative px-4 md:px-6 py-20 md:py-28 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 30% 70%, rgba(59,130,246,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 30%, rgba(139,92,246,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 70%, rgba(59,130,246,0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-4"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 uppercase tracking-wider">Get In Touch</span>
            <Sparkles className="w-5 h-5 text-blue-500" />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're a startup looking for a technical co-founder, a company needing a full-stack developer, 
            or just want to discuss exciting opportunities—I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-10 relative overflow-hidden">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl -z-10"></div>
              <div className="absolute -top-px -left-px -right-px h-px bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-t-3xl"></div>

              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="
                        w-full rounded-xl
                        border border-border/50 
                        bg-background/50 backdrop-blur-sm
                        px-4 py-3
                        text-foreground placeholder:text-muted-foreground
                        outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50
                        transition-all duration-200
                        hover:border-border
                      "
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="
                        w-full rounded-xl
                        border border-border/50 
                        bg-background/50 backdrop-blur-sm
                        px-4 py-3
                        text-foreground placeholder:text-muted-foreground
                        outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50
                        transition-all duration-200
                        hover:border-border
                      "
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="
                      w-full rounded-xl
                      border border-border/50 
                      bg-background/50 backdrop-blur-sm
                      px-4 py-3
                      text-foreground placeholder:text-muted-foreground
                      outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50
                      transition-all duration-200
                      hover:border-border
                    "
                    placeholder="Let's discuss your project..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="
                      w-full rounded-xl
                      border border-border/50 
                      bg-background/50 backdrop-blur-sm
                      px-4 py-3
                      text-foreground placeholder:text-muted-foreground
                      outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50
                      transition-all duration-200
                      hover:border-border
                      resize-none
                    "
                    placeholder="Tell me about your project, timeline, and how we can work together..."
                  />
                </div>

                {/* Success Message */}
                <motion.div
                  initial={false}
                  animate={sent ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-600 dark:text-emerald-400"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    Message sent successfully! I'll get back to you within 24 hours.
                  </span>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full group relative
                    bg-gradient-to-r from-blue-500 to-purple-600
                    hover:from-blue-600 hover:to-purple-700
                    text-white font-semibold
                    px-8 py-4 rounded-xl
                    transition-all duration-200
                    disabled:opacity-50 disabled:cursor-not-allowed
                    overflow-hidden
                  "
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
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

          {/* Contact Info & Social */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Other Ways to Reach Me</h3>
              
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={method.title}
                    href={method.action}
                    className="
                      group block p-6 rounded-2xl 
                      bg-card/50 backdrop-blur-sm border border-border/50
                      hover:border-blue-500/30 hover:bg-blue-500/5
                      transition-all duration-300
                    "
                    whileHover={{ scale: 1.02, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                        <Icon className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-foreground/90">
                          {method.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {method.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
              <h4 className="font-semibold text-lg mb-4">Follow My Journey</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="
                        group p-3 rounded-xl
                        bg-background/50 border border-border/50
                        hover:border-blue-500/30 hover:bg-blue-500/10
                        transition-all duration-200
                      "
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6">
              <h4 className="font-semibold text-lg mb-4 text-blue-600 dark:text-blue-400">
                Response Time
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Email</span>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">&lt; 24 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Project Inquiries</span>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">&lt; 2 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Availability</span>
                  <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Open for opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 pt-8 border-t border-border/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-muted-foreground mb-4">
            Prefer a more direct approach?
          </p>
          <motion.a
            href="mailto:mishrashashank2106@gmail.com"
            className="
              inline-flex items-center gap-3 px-6 py-3 rounded-xl
              border border-blue-500/30 bg-blue-500/10 
              text-blue-600 dark:text-blue-400
              hover:bg-blue-500/20 hover:border-blue-500/50
              transition-all duration-200
              font-medium
            "
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
