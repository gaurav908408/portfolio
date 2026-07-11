import "./Projects.css";
import { motion } from "framer-motion";

import {
  ExternalLink,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import quiznovaImg from "../../assets/images/quiznova.png";
import formbuilderImg from "../../assets/images/formbuilder.png";

const projects = [
  {
    id: "01",
    featured: true,

    title: "QuizNova",

    description:
      "QuizNova is a modern Full Stack Quiz Portal where users can register, login, attempt quizzes, view scores instantly and track their overall performance through a responsive dashboard.",

    image: quiznovaImg,

    tech: [
      "React",
      "Spring Boot",
      "PostgreSQL",
      "REST API",
    ],

    features: [
      "JWT Authentication",
      "Admin Dashboard",
      "Real-time Score",
      "Responsive UI",
    ],

    live: "https://quiz-nova-pi.vercel.app",

    github:
      "https://github.com/gaurav908408/QuizNova",
  },

  {
    id: "02",
    featured: false,

    title: "Form Builder",

    description:
      "A complete drag-and-drop Form Builder platform with authentication, dashboard, dynamic form creation, response collection and analytics.",

    image: formbuilderImg,

    tech: [
      "NEXTJS",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    features: [
      "Drag & Drop",
      "Authentication",
      "Analytics",
      "Dynamic Forms",
    ],

    live:
      "https://form-builder-website-tt6o.vercel.app",

    github:
      "https://github.com/gaurav908408/form-builder-website",
  },
];

export default function Projects() {
  return (
    <section
      className="projects"
      id="projects"
    >
      <div className="blur blur1"></div>
      <div className="blur blur2"></div>

      <div className="container">

        <motion.div
          className="projects-header"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
        >
          <span className="section-tag">
            MY WORK
          </span>

          <h2>
            Featured
            <span> Projects</span>
          </h2>

          <p>
            Some of my best Full Stack
            applications built using modern
            technologies with focus on
            performance, scalability and
            beautiful user experience.
          </p>
        </motion.div>

        <div className="projects-wrapper">

          {projects.map(
            (project, index) => (

              <motion.div
                key={project.id}
                className="project-card"
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                viewport={{
                  once: true,
                }}
              >

                {/* IMAGE */}


                                <div className="project-image">

                  {project.featured && (
                    <span className="featured">
                      ★ Featured
                    </span>
                  )}

                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />

                  <div className="image-overlay">
                    <ArrowUpRight size={42} />
                  </div>

                </div>

                {/* CONTENT */}

                <div className="project-content">

                  <span className="project-number">
                    {project.id}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  {/* TECH STACK */}

                  <div className="tech-stack">

                    {project.tech.map((item, i) => (

                      <span key={i}>
                        {item}
                      </span>

                    ))}

                  </div>

                  {/* FEATURES */}

                  <div className="feature-list">

                    {project.features.map((feature, i) => (

                      <div
                        className="feature-item"
                        key={i}
                      >

                        <CheckCircle2 size={18} />

                        <span>
                          {feature}
                        </span>

                      </div>

                    ))}

                  </div>

                  {/* BUTTONS */}

                  <div className="project-buttons">

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-btn"
                    >
                      <ExternalLink size={18} />

                      <span>
                        Live Demo
                      </span>

                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-btn"
                    >

                      <FaGithub size={18} />

                      <span>
                        GitHub
                      </span>

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
