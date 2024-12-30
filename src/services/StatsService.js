

export const statsService = async (id) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const bodyContent = JSON.stringify({
    userId: id,
  });

  const response = await fetch(`http://${apiUrl}/api/stats/`, {
    method: "POST",
    body: bodyContent,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
};

export const statsUpdateService = async (id, updated) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const bodyContent = JSON.stringify({
    userId: id,
    stats: {
      weight: updated.weight,
      height: updated.height,
      measureBiceps: updated.biceps,
      measureChest: updated.chest,
      measureHip: updated.hip,
      measureWaist: updated.waist,
      measureLeg: updated.leg,
    },
  });

  const response = await fetch(`http://${apiUrl}/api/stats`, {
    method: "PUT",
    body: bodyContent,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
};
