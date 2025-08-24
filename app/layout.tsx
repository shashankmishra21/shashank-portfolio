import type { Metadata } from "next";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CursorBurst from "./components/CursorBurst";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], display: "swap", variable: "--font-display" });

export const metadata: Metadata = {
  title: "Shashank Mishra — Full Stack Developer",
  description: "Full Stack Developer | Backend Engineer | DevOps Practitioner",
  keywords: ["Full Stack Developer", "Backend", "DevOps", "React", "Next.js", "Node.js", "TypeScript"],
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
    <html lang="en" suppressHydrationWarning className={spaceGrotesk.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.classList.add(theme);
                } catch (e) {
                  document.documentElement.classList.add('light');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-background text-foreground no-x-overflow`}>
        <ThemeProvider>
          <Header />
          <div className="h-14 sm:h-14 md:h-16 lg:h-16" />
          <main className="no-x-overflow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>

    </html>
  );
}
