import axios from "axios";

export const baseURL = "http://192.168.0.100:8000";

const api = axios.create({ baseURL: `${baseURL}/api` });
export default api;
