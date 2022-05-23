/*
  Warnings:

  - You are about to drop the `ProfileIcon` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ProfileIcon";

-- CreateTable
CREATE TABLE "profileIcons" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pathImage" TEXT NOT NULL,
    "cursor1" TEXT NOT NULL,
    "cursor2" TEXT NOT NULL,

    CONSTRAINT "profileIcons_pkey" PRIMARY KEY ("id")
);
