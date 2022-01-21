import * as React from "react";
import { useQuery } from "react-query";
import getLogin, { LoginStates } from "../api/getLogin";

interface AuthContextInterface {
  authed: LoginStates;
  login: () => void;
  logout: any;
}

const AuthContext = React.createContext<AuthContextInterface>({
  authed: LoginStates.Unauthorized,
  login: function () {},
  logout: null,
});

const getLoginWrapper = async () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVG9tIiwidXNlcklkIjoiNjFlMTk0MjhiNGE0NjhhZDIyOTQ1MzkzIiwiaWF0IjoxNjQyNzYwNDg3LCJleHAiOjE2NDI4NDY4ODd9.Qnnil5K2YQpFiIe0irPWaOUMQTRJWQ6ew4oEmplhDgU";
  return await getLogin(token);
};

function useAuth() {
  const [authed, setAuthed] = React.useState(LoginStates.Unauthorized);
  const { data, error, refetch } = useQuery("getLogin", getLoginWrapper);

  return {
    authed,
    login() {
      refetch().then((_) => setAuthed(data ?? LoginStates.Unauthorized));
    },
    logout() {
      throw Error("Not implemented yet!");
    },
  };
}

export function AuthProvider({ children }: any) {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export default function AuthConsumer() {
  return React.useContext(AuthContext);
}
