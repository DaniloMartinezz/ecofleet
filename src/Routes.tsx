// src/AppRoutes.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Register from "./pages/Register";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
// import Monitoramento from "./pages/Monitoramento";
// import Manutencao from "./pages/Manutencao";
// import Relatorios from "./pages/Relatorios";
// import Perfil from "./pages/Perfil";
// import Settings from "./pages/Settings";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/monitoramento" element={<Monitoramento />} />
        <Route path="/manutencao" element={<Manutencao />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/settings" element={<Settings />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
