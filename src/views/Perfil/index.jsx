import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FaCog } from "react-icons/fa"; // Importa el icono de la tuerca
import styles from "./Perfil.module.scss";
import useStore from "../../services/statemanagement.js";
import { useState, useEffect } from "react";

/*
  id
  emailUser
  passwordUser
  role
  token
  name
  birthdate
  phone
*/

/*
 currentStats: {
    weight: 70,
    height: 175,
    measureBiceps: 40,
    measureChest: 100,
    measureHip: 90,
    measureWaist: 80,
    measureLeg: 60,
    date: 2024-12-02T01:39:19.327Z,
    _id: new ObjectId('674d0fc7bf2926923137ff54')
  },
 */
const Perfil = () => {
  const { user, stats } = useStore();
  const [data, setData] = useState({});
  const [statsData, setStatsData] = useState({});

  useEffect(() => {
    setData(user);
    setStatsData(stats.currentStats);
  }, [user, stats]);

  return (
    <div>
      <p>Name: {data?.name || "No hay nombre disponible"}</p>
      <p>Pecho: {statsData?.measureChest || "No hay medida"}</p>
    </div>
  );
};

export default Perfil;
