"use client"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8 px-6 lg:px-8 bg-white dark:bg-black">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p className="text-sm">© {year} {t("allRightsReserved")}</p>
        </div>
      </div>
    </footer>
  )
}
