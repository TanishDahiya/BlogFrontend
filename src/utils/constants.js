import axios from "axios";

export const BASE_URL = "http://139.59.69.123:5000";
// export const BASE_URL = "http://localhost:5000";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});
