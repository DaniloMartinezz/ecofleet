// src/AppRoutes.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Register from "./pages/Register";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Monitoring from "./pages/monitoring";
import Maintenance from "./pages/maintenance";
import Profile from "./pages/profile";
// import Monitoramento from "./pages/Monitoramento";
// import Manutencao from "./pages/Manutencao";
// import Relatorios from "./pages/Relatorios";
// import Perfil from "./pages/Perfil";
// import Settings from "./pages/Settings";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/monitoring" element={<Monitoring />} />
        <Route path="/Maintenance" element={<Maintenance />} />
        <Route path="/Profile" element={<Profile />} />

        {/* 
        
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
