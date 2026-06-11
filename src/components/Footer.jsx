import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <p className="footer-logo-text">Dharukka.</p>

          <h2>
            Building landmarks. <span>Creating</span>
            <br />
            <span>legacies.</span>
          </h2>

          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              ◎
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              in
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              ▻
            </a>
          </div>
        </div>

        <div className="footer-links">
          <p>EXPLORE</p>
          <Link to="/projects">All Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/contact">Careers</Link>
          <Link to="/contact">Press</Link>
        </div>

        <div className="footer-contact">
          <p>GET IN TOUCH</p>
          <span>⌖ Dharukka House, Anand, Gujarat</span>
          <span>☎ +91 98765 43210</span>
          <span>✉ info@dharukkareality.com</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Dharukka Realty. All rights reserved.</span>
        <span>RERA Registered · Privacy · Terms</span>
      </div>
    </footer>
  );
}

export default Footer;