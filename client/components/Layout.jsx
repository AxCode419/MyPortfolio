import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div>
      {/* Navbar */}
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
        {/* Left side: Logo/Title */}
        <h1 style={{ margin: 0, fontSize: "28px" }}>My Portfolio</h1>

        {/* Right side: Navigation */}
        <nav style={{ display: "flex", gap: "12px" }}>
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/education", label: "Education" },
            { path: "/project", label: "Projects" },
            { path: "/services", label: "Services" },
            { path: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                padding: "8px 16px",
                background: "white",
                color: "#3b5bff",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "0.3s",
              }}
              onMouseOver={(e) => {
                e.target.style.background = "#2a46d8";
                e.target.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "white";
                e.target.style.color = "#3b5bff";
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Main content */}
      <main style={{ padding: "24px" }}>{children}</main>
    </div>
  );
}
