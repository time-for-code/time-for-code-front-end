const API_URL = 'http://localhost:3000';

const apiRequest = async (endpoint, method = 'GET', data = null) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const token = localStorage.getItem('token');
    if (token) {
        options.headers.Authorization = `Bearer ${token}`;
    }

    if (data && ['POST', 'PUT', 'PATCH'].includes(method)) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(`${API_URL}${endpoint}`, options);

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Request failed with status ${response.status}`);
    }

    return response.json();
};

export const loginUser = async (credentials) => {
    return apiRequest('/login', 'POST', credentials);
};

export const registerUser = async (userData) => {
    return apiRequest('/register', 'POST', userData);
};

export const logoutUser = async () => {
    localStorage.removeItem('token');
    return apiRequest('/logout', 'POST');
};

export const getCurrentUser = async () => {
    return apiRequest('/user/profile');
};

export const updateUserProfile = async (userData) => {
    return apiRequest('/user/profile', 'PUT', userData);
};
