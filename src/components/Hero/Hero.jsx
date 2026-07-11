import "./Hero.css";
import profile from "../../assets/images/profile.png";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
  FaReact,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        {/* =========================
            LEFT SIDE
        ========================== */}

        <motion.div
          className="hero-text"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >

          <span className="hero-tag">
            👋 Hello, I'm
          </span>

          <h1>
            Gaurav <span>Kaushik</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Java Developer",
              2000,
              "React & Next.js Developer",
              2000,
              "Spring Boot Developer",
              2000,
            ]}
            wrapper="h2"
            repeat={Infinity}
            className="typing"
          />

          <p className="description">
            I build modern, fast, and scalable full-stack web
            applications using Java, Spring Boot, React.js,
            Next.js, Node.js, Express.js, MongoDB,
            and PostgreSQL.
          </p>

          <div className="hero-buttons">

            <a
              href="#contact"
              className="btn primary"
            >
              <FaArrowRight />
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              download
              className="btn secondary"
            >
              <FaDownload />
              Resume
            </a>

          </div>

          <div className="hero-social">

            <a
              href="https://github.com/gaurav908408"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="YOUR_LINKEDIN_LINK"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:YOUR_EMAIL@gmail.com">
              <FaEnvelope />
            </a>

          </div>

          <div className="hero-stats">

            <div className="stat-card">
              <h3>8+</h3>
              <p>Projects</p>
            </div>

            <div className="stat-card">
              <h3>30+</h3>
              <p>Technologies</p>
            </div>

            <div className="stat-card">
              <h3>6 Months</h3>
              <p>Internship</p>
            </div>

          </div>

        </motion.div>
                {/* =========================
            RIGHT SIDE
        ========================== */}

        <motion.div
          className="hero-image"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-card">

            <img
              src={profile}
              alt="Gaurav Kaushik"
            />

            {/* Floating Tech Icons */}

            <div className="floating-icons">

              <div className="icon react">
                <FaReact />
              </div>

              <div className="icon java">
                <FaJava />
              </div>

              <div className="icon next">
                <SiNextdotjs />
              </div>

              <div className="icon node">
                <FaNodeJs />
              </div>

              <div className="icon spring">
                <SiSpringboot />
              </div>

              <div className="icon mongo">
                <SiMongodb />
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;