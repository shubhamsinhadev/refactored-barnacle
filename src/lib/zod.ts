import { z } from "zod";

export const ZUser = z.object({
  name: z
    .string({
      error: (ctx) =>
        ctx.input === undefined ? "Name is required" : "Invalid Name",
    })
    .min(1, "Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(32),
  email: z.string().min(1, "Email is required").and(z.email("Invalid email")),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must be at most 32 characters"),
});

export const ZProduct = z.object({
  name: z
    .string({
      error: (ctx) =>
        ctx.input === undefined ? "Name is required" : "Invalid Name",
    })
    .min(1, "Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(32),
  description: z
    .string({
      error: (ctx) =>
        ctx.input === undefined
          ? "Description is required"
          : "Invalid Description",
    })
    .min(1, "Description is required")
    .min(3, "Description must be at least 3 characters")
    .max(32),
  price: z.coerce
    .number({
      error: (ctx) => {
        return Number.isNaN(ctx.input) ? "Price is required" : "Invalid Price";
      },
    })
    .min(1, {
      error: (ctx) => {
        return ctx.input === 0 ? "Price is required" : "Invalid Price";
      },
    }),

  extra: z.any().optional(),
});

export type IProduct = z.infer<typeof ZProduct>;
