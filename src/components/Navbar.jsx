// src/components/Navbar.js
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link> | <Link to="/MPReading">First reading</Link> |{" "}
      <Link to="/GWReading">Second reading</Link> |{" "}
      <Link to="/PetraReading">Third reading</Link> |{" "}
      <Link to="/Compare1">Compare and contrast</Link> |{" "}
      <Link to="/Story01">Story</Link>| <Link to="/Project01">Project</Link>|{" "}
      <Link to="/Segue">Summary</Link> |
    </nav>
  );
}

export default Navbar;
