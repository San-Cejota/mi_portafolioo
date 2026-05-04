import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../css/footer.css";
export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <h3>Carlos Delgado</h3>
        <p>Desarrollador de Software</p>

        <div className="footer-socials">
          <a href="https://github.com/San-Cejota" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/carlos-delgado-b8a766256/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="mailto:delgadokarlos09@gmail.com" target="_blank">
            <FaEnvelope />
          </a>
        </div>

        <span className="footer-copy">
          © {new Date().getFullYear()} Todos los derechos reservados
        </span>

      </div>

    </footer>
  );
}