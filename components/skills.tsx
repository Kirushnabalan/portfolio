"use client";
import AnimatedSection from "./animated-section";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiSpringboot,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFigma,
  SiCanva,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

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
                    <div className="skill-icon"><SiPython size={18} /></div>
                    <span>Python</span>
                  </div>
                  <div className="skill-tag">
                    <div className="skill-icon"><DiJava size={18} /></div>
                    <span>Java</span>
                  </div>
                  <div className="skill-tag">
                    <div className="skill-icon"><SiJavascript size={18} /></div>
                    <span>JavaScript</span>
                  </div>
                  <div className="skill-tag">
                    <div className="skill-icon"><SiTypescript size={18} /></div>
                    <span>TypeScript</span>
                  </div>
                </div>
              </div>

              <div className="skill-group">
                <h4>Frontend Technologies</h4>
                <div className="skill-tags">
                  <div className="skill-tag">
                    <div className="skill-icon"><SiHtml5 size={18} /></div>
                    <span>HTML</span>
                  </div>
                  <div className="skill-tag">
                    <div className="skill-icon"><SiCss3 size={18} /></div>
                    <span>CSS</span>
                  </div>
                  <div className="skill-tag">
                    <div className="skill-icon"><SiReact size={18} /></div>
                    <span>React.js</span>
                  </div>
                </div>
              </div>

              <div className="skill-group">
                <h4>Backend Technologies</h4>
                <div className="skill-tags">
                  <div className="skill-tag">
                    <div className="skill-icon"><SiSpringboot size={18} /></div>
                    <span>Spring Boot</span>
                  </div>
                  <div className="skill-tag">
                    <div className="skill-icon"><SiNodedotjs size={18} /></div>
                    <span>Node.js</span>
                  </div>
                </div>
              </div>

              <div className="skill-group">
                <h4>Databases</h4>
                <div className="skill-tags">
                  <div className="skill-tag">
                    <div className="skill-icon"><SiPostgresql size={18} /></div>
                    <span>PostgreSQL</span>
                  </div>
                  <div className="skill-tag">
                    <div className="skill-icon"><SiMysql size={18} /></div>
                    <span>MySQL</span>
                  </div>
                  <div className="skill-tag">
                    <div className="skill-icon"><SiMongodb size={18} /></div>
                    <span>MongoDB</span>
                  </div>
                </div>
              </div>

              <div className="skill-group">
                <h4>UI/UX Design</h4>
                <div className="skill-tags">
                  <div className="skill-tag">
                    <div className="skill-icon"><SiFigma size={18} /></div>
                    <span>Figma</span>
                  </div>
                  <div className="skill-tag">
                    <div className="skill-icon"><SiCanva size={18} /></div>
                    <span>Canva</span>
                  </div>
                </div>
              </div>

              <div className="skill-group">
                <h4>Version Control & Tools</h4>
                <div className="skill-tags">
                  <div className="skill-tag">
                    <div className="skill-icon"><SiGit size={18} /></div>
                    <span>Git</span>
                  </div>
                  <div className="skill-tag">
                    <div className="skill-icon"><SiGithub size={18} /></div>
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
  );
}
