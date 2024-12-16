import { loginService } from "../../../services/loginService.js";
import { statsService } from "../../../services/StatsService.js";
import { getUserRoutinesService } from "../../../services/RoutineService.js";

export const onSubmit = (data, setStats, setRoutine, setUser, navigate) => {
    loginService(data.email, data.password).then((result) => {
      const name = result.name;
      if (name) {
        statsService(result.id).then((statsResult) => {
          setStats(statsResult);
        });
        getUserRoutinesService(result.id).then((routineResult) => {
          setRoutine(routineResult);
        });
        setUser(result);
        navigate("/home");
      } else {
        alert("credenciales invalidas");
      }
    });
  };

  export const onClickGoogle = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    window.location.href = `${apiUrl}/api/auth/google`;
  };