"use client";
import { useState } from "react";

interface DropdownItem {
  label: string;
  value: string;
}

const Dropdown = ({
  label,
  items,
}: {
  label: string;
  items: DropdownItem[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (item: DropdownItem) => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className="flex items-center rounded-md bg-gray-200 px-3 py-2 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-2">{label}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute z-50 -ml-3 mt-2 w-48 overflow-hidden rounded-2xl bg-white text-sm shadow-sm">
          {items.map((item) => (
            <li
              key={item.value}
              className="block cursor-pointer px-4 py-2 hover:bg-gray-100"
              onClick={() => handleClick(item)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
