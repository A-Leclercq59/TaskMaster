import { currentUser } from "@/lib/auth";
import { getTasksByUserId } from "@/data/task";
import { TaskItem } from "./taskItem";
import { ModalWrapper } from "../modal-wrapper";
import { CreateTaskForm } from "./create-form";

interface ListTasksProps {
  isImportant?: boolean;
  isCompleted?: boolean;
  doItNow?: boolean;
}

export const ListTasks = async ({
  isImportant,
  isCompleted,
  doItNow,
}: ListTasksProps) => {
  const user = await currentUser();

  const tasks = await getTasksByUserId({
    id: user?.id,
    isImportant,
    isCompleted,
    doItNow,
  });

  return (
    <div className="flex flex-wrap justify-stretch overflow-auto h-auto gap-4">
      {tasks?.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
      <ModalWrapper headerLabel="Create a Task" type="Create">
        <CreateTaskForm />
      </ModalWrapper>
    </div>
  );
};
