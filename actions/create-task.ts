"use server";

import * as z from "zod";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { CreateTaskSchema } from "@/schemas";
import { currentUser } from "@/lib/auth";
import { getUserById } from "@/data/user";

export const createTask = async (values: z.infer<typeof CreateTaskSchema>) => {
  const validatedFields = CreateTaskSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { title, description, date, isImportant } = validatedFields.data;

  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized!" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "Unauthorized!" };
  }

  await db.task.create({
    data: {
      userId: user.id,
      title,
      description,
      date,
      isImportant,
    },
  });

  revalidatePath("/dashboard");

  return {
    success: "Task created!",
  };
};
