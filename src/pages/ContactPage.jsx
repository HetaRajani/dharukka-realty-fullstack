import { useState } from "react";
import "./ContactPage.css";

function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const form = e.currentTarget;

    const formData = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      phone: form.phone.value,
      interest: form.interest.value,
      message: form.message.value,
    };

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Inquiry sent successfully!");
        form.reset();
      } else {
        alert(data.message || "Something went wrong.");
      }
    } catch (error) {
      alert("Server error. Please check backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-container">
        <div className="contact-left">
          <p className="contact-label">CONCIERGE</p>

          <h1>
            Let's plan something
            <br />
            <span>extraordinary.</span>
          </h1>

          <p className="contact-desc">
            Whether you're exploring a residence or considering a partnership,
            our team will be in touch within 24 hours.
          </p>

          <div className="contact-info">
            <div>
              <h4>VISIT</h4>
              <p>Dharukka Reality, Anand, Gujarat</p>
            </div>

            <div>
              <h4>CALL</h4>
              <p>+91 98765 43210</p>
            </div>

            <div>
              <h4>EMAIL</h4>
              <p>info@dharukkareality.com</p>
            </div>

            <div>
              <h4>HOURS</h4>
              <p>Mon–Sat · 10:00 to 19:00 IST</p>
            </div>
          </div>

          <div className="contact-map">
            <p>
              Dharukka Reality
              <br />
              Anand, Gujarat
            </p>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                required
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              required
            />

            <select name="interest" defaultValue="" required>
              <option value="" disabled>
                I'm interested in...
              </option>
              <option value="Premium Villas">Premium Villas</option>
              <option value="Twin Residences">Twin Residences</option>
              <option value="Luxury Homes">Luxury Homes</option>
              <option value="Partnership">Partnership</option>
            </select>

            <textarea
              name="message"
              placeholder="Tell us about your requirement"
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "SENDING..." : "SEND INQUIRY"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;