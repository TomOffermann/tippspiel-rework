import getUser from "../api/getUser";
import Login from "../pages/Login";
import { useEffect, useState } from "react";

interface User {
  _id?: string;
  userId: number;
  name: string;
  email: string;
  password?: string;
}

function App() {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    getUser(2).then((e) => {
      setUser(e.data?.singleUser);
    });
  }, []);
  return (
    <>
      <Login />
    </>
  );
}

export default App;
