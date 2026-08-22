import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Society Portal",
    category: "FULL STACK",
    description:
      "A role-based society management platform for managing societies, events, announcements, requests and student activities.",
    technologies: [
      "React.js",
      "Spring Boot",
      "Spring Security",
      "MySQL",
    ],
    link: "https://society-frontend-39w5.onrender.com",
  },

  {
    number: "02",
    title: "LearnMate LMS",
    category: "FULL STACK",
    description:
      "An online learning management system with courses, users, enrollments, dashboards and live class functionality.",
    technologies: [
      "React.js",
      "Spring Boot",
      "REST API",
      "MySQL",
    ],
    link: "https://learn-mate-frontend.vercel.app/",
  },

  {
    number: "03",
    title: "Fraud Detection",
    category: "MACHINE LEARNING",
    description:
      "A machine learning system for detecting fraudulent credit card transactions using data preprocessing and logistic regression.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],
    link: "#",
  },
];

const skills = [
  { name: "Java", icon: "bi-cup-hot" },
  { name: "JavaScript", icon: "bi-filetype-js" },
  { name: "React.js", icon: "bi-code-slash" },
  { name: "Spring Boot", icon: "bi-server" },
  { name: "Spring Security", icon: "bi-shield-check" },
  { name: "REST API", icon: "bi-cloud-arrow-up" },
  { name: "MySQL", icon: "bi-database" },
  { name: "Python", icon: "bi-filetype-py" },
  { name: "Git", icon: "bi-git" },
  { name: "GitHub", icon: "bi-github" },
  { name: "Bootstrap", icon: "bi-bootstrap" },
  { name: "Postman", icon: "bi-send" },
];

const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

