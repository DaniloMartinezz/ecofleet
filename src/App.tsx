import { ThemeProvider } from './context/ThemeContext';
import AppRoutes from "./Routes";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <ThemeProvider>
      <Analytics />
      <AppRoutes />
    </ThemeProvider>
  );
}
