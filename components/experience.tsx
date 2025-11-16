"use client"



import { useLanguage } from "@/contexts/language-context"
import { Briefcase, ChevronDown, ExternalLink } from "lucide-react"
import yaml from "js-yaml"
import { useEffect, useState } from "react"

interface ExperiencePosition {
  title: string;
  startDate: string;
  endDate: string | null;
  description_en: string;
  description_es: string;
}

interface ExperienceCompany {
  company: string;
  website?: string;
  positions: ExperiencePosition[];
}

export function Experience() {
  const { t, language } = useLanguage()
  const [experiences, setExperiences] = useState<ExperienceCompany[]>([])
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    async function fetchExperience() {
      const res = await fetch("/experience.yaml")
      const text = await res.text()
      const data = yaml.load(text)
      if (Array.isArray(data)) {
        // Sort experiences by most recent start date
        const sortedExperiences = (data as ExperienceCompany[]).sort((a, b) => {
          const aLatestStart = a.positions[0].startDate
          const bLatestStart = b.positions[0].startDate
          
          // Convert MM/YY format to comparable date
          const parseDate = (dateStr: string) => {
            const [month, year] = dateStr.split('/')
            return new Date(2000 + parseInt(year), parseInt(month) - 1)
          }
          
          return parseDate(bLatestStart).getTime() - parseDate(aLatestStart).getTime()
        })
        setExperiences(sortedExperiences)
      }
    }
    fetchExperience()
  }, [])

  // Show only the first 3 experiences initially
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3)
  const hiddenCount = experiences.length - 3

  return (
    <section className="py-16 px-6 lg:px-8 bg-white dark:bg-black">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <h2 className="text-2xl font-light text-black dark:text-white">{t("experience")}</h2>
        </div>

        <div className="space-y-6">
          {displayedExperiences.map((experience, companyIndex) => (
            <div key={companyIndex} className="flex flex-col sm:flex-row sm:justify-between pl-4 border-l-2 border-gray-200 dark:border-zinc-800">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-black dark:text-white mb-1 flex items-center gap-2">
                  {experience.company}
                  {experience.website && (
                    <a
                      href={experience.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-black dark:hover:text-white transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </h3>
                <div className="text-sm text-muted-foreground">
                  {experience.positions
                    .slice()
                    .reverse()
                    .map((position, positionIndex) => (
                    <span key={positionIndex}>
                      {position.title}
                      {positionIndex < experience.positions.length - 1 && " → "}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-1 sm:mt-0 sm:ml-6 sm:text-right">
                <span className="text-xs text-muted-foreground">
                  {experience.positions[experience.positions.length - 1].startDate} - {experience.positions[0].endDate || t("present")}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {experiences.length > 3 && (
          <div className="mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-black dark:hover:text-white transition-colors text-sm"
            >
              {showAll ? t("showLess") : `${t("showMoreExperiences").replace("3", hiddenCount.toString())}`}
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
