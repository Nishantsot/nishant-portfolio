import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const profile = {
  name: "Nishant Kumar",
  role: "Full Stack Developer",
  email: "nishantkumar8357@gmail.com",
  phone: "9821712040",
  location: "East Delhi",
  github: "https://github.com/Nishantsot",
  linkedin:
    "https://www.linkedin.com/in/nishant-kumar-756469270/",
};

const skills = [
  "Java",
  "JavaScript",
  "Python",
  "React.js",
  "Spring Boot",
  "Spring Security",
  "REST API",
  "MySQL",
  "PostgreSQL",
  "Bootstrap",
  "Git",
  "GitHub",
  "Postman",
  "Vercel",
  "Render",
  "Axios",
];

const projects = [
  {
    number: "01",
    title: "Society Portal",
    category: "FULL STACK",
    description:
      "A role-based society management system for societies, events, announcements, requests and student activities.",
    technologies: [
      "React.js",
      "Spring Boot",
      "Spring Security",
      "MySQL",
    ],
    link: "https://society-frontend-39w5.onrender.com",
    color: "violet",
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
    color: "cyan",
  },
  {
    number: "03",
    title: "Fraud Detection",
    category: "MACHINE LEARNING",
    description:
      "A machine learning system for detecting fraudulent credit card transactions using logistic regression.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],
    link: "#",
    color: "pink",
  },
];

function GalaxyBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width;
    let height;
    let animationFrame;

    const stars = [];
    const dust = [];
    const shootingStars = [];

    const mouse = {
      x: 0,
      y: 0,
    };

    function resize() {
      width = canvas.width = window.innerWidth * devicePixelRatio;
      height = canvas.height = window.innerHeight * devicePixelRatio;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(
        devicePixelRatio,
        0,
        0,
        devicePixelRatio,
        0,
        0
      );
    }

    function createStars() {
      stars.length = 0;
      dust.length = 0;

      const count =
        window.innerWidth < 700 ? 700 : 1500;

      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          radius: Math.random() * 1.5 + 0.2,
          alpha: Math.random(),
          speed: Math.random() * 0.4 + 0.05,
          twinkle: Math.random() * 0.04 + 0.005,
          depth: Math.random(),
        });
      }

      for (let i = 0; i < 900; i++) {
        dust.push({
          angle: Math.random() * Math.PI * 2,
          radius:
            Math.random() *
            Math.min(window.innerWidth, window.innerHeight) *
            0.75,
          size: Math.random() * 1.5 + 0.2,
          alpha: Math.random() * 0.4,
          speed:
            (Math.random() * 0.0007 + 0.0001) *
            (Math.random() > 0.5 ? 1 : -1),
        });
      }
    }

    function createShootingStar() {
      shootingStars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight * 0.5,
        length: Math.random() * 100 + 80,
        speed: Math.random() * 9 + 7,
        life: 1,
      });
    }

    function drawNebula() {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;

      const gradient = ctx.createRadialGradient(
        cx,
        cy,
        30,
        cx,
        cy,
        Math.max(window.innerWidth, window.innerHeight) * 0.7
      );

      gradient.addColorStop(
        0,
        "rgba(160, 130, 255, 0.13)"
      );

      gradient.addColorStop(
        0.25,
        "rgba(90, 120, 255, 0.07)"
      );

      gradient.addColorStop(
        0.55,
        "rgba(40, 160, 255, 0.035)"
      );

      gradient.addColorStop(
        1,
        "rgba(0,0,0,0)"
      );

      ctx.fillStyle = gradient;

      ctx.fillRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );
    }

    function drawMilkyWay(time) {
      const cx =
        window.innerWidth / 2 +
        mouse.x * 0.03;

      const cy =
        window.innerHeight / 2 +
        mouse.y * 0.03;

      ctx.save();

      ctx.translate(cx, cy);

      ctx.rotate(-0.28);

      for (let i = 0; i < 14; i++) {
        const gradient =
          ctx.createLinearGradient(
            -window.innerWidth,
            0,
            window.innerWidth,
            0
          );

        gradient.addColorStop(
          0,
          "rgba(80,70,180,0)"
        );

        gradient.addColorStop(
          0.2,
          "rgba(130,100,255,0.02)"
        );

        gradient.addColorStop(
          0.5,
          `rgba(240,235,255,${0.015 + i * 0.002})`
        );

        gradient.addColorStop(
          0.8,
          "rgba(100,130,255,0.02)"
        );

        gradient.addColorStop(
          1,
          "rgba(0,0,0,0)"
        );

        ctx.fillStyle = gradient;

        const y =
          Math.sin(time * 0.00015 + i) * 20 +
          (i - 7) * 15;

        ctx.fillRect(
          -window.innerWidth,
          y,
          window.innerWidth * 2,
          35
        );
      }

      ctx.restore();

      ctx.save();

      ctx.translate(cx, cy);
      ctx.rotate(-0.28);

      dust.forEach((p) => {
        p.angle += p.speed;

        const x =
          Math.cos(p.angle) * p.radius;

        const y =
          Math.sin(p.angle) *
          p.radius *
          0.22;

        const distance =
          Math.sqrt(x * x + y * y);

        const fade =
          1 -
          distance /
            (Math.min(
              window.innerWidth,
              window.innerHeight
            ) * 0.8);

        if (fade <= 0) return;

        ctx.beginPath();

        ctx.fillStyle = `rgba(190,190,255,${
          p.alpha * fade
        })`;

        ctx.arc(
          x,
          y,
          p.size,
          0,
          Math.PI * 2
        );

        ctx.fill();
      });

      ctx.restore();
    }

    function drawStars() {
      stars.forEach((star) => {
        star.alpha += star.twinkle;

        if (star.alpha >= 1 || star.alpha <= 0.15) {
          star.twinkle *= -1;
        }

        star.y += star.speed;

        if (star.y > window.innerHeight) {
          star.y = 0;
        }

        const px =
          star.x +
          mouse.x * star.depth * 0.015;

        const py =
          star.y +
          mouse.y * star.depth * 0.015;

        ctx.beginPath();

        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;

        ctx.arc(
          px,
          py,
          star.radius,
          0,
          Math.PI * 2
        );

        ctx.fill();
      });
    }

    function drawShootingStars() {
      shootingStars.forEach((star, index) => {
        star.x += star.speed;
        star.y += star.speed * 0.25;
        star.life -= 0.018;

        const gradient =
          ctx.createLinearGradient(
            star.x,
            star.y,
            star.x - star.length,
            star.y - star.length * 0.25
          );

        gradient.addColorStop(
          0,
          `rgba(255,255,255,${star.life})`
        );

        gradient.addColorStop(
          1,
          "rgba(120,180,255,0)"
        );

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;

        ctx.beginPath();

        ctx.moveTo(
          star.x,
          star.y
        );

        ctx.lineTo(
          star.x - star.length,
          star.y - star.length * 0.25
        );

        ctx.stroke();

        if (
          star.life <= 0 ||
          star.x > window.innerWidth + 200
        ) {
          shootingStars.splice(index, 1);
        }
      });

      if (
        Math.random() < 0.008 &&
        shootingStars.length < 3
      ) {
        createShootingStar();
      }
    }

    function animate(time) {
      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );

      drawNebula();

      drawMilkyWay(time);

      drawStars();

      drawShootingStars();

      animationFrame =
        requestAnimationFrame(animate);
    }

    function mouseMove(e) {
      mouse.x =
        e.clientX -
        window.innerWidth / 2;

      mouse.y =
        e.clientY -
        window.innerHeight / 2;
    }

    resize();
    createStars();

    window.addEventListener(
      "resize",
      () => {
        resize();
        createStars();
      }
    );

    window.addEventListener(
      "mousemove",
      mouseMove
    );

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "mousemove",
        mouseMove
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="galaxy-canvas"
    />
  );
}

