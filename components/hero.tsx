"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const roles = ["Software Engineering Undergraduate", "Web Developer","UI/UX Designer"];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 50 : 100;
  const pauseTime = 1500; // Pause before deleting

  useEffect(() => {
    const handleTyping = () => {
      const currentText = roles[index];
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
      } else {
        setText((prev) => currentText.slice(0, prev.length + 1));
      }

      if (!isDeleting && text === currentText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, index]);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <div className="image-placeholder">
          <Image
  src="/portfolio/images/kirush.jpg"  // Add /portfolio prefix
  alt="description"
  priority  // Add priority for above-the-fold images
/>
          </div>
        </div>
        <div className="hero-text">
          <h1 className="animate-title">Kirushnabalan Vijayabalan</h1>
          <h2 className="animate-title">{text}|</h2>
          <div className="social-links animate-social">
            <a href="https://github.com/Kirushnabalan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/kirushnabalan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href="mailto:kirushnabalan1803@gmail.com" aria-label="Email">
              <Mail />
            </a>
          </div>
          <div className="cta-buttons">
            <a href="#contact" className="cta-button animate-cta">Contact Me</a>
            <a className="cta-button animate-cta" href="https://drive.google.com/file/d/1e5FahwDT7nHrdWVQhkt1MtKuSKoKJlWS/view?usp=sharing" download="cv.pdf">View CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}
