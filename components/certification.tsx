// components/certification.tsx
import { Award, Calendar } from "lucide-react";
import AnimatedSection from "./animated-section";

export default function Certifications() {
  return (
    <AnimatedSection id="certifications" animation="fade-up">
      <h2 className="section-title">Courses & Certifications</h2>
      <div className="section-content">
        <div className="certifications-list">
          <div className="certification-item">
            <div className="certification-header">
              <Award className="certification-icon" size={24} />
              <div className="certification-content">
                <h3>Programming with JavaScript</h3>
                <p className="certification-issuer">Meta (Coursera)</p>
                <p className="certification-date">
                  <Calendar size={14} className="inline mr-1" />
                  2024
                </p>
              </div>
            </div>
          </div>

          <div className="certification-item">
            <div className="certification-header">
              <Award className="certification-icon" size={24} />
              <div className="certification-content">
                <h3>Version Control</h3>
                <p className="certification-issuer">Meta (Coursera)</p>
                <p className="certification-date">
                  <Calendar size={14} className="inline mr-1" />
                  2024
                </p>
              </div>
            </div>
          </div>

          <div className="certification-item">
            <div className="certification-header">
              <Award className="certification-icon" size={24} />
              <div className="certification-content">
                <h3>HTML and CSS in depth</h3>
                <p className="certification-issuer">Meta (Coursera)</p>
                <p className="certification-date">
                  <Calendar size={14} className="inline mr-1" />
                  2024
                </p>
              </div>
            </div>
          </div>

          <div className="certification-item">
            <div className="certification-header">
              <Award className="certification-icon" size={24} />
              <div className="certification-content">
                <h3>Problem Solving (Basic)</h3>
                <p className="certification-issuer">HackerRank</p>
                <p className="certification-date">
                  <Calendar size={14} className="inline mr-1" />
                  2023
                </p>
              </div>
            </div>
          </div>

          <div className="certification-item">
            <div className="certification-header">
              <Award className="certification-icon" size={24} />
              <div className="certification-content">
                <h3>Java Object-Oriented Programming</h3>
                <p className="certification-issuer">LinkedIn</p>
                <p className="certification-date">
                  <Calendar size={14} className="inline mr-1" />
                  2023
                </p>
              </div>
            </div>
          </div>

          <div className="certification-item">
            <div className="certification-header">
              <Award className="certification-icon" size={24} />
              <div className="certification-content">
                <h3>Python for beginners</h3>
                <p className="certification-issuer">University of Moratuwa</p>
                <p className="certification-date">
                  <Calendar size={14} className="inline mr-1" />
                  2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}