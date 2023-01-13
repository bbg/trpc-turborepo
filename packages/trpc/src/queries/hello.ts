/**
 * BEGIN
 */

import { z } from "zod";
import { publicProcedure } from "../trpc";

export const hello = publicProcedure
  .input(z.object({ text: z.string() }))
  .query(({ input }) => {
    return {
      greeting: `Hello ${input.text}`,
    };
  });

/**
 * BEGIN
 */
