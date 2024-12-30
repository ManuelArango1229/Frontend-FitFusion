const apiUrl = import.meta.env.VITE_API_URL;

export const registerService = async (email, password, role) => {
  if (!apiUrl) {
    throw new Error("VITE_API_URL is not defined in the environment variables.");
  }
  const newBody = JSON.stringify({
    email,
    password,
    role
  });
    
  const response = await fetch(`http://${apiUrl}/api/auth/register`, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: newBody
  }
  ); 

  const data = await response.json();
  return data;
}
