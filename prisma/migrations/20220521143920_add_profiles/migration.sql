/*
  Warnings:

  - You are about to drop the column `pathImage` on the `profileIcons` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "profileIcons" DROP COLUMN "pathImage";

-- CreateTable
CREATE TABLE "profiles" (
    "id" SERIAL NOT NULL,
    "portalWeapons" INTEGER,
    "usersId" INTEGER NOT NULL,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profiles_usersId_key" ON "profiles"("usersId");

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
