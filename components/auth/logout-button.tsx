"use client";

import { MdLogout } from "react-icons/md";

import { Button } from "@/components/ui/button";
import { logout } from "@/actions/logout";

export const LogoutButton = () => {
  return (
    <Button
      variant="link"
      onClick={() => logout()}
      className="flex flex-row items-center gap-x-2 dark:text-white hover:text-red-600"
    >
      <MdLogout className="h-5 w-5" />
      <span className="max-md:hidden">Sign Out</span>
    </Button>
  );
};
