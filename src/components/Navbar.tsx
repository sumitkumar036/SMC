import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { LuMoon, LuSun, LuMenu, LuX } from "react-icons/lu";
import { useThemeStore } from "../store/globalStore";
import { toast } from "react-toastify";
import { Cookies } from '../services/Cookies';

const Navbar = () => {
  const { theme, toggleTheme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);

  // Sync theme with the HTML document root
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleSelectedTheme = () => {
    toggleTheme();
    const newTheme = theme === "light" ? "dark" : "light";
    Cookies.set("LibraryMSTheme", newTheme);
    toast.info(`Switched to ${newTheme} theme`);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <span className="text-2xl transition-transform group-hover:scale-110">📚</span>
            <span className="font-bold text-xl text-gray-900 dark:text-white">SUMIT MARRIAGE CARD</span>
          </NavLink>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleSelectedTheme}
              title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-500 transition-all"
            >
              {theme === "dark" ? <LuSun size={20} /> : <LuMoon size={20} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <LuX size={26} /> : <LuMenu size={26} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;