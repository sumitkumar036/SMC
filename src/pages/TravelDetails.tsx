import React, { useState } from "react";

const TravelDetails: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const travelHubs = [
    { 
      name: "Anugraha Narayan Road (AUBR)", 
      type: "Local Railway Station", 
      dist: "15 KM",
      trains: [
        { name: "Mahabodhi Exp", no: "12397/98" },
        { name: "Purushottam Exp", no: "12801/02" },
        { name: "Palamau Express", no: "13347/48" }
      ]
    },
    { 
      name: "Gaya Junction (GAY) / Airport", 
      type: "Nearest Major Hub", 
      dist: "70 KM",
      trains: [
        { name: "Gaya-DDU Intercity", no: "13243/44" },
        { name: "Mahabodhi Exp", no: "12397/98" },
        { name: "Budh Purnima Exp", no: "14223/24" }
      ]
    },
    { 
      name: "Patna (PNBE) / Airport (PAT)", 
      type: "Capital Hub (Rail & Air)", 
      dist: "140 KM",
      trains: [
        { name: "Jan Shatabdi", no: "12023/24" },
        { name: "Palamu Express", no: "13347/48" },
        { name: "PNBE-SHT passenger", no: "03263" }
      ]
    },
    { 
      name: "Varanasi / Pt. Deen Dayal Upadhyaya", 
      type: "Major Railway Junction", 
      dist: "120 KM",
      trains: [
        { name: "Vande Bharat", no: "22415/16" },
        { name: "Rajdhani Exp", no: "12301/02" },
        { name: "Poorva Express", no: "12303/04" }
      ]
    },
    { name: "Varanasi Airport (VNS)", type: "International Airport", dist: "145 KM" }
  ];

  const toggleInfo = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="relative w-[95%] md:w-full max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden font-hindi leading-relaxed bg-white dark:bg-slate-800/50 border border-red-100 dark:border-slate-800 my-4 animate-fade-in">
      
      <div className="p-5 md:p-12 flex flex-col gap-6">
        <h3 className="text-xl md:text-2xl font-black text-red-900 dark:text-red-100 text-center mb-2 tracking-tight uppercase">
          📍 Location & Travel Details
        </h3>
        
        <div className="space-y-3">
          {travelHubs.map((hub, i) => (
            <div key={i} className="flex flex-col bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-red-50 dark:border-slate-800 overflow-hidden transition-all duration-300">
              
              <div className="flex items-center justify-between p-4 gap-4">
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-bold text-red-800/60 dark:text-red-400/60 uppercase tracking-widest leading-none mb-1">
                    {hub.type}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm md:text-base font-bold text-red-900 dark:text-red-100 truncate md:whitespace-normal">
                      {hub.name}
                    </span>
                    
                    {hub.trains && (
                      <button 
                        onClick={() => toggleInfo(i)}
                        className={`flex-shrink-0 w-6 h-6 rounded-full border border-red-800/30 flex items-center justify-center text-[11px] font-serif transition-all ${
                          expandedIndex === i 
                          ? 'bg-red-800 text-white shadow-inner scale-110' 
                          : 'text-red-800 hover:bg-red-100 active:scale-90'
                        }`}
                      >
                        i
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <span className="text-xs md:text-sm font-black text-white bg-red-800 dark:bg-red-900 px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap inline-block min-w-[75px] text-center">
                    {hub.dist}
                  </span>
                </div>
              </div>

              {/* Collapsible Train List */}
              {hub.trains && (
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out bg-red-50/20 dark:bg-red-950/10 ${
                    expandedIndex === i ? 'max-h-[300px] opacity-100 border-t border-red-100/50' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-4 pt-2">
                    <p className="text-[10px] font-black text-red-800/50 uppercase mb-2 tracking-widest">Recommended Trains:</p>
                    <div className="grid grid-cols-1 gap-2">
                      {hub.trains.map((train, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-white/60 dark:bg-slate-800/40 px-3 py-2 rounded-lg border border-red-100/30">
                          <span className="text-xs font-bold text-red-900 dark:text-red-200">{train.name}</span>
                          <span className="text-[10px] font-mono font-bold bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 px-2 py-0.5 rounded">
                            #{train.no}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Map Section */}
          <div className="pt-6">
            <div className="w-full bg-transparent border-2 border-red-800 dark:border-red-700 text-red-900 dark:text-red-100 py-3 rounded-t-2xl font-bold flex items-center justify-center gap-3">
              <span className="text-xl">🛰️</span>
              <div className="text-left">
                <p className="text-[10px] uppercase opacity-70 leading-none font-bold">Venue Location</p>
                <p className="text-sm md:text-base">Raypura, Aurangabad (Bihar)</p>
              </div>
            </div>

            <div className="w-full h-72 md:h-96 rounded-b-2xl overflow-hidden border-x-2 border-b-2 border-red-800 dark:border-red-700 shadow-inner bg-slate-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.159996076413!2d84.31991047459613!3d24.75570284944288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cff007cc18041%3A0x5db3bf5c4ae6aae0!2sNepal%20Singh!5e0!3m2!1sen!2sin!4v1775290692354!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Wedding Venue Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelDetails;