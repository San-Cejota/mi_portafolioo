import Image from "next/image";
import "../css/presentacion.css"

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-image">
          <Image
            src="/carlos.jpeg"
            alt="Carlos Delgado"
            width={200}
            height={40}
          />
        </div>

        <div className="about-content">
          <p className="about-subtitle">CONÓCEME</p>
          <h2>¿Quién Soy?</h2>

          <p className="about-text">
            Soy Carlos Delgado, desarrollador Front-End y .NET con pasión por
            crear interfaces modernas, funcionales y responsivas.
            Me gusta aprender nuevas tecnologías, trabajar en equipo
            y resolver problemas reales con código.
          </p>

          <div className="about-info">
            <span>📍 Medellín, Colombia</span>
            <span>💻 Front-End Developer</span>
            <span>⚡ En constante aprendizaje</span>
          </div>
        </div>

      </div>
    </section>
  );
}