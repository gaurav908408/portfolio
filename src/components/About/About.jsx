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
          I'm <span>Gaurav Kaushik</span>, a B.Tech Computer Science &
          Engineering student at <span>IIMT University, Meerut</span>.
        </p>

        <p>
          Passionate Java Full Stack Developer with a strong interest in
          building scalable web applications. I enjoy learning modern
          technologies, solving real-world problems, and creating responsive,
          user-friendly applications.
        </p>

        <div className="tech-icons">

          <div><FaJava /><span>Java</span></div>

          <div>
            <span style={{fontSize:"42px",fontWeight:"bold",color:"#3B82F6"}}>C</span>
            <span>C Language</span>
          </div>

          <div><SiJavascript /><span>JavaScript</span></div>

          <div><FaReact /><span>React.js</span></div>

          <div><SiNextdotjs /><span>Next.js</span></div>

          <div><FaNodeJs /><span>Node.js</span></div>

          <div><SiExpress /><span>Express.js</span></div>

          <div><SiSpringboot /><span>Spring Boot</span></div>

          <div><FaDatabase /><span>MySQL</span></div>

          <div><SiPostgresql /><span>PostgreSQL</span></div>

          <div><SiNeon /><span>Neon DB</span></div>

          <div><SiMongodb /><span>MongoDB</span></div>

          <div><FaHtml5 /><span>HTML5</span></div>

          <div><FaCss3Alt /><span>CSS3</span></div>

          <div><FaBootstrap /><span>Bootstrap</span></div>

          <div><SiTailwindcss /><span>Tailwind CSS</span></div>

          <div><FaGitAlt /><span>Git</span></div>

          <div><FaGithub /><span>GitHub</span></div>

          <div><SiVercel /><span>Vercel</span></div>

          <div><SiNetlify /><span>Netlify</span></div>
                    <div><FaNpm /><span>NPM</span></div>

          <div><SiVite /><span>Vite</span></div>

          <div><SiPostman /><span>Postman</span></div>

          <div>
            <span style={{fontWeight:"bold",fontSize:"22px"}}>TC</span>
            <span>Thunder Client</span>
          </div>

          <div>
            <span style={{fontWeight:"bold",fontSize:"20px"}}>JWT</span>
            <span>JWT</span>
          </div>

          <div>
            <span style={{fontWeight:"bold",fontSize:"20px"}}>J2SE</span>
            <span>J2SE</span>
          </div>

          <div>
            <span style={{fontWeight:"bold",fontSize:"20px"}}>J2EE</span>
            <span>J2EE</span>
          </div>

          <div>
            <span style={{fontWeight:"bold",fontSize:"20px"}}>SPR</span>
            <span>Spring</span>
          </div>

          <div>
            <span style={{fontWeight:"bold",fontSize:"20px"}}>JSP</span>
            <span>JSP</span>
          </div>

          <div>
            <span style={{fontWeight:"bold",fontSize:"18px"}}>SV</span>
            <span>Servlet</span>
          </div>

          <div>
            <span style={{fontWeight:"bold",fontSize:"20px"}}>AI</span>
            <span>OpenAI</span>
          </div>

          <div>
            <span style={{fontWeight:"bold",fontSize:"20px"}}>AI</span>
            <span>Gemini</span>
          </div>

        </div>

        <div className="stats">

          <div className="card">
            <h3>8+</h3>
            <p>Projects</p>
          </div>

          <div className="card">
            <h3>30+</h3>
            <p>Technologies</p>
          </div>

          <div className="card">
            <h3>6 Months</h3>
            <p>Internship</p>
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