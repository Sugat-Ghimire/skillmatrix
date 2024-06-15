"use client";
import React from "react";

const companies = [
  {
    name: "Tech Solutions",
    address: "1234 Silicon Valley, CA",
    jobRole: "Software Engineer",
  },
  {
    name: "Creative Minds",
    address: "5678 Innovation Dr, TX",
    jobRole: "Software Engineer",
  },
  {
    name: "Biz Group",
    address: "91011 Business St, NY",
    jobRole: "Software Engineer",
  },
  {
    name: "liz Corporation",
    address: "91011 Business St, KTM",
    jobRole: "Software Engineer",
  },
];

const JobListing = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Job Listings
        </h1>
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-100 p-4 mb-4 rounded-lg shadow hover:bg-gray-200 transition duration-200"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {company.name}
              </h2>
              <p className="text-gray-600">{company.address}</p>
              <p className="text-gray-600">{company.jobRole}</p>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
              Apply
            </button>
          </div>
        ))}
        <div className="flex justify-between items-center mt-6">
          <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200">
            Previous
          </button>
          <div className="flex space-x-2">
            <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200">
              1
            </button>
            <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200">
              2
            </button>
            <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200">
              3
            </button>
          </div>
          <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
