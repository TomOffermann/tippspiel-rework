import { useState } from "react";
import postLogin from "../api/postLogin";
import { useMutation } from "react-query";
import { AxiosError } from "axios";

const postLoginWrapper = async (name: string, pwd: string) => {
  const response = await postLogin(name, pwd);
  return response?.data?.token;
};

interface loginData {
  name: string;
  password: string;
}

interface loginStatus {
  status: number;
  error: boolean;
  message: string;
}

export default function Login() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<loginStatus>({
    error: false,
    message: "",
    status: 200,
  });

  const mutation = useMutation(
    (e: loginData) => postLoginWrapper(e.name, e.password),
    {
      onError: (error: AxiosError) => {
        let e: loginStatus = JSON.parse(JSON.stringify(error));
        setError({
          error: true,
          message: `Fehler mit Code: ${e.status}`,
          status: e.status,
        });
      },
      onSuccess: () => {
        setError({ error: false, message: "", status: 200 });
      },
    }
  );

  return (
    <div className="flex flex-col text-primary font-semibold items-center justify-center h-screen">
      <h1 className="text-4xl text-center">Anmeldung</h1>
      <div className="m-2 p-2 border-secondary border-2 w-48 flex flex-col items-center">
        <div className="m-1 flex flex-col text-secondary">
          Nutzername:
          <input
            type="text"
            placeholder="Nutzername"
            className="text-center w-35"
            onChange={(e) => {
              e.preventDefault();
              setName(e.target.value);
            }}
          />
        </div>

        <div className="m-1 flex flex-col text-secondary">
          Passwort:
          <input
            type="password"
            placeholder="Passwort"
            className="text-center w-35"
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                mutation.mutate({ name, password });
              }
            }}
          />
        </div>

        <div className="m-1">
          <button
            type="button"
            className="bg-primary text-bright p-1.5 font-semibold m-1 rounded-md"
            onClick={(e) => {
              e.preventDefault();
              mutation.mutate({ name, password });
            }}
          >
            Login
          </button>
        </div>
        <div className="m1">
          {error.error && (
            <h3 className="text-red-500 font-semibold text-center">
              {error.status === 400
                ? "Füll alle Felder aus!"
                : error.status === 403
                ? "Falsche Nutzerdaten!"
                : error.message}
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}
