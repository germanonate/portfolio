import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";
import { LanguageProvider } from "@/contexts/language-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Germán Oñate",
  description:
    "Personal portfolio of Germán Oñate, Information Systems Engineer passionate about building products that create real value.",
  keywords: [
    "Germán Oñate",
    "Information Systems Engineer",
    "Software Engineer",
    "Portfolio",
    "React",
    "Angular",
  ],
  authors: [{ name: "Germán Oñate" }],
  viewport: "width=device-width, initial-scale=1",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Force dark mode immediately
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
                
                // Only switch to light if explicitly saved
                const saved = localStorage.getItem('theme');
                if (saved === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  // Ensure dark is saved as default
                  localStorage.setItem('theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-black text-white dark:bg-black dark:text-white`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white">
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
