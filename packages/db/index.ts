/*
 * BEGIN
 */

import { PrismaClient } from "@prisma/client";

interface CustomNodeJsGlobal {
  prisma: PrismaClient;
}

declare const global: CustomNodeJsGlobal;

export const prisma =
  global.prisma ||
  new PrismaClient({
    errorFormat: "pretty",
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn", "info"]
        : ["error"],
  });

export * from "@prisma/client";

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

/*
 * END
 */
