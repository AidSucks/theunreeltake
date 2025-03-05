import {PrismaClient, Prisma} from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Aidan",
    email: "aidananderson167@gmail.com",
    role: "ADMIN"
  }
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u })
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });