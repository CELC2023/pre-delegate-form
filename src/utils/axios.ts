import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

const axiosDefaultHeaders: AxiosRequestHeaders = {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
}

const axiosDefaultConfig: AxiosRequestConfig = {
    timeout: 3000,
    headers: axiosDefaultHeaders,
    baseURL: "http://localhost:3001"
}

const axiosInstance = axios.create(axiosDefaultConfig)

export default axiosInstance;