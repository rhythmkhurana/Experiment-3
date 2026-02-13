import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ProductCard from "./ProductCard";
import LibraryManagement from "./LibraryManagement";
import PersonHierarchy from "./PersonHierarchy";

function App() {
  const navStyle = {
    padding: "15px",
    background: "#1f2937",
    display: "flex",
    gap: "20px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
  };

  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav style={navStyle}>
          <Link style={linkStyle} to="/">
            Products
          </Link>
          <Link style={linkStyle} to="/library">
            Library
          </Link>
          <Link style={linkStyle} to="/person">
            Person Hierarchy
          </Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<ProductCard />} />
          <Route path="/library" element={<LibraryManagement />} />
          <Route path="/person" element={<PersonHierarchy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
