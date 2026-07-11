import "./Skills.css";
import { motion } from "framer-motion";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiJavascript,
  SiSpringboot,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiVite,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },

  {
    title: "Backend",
    items: [
      { name: "Java", icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST API", icon: <FaDatabase /> },
    ],
  },

  {
    title: "Database",
    items: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },

  {
    title: "Tools & Platforms",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Netlify", icon: <SiNetlify /> },
      { name: "Vite", icon: <SiVite /> },
    ],
  },
];

function Skills() {
  return (
    <section className="skills section" id="skills">

      {/* Background Blur */}
      <div className="skills-blur blur-left"></div>
      <div className="skills-blur blur-right"></div>

      <div className="container">

        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="section-tag">MY SKILLS</p>

          <h2>
            Technologies I Use To Build
            <span> Modern Applications</span>
          </h2>

          <p>
            I enjoy working with modern frontend, backend, databases and
            development tools to create fast, scalable and user-friendly
            applications.
          </p>
        </motion.div>

        <div className="skills-grid">

          {skillCategories.map((category, index) => (

            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
            >

              <h3>{category.title}</h3>

              <div className="skill-items">

                {category.items.map((skill, i) => (

                  <motion.div
                    key={i}
                    className="skill-item"
                    whileHover={{
                      scale: 1.08,
                    }}
                  >

                    <div className="skill-icon">
                      {skill.icon}
                    </div>

                    <span>{skill.name}</span>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;