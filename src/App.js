import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import Register from "./components/registerAgency/Register";
import Login from "./components/loginAgency/Login.js";
import Dashboard from "./components/dashboard/Dashboard";
import ReportIncidents from "./components/dashboard/reportIncidents/ReportIncidents";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboard/reportIncidents"
          element={<ReportIncidents />}
        />
      </Routes>
    </div>
  );
}

export default App;
