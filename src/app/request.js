import axios from "axios";
export const REQUEST_CONFIG = {
    URL: "http://localhost:3000/",
    TIMEOUT: 25000,
};
export const Request = (() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const instance = axios.create({
        baseURL: REQUEST_CONFIG.URL,
        timeout: REQUEST_CONFIG.TIMEOUT,
        cancelToken: source.token,
    });
    instance.interceptors.request.use((config) => {
        let token = localStorage.getItem("token");
        config.headers.Authorization = `Bearer ${token}`;
        config.headers.Accept = "application/json";
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
    instance.interceptors.response.use((response) => {
        return response;
    }, (error) => {
        return Promise.reject(error);
    });
    Object.defineProperty(instance, "cancel", {
        value: source.cancel,
    });
    return instance;
})();
