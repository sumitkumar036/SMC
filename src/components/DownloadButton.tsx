import React from 'react';
import invitationImage from '../assets/invitation.png';

interface DownloadButtonProps {
  variant?: 'solid' | 'outline' | 'minimal';
  className?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ variant = 'solid', className = '' }) => {
  
  const baseStyles = "flex items-center gap-2 rounded-full font-bold transition-all active:scale-95 shadow-sm";
  
  const variants = {
    solid: "bg-red-800 hover:bg-red-700 dark:bg-red-900 dark:hover:bg-red-800 text-white px-5 py-2.5 text-sm",
    outline: "border-2 border-red-800 text-red-800 hover:bg-red-50 dark:border-red-700 dark:text-red-400 px-5 py-2.5 text-sm",
    minimal: "bg-red-800 hover:bg-red-700 text-white px-3 py-1.5 text-[10px] md:text-xs" // Perfect for the Footer
  };

  return (
    <a 
      href={invitationImage} 
      download="Sumit_Kanti_Wedding_Invitation.png"
      className={`${baseStyles} ${variants[variant]} ${className}`}
      title="Download Invitation Card"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      <span>Save Card</span>
    </a>
  );
};

export default DownloadButton;