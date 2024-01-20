"use client";

import { IoMdAdd } from "react-icons/io";

import { Card, CardContent } from "@/components/ui/card";
import { useModal } from "@/hooks/use-modal-store";

export const CardCreateTask = () => {
  const { onOpen } = useModal();

  return (
    <Card
      className="w-full md:w-[350px] min-h-[270px] flex items-center justify-center bg-primary-foreground shadow-md cursor-pointer"
      onClick={() => onOpen("createTask")}
    >
      <CardContent className="flex items-center gap-2">
        <IoMdAdd className="h-5 w-5" />
        Add New Task
      </CardContent>
    </Card>
  );
};
