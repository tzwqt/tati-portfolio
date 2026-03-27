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
};

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
    description:
      "Develop C++ systems for autonomous and driver-controlled robotics, focusing on debugging, performance optimization, and competition reliability.",
    tag: "Robotics",
  },
  {
    title: "Software Engineering Intern (Unpaid)",
    org: "ExxonMobil x HISD",
    period: "2026",
    description:
      "Built and deployed a web-based prototype to reduce material documentation loss through secure login workflows, QR and document scanning, timestamp tracking, and structured file handling.",
    tag: "Internship",
  },
  {
    title: "Lead Programmer",
    org: "FIRST Robotics",
    period: "2025–Present",
    description:
      "Program robot systems using Java, working with sensors, control logic, and team-based engineering workflows in competition environments.",
    tag: "Software",
  },
  {
    title: "Engineering Notebook Coordinator",
    org: "Robotics Team",
    period: "2025–Present",
    description:
      "Document design processes, testing iterations, and engineering decisions to support team organization and competition readiness.",
    tag: "Leadership",
  },
  {
    title: "Volunteer Coordinator",
    org: "National Honor Society",
    period: "2025–Present",
    description:
      "Organize and promote service opportunities while encouraging student involvement in community engagement.",
    tag: "Service",
  },
  {
    title: "Houston SPCA Volunteer",
    org: "Animal Advocacy",
    period: "2024–Present",
    description:
      "Completed 200+ hours supporting animal care, adoption events, wildlife support, and equine and farm training programs.",
    tag: "Community",
  },
];

const projects = [
  {
    title: "ExxonMobil Material Documentation Accountability Portal",
    category: "Software Engineering / Internship",
    blurb:
      "Developed a live React-based prototype for ExxonMobil x HISD to improve document traceability, accountability, and secure handling of material records.",
    details:
      "Designed and deployed a professional prototype that simulates secure worker sign-in, QR/document scanning, upload workflows, timestamp tracking, and enterprise-focused accountability. Built with React, Vite, Tailwind CSS, GitHub, and Vercel. This project demonstrates a real-world implementation of software engineering principles in an enterprise environment.",
  },
  {
    title: "VEX Robotics Competition Systems",
    category: "Programming",
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
  { label: "Robotics Programs", value: "3" },
  { label: "FIRST Robotics", value: "Lead Programmer" },
  { label: "Service Hours", value: "200+" },
  { label: "Focus Areas", value: "Code + Design" }
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
              I’m a student builder with experience in coding, robotics, engineering, and
              design. As a lead programmer for both VEX V5 and FIRST Robotics, I work with
              C++ and Java while also exploring architecture through AutoCAD, Revit, and
              human-centered design ideas.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-neutral-700">
          <div className="flex items-center gap-2 rounded-full bg-white dark:bg-neutral-900 px-4 py-2 shadow-sm border border-white dark:border-neutral-800 text-neutral-700 dark:text-neutral-200"><Code2 className="h-4 w-4" /> 5+ Years Experience • AutoCAD Certified</div>
          </div>
          <div className="flex flex-wrap gap-3">
          <a href="#projects" className="rounded-2xl px-5 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-lg hover:-translate-y-0.5 transition">              View My Work
            </a>
            <a href="#contact" className="rounded-2xl px-5 py-3 bg-white dark:bg-neutral-900 border border-white dark:border-neutral-800 shadow-sm hover:-translate-y-0.5 transition inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-100">              Contact Me <ChevronRight className="h-4 w-4" />
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
           <p className="text-2xl md:text-3xl font-semibold text-neutral-800 dark:text-neutral-100">{stat.value}</p>
           <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">{stat.label}</p>
              </div>
          ))}
          <div className="col-span-2 rounded-[2rem] bg-neutral-900 text-white p-6 shadow-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-white/70">Personal Brand</p>
            <p className="mt-3 text-lg leading-relaxed text-white/90">
              Clean code, creative thinking, team leadership, and technical curiosity.
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
              className="rounded-[2rem] bg-white dark:bg-neutral-900 p-6 border border-white dark:border-neutral-800 shadow-lg">
