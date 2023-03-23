import axios from "axios";
export const axiosInstace = axios.create({
  baseURL: "https://hero-rider-server-ochre.vercel.app/api/v1/users",
});
// https://hero-rider-server-production-f73d.up.railway.app/api/v1/users/
// https://hero-rider-server-ochre.vercel.app
