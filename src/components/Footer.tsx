import { useEffect, useState } from "react";

const Footer: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const version = import.meta.env.VITE_APP_VERSION || "1.0.0";

  useEffect(() => {
    const handleScroll = () => {
      // Hide on scroll down, show on scroll up
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <footer
      className={`fixed bottom-0 w-full transition-transform duration-300 z-40
      ${visible ? "translate-y-0" : "translate-y-full"}
      bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between text-sm">
        
        {/* Copyright */}
        <span className="text-gray-600 dark:text-gray-400 font-medium">
          © {new Date().getFullYear()} <span className="text-blue-600 dark:text-cyan-400"></span>
        </span>

        {/* Version Tag - Now visible on all screens */}
         <div className="flex justify-end min-w-[50px]">
          <span className="text-[12px] uppercase tracking-widest text-gray-400 dark:text-gray-400 hover:text-blue-400 font-medium">
            v{version}
          </span>

         </div>
      </div>
    </footer>
  );
};

export default Footer;