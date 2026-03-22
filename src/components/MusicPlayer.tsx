import React, { useState, useRef, useEffect } from "react";
import kehne from '../audio/bgm.mp3';
import card_image from "../assets/marriage_card.png";

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


  const weddingMessage = `।। श्री गणेशाय नमः ।।
*प्रेषित:* सुमित एवं कान्ति

🚩 *स्नेही स्वजन,*
परमपिता परमेश्वर की असीम अनुकम्पा से, हमारे परिवार में *सुमित और कान्ति* का शुभ विवाह संस्कार तय हुआ है। इस मांगलिक अवसर पर आप सपरिवार सादर आमंत्रित हैं।`;

  // --- SMART SHARE LOGIC (IMAGE + TEXT CAPTION) ---
  const handleShare = async () => {
    try {
      const response = await fetch(card_image);
      const blob = await response.blob();
      const file = new File([blob], "WeddingInvite.png", { type: "image/png" });

      // If mobile device supports sharing files
      if (navigator.share && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'Wedding Invitation',
          text: weddingMessage, // This automatically becomes the WhatsApp caption
        });
      } else {
        // Fallback for Desktop/WhatsApp Web (Sends Text only)
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(weddingMessage)}`;
        window.open(whatsappUrl, '_blank');
      }
    } catch (error) {
      console.error("Sharing failed", error);
      // Basic fallback to text if image fetch fails
      window.open(`https://wa.me/?text=${encodeURIComponent(weddingMessage)}`, '_blank');
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play().catch(err => console.log(err));
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-center gap-4">
      
      {/* --- WhatsApp Share Button --- */}
      {/* <div className="relative group flex items-center justify-end">
        <span className="absolute right-14 md:right-20 bg-slate-900/90 text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-300 whitespace-nowrap border border-white/10 backdrop-blur-sm pointer-events-none translate-x-4">
          SHARE INVITE 📱
        </span>

        <button 
          onClick={handleShare}
          className="relative w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-500 border-2 border-white/50 animate-float"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping-slow opacity-40"></span>
          <svg className="w-7 h-7 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.029c0 2.119.554 4.188 1.608 6.03l-1.708 6.24 6.389-1.676c1.777.969 3.784 1.48 5.823 1.481h.006c6.634 0 12.03-5.392 12.034-12.03.002-3.216-1.251-6.237-3.526-8.512z"/>
          </svg>
        </button>
      </div> */}

      {/* --- Music Player Button --- */}
      <div className="relative group flex items-center justify-end">
        <div className="absolute right-14 md:right-20 bg-red-900/90 text-amber-100 text-[10px] font-black px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-300 whitespace-nowrap border border-amber-500/50 backdrop-blur-sm pointer-events-none translate-x-4">
          {isPlaying ? "OFF MUSIC" : "ON MUSIC 🎵"}
        </div>
        <audio ref={audioRef} src={kehne} loop />
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