import "./Hero.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.65)), url('/project1.jpeg')",
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-small"
        >
          DHARUKKA REALTY
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Premium Living.
          <br />
          <span>Built For Generations.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
          className="hero-desc"
        >
          Creating landmark residences with timeless architecture,
          luxury finishes and exceptional lifestyle experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
          className="hero-buttons"
        >
          <Link to="/projects" className="explore-btn">
            Explore Projects
          </Link>

          <Link to="/schedule-visit" className="consult-btn">
            Schedule Visit
          </Link>
        </motion.div>

      </div>

      <div className="scroll-indicator">
  Scroll
</div>
    </section>
  );
}

export default Hero;