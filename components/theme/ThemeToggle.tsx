"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div
      className="relative w-16 h-8 flex items-center dark:bg-black bg-teal-500 cursor-pointer rounded-full p-1"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Moon className="text-white" size={18} />
      <div
        className={cn(
          "absolute bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300",
          theme === "dark" ? "left-1" : "right-1"
        )}
      />
      <Sun size={18} className="ml-auto text-yellow-400" />
    </div>
  );
}
