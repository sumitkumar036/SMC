import React, { useState } from "react";
import FamilyDetails from "./FamilyDetails";
import Cover from "./Cover";
import Dates from "./Dates";
import ganeshBg from '../assets/icon.png';
import MusicPlayer from "../components/MusicPlayer";

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Cover");
  const tabs = ["Cover", "Dates", "Family Details"];

  // Generate 40 dynamic hearts for the overlay snowfall
  const hearts = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: `${6 + Math.random() * 8}s`,
    delay: `${Math.random() * 10}s`,
    size: ["text-xs", "text-sm", "text-lg", "text-xl", "text-2xl"][Math.floor(Math.random() * 5)],
  }));

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center py-4 md:py-8 px-2 overflow-x-hidden bg-transparent">
      
      {/* --- LAYER 1: Central Ganesh Ji (Subtle 15% Opacity) --- */}
      {/* Lowered opacity to 0.15 for a soft watermark effect that doesn't compete with text */}
      <div className="fixed inset-0 z-[51] pointer-events-none flex items-center justify-center overflow-hidden px-4">
        <div className="w-[90%] max-w-[620px] opacity-[0.1] transition-all duration-1000 ease-in-out">
          <img 
            src={ganeshBg} 
            alt="Central Ganesh Ji" 
            className="w-full h-auto object-contain filter saturate-[1.6] sepia-[0.3] brightness-[1.05] drop-shadow-[0_0_50px_rgba(184,134,11,0.2)]"
          />
        </div>
      </div>

      {/* --- LAYER 2: Falling Hearts Overlay (z-50) --- */}
      <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden text-red-600/60 dark:text-white/50">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className={`absolute animate-heart-fall ${heart.size} drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]`}
            style={{
              left: heart.left,
              animationDuration: heart.duration,
              animationDelay: heart.delay,
              top: '-10%'
            }}
          >
            ❤
          </div>
        ))}
      </div>

      {/* --- LAYER 3: Metallic Marquee (z-40) --- */}
      <div className="fixed top-16 md:top-20 left-0 w-full z-40 bg-metallic-gold border-y-[1.5px] border-yellow-500/60 shadow-xl backdrop-blur-sm overflow-hidden py-2 group pause-on-hover cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
        <div className="animate-marquee inline-block whitespace-nowrap relative z-10">
          {[1, 2].map((i) => (
            <span key={i} className="text-white dark:text-yellow-50 font-black text-sm md:text-lg italic tracking-widest px-4">
              ✦ वैवाहिक कार्यक्रम में आपका हार्दिक स्वागत है ✦ &nbsp;&nbsp;&nbsp;&nbsp; 
              🌹 <span className="text-yellow-200 uppercase">सुमित और कान्ति</span> के परिणयोत्सव में पधारकर आशीर्वाद दें 🌹 &nbsp;&nbsp;&nbsp;&nbsp; 
              <span className="bg-black/20 px-4 py-1 rounded-full border border-yellow-400/40 shadow-inner">📅 3 मई 2026 - रविवार</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* --- LAYER 4: Navigation Bar --- */}
      <div className="relative z-40 flex space-x-1 md:space-x-2 bg-white/70 dark:bg-slate-900/70 p-1.5 rounded-full shadow-2xl border border-red-200/50 dark:border-slate-700 mt-24 mb-10 w-full max-w-md backdrop-blur-xl">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2.5 px-1 md:px-4 rounded-full font-bold text-xs md:text-sm transition-all duration-300 ease-out active:scale-95 ${
              activeTab === tab
                ? "bg-gradient-to-r from-red-900 via-red-800 to-red-900 dark:from-slate-100 dark:via-white dark:to-slate-100 text-white dark:text-slate-900 shadow-lg scale-105"
                : "text-red-900 dark:text-slate-300 hover:bg-red-500/10 dark:hover:bg-white/10"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* --- LAYER 5: Content Area --- */}
      <div className="relative z-10 w-full flex justify-center transition-all duration-500 ease-in-out">
        <div className="w-full max-w-4xl flex justify-center px-1">
          {activeTab === "Cover" && <Cover />}
          {activeTab === "Dates" && <Dates />}
          {activeTab === "Family Details" && (
            <FamilyDetails brideName="कान्ति कुमारी" groomName="सुमित कुमार" />
          )}
        </div>
      </div>

      <MusicPlayer />

    </div>
  );
};

export default Home;