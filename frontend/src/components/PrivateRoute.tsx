import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useQuery } from "react-query";
import getLogin from "../api/getLogin";
import useAuth from "../hooks/useAuth";

const getLoginWrapper = async () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVG9tIiwidXNlcklkIjoiNjFlMTk0MjhiNGE0NjhhZDIyOTQ1MzkzIiwiaWF0IjoxNjQyNzYwNDg3LCJleHAiOjE2NDI4NDY4ODd9.Qnnil5K2YQpFiIe0irPWaOUMQTRJWQ6ew4oEmplhDgU";
  return await getLogin(token);
};

export default function AuthProvider() {
  const { data, error } = useQuery("getLogin", getLoginWrapper);
  console.log(data, error);
  return <div></div>;
}

export const PrivateRoute = ({ component, ...rest }: any) => {
  const { authed } = useAuth();
  const routeComponent = (props: any) =>
    authed ? (
      React.createElement(component, props)
    ) : (
      <Navigate to={{ pathname: "/login" }} />
    );
  return <Route {...rest} render={routeComponent} />;
};
