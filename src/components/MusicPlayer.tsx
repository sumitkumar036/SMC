import React, { useState, useRef, useEffect } from "react";
import kahne_ko from '../audio/kehne_ko_jusn_bahar_aye.mp3';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.15;
    const forcePlay = () => {
      audio.play().then(() => {
        setIsPlaying(true);
        window.removeEventListener("click", forcePlay);
        window.removeEventListener("touchstart", forcePlay);
      }).catch(() => console.log("Waiting for touch..."));
    };
    forcePlay();
    window.addEventListener("click", forcePlay);
    window.addEventListener("touchstart", forcePlay);
    return () => {
      window.removeEventListener("click", forcePlay);
      window.removeEventListener("touchstart", forcePlay);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play().catch(err => console.log(err));
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-center gap-4">
      {/* --- Music Player Button --- */}
      <div className="relative group flex items-center justify-end">
        <div className="absolute right-14 md:right-20 bg-red-900/90 text-amber-100 text-[10px] font-black px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-300 whitespace-nowrap border border-amber-500/50 backdrop-blur-sm pointer-events-none translate-x-4">
          {isPlaying ? "OFF MUSIC" : "ON MUSIC 🎵"}
        </div>
        <audio ref={audioRef} src={kahne_ko} loop />
        <button
          onClick={togglePlay}
          className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-700 shadow-2xl border-2 
            ${isPlaying ? "bg-red-900 border-amber-400 rotate-180 scale-110" : "bg-white dark:bg-slate-900 border-red-800 animate-bounce shadow-red-500/20"}`}
        >
          <div className={`absolute inset-0 rounded-full blur-xl opacity-40 transition-colors ${isPlaying ? "bg-amber-500 animate-pulse" : "bg-red-500"}`}></div>
          <div className="relative z-10 flex items-end gap-[3px] h-5">
            {[1, 2, 3, 4].map((bar) => (
              <div key={bar} className={`w-1 bg-amber-500 rounded-full transition-all duration-500 ${isPlaying ? "animate-music-bar" : "h-2"}`} style={{ animationDelay: `${bar * 0.2}s` }}></div>
            ))}
          </div>
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;