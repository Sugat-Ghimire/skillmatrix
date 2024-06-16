"use client";
import Head from "next/head";
import { useState } from "react";

const LoginPage = () => {
  const [businessName, setBusinessName] = useState("");
  const [businessCode, setBusinessCode] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (businessName === "DemoBusiness" && businessCode === "123456") {
      setLoggedIn(true);
    } else {
      alert("Invalid business name or code. Please try again.");
    }
  };

  const userRankings = [
    {
      id: 1,
      username: "John Doe",
      address: "123 Main St, City",
      jobType: "Software Engineer",
      contact: "john.doe@example.com",
    },
    {
      id: 2,
      username: "Jane Smith",
      address: "456 Oak Ave, Town",
      jobType: "Software Engineer",
      contact: "jane.smith@example.com",
    },
    {
      id: 3,
      username: "Michael Johnson",
      address: "789 Elm Rd",
      jobType: "Software Engineer",
      contact: "michael.johnson@example.com",
    },
    {
      id: 4,
      username: "Emily Brown",
      address: "321 Pine Ln, Suburb",
      jobType: "Software Engineer",
      contact: "emily.brown@example.com",
    },
    {
      id: 5,
      username: "David Lee",
      address: "654 Cedar Blvd, County",
      jobType: "Software Engineer",
      contact: "david.lee@example.com",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyan-50">
      <Head>
        <title>Welcome to Your Business Page</title>
        <meta name="description" content="Business Page Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto px-8 py-12 bg-white rounded-lg shadow-lg flex flex-col space-y-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-6">Welcome to Your Business</h1>

          {!loggedIn ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label
                  htmlFor="businessName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  className="m-3 block w-full border-gray-300 rounded-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-8"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="businessCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Business Code
                </label>
                <input
                  type="password"
                  id="businessCode"
                  className="m-3 block w-full border-gray-300 rounded-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-8"
                  value={businessCode}
                  onChange={(e) => setBusinessCode(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Login
              </button>
            </form>
          ) : (
            <div className="w-full">
              <h2 className="text-xl font-medium mt-6 mb-8">
                Here are the top 5 users ranked according to your business's
                requirements for software engineers
              </h2>
              <div className="overflow-hidden border border-gray-200 rounded-md">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Username
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Address
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Job Type
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Contact
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {userRankings.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {user.username}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.address}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.jobType}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.contact}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
