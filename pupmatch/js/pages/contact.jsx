import React from 'react';

function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact & Adoption Info</h2>
      <p>If you are interested in adopting one of our dogs, please get in touch, contact details below:</p>
      <ul>
        <li>Email: adopt@pupmatch.org</li>
        <li>Phone: +48 123 456 789</li>
        <li>Adoption office: Mon–Fri, 10:00–18:00</li>
        <li>Location: 123 Woof Street, Dogtown, Poland</li>
      </ul>
      <p>Or fill in the below form....</p>
      <form>
        <label>Name:</label>
        <input type="text" id="name" placeholder="Enter your name" />
        <label>Email:</label>
        <input type="email" id="email" placeholder="Enter your email"/>
        <label>Message:</label>
        <textarea id="message" placeholder="Enter your message" rows="4" />
        <button type="submit">Send</button>
      </form>
      <p>We're happy to answer any questions regarding the adoption process, dog compatibility, or upcoming events.</p>
    </div>
  );
}

export default Contact;
