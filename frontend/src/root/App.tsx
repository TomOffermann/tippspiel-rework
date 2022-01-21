import getLogin from "../api/getLogin";
import Login from "../pages/Login";
import { useQuery } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "../components/Loader";
import UnknownUrl from "../pages/UnknownUrl";
import PrivateRoute from "../components/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<PrivateRoute />} />
          <Route path="*" element={<UnknownUrl />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
