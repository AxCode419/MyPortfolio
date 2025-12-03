import React from "react";

export default function Home() {
  return (
    <section style={{ textAlign: "center", padding: "60px 20px" }}>
      <h1>Welcome to My Portfolio</h1>

      <p style={{ fontSize: "18px", maxWidth: "700px", margin: "20px auto" }}>
        Hi, I’m <strong>Ahmad Moaz</strong>, a Software Engineering - AI student at Centennial College. 
        I enjoy building modern, responsive web applications with React and exploring innovative AI solutions.
      </p>

      <p style={{ fontSize: "18px", maxWidth: "700px", margin: "20px auto" }}>
        My mission is to keep learning, create projects that solve real problems, 
        and grow as a developer with every challenge.
      </p>

      {/* 🔄 CI/CD update message */}
      <p style={{ fontSize: "18px", maxWidth: "700px", margin: "20px auto", color: "#3b5bff" }}>
        🔄 This is a CI/CD update — deployed automatically after merging my new branch!
      </p>

      <div style={{ marginTop: "30px" }}>
        <a 
          href="/project" 
          style={{
            padding: "12px 24px",
            background: "#3b5bff",
            color: "white",
            borderRadius: "6px",
            textDecoration: "none",
            marginRight: "15px"
          }}
        >
          View My Projects
        </a>

        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener"
          style={{
            padding: "12px 24px",
            background: "#444",
            color: "white",
            borderRadius: "6px",
            textDecoration: "none"
          }}
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
