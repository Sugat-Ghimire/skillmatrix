// import Link from "next/link";
// import { lusitana } from "@/app/ui/fonts";

// import Image from "next/image";
// import SkillMatrix from "./ui/Skill-MatrixLogo";

// export default function Page() {
//   return (
//     <main className="flex min-h-screen flex-col p-6">
//       <div className="flex h-20 shrink-0 items-end rounded-3xl bg-indigo-600 p-4 md:h-52">
//         {/**skill matrix logo should be here */}
//         <SkillMatrix />
//         {/**further refining later*/}
//       </div>
//       <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
//         <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
//           <p
//             className={`text-xl text-gray-800 md:text-3xl md:leading-normal ${lusitana.className}`}
//           >
//             <strong>Welcome to Skill Matrix.</strong>
//             Attest your skills here. And grow
//           </p>
//           <Link
//             href="/login"
//             className="flex items-center gap-5 self-start rounded-lg bg-slate-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-400 md:text-base"
//           >
//             <span className="flex gap-1">
//               Log in{" "}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke-width="1.5"
//                 stroke="currentColor"
//                 className="h-6 w-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
//                 />
//               </svg>
//             </span>
//           </Link>
//         </div>
//         <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
//           {/*Images should be here */}
//         </div>
//       </div>
//     </main>
//   );
// }

import Link from "next/link";
import React from "react";

interface SkillMatrixProps {}

const SkillMatrix: React.FC<SkillMatrixProps> = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-50 to-slate-200 flex flex-col items-center justify-center">
      <h1 className="text-5xl text-black font-bold mb-8">Skill Matrix</h1>

      <nav className="flex space-x-8 mb-16">
        <a href="/" className="text-black hover:text-opacity-75">
          Home
        </a>
        <a href="/about" className="text-black hover:text-opacity-75">
          About Us
        </a>
        <a href="/tech" className="text-black hover:text-opacity-75">
          Tech
        </a>
        <a href="/resources" className="text-black hover:text-opacity-75">
          Resources
        </a>
      </nav>

      <div className="flex flex-col space-y-8">
        <div className="flex space-x-8">
          <button className="px-6 py-3 rounded-full bg-white shadow-md hover:shadow-lg text-indigo-500 font-bold focus:outline-none">
            Hiring
          </button>
          <button className="px-6 py-3 rounded-full bg-white shadow-md hover:shadow-lg text-indigo-500 font-bold focus:outline-none">
            Skill Assessment
          </button>
        </div>
        <Link
          href={"/login"}
          className="px-6 py-3 rounded-full text-center bg-indigo-500 text-white hover:bg-opacity-75 font-bold focus:outline-none"
        >
          <button className="">Login</button>
        </Link>
      </div>

      <div className="mt-16 text-center text-black"></div>
    </div>
  );
};

export default SkillMatrix;
