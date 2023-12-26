import axios from "axios";

const baseURL = "https://api.blog.redberryinternship.ge/api";
const token = import.meta.env.VITE_API_TOKEN;

const api = axios.create({
  baseURL,
});

const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const get = async (url, params = {}) => {
  try {
    const headers = {
      ...defaultHeaders,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
    const response = await api.get(url, { params, headers });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const post = async (url, data = {}) => {
  try {
    const headers = {
      ...defaultHeaders,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
    const response = await api.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
