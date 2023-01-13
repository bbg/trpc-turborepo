/**
 * BEGIN
 */

import { publicProcedure } from "../trpc";

export const getAll = publicProcedure.query(({ ctx }) => {
  return ctx.deneme;
});

/**
 * END
 */
