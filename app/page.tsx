import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Divider } from "@/components/divider"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Hero />
      <Divider />
      <Experience />
    </main>
  )
}
