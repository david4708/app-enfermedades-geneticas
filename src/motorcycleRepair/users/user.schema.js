import z from 'zod';
import { extractValidationData } from '../../common/utils/extractErrorData.js';
const registerSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'name is too short' })
    .max(50, { message: 'name is too long' }),

  email: z.string().email({ message: 'invalid email' }),

  password: z
    .string()
    .min(8, { message: 'password must be at least 8 characters' }),
  role: z.enum(['client', 'employee']),
});

const loginUserSchema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .max(16, { message: 'Password is too long' }),
});

export function validateUser(data) {
  const result = registerSchema.safeParse(data);

  const {
    hasError,
    errorMessages,
    data: userData,
  } = extractValidationData(result);
  return {
    hasError,
    errorMessages,
    userData,
  };
}

export function validatePartialUser(data) {
  const result = registerSchema.partial().safeParse(data);

  const {
    hasError,
    errorMessages,
    data: userData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    userData,
  };
}

export function validateLogin(data) {
  const result = loginUserSchema.safeParse(data);

  const {
    hasError,
    errorMessages,
    data: userData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    userData,
  };
}
