import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { FaCog } from 'react-icons/fa'; // Importa el icono de la tuerca
import styles from './Perfil.module.scss';

const Perfil = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Intenta recuperar los datos guardados en localStorage o usa valores predeterminados
  const getStoredData = () => {
    const storedData = localStorage.getItem('perfilData');
    if (storedData) {
      return JSON.parse(storedData);
    }
    return {
      nombre: 'El Verdadero JAMM',
      correo: 'test3@test.com',
      sexo: 'Masculino',
      altura: '2.70 m',
      peso: '68 kg',
      medidas: {
        biceps: '42 cm',
        pectoral: '105 cm',
        cadera: '92 cm',
        cintura: '75 cm',
        pierna: '62 cm',
      },
    };
  };

  const [formData, setFormData] = useState(getStoredData());

  // Guarda los datos en localStorage cada vez que formData cambie
  useEffect(() => {
    localStorage.setItem('perfilData', JSON.stringify(formData));
  }, [formData]);

  const handleOptionsClick = (option) => {
    if (option === 'update') {
      setIsEditing(true);
    } else if (option === 'delete') {
      console.log('Eliminar cuenta');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData) {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        medidas: {
          ...formData.medidas,
          [name]: value,
        },
      });
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log('Datos actualizados:', formData);
  };


  return (
    <div className={styles.container}>
      <div className={styles.imageBackground}></div>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Perfil de Usuario</h1>
        <div className={styles.profileContainer}>
          {/* Botón de opciones en forma de tuerca */}
          <div className={styles.settingsButton}>
            <FaCog />
            <div className={styles.dropdownMenu}>
              <button onClick={() => handleOptionsClick('update')}>Actualizar datos</button>
              <button onClick={() => handleOptionsClick('delete')}>Eliminar cuenta</button>
            </div>
          </div>

          {/* Columna izquierda: Foto y datos básicos */}
          <div className={styles.leftColumn}>
            <div
              className={styles.profileImage}
                          >
              {/* Foto de perfil que se actualizará cuando el usuario elija una nueva imagen */}
            </div>
            <div className={styles.userInfo}>
              {isEditing ? (
                <>
                  <label>
                    Nombre:
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className={styles.inputField} 
                    />
                  </label>
                  <label>
                    Correo:
                    <input
                      type="email"
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      className={styles.inputField} 
                    />
                  </label>
                  <label>
                    Sexo:
                    <select
                      name="sexo"
                      value={formData.sexo}
                      onChange={handleChange}
                      className={styles.inputField} 
                    >
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                    </select>
                  </label>
                  <label>
                    ' 'Altura:
                    <input
                      type="text"
                      name="altura"
                      value={formData.altura}
                      onChange={handleChange}
                      className={styles.inputField} 
                    />
                  </label>
                  <label>
                    Peso:
                    <input
                      type="text"
                      name="peso"
                      value={formData.peso}
                      onChange={handleChange}
                      className={styles.inputField} 
                    />
                  </label>
                </>
              ) : (
                <>
                  <p><strong>Nombre:</strong> {formData.nombre}</p>
                  <p><strong>Correo:</strong> {formData.correo}</p>
                  <p><strong>Fecha de Nacimiento:</strong> 08/11/2005</p>
                  <p><strong>Sexo:</strong> {formData.sexo}</p>
                  <p><strong>Edad:</strong> 19 años</p>
                  <p><strong>Nivel de experiencia:</strong> Gran Maestro (20 años en adelante)</p>
                </>
              )}
            </div>
          </div>

          {/* Columna derecha: Otros datos */}
          <div className={styles.rightColumn}>
            <div className={styles.userInfo}>
              {isEditing ? (
                <>
                  <label>
                    Bíceps:
                    <input
                      type="text"
                      name="biceps"
                      value={formData.medidas.biceps}
                      onChange={handleChange}
                      className={styles.inputField} 
                    />
                  </label>
                  <label>
                    Pectoral:
                    <input
                      type="text"
                      name="pectoral"
                      value={formData.medidas.pectoral}
                      onChange={handleChange}
                      className={styles.inputField} 
                    />
                  </label>
                  <label>
                    Cadera:
                    <input
                      type="text"
                      name="cadera"
                      value={formData.medidas.cadera}
                      onChange={handleChange}
                      className={styles.inputField} 
                    />
                  </label>
                  <label>
                    Cintura:
                    <input
                      type="text"
                      name="cintura"
                      value={formData.medidas.cintura}
                      onChange={handleChange}
                      className={styles.inputField} 
                    />
                  </label>
                  <label>
                    Pierna:
                    <input
                      type="text"
                      name="pierna"
                      value={formData.medidas.pierna}
                      onChange={handleChange}
                      className={styles.inputField} 
                    />
                  </label>
                </>
              ) : (
                <>
                  <p><strong>Altura:</strong> {formData.altura}</p>
                  <p><strong>Peso:</strong> {formData.peso}</p>
                  <p><strong>Medidas:</strong></p>
                  <ul>
                    <li>Bíceps: {formData.medidas.biceps}</li>
                    <li>Pectoral: {formData.medidas.pectoral}</li>
                    <li>Cadera: {formData.medidas.cadera}</li>
                    <li>Cintura: {formData.medidas.cintura}</li>
                    <li>Pierna: {formData.medidas.pierna}</li>
                  </ul>
                  <p><strong>Días de racha:</strong> 12 días</p>
                  <p><strong>Objetivos:</strong> Ganar masa muscular</p>
                  <p><strong>IMC:</strong> 22.9</p>
                </>
              )}
            </div>
          </div>
        </div>

        {isEditing && (
          <div className={styles.saveButton}>
            <button onClick={handleSave}>Guardar cambios</button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Perfil;