function FloatingObjects() {
  return (
    <div className="floating-space">

      <motion.div
        className="floating-object code-orb"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {"</>"}
      </motion.div>

      <motion.div
        className="floating-object js-orb"
        animate={{
          y: [0, 30, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        JS
      </motion.div>

      <motion.div
        className="floating-object java-orb"
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        JAVA
      </motion.div>

      <div className="planet-mini">
        <div />
      </div>

    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const { scrollYProgress } =
    useScroll();

  const rotation =
    useTransform(
      scrollYProgress,
      [0, 1],
      [0, 360]
    );

  return (
    <div className="portfolio">

      <GalaxyBackground />

      <div className="gradient-overlay" />

      <FloatingObjects />

      {/* NAVBAR */}

      <nav className="navbar">

        <a
          href="#home"
          className="logo"
        >
          <span className="logo-symbol">
            N
          </span>

          <span>
            NISHANT
            <small>
              FULL STACK DEVELOPER
            </small>
          </span>
        </a>

        <button
          className="menu"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          ☰
        </button>

        <div
          className={`nav-links ${
            menuOpen ? "open" : ""
          }`}
        >
          {[
            "Home",
            "About",
            "Skills",
            "Projects",
            "Experience",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() =>
                setMenuOpen(false)
              }
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="nav-button"
        >
          Let's Talk ↗
        </a>

      </nav>

      {/* HERO */}

      <section
        id="home"
        className="hero"
      >

        <motion.div
          className="hero-content"
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

          <div className="status">
            <span />
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p className="hero-label">
            HELLO, I'M
          </p>

          <h1>
            Nishant
            <span>Kumar.</span>
          </h1>

          <div className="hero-role">
            FULL STACK
            <span>
              DEVELOPER
            </span>
          </div>

          <p className="hero-description">
            I build modern, secure and
            scalable web applications
            using React.js, Java,
            Spring Boot and modern
            technologies.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-button"
            >
              Explore My Universe
              <span>↘</span>
            </a>

            <a
              href="#contact"
              className="secondary-button"
            >
              Contact Me
            </a>

          </div>

          <div className="socials">

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href={`mailto:${profile.email}`}
            >
              Email ↗
            </a>

          </div>

        </motion.div>

        {/* HERO GALAXY */}

        <motion.div
          className="hero-galaxy"
          style={{
            rotate: rotation,
          }}
        >

          <div className="galaxy-core" />

          <div className="galaxy-ring ring-a" />
          <div className="galaxy-ring ring-b" />
          <div className="galaxy-ring ring-c" />

          <div className="galaxy-particle p1" />
          <div className="galaxy-particle p2" />
          <div className="galaxy-particle p3" />
          <div className="galaxy-particle p4" />

        </motion.div>

        <div className="scroll-down">
          <span>
            SCROLL TO EXPLORE
          </span>
          ↓
        </div>

      </section>

      {/* STATS */}

      <section className="stats">

        <Stat
          number="03+"
          text="PROJECTS"
        />

        <Stat
          number="10+"
          text="TECHNOLOGIES"
        />

        <Stat
          number="96%"
          text="ML ACCURACY"
        />

        <Stat
          number="01"
          text="IBM TRAINING"
        />

      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="section"
      >

        <SectionTitle
          number="01"
          title="About Me"
          subtitle="THE DEVELOPER BEHIND THE CODE"
        />

        <div className="about-grid">

          <motion.div
            className="terminal"
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

            <div className="terminal-top">
              <span />
              <span />
              <span />

              <small>
                nishant@universe:~
              </small>
            </div>

            <div className="terminal-body">

              <p>
                <b>const</b>{" "}
                developer = {"{"}
              </p>

              <p className="indent">
                name:
                <i>
                  "Nishant Kumar"
                </i>,
              </p>

              <p className="indent">
                role:
                <i>
                  "Full Stack Developer"
                </i>,
              </p>

              <p className="indent">
                stack:
                <i>
                  "React + Java"
                </i>,
              </p>

              <p className="indent">
                backend:
                <i>
                  "Spring Boot"
                </i>,
              </p>

              <p className="indent">
                database:
                <i>
                  "MySQL"
                </i>,
              </p>

              <p className="indent">
                passion:
                <i>
                  "Building Products"
                </i>
              </p>

              <p>
                {"};"}
              </p>

            </div>

          </motion.div>

          <motion.div
            className="about-text"
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
          >

            <span className="mini-label">
              WHO I AM
            </span>

            <h2>
              Turning ideas into
              <span>
                digital reality.
              </span>
            </h2>

            <p>
              Enthusiastic Full Stack Developer
              with hands-on experience building
              responsive web applications using
              HTML, CSS, JavaScript and React.js,
              alongside backend development
              using Java and Spring Boot.
            </p>

            <p>
              I enjoy solving real-world problems,
              designing secure systems and
              creating clean, scalable applications.
            </p>

            <div className="about-pills">

              <span>
                Clean Code
              </span>

              <span>
                Secure APIs
              </span>

              <span>
                Responsive UI
              </span>

              <span>
                Problem Solving
              </span>

            </div>

          </motion.div>

        </div>

      </section>

      {/* SKILLS */}

      <section
        id="skills"
        className="section"
      >

        <SectionTitle
          number="02"
          title="Skills"
          subtitle="MY TECHNOLOGY CONSTELLATION"
        />

        <div className="skills-grid">

          {skills.map(
            (skill, index) => (

              <motion.div
                className="skill-card"
                key={skill}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay:
                    index * 0.035,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.04,
                }}
              >

                <div className="skill-orbit">
                  ◈
                </div>

                <span>
                  {skill}
                </span>

              </motion.div>

            )
          )}

        </div>

      </section>

      {/* PROJECTS */}

      <section
        id="projects"
        className="section projects"
      >

        <SectionTitle
          number="03"
          title="Projects"
          subtitle="MISSIONS COMPLETED"
        />

        <div className="projects-grid">

          {projects.map(
            (project, index) => (

              <motion.article
                className={`project-card ${project.color}`}
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay:
                    index * 0.12,
                }}
                whileHover={{
                  y: -15,
                }}
              >

                <div className="project-glow" />

                <div className="project-top">

                  <span>
                    {project.number}
                  </span>

                  <small>
                    {project.category}
                  </small>

                </div>

                <div className="project-planet">

                  <div />

                </div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="tech-list">

                  {project.technologies.map(
                    (tech) => (
                      <span
                        key={tech}
                      >
                        {tech}
                      </span>
                    )
                  )}

                </div>

                {project.link !==
                  "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View Project
                    ↗
                  </a>
                )}

              </motion.article>

            )
          )}

        </div>

      </section>

      {/* EXPERIENCE */}

      <section
        id="experience"
        className="section"
      >

        <SectionTitle
          number="04"
          title="Experience"
          subtitle="MY JOURNEY"
        />

        <motion.div
          className="experience-card"
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

          <div className="experience-line" />

          <div className="experience-dot" />

          <div className="experience-date">
            JUL 2024 — AUG 2024
          </div>

          <h3>
            Summer Trainee
          </h3>

          <h4>
            IBM
          </h4>

          <p>
            Completed a 90-hour in-house
            summer trainee program in
            Artificial Intelligence.
          </p>

          <ul>

            <li>
              Learned foundational
              Artificial Intelligence
              concepts.
            </li>

            <li>
              Studied Machine Learning
              and Neural Networks.
            </li>

            <li>
              Explored real-world
              AI applications.
            </li>

          </ul>

        </motion.div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="section contact"
      >

        <motion.div
          className="contact-box"
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
        >

          <div className="contact-stars" />

          <span className="mini-label">
            05 / CONTACT
          </span>

          <h2>
            Let's build something
            <span>
              extraordinary.
            </span>
          </h2>

          <p>
            Have a project, opportunity
            or just want to connect?
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="primary-button"
          >
            Start a Conversation ↗
          </a>

          <div className="contact-info">

            <a
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </a>

            <a
              href={`tel:${profile.phone}`}
            >
              {profile.phone}
            </a>

            <span>
              {profile.location}
            </span>

          </div>

        </motion.div>

      </section>

      {/* FOOTER */}

      <footer>

        <div className="footer-logo">
          <span>
            N
          </span>

          NISHANT KUMAR
        </div>

        <p>
          Designed & built somewhere
          between Earth and the Milky Way.
        </p>

        <div className="footer-links">

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href={`mailto:${profile.email}`}
          >
            Email
          </a>

        </div>

      </footer>

    </div>
  );
}

function Stat({
  number,
  text,
}) {
  return (
    <div className="stat">

      <strong>
        {number}
      </strong>

      <span>
        {text}
      </span>

    </div>
  );
}

function SectionTitle({
  number,
  title,
  subtitle,
}) {
  return (
    <motion.div
      className="section-title"
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

      <span className="section-number">
        {number}
      </span>

      <div>

        <small>
          {subtitle}
        </small>

        <h2>
          {title}
        </h2>

      </div>

    </motion.div>
  );
}

export default App;