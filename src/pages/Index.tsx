import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Code2, ChevronRight, Download } from "lucide-react";

const contactLinks = {
  email: "mailto:tahti07@icloud.com",
  linkedin: "https://www.linkedin.com/in/tahti08/",
  github: "https://github.com/tzwqt",
  resume: "/tati-resume.pdf",
};
const projectLinks = {
  vex: "/vex-notebook.pdf",
  architecture: "/architecture-portfolio.pdf",
  exxonLive: "https://exxon-hisd-portal.vercel.app",
  exxonGithub: "https://github.com/tzwqt/exxon-hisd-portal",
  buildsbyTati: "https://builds-by-tati.vercel.app/",
  kaesKloset: "https://kaes-kloset.vercel.app/",
  tlcMinistries: "https://tlc-ministries.vercel.app/",
};

const codingProjects = [
  {
    title: "Builds by Tati",
    description: "Custom website design and development service offering professional sites at accessible prices — built for small businesses, creators, and anyone who needs a quality web presence without the big agency cost.",
    tag: "Freelance",
    link: projectLinks.buildsbyTati,
  },
  {
    title: "ExxonMobil Material Documentation Portal",
    description: "A live React-based prototype built for ExxonMobil x HISD featuring secure worker sign-in, QR/document scanning, upload workflows, and timestamp tracking for enterprise material accountability.",
    tag: "Internship",
    link: projectLinks.exxonLive,
  },
  {
    title: "Kae's Kloset",
    description: "Client project for a student at HCU — a clean, modern e-commerce style site built to showcase and sell their clothing collection.",
    tag: "Client Work",
    link: projectLinks.kaesKloset,
  },
  {
    title: "TLC Ministries",
    description: "Website built for a ministry client, providing a welcoming online presence with information about services, community events, and outreach programs.",
    tag: "Client Work",
    link: projectLinks.tlcMinistries,
  },
];

const skillGroups = {
  Programming: ["Python", "C++", "Java", "Arduino", "Git", "VS Code"],
  Engineering: ["AutoCAD", "Mechanical Engineering", "Hardware Engineering", "Raspberry Pi", "Robotics"],
  Creative: ["Photography", "PowerPoint", "Word", "Debate", "Technical Writing"],
};

const experience = [
  {
    title: "Lead Programmer",
    org: "VEX V5 Robotics Team 6079R",
    period: "2024–Present",
    bullets: ["C++ autonomous & driver-controlled systems", "Odometry logic & performance optimization", "Competition-ready debugging under pressure"],
    tag: "Robotics",
  },
  {
    title: "Software Engineering Intern",
    org: "ExxonMobil x HISD",
    period: "2026",
    bullets: ["Built React + Vite prototype for material tracking", "Secure login, QR scanning & timestamp logging", "Deployed via GitHub + Vercel"],
    tag: "Internship",
  },
  {
    title: "Lead Programmer",
    org: "FIRST Robotics",
    period: "2025–Present",
    bullets: ["Java programming for sensors & control logic", "Team-based engineering & competition workflows"],
    tag: "Software",
  },
  {
    title: "Engineering Notebook Coordinator",
    org: "Robotics Team",
    period: "2025–Present",
    bullets: ["Documented design process & testing iterations", "Supported competition readiness & team organization"],
    tag: "Leadership",
  },
  {
    title: "Volunteer Coordinator",
    org: "National Honor Society",
    period: "2025–Present",
    bullets: ["Organized community service opportunities", "Encouraged student involvement in outreach"],
    tag: "Service",
  },
  {
    title: "Houston SPCA Volunteer",
    org: "Animal Advocacy",
    period: "2024–Present",
    bullets: ["200+ hours across care & adoption programs", "Wildlife support, equine & farm training"],
    tag: "Community",
  },
  {
    title: "Young Texan Ambassador",
    org: "Keep Texas Beautiful – Greater Houston Cohort",
    period: "2025–Present",
    bullets: ["Selected for competitive Greater Houston Cohort", "Representing youth in environmental stewardship statewide"],
    tag: "Ambassador",
    link: "https://ktb.org/our-work/young-texan-ambassadors/",
  },
];

