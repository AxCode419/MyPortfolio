import { Link } from "react-router-dom";
import { isAuthenticated, signout } from "../auth";

const navStyle = {
  padding: "8px 16px",
  background: "white",
  color: "#3b5bff",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: "bold",
  transition: "0.3s",
};

export default function Layout({ children }) {
  const auth = isAuthenticated(); // check login state

  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 40px",
          background: "#3b5bff",
          color: "white",
        }}
      >
        {/* Logo */}
        <h1 style={{ margin: 0, fontSize: "28px" }}>My Portfolio</h1>

        {/* Navbar */}
        <nav
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Always visible */}
          <Link to="/" style={navStyle}>Home</Link>
          <Link to="/about" style={navStyle}>About</Link>
          <Link to="/education" style={navStyle}>Education</Link>
          <Link to="/project" style={navStyle}>Projects</Link>
          <Link to="/services" style={navStyle}>Services</Link>
          <Link to="/contact" style={navStyle}>Contact</Link>

          {/* If NOT logged in */}
          {!auth && (
            <>
              <Link to="/signin" style={navStyle}>Login</Link>
              <Link to="/signup" style={navStyle}>Signup</Link>
            </>
          )}

          {/* If logged in */}
          {auth && (
            <>
              {/* ⭐ ADMIN LINK — Only for admin */}
              {auth.user.role === "admin" && (
                <Link
                  to="/admin/dashboard"
                  style={{
                    padding: "8px 16px",
                    background: "yellow",
                    color: "black",
                    borderRadius: "6px",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  Admin Panel
                </Link>
              )}

              {/* Logged-in user info */}
              <span
                style={{
                  color: "white",
                  fontWeight: "bold",
                  marginLeft: "10px",
                }}
              >
                Logged in as: {auth.user.role}
              </span>

              {/* Logout button */}
              <button
                onClick={() => {
                  signout(() => (window.location.href = "/"));
                }}
                style={{
                  padding: "8px 16px",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  marginLeft: "10px",
                }}
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </header>

      {/* Main page content */}
      <main style={{ padding: "24px" }}>{children}</main>
    </div>
  );
}
