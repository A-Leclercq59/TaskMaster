import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const CreateTaskSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
  description: z.optional(z.string()),
  date: z.date(),
  isImportant: z.boolean(),
});

export const EditTaskSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
  description: z.optional(z.string()),
  date: z.date(),
  isImportant: z.optional(z.boolean()),
  isCompleted: z.optional(z.boolean()),
});
