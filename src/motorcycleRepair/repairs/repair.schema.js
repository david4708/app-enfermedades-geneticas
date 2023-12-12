import z from 'zod';

import { extractValidationData } from '../../common/utils/extractErrorData.js';

export const repairSchema = z.object({
  date: z.string(),
  motorNumber: z.string(),
  description: z.string().min(12, { message: 'name is too short' }),
  userId: z.number(),
});

export function validateRepair(data) {
  const result = repairSchema.safeParse(data);
  console.log(result);
  const {
    hasError,
    errorMessages,
    data: repairData,
  } = extractValidationData(result);
  return {
    hasError,
    errorMessages,
    repairData,
  };
}

export function validatePartialRepair(data) {
  const result = repairSchema.partial().safeParse(data);

  const {
    hasError,
    errorMessages,
    data: repairData,
  } = extractValidationData(result);
  return {
    hasError,
    errorMessages,
    repairData,
  };
}
