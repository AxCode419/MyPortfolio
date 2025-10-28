import React from "react";

// Services Page: list of services/skills offered
export default function Services() {
  const services = [
    {
      id: 1,
      name: "Frontend Development",
      description:
        "Building responsive websites, interactive games, and applications using React, HTML, CSS, and JavaScript.",
    },
    {
      id: 2,
      name: "Game Interface Development",
      description:
        "Creating fun, browser-based games such as word guessing, Pokémon cards, and traffic light controllers with smooth UI and event handling.",
    },
    {
      id: 3,
      name: "UI/UX Prototyping",
      description:
        "Designing and prototyping clean, user-friendly interfaces to improve user experience.",
    },
    {
      id: 4,
      name: "API Integration",
      description:
        "Connecting applications with REST APIs to fetch and display real-time data efficiently.",
    },
    {
      id: 5,
      name: "Version Control & Collaboration",
      description:
        "Managing code and collaborating on projects using Git, GitHub, and modern development workflows.",
    },
  ];

  return (
    <section style={{ maxWidth: 900, margin: "0 auto", padding: "24px" }}>
      <h1>Services</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {services.map((s) => (
          <li
            key={s.id}
            style={{
              marginBottom: "16px",
              padding: "16px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              background: "#f9f9f9",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#eef3ff")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#f9f9f9")}
          >
            <h3 style={{ color: "#3b5bff" }}>{s.name}</h3>
            <p>{s.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
