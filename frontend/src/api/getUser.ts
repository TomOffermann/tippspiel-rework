import axios from "axios";
import config from "../config";

export default async function getUser(id: number) {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVG9tIiwidXNlcklkIjoiNjFlMTk0MjhiNGE0NjhhZDIyOTQ1MzkzIiwiaWF0IjoxNjQyMjkwOTMyLCJleHAiOjE2NDIyOTI3MzJ9.5Yk2bW8uObUU_8ye0GqQ1P26a-G7K02IcCP9DdYV2og";
  return await axios.get(config.baseUrl + "/users/" + id.toString(), {
    headers: { Authorization: "Bearer " + token },
  });
}
