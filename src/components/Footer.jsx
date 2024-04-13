import whiteLogo from "../Photos/Friends-logo-white.png";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div id="footer-general-container">
      <ul>
        <h3 className="footer-lists">More</h3>
        <li>About us</li>
        <li>Legal</li>
        <Link to="/FAQs" className="footer-links">
          <li>Frequent asked questions</li>
        </Link>
      </ul>

      <ul>
        <h3 className="footer-lists">Contact</h3>
        <li>Email</li>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>Facebook</li>
        <li></li>
      </ul>
      <img src={whiteLogo} id="footer-img" alt="White logo friends" />
    </div>
  );
}

export default Footer;
