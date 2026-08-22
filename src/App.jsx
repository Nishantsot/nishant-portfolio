import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const contact = {
  phone: "7982544789",
  email: "Rajneeshofficial97@gmail.com",
  address: "23-D, PKT B-1, Mayur Vihar Phase-3, Delhi-110096",
};

const skills = [
  "Strong organizational and time-management skills",
  "Exceptional communication and interpersonal skills",
  "Ability to work independently and as part of a team",
  "Detail-oriented and able to handle multiple tasks simultaneously",
  "Experience in managing budgets and handling financial documents",
];

const technicalSkills = [
  "TALLY and BUSY ERP",
  "CompuTax Office",
  "Clear Tax",
  "MS Office",
  "E MAIL",
  "Notice & Drafting",
  "Leadership",
];

const experiences = [
  {
    period: "July 2021 — May 2023",
    role: "Accounts Executive",
    company: "Ampuesto Consultancy Pvt. Ltd.",
    points: [
      "Managed Accounting and Compliance for different businesses.",
      "Filing of GST, TDS and ITR Returns.",
      "Duly filing of GST, Income and TDS returns and making the tax payment accordingly.",
      "Prepared invoices and managed Google Drive for MIS purposes.",
      "Handled confidential information and documents with discretion and maintained their proper organization.",
      "Conducted GST Registration and Income Tax Filing Process.",
    ],
  },
  {
    period: "October 2023 — Present",
    role: "Senior Accountant",
    company: "Finest Consultancy Pvt. Ltd.",
    points: [
      "Managed Accounting and Compliance of clients from various firms.",
      "Prepared MIS reports, presentations, and other workings.",
      "Duly filing of GST, Income and TDS returns and making the tax payment accordingly.",
      "Handled and maintained client Net Banking.",
      "Conducted and co-operated with Senior Management for Tax Audit, GST Audit and Financial Audit on yearly basis.",
      "Conducted Business registrations like GST Registrations, MSME Registration, GEM Registration etc.",
      "Prepared E-Invoicing, E-Way Bill and replied to queries of Government Authorities on demand basis.",
      "Conducted client place visits for accounting on required basis.",
      "Prepared MIS Data for clients to enable financial standing of business and obtain valuable inputs about financial position.",
      "Prepared provisional and projected financial statements for both proprietor and company for CMA data.",
      "Co-ordinated with clients over calls and email to ensure seamless and better understanding of tasks.",
    ],
  },
];

