import React from "react";

// About Page: shows legal name, headshot, bio, skills, and resume link
export default function About() {
  return (
    <section style={{ maxWidth: 900, margin: "0 auto", padding: "24px" }}>
      <h1>About Me</h1>

      {/* Headshot Image */}
      <img
        src="/images/headshot.jpg"
        alt="My Headshot"
        style={{
          width: 200,
          height: 200,
          objectFit: "contain",   // ✅ shows the full image
          borderRadius: "50%",
          border: "3px solid #3b5bff",
          display: "block",
          margin: "20px auto",
          boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
        }}
      />

      {/* Name & Title */}
      <h2 style={{ textAlign: "center", margin: "10px 0" }}>Ahmad Moaz</h2>
      <h3 style={{ textAlign: "center", color: "#555" }}>
        Software Engineering - AI Student at Centennial College
      </h3>

      {/* Short Bio */}
      <p style={{ fontSize: "18px", marginTop: "20px" }}>
        I’m a student developer passionate about React, JavaScript, and modern
        web development. I enjoy creating responsive, user-friendly interfaces
        and writing clean, documented code. My long-term goal is to combine
        software engineering skills with AI to solve real-world challenges.
      </p>

      {/* Skills Section */}
      <h3>Skills</h3>
      <ul style={{ lineHeight: "1.8" }}>
        <li>Frontend: React, HTML5, CSS3, JavaScript (ES6+)</li>
        <li>Backend Basics: Node.js, REST APIs</li>
        <li>Tools: Git, GitHub, VS Code</li>
        <li>Other: Problem Solving, Team Collaboration</li>
      </ul>

      {/* Resume PDF link */}
      <p style={{ marginTop: "20px" }}>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener"
          style={{
            padding: "10px 20px",
            background: "#3b5bff",
            color: "white",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          Download Resume (PDF)
        </a>
      </p>
    </section>
  );
}
