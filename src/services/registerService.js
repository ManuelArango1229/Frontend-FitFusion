

export const registerService = async (email, password, role) => {
  const newBody = JSON.stringify({
    email,
    password,
    role
  });
    
  const response = await fetch("http://localhost:3000/api/auth/register", {
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
  console.log(data);
  return data;
}
