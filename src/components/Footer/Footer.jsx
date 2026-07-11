import "./Footer.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Gaurav Kaushik</h2>

          <p>
          Full Stack Developer | React Developer | Passionate Learner
          </p>

          <div className="footer-social">

            <a
              href="https://github.com/gaurav908408"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="YOUR_LINKEDIN_URL"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

          <button
            className="top-btn"
            onClick={scrollTop}
          >
            <FaArrowUp />
          </button>

          <hr />

          <p className="copyright">
            © {new Date().getFullYear()} Gaurav Kaushik. All Rights Reserved.
          </p>

        </motion.div>

      </div>
    </footer>
  );
}