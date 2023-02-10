import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import Setting from "../components/Setting";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/setting" element={<Setting />}></Route>
    </Routes>
  );
}
export default AllRoutes;