function Stars() {
  const stars = Array.from({ length: 150 });

  return (
    <div className="stars">
      {stars.map((_, index) => (
        <span
          key={index}
          className="star"
          style={{
            "--x": `${(index * 47.31) % 100}%`,
            "--y": `${(index * 73.17) % 100}%`,
            "--delay": `${(index % 8) * 0.6}s`,
            "--size": `${1 + (index % 3) * 0.55}px`,
          }}
        />
      ))}
    </div>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    "Home",
    "About",
    "Experience",
    "Skills",
    "Education",
    "Contact",
  ];

  return (
    <div className="app">

      {/* ================= SPACE BACKGROUND ================= */}

      <div className="space-bg">
        <div className="milky-way" />
        <div className="nebula nebula-a" />
        <div className="nebula nebula-b" />

        <div className="planet planet-a" />
        <div className="planet planet-b" />

        <Stars />
      </div>

      {/* ================= NAVBAR ================= */}

      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>

        <a
          href="#home"
          className="brand"
          onClick={() => setMenuOpen(false)}
        >
          <span>RK</span>

          <div>
            <strong>RAJNEESH</strong>
            <small>ACCOUNTS PROFESSIONAL</small>
          </div>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>

        <a
          className="nav-cta"
          href={`mailto:${contact.email}`}
        >
          Let's Connect ↗
        </a>

      </nav>

      <main>

        {/* ================= HERO ================= */}

        <section id="home" className="hero section">

          <div className="hero-copy">

            <motion.div
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
              }}
            >

              <div className="availability">
                <span />
                ACCOUNTS & TAXATION PROFESSIONAL
              </div>

              <p className="eyebrow">
                WELCOME TO MY DIGITAL UNIVERSE
              </p>

              <h1>
                Rajneesh
                <span>Kumar</span>
              </h1>

              <p className="hero-role">
                Accounts Professional
              </p>

              <p className="hero-text">
                Highly motivated and professional accountant with
                nearly 4 years of experience supporting senior
                executives, managing accounting and taxation
                documents, and communicating with internal and
                external clients.
              </p>

              <div className="actions">

                <a
                  href="#experience"
                  className="primary-btn"
                >
                  Explore Experience ↘
                </a>

                <a
                  href="#contact"
                  className="ghost-btn"
                >
                  Contact Me
                </a>

              </div>

              <div className="quick-contact">

                <a href={`tel:${contact.phone}`}>
                  ☎ {contact.phone}
                </a>

                <a href={`mailto:${contact.email}`}>
                  ✉ {contact.email}
                </a>

              </div>

            </motion.div>

          </div>

          {/* ================= PLANET ================= */}

          <motion.div
            className="orbit-card"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
          >

            <div className="orbit orbit-1" />
            <div className="orbit orbit-2" />

            <div className="accounting-planet">

              <div className="planet-glow" />

              <div className="ledger">

                <div className="ledger-head">
                  ₹ ACCOUNTING
                </div>

                <div className="ledger-line">
                  <span>GST</span>
                  <b>✓</b>
                </div>

                <div className="ledger-line">
                  <span>TDS</span>
                  <b>✓</b>
                </div>

                <div className="ledger-line">
                  <span>ITR</span>
                  <b>✓</b>
                </div>

                <div className="ledger-line">
                  <span>MIS</span>
                  <b>✓</b>
                </div>

              </div>

            </div>

            <div className="floating-chip chip-one">
              GST
            </div>

            <div className="floating-chip chip-two">
              TAX
            </div>

            <div className="floating-chip chip-three">
              MIS
            </div>

          </motion.div>

        </section>

        {/* ================= ABOUT ================= */}

        <section
          id="about"
          className="section"
        >

          <SectionHeading
            number="01"
            title="About Me"
            subtitle="THE PERSON BEHIND THE NUMBERS"
          />

          <div className="about-grid">

            <motion.div
              className="glass-panel summary-panel"
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

              <span className="panel-label">
                PROFILE.LOG
              </span>

              <div className="terminal-code">

                <p>
                  <i>const</i> professional = {"{"}
                </p>

                <p className="indent">
                  name:
                  <em>"Rajneesh Kumar"</em>,
                </p>

                <p className="indent">
                  role:
                  <em>"Accounts Professional"</em>,
                </p>

                <p className="indent">
                  experience:
                  <em>"Nearly 4 Years"</em>,
                </p>

                <p className="indent">
                  focus:
                  <em>"Accounting & Taxation"</em>,
                </p>

                <p className="indent">
                  mindset:
                  <em>"Detail Oriented"</em>
                </p>

                <p>
                  {"};"}
                </p>

              </div>

            </motion.div>

            <motion.div
              className="about-copy"
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >

              <span className="eyebrow">
                WHO I AM
              </span>

              <h2>
                Turning financial data into
                <span>
                  clear business insight.
                </span>
              </h2>

              <p>
                I am a highly motivated and professional
                accountant with nearly four years of experience
                providing high-level support to senior executives.
              </p>

              <p>
                My work includes accounting and taxation
                compliance, GST, TDS and ITR returns,
                financial documents, MIS reporting,
                registrations and client coordination.
              </p>

              <div className="pill-row">

                <span>Accounting</span>
                <span>Taxation</span>
                <span>Compliance</span>
                <span>MIS</span>

              </div>

            </motion.div>

          </div>

        </section>

        {/* ================= EXPERIENCE ================= */}

        <section
          id="experience"
          className="section"
        >

          <SectionHeading
            number="02"
            title="Experience"
            subtitle="MY PROFESSIONAL JOURNEY"
          />

          <div className="timeline">

            {experiences.map((job, index) => (

              <motion.article
                className="experience-card"
                key={job.company}
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
                  delay: index * 0.12,
                }}
              >

                <div className="timeline-dot" />

                <div className="experience-meta">

                  <span>
                    {job.period}
                  </span>

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                <h3>
                  {job.role}
                </h3>

                <h4>
                  {job.company}
                </h4>

                <ul>

                  {job.points.map((point) => (

                    <li key={point}>
                      {point}
                    </li>

                  ))}

                </ul>

              </motion.article>

            ))}

          </div>

        </section>

        {/* ================= SKILLS ================= */}

        <section
          id="skills"
          className="section"
        >

          <SectionHeading
            number="03"
            title="Skills"
            subtitle="TOOLS & STRENGTHS"
          />

          <div className="skills-grid">

            <div className="glass-panel skill-panel">

              <h3>
                Professional Strengths
              </h3>

              {skills.map((skill, index) => (

                <motion.div
                  className="skill-row"
                  key={skill}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                >

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {skill}

                </motion.div>

              ))}

            </div>

            <div className="glass-panel tech-panel">

              <h3>
                Technical Aspect
              </h3>

              <div className="tech-grid">

                {technicalSkills.map((skill) => (

                  <div
                    className="tech-card"
                    key={skill}
                  >
                    <b>◈</b>
                    {skill}
                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* ================= EDUCATION ================= */}

        <section
          id="education"
          className="section"
        >

          <SectionHeading
            number="04"
            title="Education"
            subtitle="ACADEMIC FOUNDATION"
          />

          <div className="education-grid">

            <EducationCard
              title="Bachelor's Degree in B.Com"
              institution="IGNOU University"
              period="2017 — 2020"
            />

            <EducationCard
              title="CMA — Intermediate Completed"
              institution="ICMAI"
              period="2018"
            />

          </div>

        </section>

        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="section contact-section"
        >

          <motion.div
            className="contact-box"
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
          >

            <span className="eyebrow">
              05 / CONTACT
            </span>

            <h2>
              Let's connect across the
              <span>
                financial universe.
              </span>
            </h2>

            <p>
              Have an opportunity, requirement or simply
              want to connect? Reach out.
            </p>

            <div className="contact-actions">

              <a
                href={`mailto:${contact.email}`}
                className="primary-btn"
              >
                Send Email ↗
              </a>

              <a
                href={`tel:${contact.phone}`}
                className="ghost-btn"
              >
                Call Me
              </a>

            </div>

            <div className="contact-details">

              <div>
                <small>EMAIL</small>
                <a href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </div>

              <div>
                <small>PHONE</small>
                <a href={`tel:${contact.phone}`}>
                  {contact.phone}
                </a>
              </div>

              <div>
                <small>LOCATION</small>
                <span>
                  {contact.address}
                </span>
              </div>

            </div>

          </motion.div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-inner">

          <div className="brand">

            <span>RK</span>

            <div>
              <strong>RAJNEESH</strong>
              <small>
                ACCOUNTS PROFESSIONAL
              </small>
            </div>

          </div>

          <p>
            Designed in the Milky Way • Rajneesh Kumar
          </p>

          <a href={`mailto:${contact.email}`}>
            Let's Talk ↗
          </a>

        </div>

      </footer>

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
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
    >

      <span className="heading-number">
        {number}
      </span>

      <div>

        <span className="eyebrow">
          {subtitle}
        </span>

        <h2>
          {title}
        </h2>

      </div>

    </motion.div>
  );
}

function EducationCard({
  title,
  institution,
  period,
}) {
  return (
    <motion.div
      className="education-card"
      whileHover={{
        y: -8,
      }}
    >

      <span className="education-icon">
        ✦
      </span>

      <div>

        <small>
          {period}
        </small>

        <h3>
          {title}
        </h3>

        <p>
          {institution}
        </p>

      </div>

    </motion.div>
  );
}

export default App;