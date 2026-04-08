import type { Metadata } from "next";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Mayank Sahu",
    "Next.js portfolio",
    "Full-stack developer",
    "TypeScript developer",
    "Frontend engineer",
    "Framer Motion portfolio",
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/hero-developer.png",
        width: 1200,
        height: 900,
        alt: `${siteConfig.name} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/hero-developer.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body className="min-h-full bg-[var(--background)] font-sans text-[var(--foreground)] antialiased selection:bg-[var(--accent)]/20 selection:text-[var(--foreground)]">
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              const stored = window.localStorage.getItem("theme");
              const preferred = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
              document.documentElement.dataset.theme = stored || preferred;
            })();`,
          }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
