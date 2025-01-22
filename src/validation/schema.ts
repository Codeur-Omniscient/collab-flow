import { z } from "zod";

export const signUpSchema = z
  .object({
    fullName: z.string().min(1, "Full Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters long"),
    picture: z.instanceof(File),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const projectSchema = z.object({
  name: z.string().min(1, "Project Name is required"),
  description: z.string().min(1, "Description is required"),
  status: z.string(),
});

export type SignInFormData = z.infer<typeof signInSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>;
export type ProjectFormData = z.infer<typeof projectSchema>;
