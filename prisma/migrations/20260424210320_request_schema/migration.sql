-- CreateTable
CREATE TABLE "Request" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT,
    "name" TEXT,
    "message" TEXT,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);
