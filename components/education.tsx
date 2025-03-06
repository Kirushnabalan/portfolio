"use client";
import { useEffect } from "react";
export default function Education() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in-right");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".slide-in-right-element");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

    return (
      <section id="education" className="section">
        <h2 className="section-title">Education</h2>
        <div className="section-content">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>BSc (Hons) Software Engineering</h3>
                <p className="timeline-date">2024 - 2027 (ongoing)</p>
                <p>Informatics Institute of Technology, collaborate with University of Westminster</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Secondary Education</h3>
                <p className="timeline-date">2014 - 2022</p>
                <p>Jaffna Hindu College</p>
                <ul>
                  <li>Grade: 3C in GCE Advanced Level (Physical Science Stream) 2022(2023)</li>
                  <li>7A,B,C in GCE Ordinary Level (2019)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  