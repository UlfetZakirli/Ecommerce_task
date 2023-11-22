import { z, ZodRawShape } from "zod";

export const migrator = <T, K>(
  dto: T,
  schema: z.ZodObject<ZodRawShape, "strip", z.ZodTypeAny, T, T>,
  mapper: (validated: T) => K
): K => {
  const validateDTO = schema.safeParse(dto);

  if (!validateDTO.success) {
    console.error(validateDTO.error);
    return dto as unknown as K;
  }
  return mapper(validateDTO.data);
};
