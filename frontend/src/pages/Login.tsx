import React from "react";

export default function Login() {
  const handleLogin = () => console.log("adAd");
  return (
    <>
      <h1 className="text-4xl m-2 text-center">Anmeldung</h1>
      <div className="flex flex-col justify-center items-center m-1 p-1 w-48">
        <div>
          <input type="text" placeholder="Nutzername" />
        </div>

        <div>
          <input type="password" placeholder="Passwort" />
        </div>

        <div>
          <button type="button" className="bg-red-200 p-2 rounded-sm m-1">
            Login
          </button>
        </div>
      </div>
    </>
  );
}
