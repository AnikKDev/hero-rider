import axios from "axios";
export const axiosInstace = axios.create({
  baseURL: "http://localhost:9000/api/v1/users",
});
