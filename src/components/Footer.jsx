import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <img src="/logo.png" alt="Dharukka Realty" />

          <h2>
            Building landmarks.
            <br />
            <span>Creating legacies.</span>
          </h2>

          <div className="footer-socials">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              ◎
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              ▶
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
          <span>✧ Dharukka Reality, Anand, Gujarat</span>
          <span>☎ +91 98765 43210</span>
          <span>✉ info@dharukkareality.com</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Dharukka Reality. All rights reserved.</span>
        <span>RERA Registered · Privacy · Terms</span>
      </div>
    </footer>
  );
}

export default Footer;