"use client";
import "../css/skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaCode,
  FaDatabase,
  FaPython
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiDotnet,
  SiPhp
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

export default function Skills() {

  const skills = [
    { name: "HTML", icon: <FaHtml5 />, desc: "Estructura semántica web" },
    { name: "CSS", icon: <FaCss3Alt />, desc: "Diseño moderno y responsive" },
    { name: "JavaScript", icon: <FaJs />, desc: "Lógica y manipulación del DOM" },
    { name: "React", icon: <FaReact />, desc: "Interfaces dinámicas y componentes" },
    { name: "Next.js", icon: <SiNextdotjs />, desc: "SSR y optimización de apps" },
    { name: ".NET", icon: <SiDotnet />, desc: "Backend robusto y APIs" },
    { name: "C#", icon: <TbBrandCSharp />, desc: "Programación orientada a objetos" },
    { name: "SQL Server", icon: <FaDatabase />, desc: "Gestión de bases de datos" },
    { name: "Git", icon: <FaGitAlt />, desc: "Control de versiones" },
    { name: "Python", icon: <FaPython />, desc: "Automatización y scripting" },
    { name: "PHP", icon: <SiPhp />, desc: "Desarrollo web backend" }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <h2>Habilidades</h2>

<div className="skills-grid">
  {skills.map((skill, index) => (
    <div className="skill-card" key={index}>
      
      <div className="skill-icon">{skill.icon}</div>
      
      <h3>{skill.name}</h3>

      <p className="skill-desc">{skill.desc}</p>

    </div>
  ))}
</div>

      </div>
    </section>
  );
}