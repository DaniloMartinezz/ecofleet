import { ThemeProvider } from './context/ThemeContext';
import AppRoutes from "./Routes";
import { SpeedInsights } from "@vercel/speed-insights/react"

export default function App() {
  return (
    <ThemeProvider>
      <SpeedInsights />
      <AppRoutes />
    </ThemeProvider>
  );
}
