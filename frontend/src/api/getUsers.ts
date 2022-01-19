import axios from "axios";
import config from "../config";

export default async function getUser() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVG9tIiwidXNlcklkIjoiNjFlMTk0MjhiNGE0NjhhZDIyOTQ1MzkzIiwiaWF0IjoxNjQyNTMyNzExLCJleHAiOjE2NDI2MTkxMTF9.FJa4KNporCuEPt-VaB_PPBb0F1v2hXAVNY_puMQLwQI";
  return axios.get(config.baseUrl + "/api/users", {
    headers: { Authorization: "Bearer " + token },
  });
}
