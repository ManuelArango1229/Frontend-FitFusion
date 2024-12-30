const apiUrl = import.meta.env.VITE_API_URL;

export const loginService = async (email, password) => {
  if (!apiUrl) {
    throw new Error("VITE_API_URL is not defined in the environment variables.");
  }
  const bodyContent = JSON.stringify({
    email: email,
    password: password,
  });

  const response = await fetch(`http://${apiUrl}/api/auth/login`, {
    method: "POST",
    body: bodyContent,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
};
