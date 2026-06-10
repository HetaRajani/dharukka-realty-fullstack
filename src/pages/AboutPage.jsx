import "./AboutPage.css";
import { motion } from "framer-motion";

function AboutPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 70 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <main className="about-page">
      <motion.section
        className="about-story-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <p className="about-label">OUR STORY</p>

        <h1>
          Twenty-six years of <br />
          shaping the way Gujarat lives.
        </h1>

        <div className="about-story-grid">
          <motion.img
            src="/about.jpg"
            alt="Dharukka Interior"
            initial={{ opacity: 0, scale: 1.08 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />

          <motion.div
            className="founder-note"
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="about-label">FOUNDER'S NOTE</p>

            <h3>
              "We never set out to build the largest portfolio. We set out to
              build homes that families would be proud to pass on — residences
              built on trust, quality and timeless value."
            </h3>

            <span>DHARUKKA REALITY · FOUNDER & CHAIRMAN</span>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="about-numbers"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <p className="about-label">BY THE NUMBERS</p>

        <h2>
          Twenty-six years. One <br />
          uncompromising standard.
        </h2>

        <div className="numbers-grid">
          {[
            ["42+", "PROJECTS COMPLETED"],
            ["9", "PROJECTS ONGOING"],
            ["26", "YEARS OF EXPERIENCE"],
            ["12,000+", "HAPPY FAMILIES"],
            ["18Mn", "SQ FT DELIVERED"],
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <h3>{item[0]}</h3>
              <p>{item[1]}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="about-journey"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <p className="about-label">OUR JOURNEY</p>
        <h2>A timeline of landmarks.</h2>

        <div className="timeline">
          {[
            ["left", "1998", "Founded in Gujarat", "Dharukka Reality began with a promise of trusted quality."],
            ["right", "2006", "First premium residence", "Delivered homes built with design, comfort and durability."],
            ["left", "2014", "Across Gujarat", "Expanded into premium villas and residential communities."],
            ["right", "2024", "The next chapter", "Creating future-ready landmarks for modern families."],
          ].map((item, index) => (
            <motion.div
              className={`timeline-item ${item[0]}`}
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
            >
              <h3>{item[1]}</h3>
              <h4>{item[2]}</h4>
              <p>{item[3]}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="about-cta"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="about-cta-overlay"></div>

        <motion.div
          className="about-cta-content"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <p>PRIVATE PREVIEW</p>

          <h2>
            Discover the Dharukka
            <br />
            lifestyle.
          </h2>

          <span>
            Experience thoughtfully designed homes crafted for modern families.
          </span>

          <a href="/contact">SCHEDULE A VISIT →</a>
        </motion.div>
      </motion.section>
    </main>
  );
}

export default AboutPage;