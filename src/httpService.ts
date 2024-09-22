import axios from 'axios';

const API_URL = 'https://reqres.in/api';

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const register = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/register`, {
        email,
        password
      });
      return response.data; // Get token or other registration data
    } catch (error) {
      throw new Error('Registration failed');
    }
  };

export const getUserData = async (id: number) => {
  const response = await axios.get(`${API_URL}/users/${id}`);
  return response.data;
};

export const fetchUserData = async (token: string) => {
    const response = await axios.get(`${API_URL}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };