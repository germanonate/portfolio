import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Hero />
      <Experience />
    </main>
  )
}