function Stars() {
  const stars = Array.from({ length: 120 });

  return (
    <div className="star-field">
      {stars.map((_, index) => (
        <span
          key={index}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

function SpaceObjects() {
  return (
    <>
      <div className="planet planet-one">
        <div className="planet-ring"></div>
      </div>

      <div className="planet planet-two"></div>

      <div className="moon"></div>

      <div className="space-orbit orbit-one"></div>

      <div className="space-orbit orbit-two"></div>

      <div className="glow-orb orb-one"></div>

      <div className="glow-orb orb-two"></div>
    </>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="portfolio">

    

      <div className="space-background">
        <Stars />
        <SpaceObjects />
      </div>

   

      <nav
        className={`navbar navbar-expand-lg fixed-top custom-navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="container">

          <a href="#home" className="navbar-brand logo">
            <span>&lt;</span>
            DEV
            <span>/&gt;</span>
          </a>

          <button
            className="navbar-toggler"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="bi bi-list"></i>
          </button>

          <div
            className={`collapse navbar-collapse ${
              menuOpen ? "show" : ""
            }`}
          >
            <ul className="navbar-nav mx-auto">

              {navItems.map((item) => (
                <li className="nav-item" key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="nav-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>

            <a href="#contact" className="btn cosmic-button">
              Let's Talk
              <i className="bi bi-arrow-up-right"></i>
            </a>
          </div>

        </div>
      </nav>

 

      <section id="home" className="hero-section">

        <div className="container">

          <div className="row align-items-center min-vh-100">

            <div className="col-lg-7">

              <motion.div
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                }}
              >

                <div className="status-badge">
                  <span className="status-dot"></span>
                  AVAILABLE FOR OPPORTUNITIES
                </div>

                <p className="hero-small">
                  HELLO, I'M
                </p>

                <h1 className="hero-title">

                  Nishant Kumar

                  <br />

                  <span>
                    Full Stack
                  </span>

                  <br />

                  Developer.

                </h1>

                <p className="hero-description">
                  I build modern, scalable and user-focused
                  web applications using React.js, Java,
                  Spring Boot and modern technologies.
                </p>

                <div className="hero-buttons">

                  <a
                    href="#projects"
                    className="btn cosmic-button btn-lg"
                  >
                    Explore My Work
                    <i className="bi bi-arrow-down-right"></i>
                  </a>

                  <a
                    href="#contact"
                    className="btn outline-button btn-lg"
                  >
                    Contact Me
                  </a>

                </div>


                <div className="hero-socials">

                  <a
                    href="https://github.com/Nishantsot"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <i className="bi bi-github"></i>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/nishant-kumar-756469270/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>

                  <a
                    href="mailto:nishantkumar8357@gmail.com"
                    aria-label="Email"
                  >
                    <i className="bi bi-envelope"></i>
                  </a>

                </div>

              </motion.div>

            </div>

         

            <div className="col-lg-5">

              <motion.div
                className="developer-planet"
                initial={{
                  opacity: 0,
                  scale: 0.6,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.2,
                }}
              >

                <div className="planet-container">

                  <div className="hero-planet">

                    <div className="planet-light"></div>

                    <div className="planet-crater crater-one"></div>

                    <div className="planet-crater crater-two"></div>

                    <div className="planet-crater crater-three"></div>

                  </div>

                  <div className="hero-ring"></div>

                  <div className="floating-code code-one">
                    &lt;/&gt;
                  </div>

                  <div className="floating-code code-two">
                    {"{ }"}
                  </div>

                  <div className="floating-code code-three">
                    JS
                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </div>

        <div className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <i className="bi bi-arrow-down"></i>
        </div>

      </section>

    

      <section className="stats-section">

        <div className="container">

          <div className="row">

            <Stat
              number="03+"
              label="Projects"
            />

            <Stat
              number="12+"
              label="Technologies"
            />

            <Stat
              number="96%"
              label="ML Accuracy"
            />

            <Stat
              number="24/7"
              label="Learning"
            />

          </div>

        </div>

      </section>


      <section id="about" className="section">

        <div className="container">

          <SectionHeading
            number="01"
            title="About Me"
            subtitle="THE PERSON BEHIND THE CODE"
          />

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <motion.div
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
              >

                <div className="about-card">

                  <div className="terminal-top">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="terminal-content">

                    <p>
                      <span className="purple">
                        const
                      </span>{" "}
                      developer = {"{"}
                    </p>

                    <p className="indent">
                      name:{" "}
                      <span className="green">
                        "Nishant Kumar"
                      </span>,
                    </p>

                    <p className="indent">
                      role:{" "}
                      <span className="green">
                        "Full Stack Developer"
                      </span>,
                    </p>

                    <p className="indent">
                      passion:{" "}
                      <span className="green">
                        "Building Products"
                      </span>,
                    </p>

                    <p className="indent">
                      email:{" "}
                      <span className="green">
                        "nishantkumar8357@gmail.com"
                      </span>,
                    </p>

                    <p className="indent">
                      coffee:{" "}
                      <span className="orange">
                        true
                      </span>
                    </p>

                    <p>
                      {"};"}
                    </p>

                  </div>

                </div>

              </motion.div>

            </div>

            <div className="col-lg-6">

              <motion.div
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
              >

                <span className="mini-label">
                  WHO I AM
                </span>

                <h3 className="about-title">
                  I turn ideas into
                  <span> digital reality.</span>
                </h3>

                <p className="about-text">
                  I'm Nishant Kumar, a passionate Full Stack
                  Developer interested in creating responsive,
                  secure and scalable web applications.
                </p>

                <p className="about-text">
                  My focus is on writing clean code,
                  understanding real-world problems and
                  creating applications that are both
                  functional and enjoyable to use.
                </p>

                <div className="about-points">

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Clean & Maintainable Code
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Responsive Design
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Secure Backend APIs
                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </div>

      </section>



      <section id="skills" className="section">

        <div className="container">

          <SectionHeading
            number="02"
            title="My Skills"
            subtitle="TOOLS OF THE TRADE"
          />

          <div className="row g-3">

            {skills.map((skill, index) => (

              <div
                className="col-6 col-md-4 col-lg-3"
                key={skill.name}
              >

                <motion.div
                  className="skill-card"
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                >

                  <i
                    className={`bi ${skill.icon}`}
                  ></i>

                  <span>
                    {skill.name}
                  </span>

                </motion.div>

              </div>

            ))}

          </div>

        </div>

      </section>


      <section
        id="projects"
        className="section projects-section"
      >

        <div className="container">

          <SectionHeading
            number="03"
            title="Selected Projects"
            subtitle="THINGS I'VE BUILT"
          />

          <div className="row g-4">

            {projects.map(
              (project, index) => (

                <div
                  className="col-lg-4"
                  key={project.title}
                >

                  <motion.div
                    className="project-card"
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      y: -12,
                    }}
                  >

                    <div className="project-top">

                      <span className="project-number">
                        {project.number}
                      </span>

                      <span className="project-category">
                        {project.category}
                      </span>

                    </div>

                    <div className="project-icon">
                      <i className="bi bi-code-square"></i>
                    </div>

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.description}
                    </p>

                    <div className="technology-list">

                      {project.technologies.map(
                        (technology) => (

                          <span
                            key={technology}
                          >
                            {technology}
                          </span>

                        )
                      )}

                    </div>

                    {project.link !== "#" && (

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >

                        View Project

                        <i className="bi bi-arrow-up-right"></i>

                      </a>

                    )}

                  </motion.div>

                </div>

              )
            )}

          </div>

        </div>

      </section>

    

      <section id="experience" className="section">

        <div className="container">

          <SectionHeading
            number="04"
            title="Experience"
            subtitle="MY JOURNEY"
          />

          <div className="timeline">

            <TimelineItem
              date="2024"
              title="Summer Trainee"
              company="IBM"
              description="Completed an intensive training program focused on Artificial Intelligence, Machine Learning and real-world applications."
            />

            <TimelineItem
              date="2025 — PRESENT"
              title="Full Stack Development"
              company="Self Development"
              description="Building full-stack applications using React.js, Java, Spring Boot, REST APIs, Spring Security and relational databases."
            />

          </div>

        </div>

      </section>

    
      <section
        id="contact"
        className="section contact-section"
      >

        <div className="container">

          <motion.div
            className="contact-box"
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
          >

            <div className="contact-stars"></div>

            <span className="mini-label">
              05 / CONTACT
            </span>

            <h2>
              Let's create
              something
              <span> amazing.</span>
            </h2>

            <p>
              Have a project, opportunity or
              just want to connect?
            </p>

            <a
              href="mailto:nishantkumar8357@gmail.com"
              className="btn cosmic-button btn-lg"
            >
              Start a Conversation
              <i className="bi bi-arrow-up-right"></i>
            </a>

            <div className="contact-socials">

              <a
                href="mailto:nishantkumar8357@gmail.com"
                aria-label="Email"
              >
                <i className="bi bi-envelope"></i>
              </a>

              <a
                href="https://github.com/Nishantsot"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/nishant-kumar-756469270/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>

            </div>

          </motion.div>

        </div>

      </section>


      <footer>

        <div className="container">

          <div className="footer-content">

            <div className="logo">
              <span>&lt;</span>
              DEV
              <span>/&gt;</span>
            </div>

            <p>
              © {new Date().getFullYear()} Nishant Kumar.
              All rights reserved.
            </p>

            <p>
              Designed & built with React.js
            </p>

            <div className="footer-socials">

              <a
                href="https://github.com/Nishantsot"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/nishant-kumar-756469270/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href="mailto:nishantkumar8357@gmail.com"
                aria-label="Email"
              >
                <i className="bi bi-envelope"></i>
              </a>

            </div>

          </div>

        </div>

      </footer>

    </div>
  );
}

// =====================================
// STAT COMPONENT
// =====================================

function Stat({ number, label }) {
  return (
    <div className="col-6 col-md-3">

      <div className="stat-item">

        <h3>
          {number}
        </h3>

        <p>
          {label}
        </p>

      </div>

    </div>
  );
}



function SectionHeading({
  number,
  title,
  subtitle,
}) {
  return (
    <motion.div
      className="section-heading"
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
    >

      <div className="heading-number">
        {number}
      </div>

      <div>

        <span>
          {subtitle}
        </span>

        <h2>
          {title}
        </h2>

      </div>

    </motion.div>
  );
}


function TimelineItem({
  date,
  title,
  company,
  description,
}) {
  return (
    <motion.div
      className="timeline-item"
      initial={{
        opacity: 0,
        x: -30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
    >

      <div className="timeline-dot"></div>

      <span className="timeline-date">
        {date}
      </span>

      <h3>
        {title}
      </h3>

      <h5>
        {company}
      </h5>

      <p>
        {description}
      </p>

    </motion.div>
  );
}

export default App;