const projects = [
  {
    title: "VEX Robotics Competition Systems",
    category: "Programming | Notebook Coordinator",
    blurb:
      "Developed and optimized autonomous and driver-controlled systems in C++ for competitive robotics, focusing on reliability,fast iteration, and real-time performance under pressure.",
    details:
      "Focused on debugging, performance optimization, odometry logic, and fast iteration under competition pressure.",
  },
  {
    title: "Architectural Design Portfolio",
    category: "Architecture / Design",
    blurb:
      "Designed concepts exploring how buildings can shape emotion, connection, and well-being.",
    details:
      "Used AutoCAD and Revit to create floor plans, sketches, and visual ideas centered on nature-integrated and human-centered design.",
  },
  {
    title: "Student Advocacy Initiative",
    category: "Leadership",
    blurb:
      "Led a petition campaign supported by 200+ students and community members.",
    details:
      "Demonstrated leadership, communication, organization, and community-building through advocacy work.",
  },
];

const stats = [
  { label: "Programming Languages", value: "4+" },
  { label: "Robotics Programs Led", value: "2" },
  { label: "Client Sites Shipped", value: "8" },
  { label: "Volunteer Hours", value: "200+" },
  { label: "Certifications", value: "CSWA + AutoCAD" },
];

export default function InteractiveResumeSite() {
  const [activeGroup, setActiveGroup] = useState("Programming");
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [darkMode, setDarkMode] = useState(false);
  const [resumeLoading, setResumeLoading] = useState(false);

  const groupButtons = useMemo(() => Object.keys(skillGroups), []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleResumeClick = () => {
    setResumeLoading(true);

    setTimeout(() => {
      setResumeLoading(false);
    }, 1200);
  };

  return (
<div className="relative min-h-screen bg-gradient-to-b from-rose-50 via-orange-50 to-emerald-50 text-neutral-900 overflow-hidden dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 dark:text-neutral-100 transition-colors duration-300">      <section className="max-w-6xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur px-4 py-2 shadow-sm border border-white dark:border-neutral-800">
  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
  Houston, TX • 2026 Graduate • Software, Robotics, and Engineering Internships experience
  </span>
</div>
<button
  onClick={() => setDarkMode(!darkMode)}
  className="inline-flex items-center rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur px-4 py-2 shadow-sm border border-white dark:border-neutral-800 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-white dark:hover:bg-neutral-800 transition"
>
  {darkMode ? "Light Mode" : "Dark Mode"}
</button>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Tatianna Hernupont
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-200 font-medium">
            Software Developer
            </p>
            <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
              I build software, lead robotics programs, and ship real products — from
              competition floors to enterprise deployments. C++, Java, React, and everything
              in between.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-neutral-700">
          <div className="flex items-center gap-2 rounded-full bg-white dark:bg-neutral-900 px-4 py-2 shadow-sm border border-white dark:border-neutral-800 text-neutral-700 dark:text-neutral-200"><Code2 className="h-4 w-4" /> 5+ Years Experience</div>
          </div>
          <div className="flex flex-wrap gap-3">
          <a href="#projects" className="rounded-2xl px-5 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-lg hover:-translate-y-0.5 transition">             
             View My Work
            </a>
            <a href="#contact" className="rounded-2xl px-5 py-3 bg-white dark:bg-neutral-900 border border-white dark:border-neutral-800 shadow-sm hover:-translate-y-0.5 transition inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-100">              
              Contact Me <ChevronRight className="h-4 w-4" />
            </a>
            <a
  href={contactLinks.resume}
  target="_blank"
  rel="noopener noreferrer"
  onClick={handleResumeClick}
  className="rounded-2xl px-5 py-3 bg-white dark:bg-neutral-900 border border-white dark:border-neutral-800 shadow-sm hover:-translate-y-0.5 transition inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-100"
>
  {resumeLoading ? (
    <>
      <span className="h-4 w-4 rounded-full border-2 border-neutral-400 border-t-transparent animate-spin"></span>
      Opening Resume...
    </>
  ) : (
    <>
      <Download className="h-4 w-4" />
      Resume PDF
    </>
  )}
</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[2rem] bg-white/90 dark:bg-neutral-900/90 backdrop-blur p-6 shadow-lg border border-white dark:border-neutral-800">             
           <p className="text-xl md:text-3xl font-semibold text-neutral-800 dark:text-neutral-100">{stat.value}</p>
           <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">{stat.label}</p>
              </div>
          ))}
          <div className="col-span-2 rounded-[2rem] bg-neutral-900 text-white p-6 shadow-xl">
            <p className="text-lg leading-relaxed text-white/90">
              Build technology that solves real problems for real people. Engineering and design should uplift communities — not just impress them.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8" id="skills">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-3xl font-bold">Interactive Skills</h2>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          {groupButtons.map((group) => (
            <button
              key={group}
              onClick={() => setActiveGroup(group)}
              className={`rounded-full px-4 py-2 border shadow-sm transition ${
                activeGroup === group
                  ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                  : "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 hover:-translate-y-0.5"
              }`}
            >
              {group}
            </button>
          ))}
        </div>

        <div className="rounded-[2rem] bg-white/90 dark:bg-neutral-900/90 border border-white dark:border-neutral-800 p-6 shadow-lg">
                  <div className="flex flex-wrap gap-3">
          {skillGroups[activeGroup].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ y: -4, scale: 1.04 }}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-rose-100 to-emerald-100 dark:bg-neutral-800 
                dark:from-neutral-800 dark:to-neutral-800 border 
                border-white dark:border-neutral-700 shadow-sm dark:!text-neutral-200">
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12" id="experience">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {experience.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              className="rounded-[2rem] bg-white dark:bg-neutral-900 p-6 border border-white dark:border-neutral-800 shadow-lg flex flex-col">
<div className="inline-block text-xs rounded-full bg-orange-100 dark:bg-neutral-800 px-3 py-1 mb-4 text-neutral-700 dark:text-neutral-200">
                  {item.tag}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mt-1">{item.org}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">{item.period}</p>
              <ul className="mt-4 space-y-1 flex-1">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              {"link" in item && item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition"
                >
                  Learn more <ChevronRight className="h-3 w-3" />
                </a>
              )}
                          </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12" id="projects">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-6">
          <div className="space-y-4">
            {projects.map((project) => (
              <button
              key={project.title}
              onClick={() => {
                setActiveProject(project);
              }}
              className={`w-full text-left rounded-[2rem] p-5 border shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  activeProject.title === project.title
? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
: "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"
                }`}
              >
                <p className="text-sm opacity-80">{project.category}</p>
                <h3 className="text-xl font-semibold mt-1">{project.title}</h3>
                <p className="mt-2 opacity-90">{project.blurb}</p>
              </button>
            ))}
          </div>

          <motion.div
  key={activeProject.title}
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  className="rounded-[2rem] bg-white dark:bg-neutral-900 p-8 border border-white dark:border-neutral-800 shadow-xl hover:shadow-2xl transition duration-300"
>
  <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
    Selected Project
  </p>
  <h3 className="text-3xl font-bold mt-3">{activeProject.title}</h3>
  <p className="text-neutral-500 dark:text-neutral-400 mt-2">{activeProject.category}</p>

  {activeProject.title === "Architectural Design Portfolio"? (
    <div className="mt-6 grid grid-cols-2 gap-4">
      <img src="/arch1.jpg" alt="arch preview 1" className="rounded-xl shadow-md hover:scale-105 transition" />
      <img src="/arch2.jpg" alt="arch preview 2" className="rounded-xl shadow-md hover:scale-105 transition" />
      <img src="/arch3.jpg" alt="arch preview 3" className="rounded-xl shadow-md hover:scale-105 transition" />
      <img src="/arch4.jpg" alt="arch preview 4" className="rounded-xl shadow-md hover:scale-105 transition" />
    </div>
  ) : activeProject.title === "VEX Robotics Competition Systems" ? (
    <div className="mt-6 grid grid-cols-2 gap-4">
      <img src="/vex1.png" alt="VEX preview 1" className="rounded-xl shadow-md hover:scale-105 transition" />
      <img src="/vex2.png" alt="VEX preview 2" className="rounded-xl shadow-md hover:scale-105 transition" />
      <img src="/vex3.png" alt="VEX preview 3" className="rounded-xl shadow-md hover:scale-105 transition" />
      <img src="/vex4.png" alt="VEX preview 4" className="rounded-xl shadow-md hover:scale-105 transition" />
    </div>
    ) :activeProject.title === "Student Advocacy Initiative" ? (
      <div className="mt-6 space-y-6">
    
        {/*HERO FLYER */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/GerhardFlyer.png"
            alt="Student advocacy flyer"
            className="w-full object-cover hover:scale-[1.02] transition"
          />
        </div>
    
        {/*IMPACT */}
        <div className="rounded-xl bg-neutral-100 dark:bg-neutral-800 p-5">
          <p className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Impact
          </p>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">
            200+ Supporters
          </p>
        </div>
    
        {/*WHAT YOU DID */}
        <div className="rounded-xl bg-neutral-100 dark:bg-neutral-800 p-5">
          <p className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            My Role
          </p>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">
            Designed and distributed promotional materials, organized outreach efforts,
            and led a student-driven campaign to raise awareness and gather support.
          </p>
        </div>
    
        {/*DESCRIPTION */}
        <div className="rounded-xl bg-neutral-100 dark:bg-neutral-800 p-5">
          <p className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Description
          </p>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">
            {activeProject.details}
          </p>
        </div>
    
      </div>
    ) : (
      <p className="mt-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
        {activeProject.details}
      </p>
  )}

  <div className="mt-6 flex flex-wrap gap-3">
    {activeProject.title === "Architectural Design Portfolio" && (
      <a
        href={projectLinks.architecture}
        target="_blank"
        rel="noreferrer"
        className="rounded-2xl px-5 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-lg hover:-translate-y-0.5 transition"
      >
        Open Portfolio PDF
      </a>
    )}

    {activeProject.title === "VEX Robotics Competition Systems" && (
      <a
        href={projectLinks.vex}
        target="_blank"
        rel="noreferrer"
        className="rounded-2xl px-5 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-lg hover:-translate-y-0.5 transition"
      >
        Open Notebook PDF
      </a>
    )}

  </div>
</motion.div>
        </div>
      </section>
      <section className="py-16" id="coding-projects" style={{background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)"}}>
        <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-3xl font-bold text-white">Coding Projects</h2>
        </div>
        <p className="text-white/50 text-sm mb-8">Live sites — click any card to visit</p>
        <div className="grid md:grid-cols-2 gap-6">
          {codingProjects.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -6 }}
              className="rounded-[2rem] bg-white/10 backdrop-blur border border-white/10 p-6 shadow-lg flex flex-col group hover:bg-white/15 transition"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="inline-block text-xs rounded-full bg-white/20 px-3 py-1 text-white/80">
                  {project.tag}
                </div>
                <ChevronRight className="h-4 w-4 text-white/30 group-hover:text-white/80 transition mt-0.5 shrink-0" />
              </div>
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-white/60 leading-relaxed flex-1">{project.description}</p>
            </motion.a>
          ))}
        </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
  <div className="rounded-[2rem] bg-neutral-900 text-white p-8 shadow-xl">
    <p className="text-sm uppercase tracking-[0.2em] text-white/50 mb-4">What drives me</p>
    <p className="text-2xl md:text-3xl font-semibold leading-snug text-white/90 max-w-3xl">
      "I code to help people reach their dreams. I serve because the world needs people who show up. I lead because it’s a gift — and I’m implementing that into every path I take."
    </p>
  </div>
