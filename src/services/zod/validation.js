import { z } from 'zod';

export const signUpValidation = z.object({
  username: z
    .string()
    .min(2, { message: 'Username must be at least 2 characters' }),
  email: z.string().email('Email is not valid'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  //   avatar: ?
});

export const signInValidation = z.object({
  email: z.string().email('Email is not valid'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const contactValidation = z.object({});
