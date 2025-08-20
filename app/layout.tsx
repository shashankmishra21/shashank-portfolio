import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CursorBurst from "./components/CursorBurst";

export const metadata: Metadata = {
  title: "Shashank Mishra — Full Stack Developer",
  description: "Portfolio of Shashank Mishra: Full Stack Developer, Backend Engineer, DevOps Practitioner",
  keywords: "Full Stack Developer, Backend Engineer, DevOps, React, Next.js, Node.js, TypeScript",
  authors: [{ name: "Shashank Mishra" }],
  creator: "Shashank Mishra",
  openGraph: {
    title: "Shashank Mishra — Full Stack Developer",
    description: "Full Stack Developer | Backend Engineer | DevOps Practitioner",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashank Mishra — Full Stack Developer",
    description: "Full Stack Developer | Backend Engineer | DevOps Practitioner",
    creator: "@mishrashashank_",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="anonymous" 
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.classList.add(theme);
                } catch (e) {
                  // Fallback to light theme if localStorage is not available
                  document.documentElement.classList.add('light');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider>
          <CursorBurst />
          <Header />
          <main className="pt-20 md:pt-24">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
