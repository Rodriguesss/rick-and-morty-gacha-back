-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_profileIconId_fkey";

-- AlterTable
ALTER TABLE "profiles" ALTER COLUMN "profileIconId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_profileIconId_fkey" FOREIGN KEY ("profileIconId") REFERENCES "profileIcons"("id") ON DELETE SET NULL ON UPDATE CASCADE;
