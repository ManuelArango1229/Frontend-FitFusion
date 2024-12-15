import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Line, Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import styles from "./Statistics.module.scss";
import useStore from "../../services/statemanagement.js";
import { useEffect } from "react";
import { statsService } from "../../services/StatsService.js";

ChartJS.register(...registerables);

const generateChartData = (labels, data, label) => ({
  labels,
  datasets: [
    {
      label,
      data,
      borderColor: "#46C432",
      backgroundColor: "rgba(70, 196, 50, 0.2)",
      tension: 0.3,
    },
  ],
});


const Statistics = () => {
  const { user, stats, setStats } = useStore();

  useEffect(() => {
    statsService(user.id).then((data) => {
      setStats(data);
    });
    }, [stats, setStats]);

  const statsHistory = stats?.statsHistory || [];
  const currentStats = stats?.currentStats || {};
  const height = stats?.currentStats?.height || 0;

  const datesArray = statsHistory.length
    ? statsHistory.map((x) => new Date(x.date).toLocaleDateString("es-ES"))
    : [];
  const currentDate = currentStats.date
    ? new Date(currentStats.date).toLocaleDateString("es-ES")
    : null;

  if (currentDate) datesArray.push(currentDate);

  const weightsArray = statsHistory.map((x) => x.weight) || [];
  if (currentStats.weight) weightsArray.push(currentStats.weight);

  const bicepsArray = statsHistory.map((x) => x.measureBiceps) || [];
  if (currentStats.measureBiceps) bicepsArray.push(currentStats.measureBiceps);

  const chestArray = statsHistory.map((x) => x.measureChest) || [];
  if (currentStats.measureChest) chestArray.push(currentStats.measureChest);

  const waistArray = statsHistory.map((x) => x.measureWaist) || [];
  if (currentStats.measureWaist) waistArray.push(currentStats.measureWaist);

  const hipArray = statsHistory.map((x) => x.measureHip) || [];
  if (currentStats.measureHip) hipArray.push(currentStats.measureHip);

  const legArray = statsHistory.map((x) => x.measureLeg) || [];
  if (currentStats.measureLeg) legArray.push(currentStats.measureLeg);

  const defaultLabels = ["Sin datos"];
  const defaultData = [0];

  const weightData = generateChartData(
    datesArray.length ? datesArray : defaultLabels,
    weightsArray.length ? weightsArray : defaultData,
    "Progreso de Peso"
  );
  const bicepsData = generateChartData(
    datesArray.length ? datesArray : defaultLabels,
    bicepsArray.length ? bicepsArray : defaultData,
    "Progreso de Bíceps"
  );
  const chestData = generateChartData(
    datesArray.length ? datesArray : defaultLabels,
    chestArray.length ? chestArray : defaultData,
    "Progreso de Pectoral"
  );
  const waistData = generateChartData(
    datesArray.length ? datesArray : defaultLabels,
    waistArray.length ? waistArray : defaultData,
    "Progreso de Cintura"
  );
  const hipData = generateChartData(
    datesArray.length ? datesArray : defaultLabels,
    hipArray.length ? hipArray : defaultData,
    "Progreso de Cadera"
  );
  const legData = generateChartData(
    datesArray.length ? datesArray : defaultLabels,
    legArray.length ? legArray : defaultData,
    "Progreso de Pierna"
  );

  const imcArray = statsHistory.map((x) =>
    height > 0 ? parseFloat((x.weight / (height ** 2)).toFixed(2)) : null
  ) || [];
  if (currentStats.weight && height > 0) {
    const currentImc = parseFloat(
      (currentStats.weight / (height ** 2)).toFixed(2)
    );
    imcArray.push(currentImc);
  }

  const imcData = generateChartData(
    datesArray.length ? datesArray : defaultLabels,
    imcArray.length ? imcArray : defaultData,
    "Progreso del IMC"
  );

  return (
    <div className={styles.container}>
      <div className={styles.imageBackground}></div>
      <Header />
      <main className={styles.main}>
        <h1>ESTADISTICAS</h1>
        <div className={styles.chartsContainer}>
          <div className={styles.chart}>
            <h2>Progreso de Peso</h2>
            <Line data={weightData} />
          </div>

          <div className={styles.chart}>
            <h2>Progreso de Biceps</h2>
            <Line data={bicepsData} />
          </div>

          <div className={styles.chart}>
            <h2>Progreso de Pectoral</h2>
            <Line data={chestData} />
          </div>

          <div className={styles.chart}>
            <h2>Progreso de Cadera</h2>
            <Line data={hipData} />
          </div>

          <div className={styles.chart}>
            <h2>Progreso de Cintura</h2>
            <Line data={waistData} />
          </div>

          <div className={styles.chart}>
            <h2>Progreso de Pierna</h2>
            <Line data={legData} />
          </div>

          <div className={styles.chart}>
            <h2>Progreso de IMC</h2>
            <Line data={imcData} />
          </div>

       
      <div className={styles.imcTable}>
        <h2>Clasificación del IMC</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>Rango IMC</th>
              <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>Categoría</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}> -18.5</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>Bajo peso</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>18.5 - 24.9</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>Peso normal</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>25 - 29.9</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>Sobrepeso</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>30 - 34.9</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>Obesidad grado 1</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>35 - 39.9</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>Obesidad grado 2</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}> + 40</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>Obesidad grado 3</td>
            </tr>
          </tbody>
        </table>
      </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Statistics;
