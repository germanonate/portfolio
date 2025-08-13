"use client"

import { useLanguage } from "@/contexts/language-context"
import { Briefcase } from "lucide-react"

interface ExperienceItem {
  company: string
  positions: {
    title: string
    startDate: string
    endDate: string | null
    description: string
  }[]
}

export function Experience() {
  const { t, language } = useLanguage()

  const experiences: ExperienceItem[] = [
    {
      company: "Company Name 1",
      positions: [
        {
          title: "Senior Software Engineer",
          startDate: "2022",
          endDate: null,
          description:
            language === "en"
              ? "Leading development of scalable web applications using modern technologies. Mentoring junior developers and contributing to architectural decisions."
              : "Liderando el desarrollo de aplicaciones web escalables usando tecnologías modernas. Mentoreando desarrolladores junior y contribuyendo a decisiones arquitectónicas.",
        },
        {
          title: "Software Engineer",
          startDate: "2020",
          endDate: "2022",
          description:
            language === "en"
              ? "Developed and maintained web applications using Angular, TypeScript, and Node.js. Collaborated with cross-functional teams to deliver high-quality solutions."
              : "Desarrollé y mantuve aplicaciones web usando Angular, TypeScript y Node.js. Colaboré con equipos multifuncionales para entregar soluciones de alta calidad.",
        },
      ],
    },
    {
      company: "Company Name 2",
      positions: [
        {
          title: "Full Stack Developer",
          startDate: "2018",
          endDate: "2020",
          description:
            language === "en"
              ? "Built responsive web applications and RESTful APIs. Worked with databases, implemented CI/CD pipelines, and ensured code quality through testing."
              : "Construí aplicaciones web responsivas y APIs RESTful. Trabajé con bases de datos, implementé pipelines de CI/CD y aseguré la calidad del código mediante testing.",
        },
      ],
    },
    {
      company: "Company Name 3",
      positions: [
        {
          title: "Junior Developer",
          startDate: "2015",
          endDate: "2018",
          description:
            language === "en"
              ? "Started my career developing web applications and learning best practices in software development. Gained experience in various technologies and frameworks."
              : "Comencé mi carrera desarrollando aplicaciones web y aprendiendo mejores prácticas en desarrollo de software. Gané experiencia en varias tecnologías y frameworks.",
        },
      ],
    },
  ]

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
                {experience.positions.map((position, positionIndex) => (
                  <div key={positionIndex} className="relative">
                    <div className="absolute -left-8 w-3 h-3 bg-black dark:bg-white rounded-full"></div>

                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h4 className="text-lg font-medium text-black dark:text-white">{position.title}</h4>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {position.startDate} - {position.endDate || t("present")}
                        </span>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{position.description}</p>
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
