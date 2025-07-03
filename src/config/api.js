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
    return `/api${endpoint}`;
  }
  
  return `${baseUrl}${endpoint}`;
}; 