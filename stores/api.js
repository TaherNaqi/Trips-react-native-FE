import axios from "axios";

export const baseURL = "http://192.168.8.143:8000";
// export const baseURL = "http://192.168.100.191:8000";

const api = axios.create({ baseURL: `${baseURL}/api` });
export default api;
