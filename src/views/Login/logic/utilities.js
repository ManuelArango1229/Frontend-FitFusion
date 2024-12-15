import { loginService } from "../../../services/loginService.js";
import { statsService } from "../../../services/StatsService.js";
import { getUserRoutinesService } from "../../../services/RoutineService.js";


export const onSubmit = (data, setStats, setRoutine, setUser, navigate) => {
    console.log("presionado");
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
    window.location.href = "http://localhost:3000/api/auth/google";
  };