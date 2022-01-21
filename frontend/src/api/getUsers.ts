import axios from "axios";
import config from "../config";

export default async function getUser() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVG9tIiwidXNlcklkIjoiNjFlMTk0MjhiNGE0NjhhZDIyOTQ1MzkzIiwiaWF0IjoxNjQyNzYwNDg3LCJleHAiOjE2NDI4NDY4ODd9.Qnnil5K2YQpFiIe0irPWaOUMQTRJWQ6ew4oEmplhDgU";
  return axios.get(config.baseUrl + "/api/users", {
    headers: { Authorization: "Bearer " + token },
  });
}
