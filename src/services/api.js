import axios from "axios";

const baseUrl = "http://localhost" // INSIRA A BASE URL

const api = axios.create({
  baseURL: `${baseUrl}:3333`,
});

export default api;
