"use server";

import * as z from "zod";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { EditTaskSchema } from "@/schemas";
import { currentUser } from "@/lib/auth";
import { getUserById } from "@/data/user";
import { getTaskByTaskId } from "@/data/task";

export const editTask = async (
  values: z.infer<typeof EditTaskSchema>,
  idTask: string
) => {
  const validatedFields = EditTaskSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { title, description, date, isImportant, isCompleted } =
    validatedFields.data;

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
    return { error: "You are not authorized to update this task!" };
  }

  await db.task.update({
    where: {
      id: idTask,
    },
    data: {
      title,
      description,
      date,
      isImportant,
      isCompleted,
    },
  });

  revalidatePath("/dashboard");

  return {
    success: "Task updated!",
  };
};
