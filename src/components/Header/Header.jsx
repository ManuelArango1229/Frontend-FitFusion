// src/Components/Header/Header.jsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo_black from '../../assets/FitFusionLogoBlack.png';
import styles from './Header.module.scss';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Sesión cerrada');
    navigate('/login');
  };

  const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Rutinas', path: '/rutinas' },
    { name: 'Estadisticas', path: '/estadisticas' },
    { name: 'Perfil', path: '/perfil' },
  ];

  return (
    <header className={styles.header}>
      {/* Logo y nombre */}
      <div className={styles.logoContainer}>
        <img src={Logo_black} alt="Fitfusion Logo" className={styles.logo} />
        <h1 className={styles.title}>FitFusion</h1>
      </div>

      {/* Menú de navegación */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`${styles.navItem} ${
                  location.pathname === item.path ? styles.active : ''
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Botón de cerrar sesión */}
      <button onClick={handleLogout} className={styles.logoutButton}>
        Cerrar Sesión
      </button>
    </header>
  );
};

export default Header;
