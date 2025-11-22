import React, { useState } from "react";
import { isAuthenticated } from "./auth";


const AddQualification = () => {
  const auth = isAuthenticated();
  const token = auth ? auth.token : null;

  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    year: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // 🟦 Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🟩 Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:3000/api/qualifications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Error adding qualification");
        return;
      }

      setSuccess("Qualification added successfully!");
      setFormData({ school: "", degree: "", year: "" });

      // Redirect back
      setTimeout(() => {
        window.location.href = "/admin";
      }, 1500);

    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Add Qualification</h2>

      {success && <p style={styles.success}>{success}</p>}
      {error && <p style={styles.error}>{error}</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="school"
          placeholder="School Name"
          value={formData.school}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={formData.degree}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          type="text"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>
          Add Qualification
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
  button: {
    padding: "10px",
    background: "#3b5bff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "10px",
  },
  success: {
    background: "#ddffdd",
    padding: "10px",
    borderRadius: "6px",
    color: "#2d7a2d",
  },
  error: {
    background: "#ffdddd",
    padding: "10px",
    borderRadius: "6px",
    color: "#b30000",
  },
};

export default AddQualification;
