import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Projects from "../components/project"
import Skills from "@/components/skills"
import Certifications from "../components/certification"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import "./globals.css"

export default function Home() {
  return (
    <main className="main-container">
      <Navbar />

      <section id="home">
        <Hero />
      </section>
      <About />
      <Education />
      <Projects />
      <Skills />

      <Certifications />

      <Contact />

      <footer>
        <p>&copy; {new Date().getFullYear()} Kirushnabalan Vijayabalan. All rights reserved.</p>
      </footer>
    </main>
  )
}