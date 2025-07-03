import { getApiUrl, API_CONFIG } from '../config/api.js';

export const getAllUsers = async () => {
    try {
        const response = await fetch(getApiUrl(API_CONFIG.ENDPOINTS.USERS));
        if (!response.ok) {
        throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export const postStatisticsData = async (data) => {
    try {
        const response = await fetch(getApiUrl(API_CONFIG.ENDPOINTS.STATISTICS + '/:id'), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error("Failed to post statistics data");
        }
        return await response.json();
    } catch (error) {
        console.error("Error posting statistics data:", error);
        return null;
    }
}