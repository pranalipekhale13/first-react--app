import React, { useState } from "react";
import "./contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted!");
  };

  return (
    <div className="contact">
      <h1>Contact Page</h1>

      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} />
        <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>

        <button type="submit">Submit</button>
      </form>

      <a href="#home" className="back"> ← Back to Home</a>
    </div>
  );
}

export default Contact;