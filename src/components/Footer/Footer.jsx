// src/Components/Footer/Footer.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para abrir/cerrar el menú
  const location = useLocation();

  const footerLinks = [
    { name: 'Términos y condiciones', path: '/terms' },
    { name: 'Preguntas frecuentes', path: '/faq' },
    { name: 'Quiénes somos', path: '/about' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Cambiar el estado del menú
  };

  return (
    <footer className={styles.footer}>
      {/* Copyright */}
      <div className={styles.copyright}>
        <p>© 2024 FitFusion. Todos los derechos reservados.</p>
      </div>

      {/* Menú de navegación */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.showMenu : ''}`}>
        <ul className={styles.navList}>
          {footerLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`${styles.navItem} ${
                  location.pathname === link.path ? styles.active : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Botón de menú hamburguesa */}
      <div className={styles.hamburgerIcon} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      {/* Botón de Instagram */}
      <a
        href="https://www.instagram.com/fitusionapp/profilecard/?igsh=MW91MXBjcjB4d3N4ZQ=="
        target="_blank"
        rel="noopener noreferrer"
        className={styles.instagramButton}
      >
        <FaInstagram />
      </a>
    </footer>
  );
};

export default Footer;
