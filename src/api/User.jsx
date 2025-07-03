import { getApiUrl, API_CONFIG } from '../config/api.js';

export async function login(email, password) {
  try {
    const response = await fetch(getApiUrl(API_CONFIG.ENDPOINTS.LOGIN), {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).catch((e) => { throw new Error("Erro de conexão!", e) });

    if (response.status !== 202) {
      throw new Error("Login Falhou!");
    }

    const data = await response.json();
    return data;

  } catch (e) {
    console.error("Erro ao fazer login:", e);
    throw e;
  }
};

export async function cadastro(nome, anoNascimento, email, senha) {
  try {
    const response = await fetch(getApiUrl(API_CONFIG.ENDPOINTS.REGISTER), {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, anoNascimento, email, senha }),
    }).catch((e) => { throw new Error("Erro de conexão!", e) });

    if (response.status !== 201) {
      throw new Error("Cadastro Falhou!");
    }

    const data = await response.json();    

    return data;

  } catch (e) {
    console.error("Erro ao fazer o cadastro:", e);
    throw e;
  }
};

