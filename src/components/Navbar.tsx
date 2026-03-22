import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { LuMoon, LuSun, LuMenu, LuX } from "react-icons/lu";
import { useThemeStore } from "../store/globalStore";
import { toast } from "react-toastify";
import { Cookies } from '../services/Cookies';
import navIcon from '../assets/icon.png'; // Renamed to avoid confusion with the <img> tag

const Navbar = () => {
  const { theme, toggleTheme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleSelectedTheme = () => {
    toggleTheme();
    const newTheme = theme === "light" ? "dark" : "light";
    Cookies.set("LibraryMSTheme", newTheme);
    toast.info(`Switched to ${newTheme} theme`, {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  return (
    <nav className="fixed top-0 w-full z-[60] bg-white/80 dark:bg-slate-900/80 border-b border-red-200/50 dark:border-slate-800 backdrop-blur-md transition-all duration-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <NavLink to="/" className="flex items-center gap-2 md:gap-3 group">
            {/* The Icon/Image */}
            <div className="relative h-8 w-8 md:h-10 md:w-10 overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]">
              <img src={navIcon} alt="Ganesh Icon" className="h-full w-full object-contain" />
            </div>

            {/* The Metallic Text */}
            <div className="flex flex-col">
              <span className="font-black text-sm md:text-lg leading-none tracking-tighter bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 bg-clip-text text-transparent dark:from-amber-500 dark:via-yellow-200 dark:to-amber-500 drop-shadow-sm group-hover:drop-shadow-md transition-all">
                SUMIT <span className="text-red-700 dark:text-red-400">❤</span> KANTI
              </span>
              <span className="text-[10px] md:text-xs font-bold text-red-800 dark:text-slate-400 tracking-[0.2em] uppercase opacity-80">
                Marriage Card
              </span>
            </div>
          </NavLink>

          {/* Actions Section */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleSelectedTheme}
              className="p-2 rounded-full bg-red-50 dark:bg-slate-800 text-red-800 dark:text-yellow-400 hover:ring-2 hover:ring-red-200 dark:hover:ring-yellow-900/50 transition-all shadow-inner"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <LuSun size={20} /> : <LuMoon size={20} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-red-900 dark:text-slate-300 rounded-lg hover:bg-red-50 dark:hover:bg-slate-800 transition-colors" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <LuX size={26} /> : <LuMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Optional but keeps it clean) */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-slate-900 border-b border-red-100 dark:border-slate-800 p-4 shadow-xl animate-in slide-in-from-top duration-300">
           <p className="text-center text-sm font-bold text-red-800 dark:text-red-200">
             ✨ Welcome to our digital invitation ✨
           </p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;