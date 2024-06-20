import { Route, BrowserRouter, Routes } from "react-router-dom"; 
import Register from "./pages/Register";


const AppRoutes = () => {
    return(
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />

      </Routes>
        </BrowserRouter>
    );
 };
 
 export default AppRoutes;