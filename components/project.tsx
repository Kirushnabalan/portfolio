// components/project.tsx
import { Code, Database, Layout, Figma, FileText, Github, Link, ExternalLink } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "./animated-section";

export default function Projects() {
  return (
    <AnimatedSection id="projects" animation="fade-up">
      <h2 className="section-title">Projects</h2>
      <div className="section-content">
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image-container">
              <Image 
                src="/portfolio/images/truelens.png" 
                alt="TrueLens Project"
                width={400}
                height={250}
                className="project-image"
              />
            </div>
            <div className="project-icon">
              <FileText />
            </div>
            <h3>TrueLens</h3>
            <p>
              TrueLens is a university software development group project focused on analyzing aggregated news articles
              to detect media biases and misinformation. I contribute to the backend development and data processing.
            </p>
            <div className="project-tech">
              <span>MongoDB</span>
              <span>Node.js</span>
              <span>Prisma</span>
              <span>ReactJs</span>
              <span>TypeScript</span>
            </div>
            <div className="project-links">
              <a
                href="https://www.truelens.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
              <a
                href="https://github.com/Curstantine/TrueLens"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <Github size={16} /> View Code
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image-container">
              <Image 
                src="/portfolio/images/py.png" 
                alt="Financial Tracker"
                width={400}
                height={250}
                className="project-image"
              />
            </div>
            <div className="project-icon">
              <Code />
            </div>
            <h3>Financial Tracker</h3>
            <p>
              Created a Python-based finance tracker with Tkinter, OOP, JSON handling, search, sorting, and thorough
              testing. The app helps users manage personal finances with visual reports.
            </p>
            <div className="project-tech">
              <span>Python</span>
              <span>Tkinter</span>
              <span>OOP</span>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/Kirushnabalan/PythonCourseWork.git"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <Github size={16} /> View Code
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image-container">
              <Image 
                src="/portfolio/images/StudentJava.webp"  
                alt="Student Management System"
                width={400}
                height={250}
                className="project-image"
              />
            </div>
            <div className="project-icon">
              <Database />
            </div>
            <h3>Student Management System</h3>
            <p>Built a Java Student Management System with OOP, arrays, sorting, and data handling for efficient student record management.</p>
            <div className="project-tech">
              <span>Java</span>
              <span>OOP</span>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/Kirushnabalan/SD2CW.git"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <Github size={16} /> View Code
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image-container">
              <Image 
                src="/portfolio/images/web.png" 
                alt="Life Below Water Website"
                width={400}
                height={250}
                className="project-image"
              />
            </div>
            <div className="project-icon">
              <Layout />
            </div>
            <h3>Web Development Project</h3>
            <p>
              Developed a responsive "Life Below Water" website with interactive navigation, multimedia, and
              user-friendly features that educate users about ocean conservation.
            </p>
            <div className="project-tech">
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/Kirushnabalan/FullWebCourseWork.git"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <Github size={16} /> View Code
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image-container">
              <Image 
                src="/portfolio/images/booking.webp" 
                alt="Event Booking System"
                width={400}
                height={250}
                className="project-image"
              />
            </div>
            <div className="project-icon">
              <Database />
            </div>
            <h3>Real-Time Event Booking System</h3>
            <p>
              Developed a real-time event ticketing system using Java OOP, multithreading, Spring Boot, PostgreSQL, and
              Angular for seamless booking management.
            </p>
            <div className="project-tech">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>PostgreSQL</span>
              <span>Angular</span>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/Kirushnabalan/JavaOopSpringBoot.git"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <Github size={16} /> View Code
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image-container">
              <Image 
                src="/portfolio/images/eco.png" 
                alt="EcoShift UI/UX Design"
                width={400}
                height={250}
                className="project-image"
              />
            </div>
            <div className="project-icon">
              <Figma />
            </div>
            <h3>UI/UX Design EcoShift</h3>
            <p>Designed and prototyped a futuristic green plant app with an innovative and eco-friendly UI/UX for a design competition.</p>
            <div className="project-tech">
              <span>Figma</span>
            </div>
            <div className="project-links">
              <a
                href="https://www.figma.com/design/33Vw2suKUoLQvhVHi1fiqY/ecoshift?node-id=0-1&p=f&t=qzUxg69WvV5dLq9z-0"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <Figma size={16} /> View Design
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}