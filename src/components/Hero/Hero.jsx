import "./Hero.css";
import profile from "../../assets/images/profile.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <motion.div
          className="hero-text"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="hello">👋 Hello, I'm</p>

          <h1>
            Gaurav <span>Kaushik</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Java Full Stack Developer",
              2000,
              "React Developer",
              2000,
              "Spring Boot Developer",
              2000,
            ]}
            wrapper="h2"
            repeat={Infinity}
            className="typing"
          />

          <p className="description">
            Passionate Java Full Stack Developer skilled in React, Spring Boot,
            MySQL and modern web technologies. I love building responsive and
            user-friendly web applications.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn primary">
              Hire Me
            </a>

            <a href="/resume.pdf" className="btn secondary" download>
              Download Resume
            </a>
          </div>

          <div className="social-icons">
            <a href="https://github.com/gaurav908408" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="mailto:your@email.com">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={profile} alt="Gaurav Kaushik" />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;