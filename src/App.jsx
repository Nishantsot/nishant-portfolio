import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Database,
  Server,
  Sparkles,
  GraduationCap,
  BriefcaseBusiness,
  Rocket,
  Menu,
  X,
  Terminal,
  ShieldCheck,
  Cpu,
  Layers,
  Globe,
} from "lucide-react";

import "./styles.css";

/* =========================================================
   PERSONAL INFORMATION
========================================================= */

const contact = {
  name: "Nishant Kumar",
  email: "nishantkumar8357@gmail.com",
  phone: "9821712040",
  github: "https://github.com/Nishantsot",
  linkedin:
    "https://www.linkedin.com/in/nishant-kumar-756469270/",
  address: "Pocket B1, 23-D, Mayur Vihar Phase 3, Delhi",
};

/* =========================================================
   NAVIGATION
========================================================= */

const navItems = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
];

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    number: "01",
    title: "Society Portal",
    subtitle: "Role-Based Society Management System",

    tech: [
      "React.js",
      "Bootstrap",
      "Spring Boot",
      "Spring Security",
      "MySQL",
    ],

    description:
      "A full-stack society management platform designed for managing societies, events, announcements, student activities and administrative workflows.",

    points: [
      "Implemented separate Admin and Student/User portals.",
      "Added secure Role-Based Access Control using Spring Security.",
      "Built administration workflows for approvals, announcements and gallery management.",
      "Created a responsive React.js interface connected with Spring Boot REST APIs.",
    ],

    link:
      "https://society-frontend-39w5.onrender.com",

    icon: ShieldCheck,
  },

  {
    number: "02",
    title: "LearnMate",
    subtitle: "Online Learning Management System",

    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "MySQL",
      "JPA",
      "REST API",
      "React.js",
    ],

    description:
      "An online learning management system providing course management, role-based dashboards, enrollments and room-based live class joining.",

    points: [
      "Developed REST APIs for Admin, Tutor and Student workflows.",
      "Implemented authentication and authorization using Spring Security.",
      "Created responsive dashboards and course interfaces using React.js.",
      "Implemented room-based links for joining live classes.",
    ],

    link:
      "https://learn-mate-frontend.vercel.app/",

    icon: Globe,
  },

  {
    number: "03",
    title: "Fraud Detection",
    subtitle: "Credit Card Fraud Detection using Machine Learning",

    tech: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Jupyter Notebook",
    ],

    description:
      "A machine-learning based fraud detection project using Logistic Regression to classify fraudulent transactions.",

    points: [
      "Achieved 96% accuracy on the project dataset.",
      "Handled missing values and performed data preprocessing.",
      "Applied feature scaling for model optimization.",
      "Used categorical encoding and exploratory data analysis.",
    ],

    link: "#",

    icon: Cpu,
  },
];

/* =========================================================
   SKILLS
========================================================= */

const skills = [
  {
    name: "Java",
    category: "Backend",
    icon: Code2,
  },
  {
    name: "JavaScript",
    category: "Programming",
    icon: Terminal,
  },
  {
    name: "Python",
    category: "Programming",
    icon: Cpu,
  },
  {
    name: "React.js",
    category: "Frontend",
    icon: Layers,
  },
  {
    name: "Spring Boot",
    category: "Backend",
    icon: Server,
  },
  {
    name: "Spring Security",
    category: "Security",
    icon: ShieldCheck,
  },
  {
    name: "REST APIs",
    category: "Backend",
    icon: Globe,
  },
  {
    name: "MySQL",
    category: "Database",
    icon: Database,
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: Database,
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    icon: Code2,
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    icon: Layers,
  },
  {
    name: "Axios",
    category: "Frontend",
    icon: Globe,
  },
];

/* =========================================================
   GALAXY BACKGROUND
========================================================= */

function GalaxyBackground() {
  return (
    <div className="galaxy">

      <div className="starfield starfield-one" />
      <div className="starfield starfield-two" />
      <div className="starfield starfield-three" />

      <div className="nebula nebula-one" />
      <div className="nebula nebula-two" />
      <div className="nebula nebula-three" />

      <div className="planet planet-one" />
      <div className="planet planet-two" />
      <div className="planet planet-three" />

      <div className="background-orbit orbit-one" />
      <div className="background-orbit orbit-two" />

      <div className="shooting-star shooting-one" />
      <div className="shooting-star shooting-two" />
      <div className="shooting-star shooting-three" />
      <div className="shooting-star shooting-four" />

    </div>
  );
}

/* =========================================================
   SECTION TITLE
========================================================= */

