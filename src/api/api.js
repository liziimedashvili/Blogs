import axios from 'axios';

const baseURL = 'https://api.blog.redberryinternship.ge/api'; 

const api = axios.create({
  baseURL,
});

export const get = async (url, params = {}, token = null) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await api.get(url, { params, headers });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const post = async (url, data = {}, token = null) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await api.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};