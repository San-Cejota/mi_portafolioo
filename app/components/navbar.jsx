"use client";

import { useState } from "react";
import "../css/nav.css"

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">
        <span className="circle">C</span>

        <div>
          <h2>Carlos Delgado</h2>
          <p>Developer</p>
        </div>
      </div>

      {/* MENU PC */}
      <ul className="desktop-menu">
        <li><a href="#about">Quien Soy</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      {/* BOTON HAMBURGUESA / X */}
      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        <span className={open ? "bar bar1 active" : "bar bar1"}></span>
        <span className={open ? "bar bar2 active" : "bar bar2"}></span>
        <span className={open ? "bar bar3 active" : "bar bar3"}></span>
      </button>

      {/* MENU MOVIL */}
      {open && (
        <div className="mobile-menu">
          <a href="#about" onClick={closeMenu}>Quien Soy</a>
          <a href="#skills" onClick={closeMenu}>Habilidades</a>
          <a href="#projects" onClick={closeMenu}>Proyectos</a>
          <a href="#contact" onClick={closeMenu}>Contacto</a>
        </div>
      )}
    </nav>
  );
}