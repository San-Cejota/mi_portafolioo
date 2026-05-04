"use client";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../css/contacto.css";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.sendForm(
      "service_f9b8psd",
      "template_9zgn3ae",
      form.current,
      "jXlInzdu8z9IQRzFb"
    )
    .then(() => {
      setStatus("sent");
      form.current.reset();

      setTimeout(() => setStatus(""), 3000);
    })
    .catch(() => {
      setStatus("");
    });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contacto</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Tu nombre" required />
        <input type="email" name="user_email" placeholder="Tu correo" required />
        <textarea name="message" placeholder="Tu mensaje" required></textarea>

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Enviando..." : "Enviar"}
        </button>

      <p className={`msg ${status}`}>
  {status === "sent" && (
    <span className="success">
      
      <svg className="check" viewBox="0 0 52 52">
        <circle className="check-circle" cx="26" cy="26" r="25"/>
        <path className="check-mark" d="M14 27l7 7 16-16"/>
      </svg>

      Mensaje enviado
    </span>
  )}
</p>
      </form>
    </section>
  );
}