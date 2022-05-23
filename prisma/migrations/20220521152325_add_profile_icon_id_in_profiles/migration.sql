/*
  Warnings:

  - Added the required column `profileIconId` to the `profiles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "profiles" ADD COLUMN     "profileIconId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_profileIconId_fkey" FOREIGN KEY ("profileIconId") REFERENCES "profileIcons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
