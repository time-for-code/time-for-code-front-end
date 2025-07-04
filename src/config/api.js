// src/config/api.js
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  ENDPOINTS: {
    LOGIN: '/login',
    REGISTER: '/register',
    SESSION: '/sesion',
    USERS: '/users',
    STATISTICS: '/statistics'
  }
};

export const getApiUrl = (endpoint) => {
  const baseUrl = API_CONFIG.BASE_URL;
  
  // Se a URL é externa e estamos em desenvolvimento, usa proxy
  if (import.meta.env.DEV && baseUrl && baseUrl.includes('https://')) {
    console.log('Using proxy for external API in development');
    return `/api${endpoint}`;
  }
  
  // Se estamos em desenvolvimento e a URL é localhost, usa diretamente
  if (import.meta.env.DEV && baseUrl && baseUrl.includes('localhost')) {
    console.log('Using direct localhost URL in development');
    return `${baseUrl}${endpoint}`;
  }
  
  // Para produção ou outras configurações
  console.log('Using configured API URL:', `${baseUrl}${endpoint}`);
  return `${baseUrl}${endpoint}`;
}; 