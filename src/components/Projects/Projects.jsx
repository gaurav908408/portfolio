import "./Projects.css";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

// Import Images
import quiznovaImg from "../../assets/images/quiznova.png";
import formbuilderImg from "../../assets/images/formbuilder.png";

const projects = [
  {
    id: 1,
    title: "QuizNova",
    description:
      "A Full Stack Quiz Portal where users can register, login, attempt quizzes, and instantly view their scores. Built using React, Spring Boot and PostgreSQL.",
    image: quiznovaImg,
    tech: ["React", "Spring Boot", "PostgreSQL"],
    live: "https://quiz-nova-pi.vercel.app",
    github: "https://github.com/gaurav908408/QuizNova",
  },
  {
    id: 2,
    title: "Form Builder",
    description:
      "A modern drag-and-drop Form Builder with authentication, response collection, dashboard and dynamic form creation using React, Express.js and MongoDB.",
    image: formbuilderImg,
    tech: ["React", "Express.js", "MongoDB"],
    live: "https://form-builder-website-tt6o.vercel.app",
    github: "https://github.com/gaurav908408/form-builder-website",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          My Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="live-btn"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-btn"
                  >
                    <Code2 size={18} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}