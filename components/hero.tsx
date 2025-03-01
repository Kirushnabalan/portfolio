import { Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <div className="image-placeholder">
            <span>KV</span>
          </div>
        </div>
        <div className="hero-text">
          <h1 className="animate-title">Kirushnabalan Vijayabalan</h1>
          <h2 className="animate-subtitle">Software Engineering Student</h2>
          <div className="social-links animate-social">
            <a href="https://github.com/Kirushnabalan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/kirushnabalan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a href="mailto:kirushnabalan1803@gmail.com" aria-label="Email">
              <Mail />
            </a>
          </div>
          <a href="#contact" className="cta-button animate-cta">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

