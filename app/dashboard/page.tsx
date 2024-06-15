"use client";
import { inter } from "@/app/ui/fonts";
import { quiz } from "./data";
import { useState } from "react";
import Dropdown from "../ui/dropdown";

const items = [
  { label: "Software Engineering", value: "Software Engineering" },
  { label: "Accountancy", value: "Accountancy" },
  { label: "Bank Manager", value: "Bank Manager" },
  { label: "Civil Engineering", value: "Civil Engineering" },
  { label: "Mechanical Engineering", value: "Mechanical Engineering" },
  { label: "Agricultural Engineering", value: "Agricultural Engineering" },
  { label: "Graphics Designer", value: "Graphics Designer" },
];

const selectedClassHover =
  "hover:bg-blue-200 m-3 w-full p-2 rounded-lg cursor-pointer";
const selectedClass = "bg-blue-300 m-3 w-full p-2 rounded-lg cursor-pointer";

export default function Page() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedAns, setSelectedAns] = useState("");
  const [activeQn, setActiveQN] = useState(0);
  const [selectedAnsIndex, setSelectedAnsIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAns: 0,
    wrongAns: 0,
  });
  const [checked, setChecked] = useState(false);
  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQn];

  const onAnswerSelected = (ans: string, id: number) => {
    setChecked(true);
    setSelectedAnsIndex(id);
    if (ans === correctAnswer) {
      setSelectedAns(true);
    } else {
      setSelectedAns(false);
    }
  };

  const nextQn = () => {
    setSelectedAnsIndex(null);
    setResult((prev) => ({
      ...prev,
      score: selectedAns ? prev.score + 10 : prev.score,
      correctAns: selectedAns ? prev.correctAns + 1 : prev.correctAns,
      wrongAns: selectedAns ? prev.wrongAns : prev.wrongAns + 1,
    }));

    if (activeQn !== questions.length - 1) {
      setActiveQN((prev) => prev + 1);
    } else {
      setShowResult(true);
    }

    setChecked(false);
  };

  const handleProfileSelect = (item) => {
    setSelectedProfile(item.value);
  };

  return (
    <main className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      {!selectedProfile ? (
        <>
          <h1
            className={`${inter.className} mb-6 text-4xl text-gray-800 font-semibold mt-5`}
          >
            Test Yourself
          </h1>
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Welcome to Skill Matrix
            </h2>
            <p className="text-gray-600 mb-4">
              Skill Matrix is a platform designed to help you assess your skills
              and identify areas for improvement. Our skill assessment quiz is
              tailored to your job profile, ensuring that you get the most
              relevant and accurate evaluation.
            </p>
            <h2 className="text-lg font-medium mb-3 text-gray-700">
              Select your job profile to get started
            </h2>
            <Dropdown
              label="Select"
              items={items}
              onSelect={handleProfileSelect}
            />
          </div>
        </>
      ) : (
        <div className="mt-8 w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Your Evaluation Begins Here. Check the correct answers:
          </h2>
          <div className="flex justify-between text-gray-700 mb-6">
            <h3 className="text-lg font-medium">
              Question {activeQn + 1} of {questions.length}
            </h3>
            <h3 className="text-lg font-medium">Score: {result.score}</h3>
          </div>
          {showResult ? (
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-6">Results</h3>
              <p className="text-lg">Overall Score: {result.score}</p>
              <p className="text-lg">Correct Answers: {result.correctAns}</p>
              <p className="text-lg">Wrong Answers: {result.wrongAns}</p>
              <p className="text-lg font-bold mt-4">Skill Matrix Rating: A+</p>
            </div>
          ) : (
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                {question}
              </h3>
              <ul className="mb-6 text-sm">
                {answers.map((ans, id) => (
                  <li
                    key={id}
                    onClick={() => onAnswerSelected(ans, id)}
                    className={
                      selectedAnsIndex === id
                        ? selectedClass
                        : selectedClassHover
                    }
                  >
                    {ans}
                  </li>
                ))}
              </ul>
              <button
                disabled={!checked}
                className={`w-full p-3 rounded-lg text-white font-medium transition-all ease-in 
                ${
                  checked
                    ? "bg-blue-600 hover:bg-blue-500"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                onClick={nextQn}
              >
                {activeQn === questions.length - 1 ? "Complete" : "Next"}
              </button>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
