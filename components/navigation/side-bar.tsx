"use client";

import { IoHomeSharp } from "react-icons/io5";
import { FaListCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme/ThemeToggle";
import { LogoutButton } from "../auth/logout-button";

const navigationList = [
  {
    label: "All Tasks",
    icon: <IoHomeSharp className="h-5 w-5" />,
    path: "/dashboard",
    targetSegment: null,
  },
  {
    label: "Important",
    icon: <FaListCheck className="h-5 w-5" />,
    path: "/dashboard/important",
    targetSegment: "important",
  },
  {
    label: "Completed",
    icon: <FaCheck className="h-5 w-5" />,
    path: "/dashboard/completed",
    targetSegment: "completed",
  },
  {
    label: "Do It Today",
    icon: <FaClipboardList className="h-5 w-5" />,
    path: "/dashboard/today",
    targetSegment: "today",
  },
];

export const SideBar = () => {
  const activeSegment = useSelectedLayoutSegment();

  return (
    <div className="w-full bg-primary-foreground items-center flex border rounded-xl shadow-md py-4 h-full flex-col">
      <div className="flex items-center h-full w-full">
        <nav className="w-full">
          <ol className="space-y-2">
            {navigationList.map((navigation, index) => (
              <li
                key={index}
                className={cn(
                  activeSegment === navigation.targetSegment &&
                    "dark:bg-card bg-slate-200 border-r-4 border-emerald-500 rounded-r-lg"
                )}
              >
                <Link
                  href={navigation.path}
                  className="flex flex-row items-center gap-5 py-2 px-4"
                >
                  {navigation.icon}
                  <span className="max-md:hidden">{navigation.label}</span>
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </div>
      <div className="flex flex-col items-center mb-2 ">
        <ThemeToggle />
        <LogoutButton />
      </div>
    </div>
  );
};
