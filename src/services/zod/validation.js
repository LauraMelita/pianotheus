import { z } from 'zod';

import { FORM } from '../../utils/constants';
import { isValueSafe } from '../../utils/helpers';
import { bytesToMegabytes, fileExtensionsList } from '../../utils/formatting';

export const signUpValidation = z.object({
  username: z
    .string()
    .min(FORM.MIN_TEXT_LENGTH, {
      message: `Username must be at least ${FORM.MIN_TEXT_LENGTH} characters`,
    })
    .refine(
      (value) => isValueSafe(value),
      'HTML or script tags are not allowed'
    ),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email('Email is not valid'),
  password: z
    .string()
    .min(
      FORM.MIN_PASSWORD_LENGTH,
      `Password must be at least ${FORM.MIN_PASSWORD_LENGTH} characters`
    )
    .refine(
      (value) => isValueSafe(value),
      'HTML or script tags are not allowed'
    ),
  file: z
    .any()
    .refine((file) => file?.length !== 0, 'An image is required')
    .refine(
      (file) => file[0]?.size <= FORM.MAX_FILE_SIZE,
      `Invalid file. The maximum image size is ${bytesToMegabytes(
        FORM.MAX_FILE_SIZE
      )} MB`
    )
    .refine(
      (file) => FORM.ACCEPTED_IMAGE_TYPES.includes(file[0]?.type),
      `Invalid file. Only ${fileExtensionsList(
        FORM.ACCEPTED_IMAGE_TYPES
      )} formats are supported`
    ),
});

export const signInValidation = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email('Email is not valid'),
  password: z
    .string()
    .min(
      FORM.MIN_PASSWORD_LENGTH,
      `Password must be at least ${FORM.MIN_PASSWORD_LENGTH} characters`
    )
    .refine(
      (value) => isValueSafe(value),
      'HTML or script tags are not allowed'
    ),
});

export const contactValidation = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .refine(
      (value) => isValueSafe(value),
      'HTML or script tags are not allowed'
    ),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email('Email is not valid'),
  subject: z
    .string()
    .refine(
      (value) => isValueSafe(value),
      'HTML or script tags are not allowed'
    ),
  message: z
    .string()
    .min(1, { message: 'Message is required' })
    .max(
      FORM.MAX_MESSAGE_LENGTH,
      `Message cannot exceed ${FORM.MAX_MESSAGE_LENGTH} characters`
    )
    .refine(
      (value) => isValueSafe(value),
      'HTML or script tags are not allowed'
    ),
});
