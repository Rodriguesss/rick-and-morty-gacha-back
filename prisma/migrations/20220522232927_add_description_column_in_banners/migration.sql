/*
  Warnings:

  - Added the required column `description` to the `Banners` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Banners" ADD COLUMN     "description" TEXT NOT NULL;
