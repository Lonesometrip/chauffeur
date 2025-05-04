import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
// EarthCanvas removed
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import "../index.css";

const InputField = ({ label, value, onChange, placeholder, name, type }) => (
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">{label}</span>
    <div className="gold-input-border">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full"
      />
    </div>
  </label>
);

const TextAreaField = ({ label, value, onChange, placeholder, name }) => (
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">{label}</span>
    <div className="gold-input-border">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={4}
        className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full resize-none"
      />
    </div>
  </label>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setNameError("");
    setConfirmation("");

    if (!validateEmail(form.email)) {
      setEmailError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }

    if (!form.name.trim()) {
      setNameError("Name ist erforderlich.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_r2i0by4",
        "template_mf5x3bh",
        {
          from_name: form.name,
          to_name: "Premium Chauffeur",
          from_email: form.email,
          to_email: "kontakt@premium-chauffeur.de",
          message: form.message,
        },
        "p-gXzzyvEhPaJ0XA-"
      )
      .then(
        () => {
          setLoading(false);
          setConfirmation("Vielen Dank für Ihre Anfrage! Unser Team wird sich innerhalb von 24 Stunden mit Ihnen in Verbindung setzen.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        }
      )
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setConfirmation("Leider konnte Ihre Anfrage nicht gesendet werden. Bitte kontaktieren Sie uns telefonisch unter +49 123 456789.");
      });
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75]">
        <div className="gold-gradient p-[2px] rounded-[20px] shadow-card">
          <div className="bg-[#0A0A0A] p-8 rounded-[20px]">
        <p className={styles.sectionSubText}>Kontaktieren Sie uns</p>
        <h3 className={`${styles.sectionHeadText}`} style={{ color: '#D4AF37' }}>Contact</h3>

        <div className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mb-5">
          <p>Telefon: +49 123 456789</p>
          <p>Email: info@premium-chauffeur.de</p>
          <p>Adresse: Luxusstraße 123, 10115 Berlin</p>
          <p>24/7 Verfügbarkeit für Ihre Anfragen</p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <InputField
            label="Ihr Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Geben Sie Ihren Namen ein..."
            type="text"
          />
          {nameError && <span className="text-red-500">{nameError}</span>}

          <InputField
            label="E-Mail-Adresse"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Wie lautet Ihre E-Mail-Adresse?"
            type="email"
          />
          {emailError && <span className="text-red-500">{emailError}</span>}

          <TextAreaField
            label="Ihre Anfrage"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Beschreiben Sie Ihren gewünschten Service (Datum, Uhrzeit, Fahrzeug, Anlass, etc.)..."
          />

          <div className="gold-button-container">
            <button
              type="submit"
              className="bg-[#D4AF37] py-3 px-8 rounded-xl outline-none w-fit text-black font-bold shadow-md hover:bg-[#FFD700] transition-colors duration-300"
            >
              {loading ? "Wird gesendet..." : "Senden"}
            </button>
          </div>
          {confirmation && <p className="text-green-500">{confirmation}</p>}
        </form>
          </div>
        </div>
      </motion.div>

      {/* EarthCanvas removed */}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
