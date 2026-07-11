import "./Contact.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">

        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <div className="contact-wrapper">

          {/* Left Side */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Let's Work Together 🚀</h3>

            <p>
              I'm always open to internships, freelance work and full-time
              opportunities. Feel free to contact me.
            </p>

            <div className="info-box">
              <FaEnvelope />
              <span>YOUR_EMAIL@gmail.com</span>
            </div>

            <div className="info-box">
              <FaPhoneAlt />
              <span>+91 XXXXXXXXXX</span>
            </div>

            <div className="info-box">
              <FaMapMarkerAlt />
              <span>Meerut, Uttar Pradesh, India</span>
            </div>

            <div className="social-links">

              <a
                href="https://github.com/gaurav908408"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={24} />
              </a>

            </div>
          </motion.div>

          {/* Right Side */}

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              <IoSend size={18} />
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}