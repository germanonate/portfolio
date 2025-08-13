"use client"


import { useLanguage } from "@/contexts/language-context"
import { Briefcase } from "lucide-react"
import yaml from "js-yaml"
import { useEffect, useState } from "react"

export function Experience() {
  const { t, language } = useLanguage()
  const [experiences, setExperiences] = useState<any[]>([])

  useEffect(() => {
    async function fetchExperience() {
      const res = await fetch("/experience.yaml")
      const text = await res.text()
      const data = yaml.load(text)
      setExperiences(Array.isArray(data) ? data : [])
    }
    fetchExperience()
  }, [])

  return (
    <section className="py-20 px-6 lg:px-8 bg-white dark:bg-black">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12">
          <Briefcase className="h-6 w-6 text-black dark:text-white mb-2" />
          <h2 className="text-3xl font-light text-black dark:text-white">{t("experience")}</h2>
        </div>

        <div className="space-y-12">
          {experiences.map((experience, companyIndex) => (
            <div key={companyIndex} className="border-l-2 border-gray-200 dark:border-gray-700 pl-6">
              <h3 className="text-xl font-medium text-black dark:text-white mb-6">{experience.company}</h3>

              <div className="space-y-6">
                {experience.positions.map((position: any, positionIndex: number) => (
                  <div key={positionIndex} className="relative">
                    <div className="absolute -left-8 w-3 h-3 bg-black dark:bg-white rounded-full"></div>

                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h4 className="text-lg font-medium text-black dark:text-white">{position.title}</h4>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {position.startDate} - {position.endDate || t("present")}
                        </span>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {language === "en" ? position.description_en : position.description_es}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
