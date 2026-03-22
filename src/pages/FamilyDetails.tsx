import React from 'react';
import MantraHeader from '../components/MantraHeader';


interface WeddingInvitationProps {
  brideName?: string;
  groomName?: string;
}

const FamilyDetails: React.FC<WeddingInvitationProps> = ({
  brideName = "कान्ति कुमारी", 
  groomName = "सुमित कुमार" 
}) => {
  return (
    /* Added w-[95%] for mobile spacing */
        <div className="relative w-[95%] md:w-full max-w-3xl mx-auto rounded-xl shadow-2xl overflow-hidden font-hindi leading-relaxed bg-white dark:bg-slate-800/50 border border-red-100 dark:border-slate-800 my-4">

      
      {/* Background Watermark Layer */}
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-20 z-0 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: 'url("/card.jpeg")' }}
      >
        <div className="absolute inset-0 flex justify-center items-center">
            <svg className="w-[80%] h-[80%] text-red-100 dark:text-red-950/20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 p-5 md:p-12 text-red-900 dark:text-red-100">
        
        {/* Top Mantra Header */}
        <MantraHeader />

        {/* Header Row - Stacked on Mobile */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 text-center md:text-left text-sm md:text-base font-semibold text-red-800 dark:text-red-200 gap-4">
          <div className="leading-tight">
            वक्रतुण्ड महाकाय <br/> 
            निर्विघ्नं कुरु मे देव
          </div>
          
          <div className="flex-shrink-0">
            <svg className="w-12 h-12 md:w-16 md:h-16 text-red-700 dark:text-red-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
            </svg>
          </div>

          <div className="md:text-right leading-tight">
            सूर्यकोटि समप्रभ !<br/>
            सर्वकार्येषु सर्वदा!!
          </div>
        </div>

        {/* Intro Message */}
        <div className="text-center font-bold text-lg md:text-xl mb-10 text-red-800 dark:text-red-200">
          <span className="block text-center md:text-left md:ml-12 mb-1">स्नेही स्वजन,</span>
          परमपिता परमेश्वर की असीम अनुकम्पा से,
        </div>

        {/* Groom Section */}
        <div className="relative text-center mb-10 border-2 border-red-200 dark:border-red-900 rounded-3xl p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
          <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2">
            <svg className="w-20 h-32 text-red-700 dark:text-red-400 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            <span className="text-xl md:text-2xl font-semibold mr-2 block md:inline">आयुष्मान्</span> 
            {groomName} 
            <span className="text-[12px] md:text-xs italic text-red-700 dark:text-red-400 font-bold opacity-80">(Software Engineer)</span>
          </h1>
          <div className="text-sm md:text-lg font-semibold space-y-1">
            <p>सुपुत्र- श्रीमती ललिता देवी एवं श्री नेपाल सिंह</p>
            <p>ग्राम- रायपुरा, पोस्ट- रामबिलाश नगर</p>
            <p>जिला- औरंगाबाद (बिहार)</p>
          </div>
        </div>

        {/* Divider */}
        <div className="flex flex-col items-center justify-center my-6">
          <div className="bg-red-800 dark:bg-red-900 text-white px-8 py-1.5 rounded-full font-bold text-xl shadow-md border-2 border-red-900 dark:border-red-200">
            संग
          </div>
          <div className="text-red-400 dark:text-red-600 mt-1 font-serif text-2xl">~ ❦ ~</div>
        </div>

        {/* Bride Section */}
        <div className="relative text-center mb-8 border-2 border-red-200 dark:border-red-900 rounded-3xl p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
          <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2">
            <svg className="w-20 h-32 text-red-700 dark:text-red-400 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            <span className="text-xl md:text-2xl font-semibold mr-2 block md:inline">आयुष्मती</span> 
            {brideName}
          </h1>
          <div className="text-sm md:text-lg font-semibold space-y-1">
            <p>सुपुत्री- श्रीमती शान्ति देवी एवं श्री संजय सिंह</p>
            <p>ग्राम+पोस्ट- रजवरीया कला</p>
            <p className="md:inline">थाना- नबीनगर, </p>
            <p className="md:inline"> जिला- औरंगाबाद (बिहार)</p>
          </div>
        </div>

        {/* Ke Parinayotsav */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="w-10 h-10 bg-red-800 dark:bg-red-900 text-white rounded-full flex items-center justify-center font-bold text-lg mb-2 shadow-md">के</div>
          <div className="bg-red-800 dark:bg-red-900 text-white px-6 md:px-10 py-1.5 rounded-full font-bold text-lg md:text-xl shadow-md flex items-center gap-2 md:gap-4 border-2 border-red-900 dark:border-red-200 text-center">
            <span>❦</span> मांगलिक परिणयोत्सव <span>❦</span>
          </div>
        </div>

        <div className='border-2 border-red-200 dark:border-red-900 rounded-3xl p-4 md:p-6 text-center bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm'>
          {/* Main Invitation Message */}
          <div className="text-center font-bold text-md md:text-xl mb-8 md:mb-12 leading-relaxed px-2">
            की शुभ बेला में सपरिवार उपस्थित होकर वर-वधू <br />
            को अपने आशीर्वादों से अनुगृहीत करें।
          </div>

          {/* Akankshi */}
          <div className="text-center mb-10">
                       <div className="font-extrabold text-lg md:text-xl mb-3">-: स्वागताकांक्षी :-</div>
              <div className="text-md md:text-lg font-semibold md:text-center">
                रंजीत सिंह <span className="text-[10px] md:text-xs italic text-red-700 dark:text-red-400 font-bold opacity-80">(SAIL)</span><br/> 
                संजीत सिंह <span className="text-[10px] md:text-xs italic text-red-700 dark:text-red-400 font-bold opacity-80">(IAF)</span><br/>
                संजय सिंह <span className="text-[10px] md:text-xs italic text-red-700 dark:text-red-400 font-bold opacity-80">(IAF)</span>
              </div>
          </div>

          {/* Footer Grid - Stacked on Mobile */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 text-center md:text-left">
            <div className="font-semibold text-sm md:text-lg w-full md:w-1/2">
              <div className="font-extrabold text-lg md:text-xl mb-3">-: दर्शनाभिलाषी :-</div>
              सोनू सिंह, प्रिंस सिंह, विशाल सिंह,<br className="hidden md:block"/>
              आयुष सिंह, निशांत सिंह, रिशांक सिंह, <br className="hidden md:block"/>
              चिन्मय सिंह एवं समस्त सिंह परिवार।
            </div>

            
            
            <div className="font-semibold text-sm md:text-lg w-full md:w-1/2 flex flex-col items-center md:items-end">
             <div className="font-extrabold text-lg md:text-xl mb-3">-: आकांक्षी :-</div>
              <div className="text-md md:text-lg font-semibold">
                अशोक सिंह, बिनोद सिंह<br/> अलोक सिंह, छोटू सिंह
              </div>
    
            </div>





          </div>
        </div>

      </div>
    </div>
  );
};

export default FamilyDetails;