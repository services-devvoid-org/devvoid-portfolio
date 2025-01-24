import { ThemeProvider } from "@/contexts/theme-context";
import { Routes, Route } from "react-router-dom";
import IndexPage from "@/pages/index";

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </ThemeProvider>
  );
}
