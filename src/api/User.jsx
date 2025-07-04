import { getApiUrl, API_CONFIG } from '../config/api.js';

export async function login(email, password) {
  try {
    const url = getApiUrl(API_CONFIG.ENDPOINTS.LOGIN);
    console.log('Attempting login to:', url);
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "email": email, "password": password }),
    });

    console.log('Login response status:', response.status);
    console.log('Login response headers:', response.headers);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Login failed with status:', response.status, 'Error:', errorText);
      throw new Error(`Login falhou! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Login successful:', data);
    return data;

  } catch (error) {
    console.error("Erro ao fazer login:", error);
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error("Erro de conexão! Verifique se o servidor está rodando.");
    }
    throw error;
  }
};

export async function cadastro(nome, anoNascimento, email, senha) {
  try {
    const url = getApiUrl(API_CONFIG.ENDPOINTS.REGISTER);
    console.log('Attempting registration to:', url);
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, anoNascimento, email, senha }),
    });

    console.log('Registration response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Registration failed with status:', response.status, 'Error:', errorText);
      throw new Error(`Cadastro falhou! Status: ${response.status}`);
    }

    const data = await response.json();    
    console.log('Registration successful:', data);
    return data;

  } catch (error) {
    console.error("Erro ao fazer o cadastro:", error);
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error("Erro de conexão! Verifique se o servidor está rodando.");
    }
    throw error;
  }
};