</section>


<section className="max-w-6xl mx-auto px-6 py-12" id="contact">
        <div className="rounded-[2rem] bg-neutral-900 text-white p-8 md:p-10 shadow-2xl">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-3 text-white/75 max-w-2xl">
            I’m interested in internships, software engineering opportunities, robotics work, and creative technical projects.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <a href={contactLinks.email} className="rounded-2xl border border-white/15 p-4 hover:bg-white/5 transition flex items-center gap-3">
              <Mail className="h-5 w-5" /> tahti07@icloud.com
            </a>
            <a href={contactLinks.github} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/15 p-4 hover:bg-white/5 transition flex items-center gap-3">
              <Github className="h-5 w-5" /> GitHub
            </a>
            <a href={contactLinks.linkedin} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/15 p-4 hover:bg-white/5 transition flex items-center gap-3">
              <Linkedin className="h-5 w-5" /> LinkedIn
            </a>
            <div className="rounded-2xl border border-white/15 p-4 flex items-center gap-3">
              <MapPin className="h-5 w-5" /> Houston, TX
            </div>
          </div>
        </div>
        <footer className="mt-24 py-12 text-center">

  {/* ⚡ ICON */}
  <div className="flex justify-center mb-6">
    <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-rose-200 bg-rose-50 shadow-sm">
      <svg viewBox="0 0 100 100" className="w-6 h-6 fill-green-800">
        <polygon points="45,10 70,10 55,40 75,40 30,90 45,55 30,55" />
      </svg>
    </div>
  </div>

  {/* NAME */}
  <p className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
    Tatianna Hernupont
  </p>

  {/* SUBTEXT */}
  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
    Software Developer • Robotics • Design
  </p>

  {/* DIVIDER */}
  <div className="w-16 h-[2px] bg-rose-200 mx-auto my-6 rounded-full"></div>

  {/* COPYRIGHT */}
  <p className="text-xs text-neutral-400">
    © 2026 Tatianna Hernupont.
  </p>

</footer>
      </section>
    </div>
  );
}