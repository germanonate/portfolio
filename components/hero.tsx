"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Linkedin, Github, Twitter, Mail } from "lucide-react"

export function Hero() {
  const { t } = useLanguage()

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/german-onate",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/germanonate",
      label: "GitHub",
    },
    {
      icon: Twitter,
      href: "https://x.com/onateger",
      label: "X",
    },
  ]

  return (
    <section className="py-16 px-6 lg:px-8 bg-white dark:bg-black">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Profile Image */}
          <div className="relative">
            <Image
              src="/headshot.png"
              alt="Germán Oñate"
              width={160}
              height={160}
              className="rounded-full"
              priority
            />
          </div>

          {/* Content */}
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black dark:text-white">{t("greeting")}</h1>

            <p className="text-sm text-muted-foreground leading-relaxed">{t("summary")}</p>

            {/* Social Media Links */}
            <div className="flex items-center justify-center space-x-3 pt-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-black dark:hover:text-white transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}

              {/* Get in Touch Button */}
              <a
                href="mailto:o.germanmartin@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3 py-1.5 border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-xs font-medium ml-3 rounded-md"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>{t("getInTouch")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
