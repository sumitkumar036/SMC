import React from "react";

const TravelDetails: React.FC = () => {
  const travelHubs = [
    { name: "Anugraha Narayan Road (AUBR)", type: "Local Railway Station", dist: "15 KM" },
    { name: "Varanasi / Pt. Deen Dayal Upadhyaya", type: "Major Railway Junction", dist: "120 KM" },
    { name: "Varanasi Airport (VNS)", type: "International Airport", dist: "145 KM" },
    { name: "Gaya Airport (GAY)", type: "Nearest Airport", dist: "70 KM" },
    { name: "Patna Airport (PAT)", type: "Domestic Airport", dist: "140 KM" }
  ];

  return (

    <div className="relative w-[95%] md:w-full max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden font-hindi leading-relaxed bg-white dark:bg-slate-800/50 border border-red-100 dark:border-slate-800 my-4">
      
      {/* Content Padding matches the Cover p-5 md:p-12 */}
      <div className="p-5 md:p-12 flex flex-col gap-6">
        
        <h3 className="text-xl md:text-2xl font-black text-red-900 dark:text-red-100 text-center mb-2 tracking-tight uppercase">
          📍 Location & Travel Details
        </h3>
        
        <div className="space-y-3">
          {travelHubs.map((hub, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-red-50 dark:border-slate-800">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-red-800/60 dark:text-red-400/60 uppercase tracking-widest leading-none mb-1">
                  {hub.type}
                </span>
                <span className="text-sm md:text-base font-bold text-red-900 dark:text-red-100">
                  {hub.name}
                </span>
              </div>
              <div className="text-right">
                <span className="text-sm font-black text-white bg-red-800 dark:bg-red-900 px-3 py-1 rounded-full shadow-sm">
                  {hub.dist}
                </span>
              </div>
            </div>
          ))}

          {/* --- Navigation Header & Map Section --- */}
          <div className="pt-6">
            {/* Header matches the Footer style of the Cover */}
            <div className="w-full bg-transparent border-2 border-red-800 dark:border-red-700 text-red-900 dark:text-red-100 py-3 rounded-t-2xl font-bold flex items-center justify-center gap-3">
              <span className="text-xl">🗺️</span>
              <div className="text-left">
                <p className="text-[10px] uppercase opacity-70 leading-none font-bold">Venue Location</p>
                <p className="text-sm md:text-base">Raypura, Aurangabad (Bihar)</p>
              </div>
            </div>

            {/* Map Container */}
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

          <p className="text-[10px] text-center text-red-800/60 dark:text-red-200/40 mt-4 italic">
            *You can pinch to zoom or drag the map above to explore the area.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelDetails;