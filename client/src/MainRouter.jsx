import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./components/Home.jsx";
import Layout from "./components/Layout.jsx";

import AdminDashboard from "./admin/AdminDashboard.jsx";
import AddProject from "./AddProject.jsx";
import AddQualification from "./AddQualification.jsx";

import About from "./about.jsx";
import Contact from "./contact.jsx";
import Education from "./education.jsx";
import Project from "./project.jsx";
import Counter from "./counter.jsx";
import Services from "./services.jsx";

// Authentication
import Signup from "./signup.jsx";
import Signin from "./signin.jsx";

const MainRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/services" element={<Services />} />

        {/* Admin Pages */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-project" element={<AddProject />} />
        <Route path="/admin/add-qualification" element={<AddQualification />} />

        {/* Auth */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Layout>
  );
};

export default MainRouter;
