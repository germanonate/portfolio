"use client"

import { Moon, Sun, Globe } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="w-full bg-white dark:bg-black">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-base font-medium text-black dark:text-white">gonate</h1>
          </div>

          <nav className="flex items-center space-x-2">
            <button
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="p-2 text-muted-foreground hover:text-black dark:hover:text-white transition-colors"
              aria-label={t("toggleLanguage")}
            >
              <Globe className="h-4 w-4" />
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 text-muted-foreground hover:text-black dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
              type="button"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
