import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <input
        {...props}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0055FF] focus:ring-2 focus:ring-[#0055FF]/20 outline-none transition-all font-inter"
      />
    </div>
  );
};
