import { db } from "@/lib/db";
import { formatISO } from "date-fns";

interface ParamsProps {
  id: string | undefined;
  isImportant?: boolean;
  isCompleted?: boolean;
  doItNow?: boolean;
}

export const getTasksByUserId = async ({
  id,
  isImportant,
  isCompleted,
  doItNow,
}: ParamsProps) => {
  try {
    const today = new Date(formatISO(new Date(), { representation: "date" }));

    const tasks = await db.task.findMany({
      where: {
        userId: id,
        isImportant,
        isCompleted,
        date: {
          equals: doItNow ? today : undefined,
        },
      },
      orderBy: {
        date: "asc",
      },
    });

    return tasks;
  } catch (error) {
    return null;
  }
};

export const getTaskByTaskId = async (id: string) => {
  try {
    const task = await db.task.findUnique({
      where: {
        id,
      },
    });

    return task;
  } catch (error) {
    return null;
  }
};
