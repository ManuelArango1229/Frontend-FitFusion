export const statsService = async (id) => {
  const bodyContent = JSON.stringify({
    userId: id,
  });

  const response = await fetch("http://localhost:3000/api/stats/", {
    method: "POST",
    body: bodyContent,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
};
