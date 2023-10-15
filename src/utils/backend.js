import axios from "axios";

const backend = axios.create({
  baseURL: process.env.REACT_APP_BACKEND,
});

// Request Interceptor
backend.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor
backend.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    switch (error.response.status) {
      case 401:
        window.location.href = "/login";
        break;
      default:
        Promise.reject(error);
        break;
    }
  },
);

export default backend;
