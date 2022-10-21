import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

const axiosDefaultHeaders: AxiosRequestHeaders = {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
}

const axiosDefaultConfig: AxiosRequestConfig = {
    timeout: 30000,
    headers: axiosDefaultHeaders,
    baseURL: process.env.REACT_APP_CELC_API
}

const axiosInstance = axios.create(axiosDefaultConfig)

export default axiosInstance;