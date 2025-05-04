import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';
import { Logo3DCanvas } from './canvas';
import { FaWhatsapp, FaInstagram, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});

  useEffect(() => {
    if (toggle) {
      setActive('');
      setMobileDropdowns({});
    }
  }, [toggle]);

  const toggleMobileDropdown = (id) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const renderDropdownItems = (items, isSecondary) => (
    <div className={`dropdown-content ${isSecondary ? 'w-full' : ''}`}>
      {items.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="dropdown-item"
          onClick={() => {
            setActive(item.title);
            if (isSecondary) {
              setToggle(false);
            }
          }}
        >
          {item.title}
        </a>
      ))}
    </div>
  );

  const renderNavLinks = (isSecondary) => (
    <ul className={`list-none ${isSecondary ? 'flex flex-col sm:hidden' : 'hidden sm:flex'} ${isSecondary ? '' : 'flex-row'} ${isSecondary ? 'gap-2' : 'gap-4'}`}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? 'text-white' : isSecondary ? 'text-secondary' : 'text-white'
          } hover:text-white text-[14px] font-medium cursor-pointer ${link.hasDropdown && !isSecondary ? 'dropdown' : ''}`}
        >
          {link.hasDropdown ? (
            isSecondary ? (
              // Mobile dropdown
              <>
                <div
                  className="flex justify-between items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMobileDropdown(link.id);
                  }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActive(link.title);
                      setToggle(false);
                    }}
                  >
                    {link.title}
                  </a>
                  <span className={`dropdown-arrow ${mobileDropdowns[link.id] ? 'transform rotate-180' : ''}`}>▼</span>
                </div>
                {mobileDropdowns[link.id] && renderDropdownItems(link.dropdownItems, isSecondary)}
              </>
            ) : (
              // Desktop dropdown
              <>
                <a
                  href={`#${link.id}`}
                  onClick={() => {
                    setActive(link.title);
                  }}
                >
                  {link.title}
                  <span className="dropdown-arrow">▼</span>
                </a>
                {renderDropdownItems(link.dropdownItems, isSecondary)}
              </>
            )
          ) : (
            <a
              href={`#${link.id}`}
              onClick={() => {
                setActive(link.title);
                if (isSecondary) {
                  setToggle(false);
                }
              }}
            >
              {link.title}
            </a>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-1 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex items-center max-w-7xl mx-auto">
          <div className="flex items-center justify-between w-full">
            <Link
              to="/"
              className="flex items-center"
              onClick={() => {
                setActive('');
                window.scrollTo(0, 0);
              }}
            >
              <div className="logo-3d-container mr-0" style={{ width: "70px", height: "70px" }}>
                <Logo3DCanvas />
              </div>
              <p className="font-bold cursor-pointer flex items-center ml-0">
                <span className="text-[#D4AF37] text-[18px] sm:text-[20px]">PREMIUM</span>
                <span className="text-white text-[16px] sm:text-[18px] ml-1">CHAUFFEUR</span>
              </p>
            </Link>

            <div className="hidden sm:flex items-center">
              <div className="social-icons flex items-center mr-8">
                <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                  <FaWhatsapp className="text-[#D4AF37] text-xl mx-2 hover:text-white transition-colors" />
                </a>
                <a href="mailto:info@premium-chauffeur.de" className="social-icon-link">
                  <MdEmail className="text-[#D4AF37] text-xl mx-2 hover:text-white transition-colors" />
                </a>
                <a href="https://instagram.com/premium_chauffeur" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                  <FaInstagram className="text-[#D4AF37] text-xl mx-2 hover:text-white transition-colors" />
                </a>
                <a href="tel:+491234567890" className="social-icon-link">
                  <FaPhone className="text-[#D4AF37] text-xl mx-2 hover:text-white transition-colors" />
                </a>
              </div>
              {renderNavLinks(false)}
            </div>
          </div>
          <div className="sm:hidden flex flex-1 justify-end items-center ml-2">
            <div className="social-icons-mobile flex items-center mr-4">
              <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <FaWhatsapp className="text-[#D4AF37] text-lg mx-1 hover:text-white transition-colors" />
              </a>
              <a href="mailto:info@premium-chauffeur.de" className="social-icon-link">
                <MdEmail className="text-[#D4AF37] text-lg mx-1 hover:text-white transition-colors" />
              </a>
              <a href="https://instagram.com/premium_chauffeur" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <FaInstagram className="text-[#D4AF37] text-lg mx-1 hover:text-white transition-colors" />
              </a>
              <a href="tel:+491234567890" className="social-icon-link">
                <FaPhone className="text-[#D4AF37] text-lg mx-1 hover:text-white transition-colors" />
              </a>
            </div>
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[18px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`p-3 black-gradient absolute top-16 right-0 mx-2 my-2 min-w-[200px] z-10 rounded-xl foggy-glass ${
                toggle ? 'flex' : 'hidden'
              }`}
            >
              {renderNavLinks(true)}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
