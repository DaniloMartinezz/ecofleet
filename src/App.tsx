import { ThemeProvider } from './context/ThemeContext';
import AppRoutes from "./Routes";

export default function App() {
  return (
    <ThemeProvider>
      <AppRoutes/>
    </ThemeProvider>
  );
}
