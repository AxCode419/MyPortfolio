import React, { useState } from "react";

// Contact Page: interactive form with first name, last name, phone, email, and message
export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  // Handle input change
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Handle form submit
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", form);

    alert("Thank you! Your message has been submitted.");

    // Reset form
    setForm({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    });
  }

  return (
    <section style={{ maxWidth: 600, margin: "0 auto", padding: "24px" }}>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />

        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />

        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Contact Number"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          rows="4"
          required
        />

        <button type="submit" style={{ padding: "10px", background: "#3b5bff", color: "white", border: "none", borderRadius: "6px" }}>
          Send
        </button>
      </form>
    </section>
  );
}
