// src/Components/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  const footerLinks = [
    { name: 'Términos y Condiciones', path: '/terms' },
    { name: 'Preguntas Frecuentes', path: '/faq' },
    { name: 'Quiénes Somos', path: '/about' },
  ];

  return (
    <footer className={styles.footer}>
      {/* Copyright */}
      <div className={styles.copyright}>
        <p>© {new Date().getFullYear()} Fitfusion. Todos los derechos reservados.</p>
      </div>
      {/* Enlaces del footer */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {footerLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} className={styles.footerLink}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
