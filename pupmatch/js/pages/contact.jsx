import React, { useState } from 'react';

function Contact() {
  // Stan formularza - React będzie teraz kontrolował wartości pól
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Stan dla błędów walidacji
  const [errors, setErrors] = useState({});

  // Handler do aktualizacji stanu gdy użytkownik pisze
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Walidacja wiadomości - minimalnie 8 znaków
    if (name === 'message' && value.length > 0 && value.length < 8) {
      setErrors({ message: 'Minimalnie 8 znaków' });
    } else {
      setErrors({});
    }
  };

  // Handler wysyłania formularza
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dane formularza:', formData);
  };

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
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name" 
        />
        <label>Email:</label>
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <label>Message:</label>
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message" 
          rows="4" 
        />
        {errors.message && <p style={{color: 'red', fontSize: '14px', margin: '5px 0'}}>{errors.message}</p>}
        <button type="submit">Send</button>
      </form>
      <p>We're happy to answer any questions regarding the adoption process, dog compatibility, or upcoming events.</p>
    </div>
  );
}

export default Contact;
