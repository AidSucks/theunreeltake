import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaNeon({ connectionString });

const prisma = new PrismaClient({ adapter });

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;