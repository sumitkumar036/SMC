import React from 'react';
import MantraHeader from '../components/MantraHeader';

const Dates: React.FC = () => {
  return (
    /* Added w-[95%] for mobile to ensure a small margin on the sides */
    <div className="relative w-[95%] md:w-full max-w-3xl mx-auto rounded-xl shadow-2xl overflow-hidden font-hindi leading-relaxed dark:bg-slate-800/50 my-4">
      
      {/* Background Watermark Layer */}
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-20 z-0 bg-white dark:bg-slate-900 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: 'url("/card.jpeg")' }}
      >
        <div className="absolute inset-0 flex justify-center items-center">
            <svg className="w-[80%] h-[80%] text-red-100 dark:text-red-950/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
            </svg>
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 p-5 md:p-12 text-red-900 dark:text-red-100 border border-red-100 dark:border-slate-800">
        
        {/* Top Mantra Header */}
        <MantraHeader />

        {/* Header Row - Stacked on Mobile, Row on Desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 text-center md:text-left text-sm md:text-base font-semibold text-red-800 dark:text-red-200 gap-4">
          <div className="leading-tight">
            मंगलम् भगवान विष्णु:<br/>
            मंगलम् पुण्डरीकाक्ष:
          </div>
          
          <div className="flex-shrink-0">
            <svg className="w-12 h-12 md:w-16 md:h-16 text-red-700 dark:text-red-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
            </svg>
          </div>

          <div className="md:text-right leading-tight">
            मंगलम् गरुड़ध्वज: !<br/>
            मंगलाय तनो हरि: !!
          </div>
        </div>

        {/* Title Banner */}
        <div className="flex justify-center mb-10">
            <div className="bg-red-800 dark:bg-red-900 text-white px-8 md:px-10 py-2 rounded-full font-bold text-xl md:text-2xl shadow-md border-2 border-red-900 dark:border-red-200">
                वैवाहिक कार्यक्रम
            </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
          {/* Tile 1 */}
          <div className="border-2 border-red-200 dark:border-red-900 rounded-3xl p-4 text-center bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-extrabold mb-1">शुभ तिलक</h3>
            <p className="text-lg font-bold">दिनांक 28.04.2026</p>
            <p className="text-base">( मंगलवार )</p>
          </div>
          
          {/* Tile 2 */}
          <div className="border-2 border-red-200 dark:border-red-900 rounded-3xl p-4 text-center bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-extrabold mb-1">मण्डपाच्छादन हल्दी कलश</h3>
            <p className="text-lg font-bold">दिनांक 01.05.2026</p>
            <p className="text-base">( शुक्रवार )</p>
          </div>

          {/* Tile 3 */}
          <div className="border-2 border-red-200 dark:border-red-900 rounded-3xl p-4 text-center bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-extrabold mb-1">घृतढारी एवं देवपूजन</h3>
            <p className="text-lg font-bold">दिनांक 02.05.2026</p>
            <p className="text-base">( शनिवार )</p>
          </div>

          {/* Tile 4 */}
          <div className="border-2 border-red-200 dark:border-red-900 rounded-3xl p-4 text-center bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-extrabold mb-1 leading-snug">बारात प्रस्थान एवं रात्रि में शुभ विवाह</h3>
            <p className="text-lg font-bold">दिनांक 03.05.2026</p>
            <p className="text-base">( रविवार )</p>
          </div>
        </div>

        {/* Notes and Poetry Section */}
        <div className="space-y-6 text-center border-t-2 border-b-2 border-red-100 py-6 mb-8 dark:border-red-900">
          <p className="text-md md:text-lg font-bold leading-relaxed px-2">
            नोट:- बारात दिनांक 03.05.2026 को सुरक्षित वाहन द्वारा अपने निवास स्थान ग्राम- रायपुरा से ग्राम- रजवरीया कला के लिए शाम 04:00 बजे प्रस्थान करेगी।
          </p>
          
          <div className="italic text-red-700 dark:text-red-400 font-bold px-2 text-sm md:text-base">
            "हल्दी है चंदन है रिश्तो का बंधन है। मेरे मामा और चाचा की शादी में आपका अभिनन्दन है.....खुशी,लक्की,इच्छा,एली,बुचन,चिन्मय"
          </div>
        </div>

        {/* Bottom Poetry Box */}
        <div className="text-red-900 dark:text-white p-4 rounded-b-3xl text-center font-bold italic border-2 border-red-200 bg-white/50 dark:bg-slate-800/50 leading-snug md:leading-relaxed text-sm md:text-base dark:border-red-900">
          "कौन किसके करीब होता है, कौन किसका नसीब होता है,<br className="hidden md:block" />
          विवाह उसी से होता है, जिसका जहाँ नसीब होता है।"
        </div>

      </div>
    </div>
  );
};

export default Dates;