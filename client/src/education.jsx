import React from "react";

// Education Page: lists degrees/programs with institution and details
export default function Education() {
  return (
    <section style={{ maxWidth: 800, margin: "0 auto", padding: "24px" }}>
      <h1>Education</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li
          style={{
            marginBottom: "16px",
            padding: "16px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            background: "#fff",
          }}
        >
          <h3 style={{ margin: "0 0 6px" }}>
            Advanced Diploma in Software Engineering - AI
          </h3>
          <p style={{ margin: "0" }}>
            <strong>Centennial College, Toronto, Canada</strong>
          </p>
          <p style={{ margin: "0", color: "#555" }}>2023 – Present</p>
          <ul style={{ marginTop: "8px", color: "#333" }}>
            <li>Relevant Courses: Web Development, Database Systems, AI Concepts</li>
            <li>Achievement: Strong academic performance</li>
            <li>Extracurricular: Volunteer and project-based learning activities</li>
          </ul>
        </li>

        <li
          style={{
            marginBottom: "16px",
            padding: "16px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            background: "#fff",
          }}
        >
          <h3 style={{ margin: "0 0 6px" }}>High School Diploma</h3>
          <p style={{ margin: "0" }}>
            <strong>Marc Garneau Collegiate Institute</strong>
          </p>
          <p style={{ margin: "0", color: "#555" }}>2019 – 2023</p>
          <ul style={{ marginTop: "8px", color: "#333" }}>
         <li>Completed Ontario Secondary School Diploma (OSSD)</li>
    <li>Graduated with consistent academic performance</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
