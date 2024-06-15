"use client";

import { useState } from "react";

export default function Dropdown({ label, items, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-gray-300 rounded-lg shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        {label}
      </button>
      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          {items.map((item) => (
            <li
              key={item.value}
              onClick={() => handleSelect(item)}
              className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white"
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
