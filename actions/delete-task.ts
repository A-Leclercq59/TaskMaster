"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import { getUserById } from "@/data/user";
import { getTaskByTaskId } from "@/data/task";

export const deleteTask = async (idTask: string) => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized!" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "Unauthorized!" };
  }

  const dbTask = await getTaskByTaskId(idTask);

  if (!dbTask) {
    return { error: "Task not found!" };
  }

  if (dbTask.userId !== dbUser.id) {
    return { error: "You are not authorized to delete this task!" };
  }

  await db.task.delete({
    where: {
      id: idTask,
      userId: dbUser.id,
    },
  });

  revalidatePath("/dashboard");

  return {
    success: "Task deleted!",
  };
};
