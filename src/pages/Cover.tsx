import React from 'react';

const Cover: React.FC = () => {
  return (
    <div className="relative max-w-3xl mx-auto rounded-xl shadow-2xl overflow-hidden font-hindi leading-relaxed bg-white dark:bg-slate-900">
      
      {/* Background Watermark Layer - Exact Match to Dates.tsx */}
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-20 z-0 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: 'url("/card.jpeg")' }}
      >
        <div className="absolute inset-0 flex justify-center items-center">
            <svg className="w-[80%] h-[80%] text-red-100 dark:text-red-950/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
            </svg>
        </div>
      </div>

      {/* Content Layer - Matches Padding/Borders of Dates.tsx */}
      <div className="relative z-10 p-6 md:p-12 text-red-900 dark:text-red-100 border border-red-100 dark:border-slate-800 min-h-[850px] flex flex-col justify-between">
        
        {/* Top Right: Sneh Nimantran Script */}
        <div className="text-right">
          <div className="text-4xl font-bold leading-tight inline-block">
            <span className="block border-b-2 border-red-800 dark:border-red-400 pb-1">स्नेह</span>
            <span className="text-3xl tracking-[0.2em] opacity-90">निमंत्रण</span>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center w-full">
          {/* Middle Section: Name Banner & Date Stamp */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10 mb-16">
            
            {/* Name Banner (Toran/Hanging Style) */}
            <div className="relative pt-4">
              <div className="h-[6px] w-48 bg-red-800 dark:bg-red-700 relative rounded-full flex justify-between px-2 items-center shadow-sm">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-1 w-1 bg-white rounded-full opacity-50"></div>
                ))}
              </div>
              

              <div className="mt-1 border-x-2 border-b-2 border-red-800 dark:border-red-700 rounded-b-[40px] px-8 py-6 text-center bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <h1 className="text-5xl font-black mb-1 drop-shadow-sm">सुमित</h1>
                <p className="text-xl italic font-bold my-1 opacity-80 text-red-700 dark:text-red-400">संग</p>
                <h1 className="text-5xl font-black mb-2 drop-shadow-sm">कान्ति</h1>
               
              </div>

                  <div className="absolute left-2 top-4 w-[2px] h-12 bg-red-900 dark:bg-red-800">
                      {/* <div className="w-2 h-2 rounded-full bg-red-800 dark:bg-red-700 mt-12 shadow-sm"></div> */}
                  </div>
                  <div className="absolute right-2 top-4 w-[2px] h-12 bg-red-800 dark:bg-red-600">
                      {/* <div className="w-2 h-2 rounded-full bg-red-800 dark:bg-red-700 mt-12 shadow-sm"></div> */}
                  </div>
            </div>

            {/* Date Stamp (Arch Style) */}
            <div className="relative flex flex-col items-center">
              <div className="w-32 h-10 border-t-2 border-x-2 border-red-800 dark:border-red-700 rounded-t-full flex items-center justify-center bg-white/20">
                  <span className="text-xs font-bold text-red-800 dark:text-red-400">卐</span>
              </div>
              <div className="border-2 border-red-800 dark:border-red-700 p-3 text-center w-40 bg-white/60 dark:bg-slate-800/60 z-10 -mt-1 shadow-md backdrop-blur-sm">
                 <div className="flex items-center justify-center gap-2">
                   {/* <div className="rounded-full border-2 border-red-800 dark:border-red-400 w-10 h-10 flex items-center justify-center font-bold text-xl">3</div> */}
                   <div className="text-xl font-bold leading-none">शुभ विवाह</div>
                 </div>
                 <div className="mt-2 text-lg font-bold border-t border-red-800 dark:border-red-700 pt-1">
                  3 मई 2026
                 </div>
                 <div className="text-sm font-semibold italic">(रविवार)</div>
              </div>
            </div>
          </div>

          {/* Recipient Section (Brackets Design) */}
          <div className="relative w-full max-w-lg flex items-center group mb-10">
            <div className="w-12 h-32 border-l-[3px] border-y-[3px] border-red-800 dark:border-red-700 rounded-l-[50px] flex flex-col justify-end p-2 transition-transform group-hover:scale-105">
               <div className="h-2 w-2 bg-red-800 dark:bg-red-400 rounded-full self-center animate-pulse"></div>
            </div>
            
            <div className="flex-1 px-6">
               <p className="text-lg font-bold mb-4 italic tracking-wide">सेवा में,</p>
               <div className="space-y-6">
                 <div className="flex items-end border-b-2 border-dotted border-red-200 dark:border-red-800 pb-1">
                   <span className="text-sm font-bold mr-2 whitespace-nowrap opacity-80">श्रीमान/श्रीमती:</span>
                   <div className="flex-1 h-4"></div>
                 </div>
                 <div className="w-full border-b-2 border-dotted border-red-200 dark:border-red-800 h-6"></div>
               </div>
            </div>

            <div className="w-12 h-32 border-r-[3px] border-y-[3px] border-red-800 dark:border-red-700 rounded-r-[50px] flex flex-col justify-start p-2 transition-transform group-hover:scale-105">
              <div className="h-2 w-2 bg-red-800 dark:bg-red-400 rounded-full self-center animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Footer Section - Matching the bottom Poetry Box style */}
        <div className="text-white  p-6 rounded-b-3xl border-2 border-red-900 shadow-xl flex flex-col md:flex-row justify-between items-end gap-4 mt-auto">
          <div className="text-left space-y-1">
            <div className="text-red-900 dark:text-white px-6 py-1 inline-block font-bold transform -skew-x-12 mb-2 shadow-sm text-sm">
              प्रेषक :-
            </div>
            <h3 className="text-2xl text-red-900 dark:text-white tracking-tight leading-tight">श्री नेपाल सिंह</h3>
            <p className="text-sm text-red-900 dark:text-white font-medium opacity-90">ग्राम- रायपुरा, पोस्ट- रामबिलाश नगर</p>
            <p className="text-sm text-red-900 dark:text-white font-medium opacity-90">जिला- औरंगाबाद (बिहार)</p>
            <p className="text-sm  text-red-900  dark:text-white mt-2">मो०- 9934971225, 8986415336</p>
          </div>

          <div className="text-right flex flex-col items-end opacity-60 text-red-900 dark:text-white">
            <div className="mb-2">
               <svg width="60" height="30" viewBox="0 0 100 50">
                  <path d="M10 40 Q 50 10 90 40" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="50" cy="20" r="4" fill="currentColor" />
               </svg>
            </div>
            <div className="text-[10px] uppercase tracking-widest text-red-900 dark:text-white font-black leading-none text-center">
              Pallavi Printers<br/>Aurangabad
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cover;