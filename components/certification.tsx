import { Award } from "lucide-react"

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <h2 className="section-title">Courses & Certifications</h2>
      <div className="section-content">
        <div className="certifications-list">
          <div className="certification-item">
            <Award className="certification-icon" />
            <div>
              <h3>Programming with JavaScript</h3>
              <p>Meta (Coursera)</p>
            </div>
          </div>

          <div className="certification-item">
            <Award className="certification-icon" />
            <div>
              <h3>Version Control</h3>
              <p>Meta (Coursera)</p>
            </div>
          </div>

          <div className="certification-item">
            <Award className="certification-icon" />
            <div>
              <h3>HTML and CSS in depth</h3>
              <p>Meta (Coursera)</p>
            </div>
          </div>

          <div className="certification-item">
            <Award className="certification-icon" />
            <div>
              <h3>Problem Solving (Basic)</h3>
              <p>HackerRank</p>
            </div>
          </div>

          <div className="certification-item">
            <Award className="certification-icon" />
            <div>
              <h3>Java Object-Oriented Programming</h3>
              <p>LinkedIn</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

