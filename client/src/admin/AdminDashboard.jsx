import React from "react";
import { isAuthenticated } from "../auth";

const AdminDashboard = () => {
  const auth = isAuthenticated();

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Admin Dashboard</h2>

      {!auth || auth.user.role !== "admin" ? (
        <p style={styles.error}>❌ Access Denied – Admins Only</p>
      ) : (
        <div style={styles.card}>
          <h3>Welcome, {auth.user.name} 👋</h3>
          <p>Email: {auth.user.email}</p>
          <p>Role: {auth.user.role}</p>

          <h3 style={{ marginTop: "20px" }}>Admin Controls</h3>

          {/* ⭐ ADD PROJECT BUTTON HERE */}
          <button
            onClick={() => (window.location.href = "/admin/add-project")}
            style={styles.button}
          >
            ➕ Add Project
          </button>

          <button
  onClick={() => (window.location.href = "/admin/add-qualification")}
  style={styles.button}
>
  ➕ Add Qualification
</button>


          {/* You can add more buttons later */}
          <ul style={{ marginTop: "20px" }}>
            <li>Manage Contacts</li>
            <li>Manage Projects</li>
            <li>Manage Qualifications</li>
            <li>View All Users</li>
          </ul>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "20px",
  },
  card: {
    padding: "20px",
    borderRadius: "10px",
    background: "#f5f5f5",
    textAlign: "left",
  },
  error: {
    padding: "15px",
    background: "#ffdddd",
    color: "#d8000c",
    fontWeight: "bold",
    borderRadius: "6px",
  },

  // ⭐ STYLE FOR BUTTON
  button: {
    display: "block",
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    background: "#3b5bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default AdminDashboard;
