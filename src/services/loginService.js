
export const loginService = async (email, password) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const bodyContent = JSON.stringify({
    email: email,
    password: password,
  });

  const response = await fetch(`${apiUrl}/api/auth/login`, {
    method: "POST",
    body: bodyContent,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const data = await response.json();
  return data;
};
