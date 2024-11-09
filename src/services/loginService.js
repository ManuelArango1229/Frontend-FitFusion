
export const loginService = async (email, password) => {
  const bodyContent = JSON.stringify({
  "email": email,
  "password": password
});

const response = await fetch("http://localhost:3000/api/auth/login", { 
  method: "POST",
  body: bodyContent,
  headers: {
      'Content-Type': 'application/json',
    },
  credentials: 'include',
});

const data = await response.json();
return data;
}


