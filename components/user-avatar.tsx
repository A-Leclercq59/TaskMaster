"use client";

import { FaUser } from "react-icons/fa";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useCurrentUser } from "@/hooks/use-current-user";

export const UserAvatar = () => {
  const user = useCurrentUser();

  return (
    <div className="flex flex-row space-x-4 px-2 items-center">
      <div className="flex">
        <Avatar className="h-10 w-10">
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-sky-500">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="text-lg ml-4">{user?.name}</div>
    </div>
  );
};
