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
      className={`fixed bottom-0 w-full transition-transform duration-500 z-[60]
      ${visible ? "translate-y-0" : "translate-y-full"}
      bg-white/80 dark:bg-slate-950/80 border-t border-red-200/50 dark:border-red-900/30 backdrop-blur-md shadow-[0_-10px_25px_rgba(128,0,0,0.1)]`}
    >
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between text-[11px] md:text-sm">
        
        {/* Left: Wedding Branding */}
        <div className="flex items-center gap-2">
          <span className="text-red-800 dark:text-red-400 font-bold">
            © {new Date().getFullYear()} 
          </span>
          <span className="hidden md:inline text-red-700 dark:text-red-200 font-medium tracking-tight">
             Sumit <span className="text-red-500">❤</span> Kanti
          </span>
        </div>

        {/* Center: Blessing (Desktop only for cleanliness) */}
        <div className="hidden sm:block text-red-900/60 dark:text-red-200/40 italic font-hindi">
          ॥ सप्रेम निमंत्रण ॥
        </div>

        {/* Right: Version Tag */}
        <div className="flex items-center gap-4">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-red-900/50 dark:text-slate-500 font-black">
            v{version}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;