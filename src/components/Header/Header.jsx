// src/Components/Header/Header.jsx
import React, { useState, useLayoutEffect } from 'react';
import { useWindowScroll } from 'react-use';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo_black from '../../assets/FitFusionLogoBlack.png';
import styles from './Header.module.scss';
import Cookies from 'js-cookie';

const Header = () => {
  const [stateHeader, setStateHeader] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para abrir/cerrar el menú
  const { y } = useWindowScroll();
  const location = useLocation();
  const navigate = useNavigate();

  // Efecto para cambiar el estado del header al hacer scroll
  useLayoutEffect(() => {
    if (y >= 50) {
      setStateHeader(true);
    } else {
      setStateHeader(false);
    }
  }, [y]);

  const handleLogout = () => {
    console.log('Sesión cerrada');
    Cookies.remove('accessToken');
    navigate('/');
  };

  const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Rutinas', path: '/routines' },
    { name: 'Estadísticas', path: '/estadisticas' },
    { name: 'Perfil', path: '/perfil' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Cambiar el estado del menú
  };

  return (
    <header className={`${styles.header} ${stateHeader ? styles.scrolled : ''}`}>
      {/* Logo y nombre */}
      <div className={styles.logoContainer}>
        <img src={Logo_black} alt="Fitfusion Logo" className={styles.logo} />
        <h1 className={styles.title}>FitFusion</h1>
      </div>

      {/* Menú de navegación */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.showMenu : ''}`}>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`${styles.navItem} ${location.pathname === item.path ? styles.active : ''}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Botón de hamburguesa */}
      <div className={styles.hamburgerIcon} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      {/* Botón de cerrar sesión */}
      <button onClick={handleLogout} className={styles.logoutButton}>
        Cerrar Sesión
      </button>
    </header>
  );
};

export default Header;
