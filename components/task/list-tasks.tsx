import { currentUser } from "@/lib/auth";
import { getTasksByUserId } from "@/data/task";
import { TaskItem } from "./taskItem";
import { CardCreateTask } from "./card-create-task";

interface ListTasksProps {
  isImportant?: boolean;
  isCompleted?: boolean;
  doItNow?: boolean;
  title?: string;
}

export const ListTasks = async ({
  isImportant,
  isCompleted,
  doItNow,
  title,
}: ListTasksProps) => {
  const user = await currentUser();

  const tasks = await getTasksByUserId({
    id: user?.id,
    isImportant,
    isCompleted,
    doItNow,
  });

  return (
    <div>
      <div className="md:hidden text-3xl font-bold text-center mb-3">
        {title}
      </div>
      <div className="flex flex-wrap justify-stretch h-auto gap-4">
        {tasks?.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
        <CardCreateTask />
      </div>
    </div>
  );
};
