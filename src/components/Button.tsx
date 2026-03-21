import React from "react";

interface LoadingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button: React.FC<LoadingButtonProps> = ({
  isLoading = false,
  children,
  className = "",
  disabled,
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      aria-busy={isLoading}
      disabled={isLoading || disabled}
      className={`
        bg-indigo-500 text-white font-medium py-2 px-4 rounded
        flex items-center justify-center gap-2
        transition
        ${disabled ? "opacity-70 cursor-not-allowed" : "hover:bg-indigo-600"}
        ${className}
      `}
      {...props}
    >
      {/* Spinner */}
      {isLoading && (
        <svg
          className="w-5 h-5 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      )}

      {/* Text */}
      <span className={disabled ? "opacity-90" : ""}>{children}</span>
    </button>
  );
};

export default Button;
