import type { Metadata } from "next";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CursorBurst from "./components/CursorBurst";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Shashank Mishra — Full Stack Developer",
  description: "Full Stack Developer | Backend Engineer | DevOps Practitioner",
  keywords: [
    "Full Stack Developer",
    "Backend",
    "DevOps",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
  ],
  authors: [{ name: "Shashank Mishra" }],
  creator: "Shashank Mishra",
  openGraph: {
    title: "Shashank Mishra — Full Stack Developer",
    description: "Product-minded full stack developer focused on scalable systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashank Mishra — Full Stack Developer",
    description: "Product-minded full stack developer focused on scalable systems.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <head>
        {/* Early theme class to prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var ls = localStorage.getItem('theme');
                  var theme = ls ? ls : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  var doc = document.documentElement;
                  if (!doc.classList.contains(theme)) doc.classList.add(theme);
                } catch (e) {
                  document.documentElement.classList.add('light');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {/* Mount global visual/animation effects once */}
        <CursorBurst />

        <ThemeProvider>
          <Header />
          <main className="overflow-x-hidden">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
