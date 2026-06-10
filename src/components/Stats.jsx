import "./Stats.css";
import CountUp from "react-countup";

function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-inner">
        <div className="stats-heading">
          <p>BY THE NUMBERS</p>

          <h2>
            Twenty-six years. One <br />
            uncompromising standard.
          </h2>
        </div>

        <div className="stats-grid">
          <div className="stat">
            <h3><CountUp end={42} duration={2.5} />+</h3>
            <span>PROJECTS COMPLETED</span>
          </div>

          <div className="stat">
            <h3><CountUp end={9} duration={2.5} /></h3>
            <span>PROJECTS ONGOING</span>
          </div>

          <div className="stat">
            <h3><CountUp end={26} duration={2.5} /></h3>
            <span>YEARS OF EXPERIENCE</span>
          </div>

          <div className="stat">
            <h3><CountUp end={12000} duration={2.5} separator="," />+</h3>
            <span>HAPPY FAMILIES</span>
          </div>

          <div className="stat">
            <h3><CountUp end={18} duration={2.5} />Mn</h3>
            <span>SQ FT DELIVERED</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;