import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import { useThemeStore } from "./store/globalStore";
import Home from "./pages/Home";

const App: React.FC = () => {
  const { theme } = useThemeStore();
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
   
  }, [theme]);

  return (
    <BrowserRouter basename={baseUrl}>
      {/* Navbar is fixed, so it stays at the top */}
      <Navbar /> 
      
      {/* min-h-screen ensures the background covers the whole page */}
      {/* pt-20 pushes content down so it's not under the 16rem (h-16) navbar */}
      <main className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <Routes>
           
            <Route path="/home" element={<Home />} />

          </Routes>
        </div>
      </main>
      
      <Footer />
    </BrowserRouter>
  );
};

export default App;
