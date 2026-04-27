-- CreateTable
CREATE TABLE "Trivia" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Trivia_pkey" PRIMARY KEY ("id")
);
