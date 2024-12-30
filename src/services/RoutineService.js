
export const createRoutineService = async (
  userId,
  name,
  description,
  dailyRoutines,
) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const bodyContent = JSON.stringify({
    userId,
    name,
    description,
    dailyRoutines,
  });

  const response = await fetch(`http://${apiUrl}/api/routines`, {
    method: "POST",
    body: bodyContent,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to create routine");
  }

  const data = await response.json();
  return data;
};

export const getUserRoutinesService = async (userId) => {
  try {
    const apiUrl = import.meta.env.VITE_API_URL;
    const response = await fetch(
      `${apiUrl}/api/routines/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch routines");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching routines:", error.message);
    throw error;
  }
};

export const deleteRoutineService = async (routineId) => {
  try {
    const apiUrl = import.meta.env.VITE_API_URL;
    const response = await fetch(
      `${apiUrl}/api/routines/${routineId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to delete routine");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting routine:", error.message);
    throw error;
  }
};
