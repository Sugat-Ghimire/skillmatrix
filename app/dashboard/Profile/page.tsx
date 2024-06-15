"use client";

import Head from "next/head";
import { useState } from "react";

const Profile = () => {
  const [template, setTemplate] = useState("template1");

  const handleTemplateToggle = () => {
    const newTemplate = template === "template1" ? "template2" : "template1";
    setTemplate(newTemplate);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Your Skill Matrix Profile</title>
        <meta name="description" content="Your Skill Matrix Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto p-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">Your Skill Matrix Profile</h1>
          <div className="flex items-center space-x-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
              onClick={handleTemplateToggle}
            >
              Toggle Template
            </button>
            {/* Edit button (placeholder) */}
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none">
              Edit
            </button>
          </div>
        </div>

        {/* Main content section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Resume section (placeholder) */}
        </div>
      </main>
    </div>
  );
};

export default Profile;
