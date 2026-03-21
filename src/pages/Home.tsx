import React, { useState } from "react";
import FamilyDetails from "./FamilyDetails";
import Cover from "./Cover";
import Dates from "./Dates";

const Home: React.FC = () => {
  // Local state to handle UI highlighting of the tabs
  const [activeTab, setActiveTab] = useState("Cover");

  const tabs = ["Cover", "Dates", "Family Details"];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 flex flex-col items-center">
      
      {/* 3 Tabs Navigation Bar */}
      <div className="flex space-x-2 bg-white dark:bg-slate-900 p-1 rounded-full shadow-md border border-red-100 dark:border-slate-800 mb-10 w-full max-w-md">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)} // You can change this to a redirect function later
            className={`flex-1 py-2 px-4 rounded-full font-bold transition-all duration-200 ${
              activeTab === tab
                ? "bg-red-700 text-white shadow-sm"
                : "text-red-800 dark:text-red-300 hover:bg-red-50 dark:hover:bg-slate-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Conditional Content Area */}
      <div className="w-full transition-opacity duration-300">
        {activeTab === "Cover" && (
          <Cover />
        )}
        
        {activeTab === "Dates" && (
          <div className="text-center p-20 text-red-800 dark:text-red-200 font-bold">
            <Dates />
          </div>
        )}

        {activeTab === "Family Details" && (
          <div className="text-center p-20 text-red-800 dark:text-red-200 font-bold">
            <FamilyDetails brideName="कान्ति कुमारी" groomName="सुमित कुमार" />
          </div>
        )}
      </div>

    </div>
  );
};

export default Home;