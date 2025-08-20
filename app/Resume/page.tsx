"use client";
import { motion } from "framer-motion";
import { Download, Eye, ExternalLink } from "lucide-react";
import { useCallback } from "react";

export default function Resume() {
  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/Resume-Shashank_Mishra.pdf";
    link.download = "Resume-Shashank_Mishra.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-24 md:pt-28 pb-16 md:pb-20 px-5 md:px-6 relative overflow-hidden">
        {/* Soft animated background */}
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

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-10 md:mb-12"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">
              My <span className="text-blue-500">Resume</span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Download or view my latest resume to learn more about my experience and qualifications.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 font-medium text-sm md:text-base rounded-full inline-flex items-center gap-2 transition-colors"
                onClick={handleDownload}
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>

              <a
                href="/Resume-Shashank_Mishra.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm md:text-base hover:bg-accent transition-colors"
              >
                <Eye className="w-4 h-4" />
                View Online
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
