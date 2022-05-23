/*
  Warnings:

  - You are about to drop the `Banners` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Banners";

-- CreateTable
CREATE TABLE "banners" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "filter" TEXT NOT NULL,

    CONSTRAINT "banners_pkey" PRIMARY KEY ("id")
);
