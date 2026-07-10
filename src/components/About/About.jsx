import "./About.css";
import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaDatabase,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>

        <p>
          I'm <span>Gaurav Kaushik</span>, a B.Tech Computer Science
          Engineering student at <span>IIMT University Meerut</span>.
        </p>

        <p>
          I am a passionate <span>Full Stack Developer</span> who enjoys
          building modern, responsive, and scalable web applications. I
          continuously improve my skills by working on real-world projects and
          learning new technologies.
        </p>

        <div className="tech-icons">
          <div>
            <FaJava />
            <span>Java</span>
          </div>

          <div>
            <span
              style={{
                fontSize: "45px",
                fontWeight: "bold",
                color: "#3B82F6",
              }}
            >
              C
            </span>
            <span>C Language</span>
          </div>

          <div>
            <FaReact />
            <span>React</span>
          </div>

          <div>
            <SiNextdotjs />
            <span>Next.js</span>
          </div>

          <div>
            <SiSpringboot />
            <span>Spring Boot</span>
          </div>

          <div>
            <SiExpress />
            <span>Express.js</span>
          </div>

          <div>
            <SiMongodb />
            <span>MongoDB</span>
          </div>

          <div>
            <FaDatabase />
            <span>MySQL</span>
          </div>

          <div>
            <FaGitAlt />
            <span>Git</span>
          </div>

          <div>
            <FaGithub />
            <span>GitHub</span>
          </div>
        </div>

        <div className="stats">
          <div className="card">
            <h3>8+</h3>
            <p>Projects</p>
          </div>

          <div className="card">
            <h3>10+</h3>
            <p>Technologies</p>
          </div>

          <div className="card">
            <h3>Fresher</h3>
            <p>Experience</p>
          </div>

          <div className="card">
            <h3>∞</h3>
            <p>Learning</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;