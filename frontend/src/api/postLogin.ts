import axios from "axios";
import config from "../config";

export default async function postLogin(username: string, password: string) {
  return axios.post(`${config.baseUrl}/login`, {
    name: username,
    password: password,
  });
}