function SectionTitle({
  eyebrow,
  title,
  text,
}) {
  return (
    <motion.div
      className="section-heading"
      initial={{
        opacity: 0,
        y: 45,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
      }}
    >

      <span className="eyebrow">
        <Sparkles size={14} />
        {eyebrow}
      </span>

      <h2>{title}</h2>

      {text && <p>{text}</p>}

    </motion.div>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [scrollProgress, setScrollProgress] =
    useState(0);

  /* =======================================================
     SCROLL PROGRESS
  ======================================================= */

  useEffect(() => {

    const handleScroll = () => {

      const scrollTop =
        window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        documentHeight > 0
          ? scrollTop / documentHeight
          : 0;

      setScrollProgress(progress);

    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="app">

      {/* ===================================================
          GALAXY
      =================================================== */}

      <GalaxyBackground />

      {/* ===================================================
          SCROLL BAR
      =================================================== */}

      <div
        className="scroll-progress"
        style={{
          transform:
            `scaleX(${scrollProgress})`,
        }}
      />

      {/* ===================================================
          NAVBAR
      =================================================== */}

      <header className="navbar">

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >

          <span className="logo-orbit">

            <span className="logo-core">
              NK
            </span>

          </span>

          <span className="logo-text">
            NISHANT
            <span>.</span>
          </span>

        </a>

        <button
          className="mobile-menu-button"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle navigation"
        >

          {menuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}

        </button>

        <nav
          className={
            menuOpen
              ? "nav-links nav-open"
              : "nav-links"
          }
        >

          {navItems.map((item) => (

            <a
              key={item}
              href={`#${item}`}
              onClick={closeMenu}
            >
              {item}
            </a>

          ))}

          <a
            href={`mailto:${contact.email}`}
            className="nav-contact"
            onClick={closeMenu}
          >
            Let's Talk
            <ArrowUpRight size={15} />
          </a>

        </nav>

      </header>

      {/* ===================================================
          MAIN
      =================================================== */}

      <main>

        {/* =================================================
            HERO
        ================================================= */}

        <section
          id="home"
          className="hero section"
        >

          <div className="hero-content">

            <motion.div
              className="availability"
              initial={{
                opacity: 0,
                y: -25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
            >

              <span className="availability-dot" />

              AVAILABLE FOR OPPORTUNITIES

            </motion.div>

            <motion.div
              className="hero-label"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.25,
              }}
            >

              FULL STACK DEVELOPER

              <span>•</span>

              JAVA

              <span>•</span>

              REACT

            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
            >

              Building

              <span className="hero-gradient">
                {" "}digital
              </span>

              <br />

              experiences.

            </motion.h1>

            <motion.p
              className="hero-text"
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.55,
              }}
            >

              I'm{" "}
              <strong>
                Nishant Kumar
              </strong>
              , a Full Stack Developer
              passionate about creating
              scalable web applications
              with React.js, Java,
              Spring Boot and modern
              backend technologies.

            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.75,
              }}
            >

              <a
                href="#projects"
                className="button button-primary"
              >
                Explore My Work
                <ArrowUpRight size={18} />
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="button button-secondary"
              >
                <Mail size={17} />
                Contact Me
              </a>

            </motion.div>

            {/* SOCIAL LINKS */}

            <motion.div
              className="hero-socials"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1,
              }}
            >

              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
              >

                <span className="social-github">
                  GH
                </span>

                GitHub

              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
              >

                <span className="social-linkedin">
                  in
                </span>

                LinkedIn

              </a>

            </motion.div>

          </div>

          {/* =================================================
              SOLAR SYSTEM
          ================================================= */}

          <motion.div
            className="hero-space"
            initial={{
              opacity: 0,
              scale: 0.7,
              rotate: -10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 1.4,
              ease: "easeOut",
            }}
          >

            <div className="solar-system">

              <div className="solar-glow" />

              <div className="sun">

                <div className="sun-inner">
                  NK
                </div>

              </div>

              <div className="solar-orbit orbit-a">

                <div className="orbit-planet planet-a" />

              </div>

              <div className="solar-orbit orbit-b">

                <div className="orbit-planet planet-b" />

              </div>

              <div className="solar-orbit orbit-c">

                <div className="orbit-planet planet-c" />

              </div>

              <div className="solar-orbit orbit-d">

                <div className="orbit-planet planet-d" />

              </div>

              <motion.div
                className="floating-tech tech-react"
                animate={{
                  y: [-8, 8, -8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >

                <Code2 size={16} />

                React.js

              </motion.div>

              <motion.div
                className="floating-tech tech-java"
                animate={{
                  y: [8, -8, 8],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >

                <Server size={16} />

                Spring Boot

              </motion.div>

              <motion.div
                className="floating-tech tech-db"
                animate={{
                  y: [-5, 10, -5],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >

                <Database size={16} />

                MySQL

              </motion.div>

            </div>

          </motion.div>

          <a
            href="#about"
            className="scroll-indicator"
          >

            <span>
              SCROLL TO EXPLORE
            </span>

            <ArrowDown size={16} />

          </a>

        </section>

        {/* =================================================
            ABOUT
        ================================================= */}

        <section
          id="about"
          className="section"
        >

          <SectionTitle
            eyebrow="ABOUT ME"
            title="Turning ideas into real systems."
            text="I combine frontend creativity with backend architecture to build practical, secure and scalable applications."
          />

          <div className="about-grid">

            <motion.div
              className="glass-card about-card"
              initial={{
                opacity: 0,
                x: -60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
            >

              <div className="quote-symbol">
                "
              </div>

              <h3>
                Full Stack
                <span>
                  {" "}Developer
                </span>
              </h3>

              <p>
                I enjoy designing applications
                where the user interface,
                business logic, APIs and
                database work together as
                one complete ecosystem.
              </p>

              <p>
                My development approach
                focuses on clean code,
                reusable components,
                secure APIs and responsive
                user experiences.
              </p>

              <div className="about-tech">

                <span>React.js</span>
                <span>Java</span>
                <span>Spring Boot</span>
                <span>MySQL</span>

              </div>

            </motion.div>

            <div className="stats-grid">

              {[
                ["96%", "Fraud Detection Accuracy"],
                ["90h", "IBM AI Training"],
                ["3+", "Major Projects"],
                ["8.77", "Academic Score"],
              ].map(
                ([number, label], index) => (

                  <motion.div
                    key={label}
                    className="stat-card glass-card"
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                  >

                    <strong>
                      {number}
                    </strong>

                    <span>
                      {label}
                    </span>

                  </motion.div>

                )
              )}

            </div>

          </div>

        </section>

        {/* =================================================
            SKILLS
        ================================================= */}

        <section
          id="skills"
          className="section"
        >

          <SectionTitle
            eyebrow="TECH STACK"
            title="My technology constellation."
            text="A collection of technologies I use to build modern applications from frontend to backend."
          />

          <div className="skills-container">

            {skills.map(
              (skill, index) => {

                const Icon =
                  skill.icon;

                return (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    initial={{
                      opacity: 0,
                      y: 40,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay:
                        (index % 6) * 0.06,
                    }}
                    whileHover={{
                      y: -10,
                      rotateX: 5,
                      rotateY: -5,
                    }}
                  >

                    <div className="skill-icon">
                      <Icon size={21} />
                    </div>

                    <div>

                      <strong>
                        {skill.name}
                      </strong>

                      <small>
                        {skill.category}
                      </small>

                    </div>

                  </motion.div>
                );
              }
            )}

          </div>

        </section>

        {/* =================================================
            PROJECTS
        ================================================= */}

        <section
          id="projects"
          className="section"
        >

          <SectionTitle
            eyebrow="MISSION LOG"
            title="Projects launched into orbit."
            text="A selection of applications and machine-learning work from my development journey."
          />

          <div className="projects-list">

            {projects.map(
              (project, index) => {

                const ProjectIcon =
                  project.icon;

                return (
                  <motion.article
                    key={project.title}
                    className="project-card glass-card"
                    initial={{
                      opacity: 0,
                      y: 90,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.1,
                    }}
                    transition={{
                      duration: 0.8,
                      delay:
                        index * 0.12,
                    }}
                    whileHover={{
                      y: -10,
                    }}
                  >

                    <div className="project-number">
                      {project.number}
                    </div>

                    <div className="project-content">

                      <div className="project-header">

                        <div>

                          <span className="project-subtitle">
                            {project.subtitle}
                          </span>

                          <h3>
                            {project.title}
                          </h3>

                        </div>

                        <div className="project-icon">
                          <ProjectIcon
                            size={24}
                          />
                        </div>

                      </div>

                      <p className="project-description">
                        {project.description}
                      </p>

                      <div className="project-tech">

                        {project.tech.map(
                          (tech) => (

                            <span key={tech}>
                              {tech}
                            </span>

                          )
                        )}

                      </div>

                      <ul className="project-points">

                        {project.points.map(
                          (point) => (

                            <li key={point}>
                              {point}
                            </li>

                          )
                        )}

                      </ul>

                      {project.link !== "#" && (

                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link"
                        >

                          View Project

                          <ExternalLink
                            size={16}
                          />

                        </a>

                      )}

                    </div>

                  </motion.article>
                );
              }
            )}

          </div>

        </section>

        {/* =================================================
            EXPERIENCE
        ================================================= */}

        <section
          id="experience"
          className="section"
        >

          <SectionTitle
            eyebrow="JOURNEY"
            title="Experience & education."
            text="A timeline of the experiences that shaped my technical journey."
          />

          <div className="timeline">

            <motion.div
              className="timeline-item"
              initial={{
                opacity: 0,
                x: -70,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >

              <div className="timeline-marker">

                <BriefcaseBusiness
                  size={17}
                />

              </div>

              <div className="timeline-content glass-card">

                <span className="timeline-date">
                  JUL 2024 — AUG 2024
                </span>

                <h3>
                  IBM — Summer Trainee
                </h3>

                <p>
                  Completed a 90-hour
                  in-house AI summer
                  trainee program covering
                  artificial intelligence,
                  machine learning, neural
                  networks and practical
                  AI applications.
                </p>

              </div>

            </motion.div>

            <motion.div
              className="timeline-item"
              initial={{
                opacity: 0,
                x: 70,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.15,
              }}
            >

              <div className="timeline-marker">

                <GraduationCap
                  size={17}
                />

              </div>

              <div className="timeline-content glass-card">

                <span className="timeline-date">
                  B.TECH — ECE
                </span>

                <h3>
                  Guru Gobind Singh
                  Indraprastha University
                </h3>

                <p>
                  Bachelor of Technology
                  in Electronics and
                  Communication Engineering
                  with an academic score of
                  8.77/10.
                </p>

              </div>

            </motion.div>

          </div>

        </section>

        {/* =================================================
            CONTACT
        ================================================= */}

        <section
          id="contact"
          className="section contact-section"
        >

          <motion.div
            className="contact-rocket"
            initial={{
              opacity: 0,
              scale: 0.5,
              rotate: -20,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <Rocket size={40} />

          </motion.div>

          <SectionTitle
            eyebrow="OPEN CHANNEL"
            title="Let's build something extraordinary."
            text="Have an opportunity, project or idea? Send a signal and let's connect."
          />

          <div className="contact-grid">

            {/* EMAIL */}

            <motion.a
              href={`mailto:${contact.email}`}
              className="contact-card glass-card"
              whileHover={{
                y: -8,
              }}
            >

              <div className="contact-icon">
                <Mail />
              </div>

              <div>

                <span>
                  EMAIL
                </span>

                <strong>
                  {contact.email}
                </strong>

              </div>

              <ArrowUpRight />

            </motion.a>

            {/* PHONE */}

            <motion.a
              href={`tel:${contact.phone}`}
              className="contact-card glass-card"
              whileHover={{
                y: -8,
              }}
            >

              <div className="contact-icon">
                <Phone />
              </div>

              <div>

                <span>
                  PHONE
                </span>

                <strong>
                  {contact.phone}
                </strong>

              </div>

              <ArrowUpRight />

            </motion.a>

            {/* GITHUB */}

            <motion.a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="contact-card glass-card"
              whileHover={{
                y: -8,
              }}
            >

              <div className="contact-icon">

                <span className="github-big">
                  GH
                </span>

              </div>

              <div>

                <span>
                  GITHUB
                </span>

                <strong>
                  github.com/Nishantsot
                </strong>

              </div>

              <ArrowUpRight />

            </motion.a>

            {/* LINKEDIN */}

            <motion.a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-card glass-card"
              whileHover={{
                y: -8,
              }}
            >

              <div className="contact-icon">

                <span className="linkedin-big">
                  in
                </span>

              </div>

              <div>

                <span>
                  LINKEDIN
                </span>

                <strong>
                  Nishant Kumar
                </strong>

              </div>

              <ArrowUpRight />

            </motion.a>

          </div>

          <div className="location">

            <MapPin size={15} />

            <span>
              {contact.address}
            </span>

          </div>

        </section>

      </main>

      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer>

        <div>

          © {new Date().getFullYear()}

          {" "}

          <strong>
            Nishant Kumar
          </strong>

        </div>

        <div className="footer-center">

          <Sparkles size={13} />

          CRAFTED IN THE DIGITAL GALAXY

        </div>

        <a
          href="#home"
          className="back-top"
        >

          <ArrowUp size={16} />

        </a>

      </footer>

    </div>
  );
}

/* =========================================================
   EXPORT
========================================================= */

export default App;