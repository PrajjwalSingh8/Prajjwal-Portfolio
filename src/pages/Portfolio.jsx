
import './portfolio.css';

const skills = [
  {
    title: 'Development',
    icon: '</>',
    items: ['Frontend Development', 'Backend Development', 'Full-Stack Development'],
  },
  {
    title: 'Programming & Database',
    icon: '⌘',
    items: ['JavaScript', 'C++', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frameworks & Tools',
    icon: '⚙',
    items: ['React', 'Vite', 'Git', 'GitHub'],
  },
];

const projects = [
  {
    number: '01',
    name: 'WeatherNova',
    category: 'Weather Dashboard',
    status: 'Completed',
    description:
      'A responsive weather dashboard concept designed to present weather conditions and forecast information through a clean and intuitive interface.',
    stack: ['React', 'JavaScript', 'CSS'],
    visual: 'weather',
    link: 'https://github.com/PrajjwalSingh8',
  },
  {
    number: '02',
    name: 'Advanced Calculator',
    category: 'Frontend Application',
    status: 'Completed',
    description:
      'An interactive browser-based calculator with a focus on responsive design, user-friendly controls and reliable input handling.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    visual: 'calculator',
    link: 'https://github.com/PrajjwalSingh8',
  },
  {
    number: '03',
    name: 'Celebrare Gallery',
    category: 'Photo Gallery Website',
    status: 'Completed',
    description:
      'A responsive React photo gallery website built with reusable components, clean layouts and user-friendly navigation.',
    stack: ['React', 'Vite', 'JavaScript', 'CSS'],
    visual: 'gallery',
    link: 'https://github.com/PrajjwalSingh8/celebrare-photo-gallery',
  },
  {
    number: '04',
    name: 'TraceMind',
    category: 'AI Incident Intelligence Dashboard',
    status: 'Concept',
    description:
      'An AI-focused dashboard concept designed to organize incident information and present meaningful insights through a structured interface.',
    stack: ['Dashboard UI', 'AI Concept'],
    visual: 'trace',
    link: 'https://github.com/PrajjwalSingh8',
  },
  {
    number: '05',
    name: 'SkillNexis Week 1',
    category: 'Full-Stack Development Practice',
    status: 'In Progress',
    description:
      'A React-based development project featuring a personal portfolio, JSON-powered blog interface, reusable components and a store page.',
    stack: ['React', 'Vite', 'JavaScript', 'CSS'],
    visual: 'skillnexis',
    link: 'https://github.com/PrajjwalSingh8',
  },
];

const socialLinks = [
  {
    name: 'GitHub',
    short: 'GH',
    url: 'https://github.com/PrajjwalSingh8',
  },
  {
    name: 'LinkedIn',
    short: 'IN',
    url: 'https://www.linkedin.com/in/prajjwalsingh8/',
  },
  {
    name: 'LeetCode',
    short: 'LC',
    url: 'https://leetcode.com/u/PrajjwalSingh23/',
  },
];

function SectionHeading({ number, label, title, description }) {
  return (
    <div className="pf-heading">
      <div className="pf-eyebrow">
        <span>{number}</span>
        {label}
      </div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="pf-social-links">
      {socialLinks.map((item) => (
        <a
          href={item.url}
          key={item.name}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${item.name}`}
          className="pf-social-link"
        >
          <span className="pf-social-short">{item.short}</span>
          {item.name}
          <span className="pf-arrow">↗</span>
        </a>
      ))}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="pf-project-card">
      <div className={`pf-project-visual pf-${project.visual}`}>
        <div className="pf-visual-top">
          <span>PROJECT / {project.number}</span>
          <span>↗</span>
        </div>

        <div className="pf-visual-center">
          {project.visual === 'weather' && (
            <>
              <span className="pf-art-icon">☀</span>
              <strong>WeatherNova</strong>
              <small>Weather Dashboard</small>
            </>
          )}

          {project.visual === 'calculator' && (
            <div className="pf-calc-art">
              <span>128 × 8</span>
              <strong>1,024</strong>
              <div>＋　−　×　÷</div>
            </div>
          )}

          {project.visual === 'gallery' && (
            <div className="pf-gallery-art">
              {Array.from({ length: 6 }).map((_, index) => (
                <span key={index}>▧</span>
              ))}
            </div>
          )}

          {project.visual === 'trace' && (
            <>
              <span className="pf-art-icon">◈</span>
              <strong>TraceMind</strong>
              <small>Incident Intelligence</small>
            </>
          )}

          {project.visual === 'skillnexis' && (
            <>
              <span className="pf-art-icon">✳</span>
              <strong>SkillNexis</strong>
              <small>Full-Stack Development</small>
            </>
          )}
        </div>
      </div>

      <div className="pf-project-content">
        <div className="pf-project-meta">
          <span>{project.category}</span>
          <span className={`pf-status pf-status-${project.status.toLowerCase().replace(' ', '-')}`}>
            {project.status}
          </span>
        </div>

        <h3>{project.name}</h3>
        <p>{project.description}</p>

        <div className="pf-project-tags">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="pf-project-link"
        >
          View on GitHub <span>↗</span>
        </a>
      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <main className="pf-page">

      {/* HERO SECTION */}
      <section className="pf-hero pf-container" id="home">
        <div className="pf-hero-content">
          <div className="pf-availability">
            <span className="pf-online-dot" />
            Open to learning & opportunities
          </div>

          <p className="pf-intro">HELLO, I'M PRAJJWAL SINGH</p>

          <h1>
            Building the <span>digital future</span> through code.
          </h1>

          <p className="pf-hero-description">
            I'm a Computer Science and Engineering student passionate about
            technology, software development and problem-solving. I enjoy
            building responsive web experiences and exploring full-stack
            development.
          </p>

          <div className="pf-hero-buttons">
            <a href="#projects" className="pf-btn pf-btn-primary">
              Explore Projects <span>↗</span>
            </a>
            <a href="#contact" className="pf-btn pf-btn-outline">
              Let's Connect
            </a>
          </div>

          <div className="pf-hero-social">
            <span className="pf-social-label">FIND ME ON</span>
            <SocialLinks />
          </div>
        </div>

        <div className="pf-profile-area">
          <div className="pf-profile-glow" />

          <div className="pf-profile-ring">
            <div className="pf-profile-image">
              <span className="pf-profile-fallback">PS</span>
              <img
                src="/profile.jpg"
                alt="Prajjwal Singh"
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          <div className="pf-profile-caption">
            <span className="pf-caption-dot" />
            <div>
              <strong>Prajjwal Singh</strong>
              <p>B.Tech CSE · Developer</p>
            </div>
          </div>

          <div className="pf-floating-card pf-floating-top">
            <span>⌘</span>
            <div>
              <strong>Developer</strong>
              <p>Always learning</p>
            </div>
          </div>

          <div className="pf-floating-card pf-floating-bottom">
            <span>✦</span>
            <div>
              <strong>Problem Solver</strong>
              <p>Building & improving</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="pf-section pf-container" id="about">
        <SectionHeading
          number="01"
          label="ABOUT ME"
          title="A little about my journey."
          description="Learning, building and growing with every project."
        />

        <div className="pf-about-grid">
          <div className="pf-about-main">
            <span className="pf-card-icon">✦</span>
            <h3>Curious mind. Creative builder.</h3>

            <p>
              I'm pursuing a B.Tech in Computer Science and Engineering at
              KCC Institute of Technology & Management, Greater Noida.
            </p>

            <p>
              My interests include frontend development, backend development,
              full-stack engineering, SQL and emerging technologies. I enjoy
              learning through practical projects and improving my
              problem-solving skills with C++.
            </p>

            <a href="#projects" className="pf-text-link">
              Discover my work <span>↗</span>
            </a>
          </div>

          <div className="pf-about-side">
            <div className="pf-info-card">
              <span>01</span>
              <div>
                <h4>Learn</h4>
                <p>Build strong fundamentals in technology.</p>
              </div>
            </div>

            <div className="pf-info-card">
              <span>02</span>
              <div>
                <h4>Build</h4>
                <p>Turn ideas into useful digital experiences.</p>
              </div>
            </div>

            <div className="pf-info-card">
              <span>03</span>
              <div>
                <h4>Improve</h4>
                <p>Learn through feedback, practice and consistency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="pf-section pf-section-alt" id="skills">
        <div className="pf-container">
          <SectionHeading
            number="02"
            label="TECHNICAL SKILLS"
            title="My technology toolkit."
            description="Technologies and development areas I work with and continue to develop."
          />

          <div className="pf-skills-grid">
            {skills.map((group) => (
              <div className="pf-skill-card" key={group.title}>
                <div className="pf-skill-icon">{group.icon}</div>
                <h3>{group.title}</h3>

                <div className="pf-skill-list">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="pf-section pf-container" id="projects">
        <SectionHeading
          number="03"
          label="SELECTED WORK"
          title="Projects that bring ideas to life."
          description="A selection of projects and development work from my learning journey."
        />

        <div className="pf-project-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.number} />
          ))}
        </div>

        <div className="pf-github-banner">
          <div>
            <span className="pf-intro">MORE ON GITHUB</span>
            <h3>Explore my code and development journey.</h3>
            <p>Visit my GitHub profile to explore my repositories and projects.</p>
          </div>

          <a
            href="https://github.com/PrajjwalSingh8"
            target="_blank"
            rel="noreferrer"
            className="pf-btn pf-btn-primary"
          >
            Visit GitHub ↗
          </a>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="pf-section pf-section-alt" id="education">
        <div className="pf-container">
          <SectionHeading
            number="04"
            label="EDUCATION"
            title="My academic journey."
            description="The educational foundation behind my technology journey."
          />

          <div className="pf-timeline">
            <div className="pf-timeline-item">
              <span className="pf-timeline-dot" />
              <div className="pf-timeline-date">CURRENT</div>
              <div className="pf-timeline-content">
                <span className="pf-timeline-tag">UNDERGRADUATE</span>
                <h3>B.Tech – Computer Science & Engineering</h3>
                <p>KCC Institute of Technology & Management</p>
                <small>Greater Noida, Uttar Pradesh</small>
              </div>
            </div>

            <div className="pf-timeline-item">
              <span className="pf-timeline-dot" />
              <div className="pf-timeline-date">2024</div>
              <div className="pf-timeline-content">
                <span className="pf-timeline-tag">CLASS XII</span>
                <h3>Senior Secondary Education</h3>
                <p>Little Flower School</p>
                <small>CBSE</small>
              </div>
            </div>

            <div className="pf-timeline-item">
              <span className="pf-timeline-dot" />
              <div className="pf-timeline-date">2021</div>
              <div className="pf-timeline-content">
                <span className="pf-timeline-tag">CLASS X</span>
                <h3>Secondary Education</h3>
                <p>St. Joseph's School</p>
                <small>CBSE</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="pf-section pf-container" id="contact">
        <div className="pf-contact-card">
          <span className="pf-intro">05 / GET IN TOUCH</span>

          <h2>
            Let's build something <span>meaningful.</span>
          </h2>

          <p>
            Interested in technology, collaboration or development
            opportunities? Let's connect and exchange ideas.
          </p>

          <div className="pf-contact-buttons">
            <a
              href="https://www.linkedin.com/in/prajjwalsingh8/"
              target="_blank"
              rel="noreferrer"
              className="pf-btn pf-btn-primary"
            >
              Connect on LinkedIn ↗
            </a>

            <a
              href="https://github.com/PrajjwalSingh8"
              target="_blank"
              rel="noreferrer"
              className="pf-btn pf-btn-outline"
            >
              View GitHub ↗
            </a>
          </div>

          <div className="pf-contact-social">
            <SocialLinks />
          </div>
        </div>
      </section>

    </main>
  );
}
