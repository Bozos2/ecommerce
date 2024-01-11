import { z } from "zod";

export const FormDataSchema = z.object({
  fullName: z
    .string({
      required_error: "Please enter your full name",
      invalid_type_error: "full name must be letters",
    })
    .min(4, { message: "Minimum characters: 4" })
    .max(30, { message: "Name is too long." }),
  email: z
    .string({
      required_error: "Please enter your email",
      invalid_type_error: "Email must contain @",
    })
    .email({ message: "This is not a valid email format" }),
  password: z
    .string({
      required_error: "Please enter a password",
    })
    .min(6, { message: "Minimum characters: 6" })
    .max(32, { message: "Maximum characters: 32" }),

  gender: z.string(),
});
