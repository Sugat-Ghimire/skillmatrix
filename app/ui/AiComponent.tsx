"use client";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { useChat } from "ai/react";

const ChatInterface = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const formatMessageContent = (content: string) => {
    // Split the content by '**' to find titles and text
    const parts = content
      .split(/\*\*(.*?)\*\*/)
      .filter((part) => part.trim() !== "");

    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return (
          <h2 key={index} className="mb-2">
            {part.replace("*", "")}
          </h2>
        );
      } else {
        return (
          <p key={index} className="font-bold text-lg mt-2">
            {part}
          </p>
        );
      }
    });
  };

  return (
    <div className="h-screen flex flex-col  text-gray-100">
      <nav className="flex justify-between items-center py-4 px-10  text-black">
        <h1 className="text-xl font-semibold">Ask AI</h1>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-7 w-7 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <h1>User</h1>
        </div>
      </nav>

      <main className="flex-grow p-6 flex flex-col items-center overflow-y-auto">
        <form onSubmit={handleSubmit} className="flex gap-3 sticky top-0 mb-5">
          <input
            className="flex-grow rounded-xl border p-3 bg-gray-50 text-gray-900"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="rounded-xl bg-blue-600 p-3 text-white shadow-md transition-all ease-in hover:bg-blue-700"
          >
            Send
          </button>
        </form>
        <div className="w-4/6 ">
          <div className="flex flex-col gap-4 mb-6">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-100 p-3 rounded-lg ${m.role === "user" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
                >
                  {m.role === "user" ? (
                    m.content
                  ) : (
                    <div>
                      <div>{formatMessageContent(m.content)}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div ref={messagesEndRef} />
        </div>
      </main>
    </div>
  );
};

export default ChatInterface;
