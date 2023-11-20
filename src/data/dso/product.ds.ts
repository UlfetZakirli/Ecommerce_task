import { z } from "zod";
import { addProductSchema } from "../schemas/formValidations/addProductSchema";

export type ProductDSO = z.infer<typeof addProductSchema>;
