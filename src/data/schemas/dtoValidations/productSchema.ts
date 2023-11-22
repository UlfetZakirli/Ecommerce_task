import { z } from "zod";

export const productSchema = z.object({
  id: z.number(),
  price: z.number(),
  description: z.string(),
  isNew: z.boolean(),
  category: z.string(),
});
