import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.request.use((config) => {
  const accessToken = ""
  config.headers["Content-Type"] = "application/json";
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const result = error.response ? error.response.status : null;
    if (result === 401) {
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default instance;
