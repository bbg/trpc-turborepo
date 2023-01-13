/**
 * BEGIN
 */

import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import { prisma } from "@acme/db";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";

export const createTRPCContext = (_opts: CreateNextContextOptions) => {
  return {
    prisma,
    deneme: "xxx",
  };
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;

/**
 * END
 */
