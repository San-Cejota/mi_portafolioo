"use client";
import "../css/projects.css"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {

  const projects = [
    {
      name: "Licorería Fake Gods",
      desc: "E-commerce con carrito y gestión de productos",
      tech: ["C#", ".NET", "SqlServer"],
      github: "https://github.com/San-Cejota/Licoreria_FG",
      img: "/projects/licoreria.png"
    },
    {
      name: "Alforga",
      desc: "Sistema de inventario y ventas",
      tech: ["HTML", "CSS", "JavaScript", "Firebase"],
      github: "https://github.com/San-Cejota/Alforgaa",
      img: "/projects/alforga.png"
    },
    {
      name: "Climax",
      desc: "Landing moderna con animaciones",
      tech: ["Next.js"],
      github: "https://github.com/San-Cejota/openweather",
      img: "/projects/climax.png"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <h2>Proyectos</h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>

              <div className="project-img">
                <img src={p.img} alt={p.name} />
              </div>

              <div className="project-content">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>

                <div className="project-tech">
                  {p.tech.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={p.github} target="_blank">
                    <FaGithub />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}