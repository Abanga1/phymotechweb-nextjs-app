import { z } from 'zod';

/**
 * Zod schemas for every external input. ALWAYS parse with these at the edge
 * of an API route before touching a database or a payment provider.
 */

export const CheckoutItemSchema = z.object({
  productId: z.string().uuid(),
  quantity: z.number().int().min(1).max(99),
});

export const CheckoutRequestSchema = z.object({
  items: z.array(CheckoutItemSchema).min(1).max(50),
});

export type CheckoutRequest = z.infer<typeof CheckoutRequestSchema>;

export const SearchQuerySchema = z.object({
  q: z.string().trim().min(1).max(100).optional(),
  category: z
    .string()
    .trim()
    .max(60)
    .regex(/^[a-z0-9-]+$/, 'Invalid category slug')
    .optional(),
  page: z.coerce.number().int().min(1).max(1000).default(1),
});
