import { MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <div className="section-content">
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <p>Dehiwala, Sri Lanka</p>
            </div>

            <div className="contact-item">
              <Phone className="contact-icon" />
              <p>+94 77 664 13316</p>
            </div>

            <div className="contact-item">
              <Mail className="contact-icon" />
              <p>kirushnabalan1803@gmail.com</p>
            </div>
          </div>

          <div className="references">
            <h3>References</h3>
            <div className="reference-item">
              <h4>Guhanathan Poravi</h4>
              <p>Senior Lecturer Grade I</p>
              <p>Informatics Institute of Technology</p>
              <p>guhanathan.p@iit.ac.lk</p>
              <p>+94 77 591 3330</p>
            </div>

            <div className="reference-item">
              <h4>Damien Nadarajah</h4>
              <p>Senior Technical Support Engineer</p>
              <p>Sysco Labs Sri Lanka</p>
              <p>+94 77 005 5865</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

