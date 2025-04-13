// components/skills.tsx
"use client";
import AnimatedSection from "./animated-section";
import { Code, Database, Layout, Figma, FileText, Github, Server, Braces, History, Languages, ChevronsUpDown } from "lucide-react";

export default function Skills() {
  return (
    <AnimatedSection id="skills" animation="fade-up">
      <h2 className="section-title">Skills</h2>
      <div className="section-content">
        <div className="skills-container">
          <div className="skills-category">
            <h3>Technical Skills</h3>
            <div className="skills-list">
              <div className="skill-group">
                <h4>Programming Languages</h4>
                <div className="skill-tags">
                  <div className="skill-tag">
                    <div className="skill-icon">
                      <Code size={18} />
                    </div>
                    <span>Python</span>
                  </div>
                  <div className="skill-tag">
                    <div className="skill-icon">
                      <ChevronsUpDown size={18} />
                    </div>
                    <span>Java</span>
                  </div>
                  <div className="skill-tag">
                    <div className="skill-icon">
                      <Braces size={18} />
                    </div>
                    <span>JavaScript</span>
                  </div>
                  <div className="skill-tag">
                    <div className="skill-icon">
                      <Languages size={18} />
                    </div>
                    <span>TypeScript</span>
                  </div>
                </div>
              </div>

              <div className="skill-group">
                <h4>Frontend Technologies</h4>
                <div className="skill-tags">
                  <div className="skill-tag">
                    <div className="skill-icon">
                      <Code size={18} />
                    </div>
                    <span>HTML</span>
                  </div>
                  <div className="skill-tag">
                    <div className="skill-icon">
                      <Layout size={18} />
                    </div>
                    <span>CSS</span>
                  </div>
                  <div className="skill-tag">
                    <div className="skill-icon">
                      <FileText size={18} />
                    </div>
                    <span>React.js</span>
                  </div>
                </div>
              </div>

              <div className="skill-group">
                <h4>Backend Technologies</h4>
                <div className="skill-tags">
                  <div className="skill-tag">
                    <div className="skill-icon">
                      <Server size={18} />
                    </div>
                    <span>Spring Boot</span>
                  </div>
                  <div className="skill-tag">
                    <div className="skill-icon">
                      <Server size={18} />
                    </div>
                    <span>Node.js</span>
                  </div>
                </div>
              </div>

              <div className="skill-group">
                <h4>Databases</h4>
                <div className="skill-tags">
                  <div className="skill-tag">
                    <div className="skill-icon">
                      <Database size={18} />
                    </div>
                    <span>PostgreSQL</span>
                  </div>
                  <div className="skill-tag">
                    <div className="skill-icon">
                      <Database size={18} />
                    </div>
                    <span>MySQL</span>
                  </div>
                  <div className="skill-tag">
                    <div className="skill-icon">
                      <Database size={18} />
                    </div>
                    <span>MongoDB</span>
                  </div>
                </div>
              </div>

              <div className="skill-group">
                <h4>UI/UX Design</h4>
                <div className="skill-tags">
                  <div className="skill-tag">
                    <div className="skill-icon">
                      <Figma size={18} />
                    </div>
                    <span>Figma</span>
                  </div>
                  <div className="skill-tag">
                    <div className="skill-icon">
                      <Layout size={18} />
                    </div>
                    <span>Canva</span>
                  </div>
                </div>
              </div>

              <div className="skill-group">
                <h4>Version Control & Tools</h4>
                <div className="skill-tags">
                  <div className="skill-tag">
                    <div className="skill-icon">
                      <History size={18} />
                    </div>
                    <span>Git</span>
                  </div>
                  <div className="skill-tag">
                    <div className="skill-icon">
                      <Github size={18} />
                    </div>
                    <span>GitHub</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3>Soft Skills</h3>
            <div className="skills-list">
              <div className="skill-tags">
                <div className="skill-tag">Time Management</div>
                <div className="skill-tag">Good Communication</div>
                <div className="skill-tag">Problem-solving</div>
                <div className="skill-tag">Self-Motivation</div>
                <div className="skill-tag">Collaborative</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}