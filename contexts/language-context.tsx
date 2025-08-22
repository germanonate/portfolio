"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    greeting: "Hi, I'm Germán Oñate",
    summary:
      "I’m passionate about building products that create real value for users, empower teams, and drive business growth. I’m also curious about how technology connects with economics and entrepreneurship 📈 — and outside of work, I enjoy playing tennis 🎾.",
    experience: "Experience",
    toggleLanguage: "Cambiar a Español",
    present: "Present",
  getInTouch: "Get in touch",
  allRightsReserved: "All rights reserved."
  },
  es: {
    greeting: "Hola, soy Germán Oñate",
    summary:
      "Me apasiona construir productos que generen un impacto real en los usuarios, potencien a los equipos y contribuyan al crecimiento del negocio. También me interesa cómo la tecnología se conecta con la economía y el emprendimiento 📈 — y fuera del trabajo disfruto del tenis 🎾.",
    experience: "Experiencia",
    toggleLanguage: "Switch to English",
    present: "Presente",
  getInTouch: "Ponte en contacto",
  allRightsReserved: "Todos los derechos reservados."
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
