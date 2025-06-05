export async function login(email, password)  {
  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).catch((e) => {throw new Error("Erro de conexão!", e)});

  if (!response.ok) {
    throw new Error("Login Falhou!");
  }

  const data = await response.json();
  return data;
};

export async function cadastro(nome, anoNascimento, email, senha)  {
  const response = await fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome, anoNascimento, email, senha }),
  }).catch((e) => {throw new Error("Erro de conexão!", e)});

  if (!response.ok) {
    throw new Error("Cadastro Falhou!");
  }

  const data = await response.json();
  return data;
};

