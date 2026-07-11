import "./About.css";
import { motion } from "framer-motion";

import {
  FaJava,
  FaReact,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaNpm,
  FaDownload,
  FaArrowRight,
  FaLaptopCode,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiVercel,
  SiNetlify,
  SiPostgresql,
  SiNeon,
  SiPostman,
  SiVite,
} from "react-icons/si";

function About() {
  return (
    <section className="about section" id="about">

      {/* Background Blur */}
      <div className="about-blur blur-one"></div>
      <div className="about-blur blur-two"></div>

      <div className="container">

        {/* ================= HERO ================= */}

        <motion.div
          className="about-top"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="section-tag">ABOUT ME</p>

          <h2>
            Building
            <span> Modern </span>
            &
            <span> Scalable </span>
            Web Applications
          </h2>

          <p className="about-description">
            I'm <strong>Gaurav Kaushik</strong>, a B.Tech Computer Science &
            Engineering student at <strong>IIMT University, Meerut</strong>.
            Passionate about Java Full Stack and MERN Stack Development, I love
            building fast, scalable and user-friendly web applications using
            modern technologies.
          </p>

          <div className="about-buttons">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              <FaDownload />
              Download Resume
            </a>

            <a href="#projects" className="secondary-btn">
              <FaArrowRight />
              View Projects
            </a>

          </div>
        </motion.div>

        {/* ================= STATS ================= */}

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="stat-card">
            <FaLaptopCode />
            <h3>8+</h3>
            <p>Projects</p>
          </div>

          <div className="stat-card">
            <FaReact />
            <h3>30+</h3>
            <p>Technologies</p>
          </div>

          <div className="stat-card">
            <FaJava />
            <h3>6 Months</h3>
            <p>Internship</p>
          </div>

          <div className="stat-card">
            <FaGithub />
            <h3>∞</h3>
            <p>Always Learning</p>
          </div>

        </motion.div>

        {/* ================= TECH STACK ================= */}

        <motion.div
          className="tech-section"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h3 className="tech-title">
            Tech Stack
          </h3>

          {/* Frontend */}

          <div className="tech-category">

            <h4>Frontend</h4>

            <div className="tech-grid">

              <div className="tech-card">
                <FaReact />
                <span>React.js</span>
              </div>

              <div className="tech-card">
                <SiNextdotjs />
                <span>Next.js</span>
              </div>

              <div className="tech-card">
                <FaHtml5 />
                <span>HTML5</span>
              </div>

              <div className="tech-card">
                <FaCss3Alt />
                <span>CSS3</span>
              </div>

              <div className="tech-card">
                <FaBootstrap />
                <span>Bootstrap</span>
              </div>

              <div className="tech-card">
                <SiTailwindcss />
                <span>Tailwind</span>
              </div>

              <div className="tech-card">
                <SiJavascript />
                <span>JavaScript</span>
              </div>

            </div>

          </div>

          {/* Backend */}

          <div className="tech-category">

            <h4>Backend</h4>

            <div className="tech-grid">

              <div className="tech-card">
                <FaJava />
                <span>Java</span>
              </div>

              <div className="tech-card">
                <SiSpringboot />
                <span>Spring Boot</span>
              </div>

              <div className="tech-card">
                <FaNodeJs />
                <span>Node.js</span>
              </div>

              <div className="tech-card">
                <SiExpress />
                <span>Express.js</span>
              </div>

              <div className="tech-card">
                <span className="text-logo">JSP</span>
                <span>JSP</span>
              </div>

              <div className="tech-card">
                <span className="text-logo">SV</span>
                <span>Servlet</span>
              </div>

              <div className="tech-card">
                <span className="text-logo">J2EE</span>
                <span>J2EE</span>
              </div>

            </div>

          </div>

          {/* Database */}

          <div className="tech-category">

            <h4>Database</h4>

            <div className="tech-grid">

              <div className="tech-card">
                <FaDatabase />
                <span>MySQL</span>
              </div>

              <div className="tech-card">
                <SiPostgresql />
                <span>PostgreSQL</span>
              </div>

              <div className="tech-card">
                <SiMongodb />
                <span>MongoDB</span>
              </div>

              <div className="tech-card">
                <SiNeon />
                <span>Neon DB</span>
              </div>

            </div>

          </div>

          {/* Tools */}

          <div className="tech-category">

            <h4>Tools & Platforms</h4>

            <div className="tech-grid">

              <div className="tech-card">
                <FaGitAlt />
                <span>Git</span>
              </div>

              <div className="tech-card">
                <FaGithub />
                <span>GitHub</span>
              </div>

              <div className="tech-card">
                <FaNpm />
                <span>NPM</span>
              </div>

              <div className="tech-card">
                <SiVite />
                <span>Vite</span>
              </div>

              <div className="tech-card">
                <SiPostman />
                <span>Postman</span>
              </div>

              <div className="tech-card">
                <span className="text-logo">TC</span>
                <span>Thunder Client</span>
              </div>

              <div className="tech-card">
                <SiVercel />
                <span>Vercel</span>
              </div>

              <div className="tech-card">
                <SiNetlify />
                <span>Netlify</span>
              </div>

              <div className="tech-card">
                <span className="text-logo">JWT</span>
                <span>JWT</span>
              </div>

              <div className="tech-card">
                <span className="text-logo">AI</span>
                <span>OpenAI</span>
              </div>

              <div className="tech-card">
                <span className="text-logo">AI</span>
                <span>Gemini</span>
              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;