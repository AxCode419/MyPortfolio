import React from "react";

// Projects Page: shows 3 projects with image, title, role, and outcome
export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Word Guessing Game",
      role: "Frontend Developer",
      outcome:
        "Built an interactive word guessing game using HTML, CSS, and JavaScript. Implemented features like reduced lives, win/loss conditions, and a timer mode.",
      image: "/images/project1.png",
    },
    {
      id: 2,
      title: "Pokémon Cards Game",
      role: "Frontend Developer",
      outcome:
        "Created a fun Pokémon cards game where users can flip cards, match Pokémon, and keep score. Learned DOM manipulation and event handling in JavaScript.",
      image: "/images/project2.jpeg",
    },
    {
      id: 3,
      title: "Traffic Light Controller",
      role: "Frontend Developer",
      outcome:
        "Developed a traffic light simulation using HTML, CSS, and JavaScript with manual and auto modes. Implemented interactive controls for red, yellow, and green lights.",
      image: "/images/project03.jpg",
    },
  ];

  return (
    <section style={{ maxWidth: 1000, margin: "0 auto", padding: "24px" }}>
      <h1>My Projects</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "16px",
        }}
      >
        {projects.map((p) => (
          <article
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "16px",
              background: "#fff",
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{
                width: "100%",
                height: "160px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
            <h3>{p.title}</h3>
            <p>
              <strong>Role:</strong> {p.role}
            </p>
            <p>
              <strong>Outcome:</strong> {p.outcome}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
