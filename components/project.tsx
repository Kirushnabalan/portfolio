import { Code, Database, Layout, Figma, FileText } from "lucide-react"

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="section-content">
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-icon">
              <Code />
            </div>
            <h3>Financial Tracker</h3>
            <p>
              Created a Python-based finance tracker with Tkinter, OOP, JSON handling, search, sorting, and thorough
              testing.
            </p>
            <div className="project-tech">
              <span>Python</span>
              <span>Tkinter</span>
              <span>OOP</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-icon">
              <Database />
            </div>
            <h3>Student Management System</h3>
            <p>Built a Java Student Management System with OOP, arrays, sorting, and data handling.</p>
            <div className="project-tech">
              <span>Java</span>
              <span>OOP</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-icon">
              <Layout />
            </div>
            <h3>Web Development Project</h3>
            <p>
              Developed a responsive "Life Below Water" website with interactive navigation, multimedia, and
              user-friendly features.
            </p>
            <div className="project-tech">
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </div>

          <div className="project-card">
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
          </div>

          <div className="project-card">
            <div className="project-icon">
              <Figma />
            </div>
            <h3>UI/UX Design EcoShift</h3>
            <p>Designed and prototyped a futuristic green plant app with an innovative and eco-friendly UI/UX.</p>
            <div className="project-tech">
              <span>Figma</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-icon">
              <FileText />
            </div>
            <h3>TrueLens</h3>
            <p>
              TrueLens is a university software development group project focused on analyzing aggregated news articles
              to detect media biases and misinformation. I contribute to the backend.
            </p>
            <div className="project-tech">
              <span>MongoDB</span>
              <span>Node.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

