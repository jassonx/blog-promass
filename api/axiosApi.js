/* eslint-disable no-undef */
import axios from "axios";
import Cookies from "js-cookie";

export const domainApi = import.meta.env.VITE_API_BASE_URL;

export const typeHttp = import.meta.env.VITE_USE_HTTPS;
export const port = import.meta.env.VITE_API_PORT;

export const config = {
  baseURL: `${typeHttp}://${domainApi}${port}/`,
  headers: {
    "Content-Type": "application/json",
  },
};

export const axiosApi = axios.create(config);

axiosApi.interceptors.request.use(
  (req) => {
    let accessToken = Cookies.get("token");
    if (accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`;
    }

    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosApi.interceptors.response.use(
  async function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosApi;
