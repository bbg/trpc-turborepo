/**
 * BEGIN
 */

import { createTRPCRouter } from "./trpc";
import { hello, getAll } from "./queries";

export const appRouter = createTRPCRouter({
  hello,
  getAll,
});

export type AppRouter = typeof appRouter;

/**
 * END
 */
