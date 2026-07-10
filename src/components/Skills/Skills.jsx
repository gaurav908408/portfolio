import "./Skills.css";
import { motion } from "framer-motion";

function Skills() {
  const skillData = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js"],
    },
    {
      title: "Backend",
      skills: ["Java", "Spring Boot", "Express.js", "REST API"],
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        <motion.p
          className="skills-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Technologies and tools I use to build modern web applications.
        </motion.p>

        <div className="skills-grid">
          {skillData.map((category, index) => (
            <motion.div
              className="skill-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{category.title}</h3>

              <div className="skill-list">
                {category.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
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