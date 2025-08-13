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
    name: "Germán Oñate",
    greeting: "Hi, I'm Germán Oñate",
    role: "Information Systems Engineer",
    summary:
      "I'm passionate about building products that create real value for users, teams, and businesses. I enjoy working in collaborative environments where I can help tackle complex challenges and contribute to thoughtful solutions.",
    experience: "Experience",
    toggleLanguage: "Cambiar a Español",
    present: "Present",
  getInTouch: "Get in touch",
  allRightsReserved: "All rights reserved."
  },
  es: {
    name: "Germán Oñate",
    greeting: "Hola, soy Germán Oñate",
    role: "Ingeniero en Sistemas de Información",
    summary:
      "Me apasiona construir productos que generen valor real para usuarios, equipos y empresas. Disfruto trabajar en entornos colaborativos donde puedo ayudar a abordar desafíos complejos y contribuir a soluciones reflexivas.",
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
