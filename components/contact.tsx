"use client"; // This line marks the file as a client component

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => { // Explicitly typed event
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target as HTMLFormElement); // Cast event.target to HTMLFormElement

    formData.append("access_key", "82565c8d-edb8-49e5-832c-7049d6d7ed62");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        (event.target as HTMLFormElement).reset();
        // Show a SweetAlert2 popup
        Swal.fire({
          title: "Thank You!",
          text: "Your message has been sent successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Request failed", error);
      setResult("Something went wrong. Please try again.");
    }
  };

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

          <div className="contact-form">
            <form onSubmit={onSubmit}>
              <div className="inputbox">
                <label>Full Name</label>
                <input type="text" name="name" className="field" placeholder="Enter your Name" required />
              </div>

              <div className="inputbox">
                <label>Email Address</label>
                <input type="email" name="email" className="field" placeholder="Enter your email" required />
              </div>

              <div className="inputbox">
                <label>Your Message</label>
                <textarea name="message" className="field" placeholder="Enter your message" required></textarea>
              </div>

              <button type="submit">Send Message</button>
              <p>{result}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
