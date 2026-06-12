import "./AboutPage.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AboutPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <main className="about-page">
      <section className="about-top">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <p className="about-label">ABOUT DHARUKKA REALTY</p>
          <h1>We build homes with trust, quality and timeless design.</h1>
          <p>
            Dharukka Realty creates premium residential spaces with practical
            planning, strong construction and a customer-first approach.
          </p>
        </motion.div>

        <div className="about-top-card">
          <span>Since</span>
          <h2>1998</h2>
          <p>Delivering premium real estate excellence across Gujarat.</p>
        </div>
      </section>

      <section className="about-profile">
        <div className="profile-image">
          <img src="/about.jpg" alt="Dharukka Realty" />
        </div>

        <div className="profile-content">
          <p className="about-label">OUR STORY</p>
          <h2>Built for families. Designed for generations.</h2>
          <p>
            We believe a home should feel beautiful, comfortable and secure.
            Every project is planned with attention to space, lifestyle,
            natural light and long-term value.
          </p>

          <div className="profile-points">
            <div>
              <h3>01</h3>
              <p>Premium construction quality</p>
            </div>
            <div>
              <h3>02</h3>
              <p>Transparent customer guidance</p>
            </div>
            <div>
              <h3>03</h3>
              <p>Modern lifestyle planning</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div><h3>26+</h3><p>Years Experience</p></div>
        <div><h3>42+</h3><p>Projects Delivered</p></div>
        <div><h3>12K+</h3><p>Happy Families</p></div>
        <div><h3>18Mn</h3><p>Sq. Ft. Delivered</p></div>
      </section>

      <section className="about-values">
        <p className="about-label">OUR VALUES</p>
        <h2>What defines our work</h2>

        <div className="values-grid">
          <div>
            <span>01</span>
            <h3>Trust</h3>
            <p>Honest communication and clear process from start to finish.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Quality</h3>
            <p>Strong materials, reliable engineering and lasting construction.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Design</h3>
            <p>Elegant spaces planned for comfort, privacy and daily life.</p>
          </div>
        </div>
      </section>

      <section className="about-journey">
        <p className="about-label">OUR JOURNEY</p>
        <h2>A timeline of steady growth</h2>

        <div className="journey-grid">
          <div><span>1998</span><h3>Founded in Gujarat</h3></div>
          <div><span>2006</span><h3>First premium residence</h3></div>
          <div><span>2014</span><h3>Expanded across Gujarat</h3></div>
          <div><span>2024</span><h3>Future-ready communities</h3></div>
        </div>
      </section>

      <section className="about-quote">
        <h2>
          “We do not just build homes. We create spaces where families grow,
          memories are made and value continues for generations.”
        </h2>
        <p>DHARUKKA REALTY / LEADERSHIP</p>
      </section>

      <section className="about-cta">
        <div>
          <p className="about-label">GET STARTED</p>
          <h2>Let’s build your dream home.</h2>
        </div>

        <Link to="/schedule-visit">SCHEDULE A VISIT</Link>
      </section>
    </main>
  );
}

export default AboutPage;