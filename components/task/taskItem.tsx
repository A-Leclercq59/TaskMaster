"use client";

import { LuFileEdit } from "react-icons/lu";
import { MdDelete } from "react-icons/md";

import { Task } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

interface TaskItemProps {
  task: Task;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  const { title, description, date, isImportant, isCompleted } = task;

  const formattedDate = date.toLocaleDateString("en-GB", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Card className="w-[350px] min-h-[270px] flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-grow flex-col">
        <div className="text-sm">{description}</div>
        <div className="h-full flex flex-col justify-end">
          <div className="flex flex-col justify-end gap-2">
            <div className="text-sm">{formattedDate}</div>
            <div className="flex justify-between">
              <Badge
                variant="outline"
                className={cn(
                  "w-24 h-7 text-white rounded-xl",
                  isCompleted && "bg-emerald-500",
                  !isCompleted && "bg-destructive"
                )}
              >
                <span className="w-full text-center">
                  {isCompleted ? "Completed" : "Incompleted"}
                </span>
              </Badge>
              <div className="flex items-center gap-2">
                <LuFileEdit className="h-5 w-5" />
                <MdDelete className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
