"use client";

import { Task } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { DeleteTaskDialog } from "./delete-task-dialog";
import { LuFileEdit } from "react-icons/lu";

import { useModal } from "@/hooks/use-modal-store";

interface TaskItemProps {
  task: Task;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  const { title, description, date, isCompleted } = task;
  const { onOpen } = useModal();

  const formattedDate = date.toLocaleDateString("en-GB", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Card className="w-full md:w-[350px] min-h-[270px] flex flex-col">
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
                <LuFileEdit
                  className="h-5 w-5 hover:text-primary cursor-pointer"
                  onClick={() => onOpen("editTask", { task })}
                />
                <DeleteTaskDialog taskId={task.id} />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
