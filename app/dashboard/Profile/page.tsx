"use client";
import Dropdown from "@/app/ui/aDropdown";

export default function YourCv() {
  const items = [
    { label: "Company A", value: "Company A" },
    { label: "Company B", value: "Company B" },
    { label: "Company C", value: "Company C" },
  ];
  const showAck = () => {
    alert("Application has been sent");
  };
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-white bg-gradient-to-r from-blue-500 to-purple-600 py-4 px-6 rounded-lg shadow-md">
        Your Generated Skill Matrix Profile
      </h1>

      <div className="flex justify-between">
        <div className="mt-8">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            Change Templates
          </button>
        </div>
        <button
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold mt-7 h-10 items-center rounded-lg  px-3 py-2 transition-all ease-in hover:rounded-xl hover:bg-gray-300"
          onClick={showAck}
        >
          Edit
        </button>
      </div>
    </>
  );
}