<div className="inline-block text-xs rounded-full bg-orange-100 dark:bg-neutral-800 px-3 py-1 mb-4 text-neutral-700 dark:text-neutral-200">
                  {item.tag}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mt-1">{item.org}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">{item.period}</p>
              <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">{item.description}</p>
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

    {activeProject.title === "ExxonMobil Material Documentation Accountability Portal" && (
      <>
        <a
          href={projectLinks.exxonLive}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl px-5 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-lg hover:-translate-y-0.5 transition"
        >
          Live Site
        </a>
        <a
          href={projectLinks.exxonGithub}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl px-5 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm hover:-translate-y-0.5 transition inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-100"
        >
          GitHub
        </a>
      </>
    )}
  </div>
</motion.div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-12">
  <div className="rounded-[2rem] bg-white/90 dark:bg-neutral-900/90 border border-white dark:border-neutral-800 p-8 shadow-lg">
    <h2 className="text-3xl font-bold mb-4">Space & Engineering Interests</h2>
    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl">
      I’m deeply interested in aerospace engineering and space exploration, especially how software
      and robotics power real-world systems like spacecraft navigation, autonomous control,
      and mission design. I’m excited by the idea of building technology that operates
      beyond Earth and solves complex engineering challenges.
    </p>
  </div>
</section>

      <section className="max-w-6xl mx-auto px-6 py-12" id="portfolio">
  <div className="flex items-center gap-3 mb-6">
    <h2 className="text-3xl font-bold">Architecture Portfolio</h2>
  </div>

  <div className="grid md:grid-cols-3 gap-6">
  <div className="rounded-[2rem] bg-white dark:bg-neutral-900 border border-white dark:border-neutral-800 shadow-lg overflow-hidden hover:-translate-y-1 hover:shadow-xl transition">      
    <img
        src="/arch-concept.jpg"
        alt="Conceptual architecture design"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold">Conceptual Design</h3>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Explored how architecture can shape emotion, belonging, and well-being
          through expressive forms and nature-integrated ideas.
        </p>
      </div>
    </div>

    <div className="rounded-[2rem] bg-white dark:bg-neutral-900 border border-white dark:border-neutral-800 shadow-lg overflow-hidden hover:-translate-y-1 hover:shadow-xl transition">
      <img
        src="/arch-cad.jpg"
        alt="AutoCAD and Revit work"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold">AutoCAD + Revit</h3>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Created floor plans, technical drawings, and design studies focused on
          dimensional accuracy, structure, and presentation.
        </p>
      </div>
    </div>

    <div className="rounded-[2rem] bg-white dark:bg-neutral-900 border border-white dark:border-neutral-800 shadow-lg overflow-hidden hover:-translate-y-1 hover:shadow-xl transition">
      <img
        src="/arch-building.jpg"
        alt="Architectural building design"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold">Design Philosophy</h3>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400 leading-relaxed">
          I want to create spaces that feel welcoming, alive, and human—where
          thoughtful design improves both environment and everyday experience.
        </p>
      </div>
    </div>
  </div>
</section>

      <section className="max-w-6xl mx-auto px-6 py-12" id="vision">
      <div className="rounded-[2rem] bg-white/90 dark:bg-neutral-900/90 border border-white dark:border-neutral-800 p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">My Vision</h2>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl">
          I believe design should feel human. My goal is to create technology, architecture,
           and systems that not only function efficiently, but also improve how people 
           feel, connect, and experience the world around them. By combining 
           engineering, creativity, and innovation, I aim to build solutions that support
           my community, uplift underserved populations, and create a more thoughtful and connected future.
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
            <a href={contactLinks.linkedin} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/15 p-4 hover:bg-white/5 transition flex items-center gap-3">
              <Linkedin className="h-5 w-5" /> LinkedIn
            </a>
            <a href={contactLinks.github} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/15 p-4 hover:bg-white/5 transition flex items-center gap-3">
              <Github className="h-5 w-5" /> GitHub
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