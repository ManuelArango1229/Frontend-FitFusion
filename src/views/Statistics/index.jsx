import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import styles from './Statistics.module.scss';

ChartJS.register(...registerables);

const lineChartDataWeight = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
  datasets: [
    {
      label: 'Progreso de Peso',
      data: [5, 10, 15, 20, 25, 30],
      borderColor: '#46C432',
      backgroundColor: 'rgba(70, 196, 50, 0.2)',
      tension: 0.3,
    },
  ],
};

const lineChartDataBiceps = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
  datasets: [
    {
      label: 'Progreso de tamaño de Biceps',
      data: [5, 10, 15, 20, 25, 30],
      borderColor: '#46C432',
      backgroundColor: 'rgba(70, 196, 50, 0.2)',
      tension: 0.3,
    },
  ],
};

const lineChartDataPectoral = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
  datasets: [
    {
      label: 'Progreso de tamaño de Pectoral',
      data: [5, 10, 15, 20, 25, 30],
      borderColor: '#46C432',
      backgroundColor: 'rgba(70, 196, 50, 0.2)',
      tension: 0.3,
    },
  ],
};

const lineChartDataCintura = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
  datasets: [
    {
      label: 'Progreso de tamaño de Cintura',
      data: [5, 10, 15, 20, 25, 30],
      borderColor: '#46C432',
      backgroundColor: 'rgba(70, 196, 50, 0.2)',
      tension: 0.3,
    },
  ],
};

const lineChartDataLeg = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
  datasets: [
    {
      label: 'Progreso de tamaño de Pierna',
      data: [5, 10, 15, 20, 25, 30],
      borderColor: '#46C432',
      backgroundColor: 'rgba(70, 196, 50, 0.2)',
      tension: 0.3,
    },
  ],
};

const lineChartDataCadera = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
  datasets: [
    {
      label: 'Progreso de tamaño de cadera',
      data: [5, 10, 15, 20, 25, 30],
      borderColor: '#46C432',
      backgroundColor: 'rgba(70, 196, 50, 0.2)',
      tension: 0.3,
    },
  ],
};

const lineChartDataIMC = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
  datasets: [
    {
      label: 'Progreso de IMC',
      data: [5, 10, 15, 20, 25, 30],
      borderColor: '#46C432',
      backgroundColor: 'rgba(70, 196, 50, 0.2)',
      tension: 0.3,
    },
  ],
};

const barChartData = {
  labels: ['Cardio', 'Fuerza', 'Flexibilidad', 'Resistencia'],
  datasets: [
    {
      label: 'Horas por semana',
      data: [8, 5, 3, 6],
      backgroundColor: ['#46C432', '#10B9E0', '#CEE0E4', '#08232C'],
      borderColor: '#ffffff',
      borderWidth: 1,
    },
  ],
};

const pieChartData = {
  labels: ['Proteínas', 'Carbohidratos', 'Grasas'],
  datasets: [
    {
      data: [40, 35, 25],
      backgroundColor: ['#46C432', '#10B9E0', '#CEE0E4'],
      hoverBackgroundColor: ['#39a02a', '#0a9fc7', '#a9ccd0'],
    },
  ],
};


const Statistics = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageBackground}></div>
      <Header/>
      <main className={styles.main}>
        <h1>ESTADISTICAS</h1>
        <div className={styles.chartsContainer}>

        <div className={styles.chart}>
            <h2>Progreso de Peso</h2>
            <Line data={lineChartDataWeight} />
          </div>

          <div className={styles.chart}>
            <h2>Progreso de Biceps</h2>
            <Line data={lineChartDataBiceps} />
          </div>

          <div className={styles.chart}>
            <h2>Progreso de Pectoral</h2>
            <Line data={lineChartDataPectoral} />
          </div>

          <div className={styles.chart}>
            <h2>Progreso de Cadera</h2>
            <Line data={lineChartDataCadera} />
          </div>

          <div className={styles.chart}>
            <h2>Progreso de Cintura</h2>
            <Line data={lineChartDataCintura} />
          </div>

          <div className={styles.chart}>
            <h2>Progreso de Pierna</h2>
            <Line data={lineChartDataLeg} />
          </div>

          <div className={styles.chart}>
            <h2>Progreso de IMC</h2>
            <Line data={lineChartDataIMC} />
          </div>

        {/*   Por si se necesitan usar
          <div className={styles.chart}>
            <h2>Distribución de Tiempo</h2>
            <Bar data={barChartData} />
          </div>

          <div className={styles.chart}>
            <h2>Distribución Nutricional</h2>
            <Pie data={pieChartData} />
          </div>

          */}

        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Statistics;
