import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Profile.module.scss";
import ProfileLeftColumn from "./components/ProfileLeftColumn";
import ProfileRightColumn from "./components/ProfileRightColumn";
import ProfileSettings from "./components/ProfileSettings";
import ProfileModal from "./components/ProfileModal";
import useStore from "../../services/statemanagement";

const Profile = () => {
  const { user, stats } = useStore();
  const [data, setData] = useState({});
  const [statsData, setStatsData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setData(user);
    if (stats) {
      setStatsData(stats.currentStats);
    }
  }, [user, stats]);

  const handleOptionsClick = (option) => {
    if (option === "update") {
      setIsModalOpen(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageBackground}></div>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Perfil de Usuario</h1>
        <div className={styles.profileContainer}>
          <ProfileSettings onClick={handleOptionsClick} />
          <ProfileLeftColumn user={data} />
          <ProfileRightColumn stats={statsData} />
        </div>
        {isModalOpen && (
          <ProfileModal
            onClose={() => setIsModalOpen(false)}
            userId={user?.id}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
