import { number, string, z } from "zod";

export const categorySchema = z.object({
  id: number(),
  category: string(),
});
