"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./theme-toggle"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Handle scroll events for navbar styling and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Track active section
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionId = section.getAttribute("id") || ""
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <Link href="#home" className="logo">
          <span className="logo-text">KV</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li>
              <a href="#home" className={activeSection === "home" ? "active" : ""}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={activeSection === "about" ? "active" : ""}>
                About
              </a>
            </li>
            <li>
              <a href="#education" className={activeSection === "education" ? "active" : ""}>
                Education
              </a>
            </li>
            <li>
              <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className={activeSection === "skills" ? "active" : ""}>
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="navbar-right">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="icon" /> : <Menu className="icon" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
        <ul className="mobile-nav-links">
          <li>
            <a href="#home" className={activeSection === "home" ? "active" : ""} onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={activeSection === "about" ? "active" : ""} onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#education" className={activeSection === "education" ? "active" : ""} onClick={handleLinkClick}>
              Education
            </a>
          </li>
          <li>
            <a href="#projects" className={activeSection === "projects" ? "active" : ""} onClick={handleLinkClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className={activeSection === "skills" ? "active" : ""} onClick={handleLinkClick}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className={activeSection === "contact" ? "active" : ""} onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

