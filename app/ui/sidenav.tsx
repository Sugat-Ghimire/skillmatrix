import Link from "next/link";
import NavLinks from "@/app/ui/nav-links";

import { PowerIcon } from "@heroicons/react/24/outline";
import { inter } from "./fonts";

export default function SideNav() {
  return (
    <div className="w-70 flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-4 flex h-20 items-end justify-start rounded-2xl bg-blue-700 p-4 md:h-40"
        href="/"
      >
        <div>
          <h1
            className={`${inter.className} text-3xl text-cyan-100 font-semibold`}
          >
            Skill Matrix
          </h1>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-3">
        <NavLinks />

        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-slate-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
