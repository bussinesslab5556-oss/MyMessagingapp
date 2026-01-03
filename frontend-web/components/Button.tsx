import React from 'react';

interface Props {
  title: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ title, onClick, variant = 'primary' }: Props) => (
  <button
    onClick={onClick}
    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all text-white
    ${variant === 'primary' ? 'bg-[#0055FF] hover:bg-[#0044CC]' : 'bg-[#00CC88] hover:bg-[#00AA77]'}`}
  >
    {title}
  </button>
);
