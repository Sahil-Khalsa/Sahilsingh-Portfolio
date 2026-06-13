import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sahilsingh.dev"),
  title: "Sahilsingh Khalsa | AI & Full Stack Engineer",
  description:
    "Software Development Engineer specializing in scalable backend systems, distributed workflows, and production AI. React, Next.js, Python, FastAPI, AWS.",
  keywords: ["Sahilsingh Khalsa", "Software Engineer", "AI Engineer", "Backend", "Full Stack", "Portfolio"],
  authors: [{ name: "Sahilsingh Khalsa" }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%237c3aed'/><text x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-family='system-ui,sans-serif' font-weight='800' font-size='13' fill='white'>SK</text></svg>",
  },
  openGraph: {
    title: "Sahilsingh Khalsa | AI & Full Stack Engineer",
    description: "Building scalable backend systems, AI workflows, and full-stack applications.",
    type: "website",
    images: [{ url: "/profile.jpg", width: 400, height: 500, alt: "Sahilsingh Khalsa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahilsingh Khalsa | AI & Full Stack Engineer",
    description: "Building scalable backend systems, AI workflows, and full-stack applications.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme — defaults to light */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.classList.toggle('dark',t==='dark')}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
