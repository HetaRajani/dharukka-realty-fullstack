import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-left">
          <img src="/logo.png" alt="Dharukka Realty" className="footer-logo" />
<h2>
  Building landmarks.
  <br />
  <span>Creating legacies.</span>
</h2>
          <div className="social-icons">
           <a href="https://instagram.com" target="_blank" rel="noreferrer">◎</a>
<a href="https://linkedin.com" target="_blank" rel="noreferrer">in</a>
<a href="https://youtube.com" target="_blank" rel="noreferrer">▶</a>
          </div>
        </div>

        <div className="footer-links">
          <h4>EXPLORE</h4>
          <Link to="/projects">All Projects</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
<Link to="/contact">Careers</Link>
          <a href="#">Press</a>
        </div>

        <div className="footer-contact">
          <h4>GET IN TOUCH</h4>
          <p>⌖ Dharukka Reality, Anand, Gujarat</p>
          <p>☎ +91 98765 43210</p>
          <p>✉ info@dharukkareality.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Dharukka Reality. All rights reserved.</p>
        <p>RERA Registered · Privacy · Terms</p>
      </div>
    </footer>
  );
}

export default Footer;