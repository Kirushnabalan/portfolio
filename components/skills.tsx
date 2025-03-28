"use client";
import { useEffect } from "react";
export default function Skills() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in-left");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".slide-in-left-element");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="section-content">
        <div className="skills-container">
          <div className="skills-category">
            <h3>Technical Skills</h3>
            <div className="skills-list">
              <div className="skill-group">
                <h4>Programming Languages</h4>
                <div className="skill-tags">
                  <span>Python</span>
                  <span>Java</span>
                  <span>JavaScript</span>
                  <span>TypeScript</span>
                </div>
              </div>

              <div className="skill-group">
                <h4>Frontend Technologies</h4>
                <div className="skill-tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>React.js(Basic)</span>
                </div>
              </div>

              <div className="skill-group">
                <h4>Backend Technologies</h4>
                <div className="skill-tags">
                  <span>Spring Boot</span>
                  <span>Node.js(Basic)</span>
                </div>
              </div>

              <div className="skill-group">
                <h4>Databases</h4>
                <div className="skill-tags">
                  <span>PostgreSQL</span>
                  <span>MySQL</span>
                  <span>MongoDB</span>
                </div>
              </div>

              <div className="skill-group">
                <h4>UI/UX Design</h4>
                <div className="skill-tags">
                  <span>Figma</span>
                  <span>Canva</span>
                </div>
              </div>

              <div className="skill-group">
                <h4>Version Control & Tools</h4>
                <div className="skill-tags">
                  <span>Git</span>
                  <span>GitHub</span>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3>Soft Skills</h3>
            <div className="skills-list">
              <div className="skill-tags">
                <span>Time Management</span>
                <span>Good Communication</span>
                <span>Problem-solving</span>
                <span>Self-Motivation</span>
                <span>Collaborative</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}