import React from 'react';

interface Props {
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  type?: string;
}

export const Input = ({ placeholder, value, onChange, type = 'text' }: Props) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="w-full p-4 mb-4 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#0055FF] transition-all"
  />
);
