"use client";

import { FaWhatsapp } from "react-icons/fa";
import "../css/boton.css";

export default function WhatsAppBtn() {
  return (
    <a
      href="https://wa.me/573005758109"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
    >
      <FaWhatsapp />
    </a>
  );
}