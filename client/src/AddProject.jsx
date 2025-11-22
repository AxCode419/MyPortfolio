import React, { useState } from "react";
import { isAuthenticated } from "./auth";


const AddProject = () => {
  const auth = isAuthenticated();
  const token = auth ? auth.token : null;

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    githubLink: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Handle change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
      const res = await fetch("http://localhost:3000/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Error adding project");
        return;
      }

      setSuccess("Project added successfully!");
      setFormData({ title: "", description: "", githubLink: "" });

      // Redirect back to Admin
      setTimeout(() => {
        window.location.href = "/admin";
      }, 1500);

    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Add New Project</h2>

      {success && <p style={styles.success}>{success}</p>}
      {error && <p style={styles.error}>{error}</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <textarea
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          style={styles.textarea}
          required
        />

        <input
          type="text"
          name="githubLink"
          placeholder="GitHub Link"
          value={formData.githubLink}
          onChange={handleChange}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Add Project
        </button>
      </form>
    </div>
  );
};

// Styles
const styles = {
  container: {
    width: "450px",
    margin: "40px auto",
    padding: "25px",
    background: "white",
    border: "1px solid #ddd",
    borderRadius: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    height: "90px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    background: "#3b5bff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  success: {
    background: "#ddffdd",
    padding: "10px",
    borderRadius: "5px",
    color: "#2d7a2d",
  },
  error: {
    background: "#ffdddd",
    padding: "10px",
    borderRadius: "5px",
    color: "#b30000",
  },
};

export default AddProject;
