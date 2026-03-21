import React from 'react';

const Cover: React.FC = () => {
  return (
    <div className="relative w-[95%] md:max-w-3xl mx-auto rounded-xl shadow-2xl overflow-hidden font-hindi leading-relaxed bg-white dark:bg-slate-900 border border-red-100 dark:border-slate-800 my-4">
      
      {/* Background Watermark Layer */}
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

      <div className="relative z-10 p-5 md:p-12 text-red-900 dark:text-red-100 min-h-[800px] md:min-h-[850px] flex flex-col justify-between">
        
        {/* Top Header Section */}
        <div className="text-right">
          <div className="text-3xl md:text-4xl font-bold leading-tight inline-block">
            <span className="block border-b-2 border-red-800 dark:border-red-400 pb-1">स्नेह</span>
            <span className="text-2xl md:text-3xl tracking-[0.2em] opacity-90">निमंत्रण</span>
          </div>
        </div>

        {/* Middle Content Section */}
        <div className="mt-8 md:mt-12 flex flex-col items-center w-full">
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10 mb-12 md:mb-16">
            
            {/* Hanging Name Banner */}
            <div className="relative pt-4 w-full md:w-auto flex flex-col items-center">
              <div className="h-[6px] w-48 bg-red-800 dark:bg-red-700 relative rounded-full flex justify-between px-2 items-center shadow-sm">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-1 w-1 bg-white rounded-full opacity-50"></div>
                ))}
              </div>
              <div className="mt-1 border-x-2 border-b-2 border-red-800 dark:border-red-700 rounded-b-[40px] px-8 py-6 text-center bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm w-[90%] md:w-auto">
                <h1 className="text-4xl md:text-5xl font-black mb-1">सुमित</h1>
                <p className="text-xl italic font-bold my-1 text-red-700 dark:text-red-400">संग</p>
                <h1 className="text-4xl md:text-5xl font-black mb-2">कान्ति</h1>
              </div>
              <div className="absolute left-[12%] md:left-2 top-4 w-[2px] h-10 md:h-12 bg-red-900 dark:bg-red-800"></div>
              <div className="absolute right-[12%] md:right-2 top-4 w-[2px] h-10 md:h-12 bg-red-800 dark:bg-red-600"></div>
            </div>

            {/* Date Stamp */}
            <div className="relative flex flex-col items-center scale-90 md:scale-100">
              <div className="w-32 h-10 border-t-2 border-x-2 border-red-800 dark:border-red-700 rounded-t-full flex items-center justify-center bg-white/20">
                  <span className="text-xs font-bold text-red-800 dark:text-red-400">卐</span>
              </div>
              <div className="border-2 border-red-800 dark:border-red-700 p-3 text-center w-40 bg-white/60 dark:bg-slate-800/60 z-10 -mt-1 shadow-md backdrop-blur-sm font-bold">
                 <div className="text-xl leading-none">शुभ विवाह</div>
                 <div className="mt-2 text-lg border-t border-red-800 dark:border-red-700 pt-1">3 मई 2026</div>
                 <div className="text-sm italic">(रविवार)</div>
              </div>
            </div>
          </div>

          {/* Recipient Section */}
          <div className="relative w-full max-w-lg flex items-center mb-10 scale-95 md:scale-100">
            <div className="w-12 h-32 border-l-[3px] border-y-[3px] border-red-800 dark:border-red-700 rounded-l-[50px] flex flex-col justify-end p-2">
               <div className="h-2 w-2 bg-red-800 dark:bg-red-400 rounded-full self-center animate-pulse"></div>
            </div>
            <div className="flex-1 px-4 md:px-6 text-red-900 dark:text-red-100">
               <p className="text-lg font-bold mb-4 italic tracking-wide">सेवा में,</p>
               <div className="space-y-6">
                 <div className="flex items-end border-b-2 border-dotted border-red-200 dark:border-red-800 pb-1">
                   <span className="text-sm font-bold mr-2 whitespace-nowrap opacity-80">श्रीमान/श्रीमती:</span>
                   <div className="flex-1 h-4"></div>
                 </div>
                 <div className="w-full border-b-2 border-dotted border-red-200 dark:border-red-800 h-6"></div>
               </div>
            </div>
            <div className="w-12 h-32 border-r-[3px] border-y-[3px] border-red-800 dark:border-red-700 rounded-r-[50px] flex flex-col justify-start p-2">
              <div className="h-2 w-2 bg-red-800 dark:bg-red-400 rounded-full self-center animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Footer Section - REMOVED BG RED. Now Transparent with Border */}
        <div className="p-6 rounded-b-3xl border-2 border-red-800 dark:border-red-700 shadow-xl flex flex-col md:flex-row justify-between items-center md:items-end gap-4 mt-auto bg-transparent">
          <div className="text-center md:text-left space-y-1">
            {/* Swapped white background on tag for red background as per common designs, or keep simple */}
            <div className="text-red-900 dark:text-red-100 px-6 py-1 inline-block font-bold transform -skew-x-12 mb-2 text-sm">
              प्रेषक :-
            </div>
            <h3 className="text-2xl tracking-tight leading-tight font-black text-red-900 dark:text-red-100">श्री नेपाल सिंह</h3>
            <div className="text-sm font-medium text-red-800 dark:text-red-200 opacity-90">
              <p>ग्राम- रायपुरा, पोस्ट- रामबिलाश नगर</p>
              <p>जिला- औरंगाबाद (बिहार)</p>
              <p className="font-bold pt-1">मो०- 9934971225, 8986415336</p>
            </div>
          </div>

          <div className="text-center md:text-right flex flex-col items-center md:items-end opacity-60 text-red-800 dark:text-red-200">
            <div className="text-[10px] uppercase tracking-widest font-black leading-none text-center">

               <div className="mb-2">
               <svg width="60" height="30" viewBox="0 0 100 50">
                  <path d="M10 40 Q 50 10 90 40" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="50" cy="20" r="4" fill="currentColor" />
               </svg>
            </div>

              Pallavi Printers<br/>Aurangabad
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cover;