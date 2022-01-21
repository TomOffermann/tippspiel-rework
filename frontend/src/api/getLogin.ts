import axios, { AxiosError } from "axios";
import config from "../config";

export enum LoginStates {
  Authorized,
  Unauthorized,
}

export default async function getLogin(token: string): Promise<LoginStates> {
  if (token.length < 10) return LoginStates.Unauthorized;
  let status = await axios.get(`${config.baseUrl}/login?token=${token}`);
  console.log(status);
  return LoginStates.Unauthorized;
}
