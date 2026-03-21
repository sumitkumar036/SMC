import React, { useState } from "react";
import FamilyDetails from "./FamilyDetails";
import Cover from "./Cover";
import Dates from "./Dates";

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Cover");
  const tabs = ["Cover", "Dates", "Family Details"];

  const hearts = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: `${5 + Math.random() * 8}s`,
    delay: `${Math.random() * 10}s`,
    size: ["text-xs", "text-sm", "text-lg", "text-xl", "text-2xl"][Math.floor(Math.random() * 5)],
  }));

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center py-4 md:py-8 px-2 overflow-x-hidden bg-transparent">
      
    {/* --- METALLIC MARQUEE: Glossy Finish & Pause on Hover --- */}
    <div className="fixed top-16 md:top-20 left-0 w-full z-40 bg-metallic-gold border-y-[1.5px] border-yellow-500/60 shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm overflow-hidden py-2 group pause-on-hover cursor-pointer">
      
      {/* Glossy Overlay for "Glass" Look */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>

      <div className="animate-marquee inline-block whitespace-nowrap relative z-10">
        {/* First Set of Text */}
        <span className="text-white dark:text-yellow-50 font-black text-sm md:text-lg italic tracking-[0.15em] px-4 drop-shadow-md">
          <span className="text-yellow-300">✦</span> वैवाहिक कार्यक्रम में आपका हार्दिक स्वागत है <span className="text-yellow-300">✦</span> 
          &nbsp;&nbsp;&nbsp;&nbsp; 🌹 <span className="text-yellow-100 uppercase">सुमित और कान्ति</span> के परिणयोत्सव में पधारकर आशीर्वाद दें 🌹 
          &nbsp;&nbsp;&nbsp;&nbsp; <span className="bg-black/20 px-4 py-1 rounded-full border border-yellow-400/40 shadow-inner">📅 3 मई 2026 - रविवार</span>
        </span>

        {/* Duplicate Set for Seamless Loop */}
        <span className="text-white dark:text-yellow-50 font-black text-sm md:text-lg italic tracking-[0.15em] px-4 drop-shadow-md">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-yellow-300">✦</span> वैवाहिक कार्यक्रम में आपका हार्दिक स्वागत है <span className="text-yellow-300">✦</span> 
          &nbsp;&nbsp;&nbsp;&nbsp; 🌹 <span className="text-yellow-100 uppercase">सुमित और कान्ति</span> के परिणयोत्सव में पधारकर आशीर्वाद दें 🌹 
          &nbsp;&nbsp;&nbsp;&nbsp; <span className="bg-black/20 px-4 py-1 rounded-full border border-yellow-400/40 shadow-inner">📅 3 मई 2026 - रविवार</span>
        </span>
      </div>
    </div>

      {/* --- OVERLAY LAYER: Crackers & Hearts (z-50) --- */}
      <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
        {/* <div className="absolute top-[10%] left-[15%] w-6 h-6 bg-red-600 dark:bg-white rounded-full animate-ping [animation-duration:0.8s] opacity-70"></div>
        <div className="absolute top-[40%] right-[10%] w-8 h-8 bg-red-700 dark:bg-white/80 rounded-full animate-ping [animation-duration:1.2s] delay-150 opacity-50"></div> */}
        
        <div className="absolute inset-0 text-red-600/60 dark:text-white/50">
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
      </div>

      {/* --- UI LAYER: Navigation Bar (mt-12 to avoid overlapping marquee) --- */}
      <div className="relative z-40 flex space-x-1 md:space-x-2 bg-white/70 dark:bg-slate-900/70 p-1.5 rounded-full shadow-2xl border border-red-200/50 dark:border-slate-700 mt-12 mb-10 w-full max-w-md backdrop-blur-xl">
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

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 w-full flex justify-center transition-all duration-500 ease-in-out">
        <div className="w-full max-w-4xl flex justify-center px-1">
          {activeTab === "Cover" && <Cover />}
          {activeTab === "Dates" && <Dates />}
          {activeTab === "Family Details" && (
            <FamilyDetails brideName="कान्ति कुमारी" groomName="सुमित कुमार" />
          )}
        </div>
      </div>

    </div>
  );
};

export default Home;