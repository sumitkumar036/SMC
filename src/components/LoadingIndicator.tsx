import { LuRefreshCw } from "react-icons/lu";
import React from "react";

export const LoadingIndicator: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex justify-center items-center py-10">
    <p className="flex items-center gap-2 text-gray-500">
      {text} <LuRefreshCw className="w-6 h-6 animate-spin" />
    </p>
  </div>
);
