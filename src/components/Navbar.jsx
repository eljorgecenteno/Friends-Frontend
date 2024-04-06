import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Photos/Friends_logo.svg.png";
import { useState } from "react";

function Navbar() {
  const [currentPage, setCurrentPage] = useState('home')
  return (
    <header>
      
        <nav id="nav-links-wrapper">
          <Link
            to="/"
            style={{ color: "mediumspringgreen", textDecoration: "none" }}
            onClick={() => setCurrentPage('/')}
          >
            <img
            id="logo"
              src={Logo}
              alt="What the fridge logo"
              className="nav-element"
            />
          </Link>

          <Link
            to="/discover"
            style={{ color: "black", textDecoration: "none" }}
            onClick={() => setCurrentPage('discover')}
          >
            <h4  className={currentPage === "discover" ? "selected-element" : 'nav-element' }>Discover</h4>
          </Link>

          <Link
            to="/FAQs"
            style={{ color: "black", textDecoration: "none" }}
            onClick={() => setCurrentPage('FAQs')}
          >
            <h4  className={currentPage === "FAQs" ? "selected-element" : 'nav-element' }>FAQ</h4>
          </Link>
        </nav>
    </header>
  );
}

export default Navbar;
