import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";

import Image from "next/image";
import SkillMatrix from "./ui/Skill-MatrixLogo";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-3xl bg-slate-600 p-4 md:h-52">
        {/**skill matrix logo should be here */}
        <SkillMatrix />
        {/**further refining later*/}
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`text-xl text-gray-800 md:text-3xl md:leading-normal ${lusitana.className}`}
          >
            <strong>Welcome to Skill Matrix.</strong>
            Attest your skills here. And grow
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-slate-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-400 md:text-base"
          >
            <span className="flex gap-1">
              Log in{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/*Images should be here */}
        </div>
      </div>
    </main>
  );
}
