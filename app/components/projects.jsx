"use client";
import "../css/projects.css"
import {FaGithub} from "react-icons/fa";

export default function Projects() {

  const projects = [
    {
      name: "Licorería Fake Gods",
      desc: "Aplicacion de escritorio para la automatización con caja registradora",
      tech: ["C#", ".NET", "SqlServer"],
      github: "https://github.com/San-Cejota/Licoreria_FG",
      img: "/projects/licoreria.png"
    },
    {
      name: "Alforga",
      desc: "Sistema para automizar horas de labor social",
      tech: ["HTML", "CSS", "JavaScript", "Firebase"],
      github: "https://github.com/San-Cejota/Alforgaa",
      img: "/projects/alforga.png"
    },
    {
      name: "Climax",
      desc: "Landing moderna con animaciones",
      tech: ["Angular", "SCSS","TypeScript", "JavaScript"],
      github: "https://github.com/San-Cejota/openweather",
      img: "/projects/climax.png"
    },
    {
      name: "FakeGods",
      desc: "E-commerce de zapatos con carrito y gestión de productos",
      tech: ["React", "Node.js", "JavaScript", "CSS"],
      github: "https://github.com/San-Cejota/FakeGods",
      img: "/projects/fg.png"
    },
    {
      name: "Day_Off",
      desc: "Aplicacion movil para jovenes universitarios que buscan trabajo a tiempo parcial",
      tech: ["React", "Node.js", "Typescript", "CSS"],
      github: "https://github.com/San-Cejota/Day_Off",
      img: "/projects/day_off.png"
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