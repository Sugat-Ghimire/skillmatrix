"use client";
import { lusitana } from "@/app/ui/fonts";
import { quiz } from "./data";
import { useState } from "react";
import Dropdown from "../ui/dropdown";

const items = [
  { label: "Accountancy ", value: "Accountancy" },
  { label: "Software Engineering ", value: "Software Engineering" },
  { label: "Bank Manager", value: "Bank Manager" },
  { label: "Civil Engineering", value: "Civil Engineering" },
  { label: "Mechanical Engineering", value: "Mechanical Engineering" },
  { label: "Agricultural Engineering", value: "Agricultural Engineering" },
];
const selectedClassHover =
  "hover:bg-slate-500 m-3 w-max rounded-sm cursor-pointer";
const selectedClass = "bg-slate-300 m-3 w-max rounded-sm cursor-pointer";
export default function Page() {
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
    setResult((prev) =>
      selectedAns
        ? {
            ...prev,
            score: prev.score + 10,
            correctAns: prev.correctAns + 1,
          }
        : {
            ...prev,
            score: prev.score,
            wrongAns: prev.wrongAns + 1,
          }
    );
    if (activeQn !== questions.length - 1) {
      setActiveQN((prev) => Number(prev + Number(1)));
    } else {
      setActiveQN(Number(0));
      setShowResult(true);
    }
    setChecked(false);
  };

  console.log(activeQn);

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Test page
      </h1>
      <nav className="flex">
        <div className="w-full">
          <Dropdown label="Select" items={items} />
        </div>
      </nav>
      <div className="mt-3 w-max rounded-lg bg-slate-100 text-lg font-semibold">
        <h1>Your Evaluation Begins here,check the correct answers</h1>
      </div>
      <div className="flex justify-between text-slate-700">
        <h1 className="mt-4 text-2xl font-bold">
          Questions : {activeQn + 1}/{questions.length}
        </h1>
        <h1 className="mt-4 text-2xl font-bold">Skill Matrix Rating : A+</h1>
      </div>
      <div className="mx-auto mt-11 h-72 w-2/4 rounded-lg ">
        {/**Main quiz app */}
        {showResult ? (
          <div>
            <h3>Results</h3>
            <h3>Overall {result.score}</h3>
          </div>
        ) : (
          <div>
            <h3 className="w-max bg-slate-100 text-2xl font-semibold">
              {questions[activeQn].question}
            </h3>
            <div className="m-4 ml-1 list-none text-xl">
              {answers.map((ans, id) => (
                <li
                  key={id}
                  onClick={() => onAnswerSelected(ans, id)}
                  className={
                    selectedAnsIndex === id
                      ? `${selectedClass}`
                      : `${selectedClassHover}`
                  }
                >
                  <span>{ans}</span>
                </li>
              ))}
            </div>
            {checked ? (
              <button
                className="ml-3 w-max rounded-md bg-stone-900 p-1 text-white transition-all ease-in hover:rounded-lg hover:bg-stone-800"
                onClick={nextQn}
              >
                <div className="flex">
                  <h1 className="text-xl">
                    {activeQn == Number(questions.length - 1)
                      ? "Complete"
                      : "Next"}
                  </h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="mt-0.5 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </button>
            ) : (
              <button
                disabled
                className="ml-3 rounded-md bg-stone-900 p-1 text-white transition-all ease-in hover:rounded-lg hover:bg-stone-800"
                onClick={nextQn}
              >
                <div className="flex">
                  <h1 className="text-xl">
                    {" "}
                    {activeQn == Number(questions.length - 1)
                      ? "Complete"
                      : "Next"}
                  </h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="mt-0.5 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </button>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
