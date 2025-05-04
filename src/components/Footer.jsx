import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { Logo3DCanvas } from './canvas';

const Footer = () => {
  return (
    <footer className="bg-black py-10 relative z-10">
      <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <div className="logo-3d-container mr-0" style={{ width: "50px", height: "50px" }}>
                <Logo3DCanvas />
              </div>
              <p className="font-bold cursor-pointer flex items-center ml-0">
                <span className="text-[#D4AF37] text-[16px]">PREMIUM</span>
                <span className="text-white text-[14px] ml-1">CHAUFFEUR</span>
              </p>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Ihr exklusiver Chauffeurservice für höchste Ansprüche. Luxus, Komfort und Sicherheit auf allen Wegen.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 border-b border-[#D4AF37] pb-2">Schnellzugriff</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 border-b border-[#D4AF37] pb-2">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400 text-sm">
                <FaPhone className="text-[#D4AF37] mr-2" />
                <a href="tel:+491234567890" className="hover:text-[#D4AF37] transition-colors">+49 123 456 7890</a>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <MdEmail className="text-[#D4AF37] mr-2" />
                <a href="mailto:info@premium-chauffeur.de" className="hover:text-[#D4AF37] transition-colors">info@premium-chauffeur.de</a>
              </li>
              <li className="flex items-start text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-[#D4AF37] mr-2 mt-1" />
                <span>Luxusstraße 123<br />10115 Berlin<br />Deutschland</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 border-b border-[#D4AF37] pb-2">Folgen Sie uns</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center border border-[#333] hover:border-[#D4AF37] transition-colors">
                <FaWhatsapp className="text-[#D4AF37]" />
              </a>
              <a href="mailto:info@premium-chauffeur.de" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center border border-[#333] hover:border-[#D4AF37] transition-colors">
                <MdEmail className="text-[#D4AF37]" />
              </a>
              <a href="https://instagram.com/premium_chauffeur" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center border border-[#333] hover:border-[#D4AF37] transition-colors">
                <FaInstagram className="text-[#D4AF37]" />
              </a>
              <a href="tel:+491234567890" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center border border-[#333] hover:border-[#D4AF37] transition-colors">
                <FaPhone className="text-[#D4AF37]" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              24/7 Verfügbarkeit für Ihre Anfragen
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#222] mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Premium Chauffeur. Alle Rechte vorbehalten.
          </p>
          <div className="flex justify-center mt-2 space-x-4 text-xs text-gray-600">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">AGB</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
