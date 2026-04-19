import { z } from 'zod';

const EnvSchema = z.object({
  VITE_APP_NAME: z.string().default('react-compiler-vite-tanstack-starter'),
});

export const env = EnvSchema.parse(import.meta.env);
export type Env = z.infer<typeof EnvSchema>;
