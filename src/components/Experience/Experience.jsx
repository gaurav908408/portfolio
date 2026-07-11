import "./Experience.css";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Briefcase } from "lucide-react";

const timeline = [
  {
    icon: <GraduationCap size={28} />,
    title: "Diploma in Computer Science & Engineering",
    company: "IIMT University, Meerut",
    date: "2022 - 2024",
    description:
      "Completed Diploma in Computer Science & Engineering. Built a strong foundation in Programming, Data Structures, Database Management Systems, Computer Networks and Software Development.",
  },

  {
    icon: <GraduationCap size={28} />,
    title: "Bachelor of Technology (B.Tech) - Computer Science & Engineering",
    company: "IIMT University, Meerut",
    date: "2024 - Present",
    description:
      "Currently pursuing B.Tech in Computer Science & Engineering. Learning Data Structures & Algorithms, Java Full Stack Development, DBMS, Operating Systems, Software Engineering and modern Web Technologies.",
  },

  {
    icon: <Briefcase size={28} />,
    title: "Java Full Stack Developer Intern",
    company: "Humming Byte Technology",
    date: "6 Months Internship",
    description:
      "Completed a 6-month internship as a Java Full Stack Developer. Worked with Core Java, Spring Boot, React.js, REST APIs, MySQL, Git and GitHub while developing real-world web applications and gaining industry experience.",
  },


  {
    icon: <Briefcase size={28} />,
    title: "Full Stack Projects",
    company: "Self Learning",
    date: "2025 - Present",
    description:
      "Developed multiple Full Stack applications including QuizNova and Form Builder using React.js, Spring Boot, Express.js, MongoDB and PostgreSQL with authentication, REST APIs and responsive UI.",
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="experience-title"
        >
          Experience & Education
        </motion.h2>

        <div className="timeline">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="timeline-icon">
                {item.icon}
              </div>

              <div className="timeline-content">
                <span>{item.date}</span>

                <h3>{item.title}</h3>

                <h4>{item.company}</h4>

                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}