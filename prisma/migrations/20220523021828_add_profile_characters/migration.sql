-- CreateTable
CREATE TABLE "profileCharacters" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "characterId" INTEGER NOT NULL,

    CONSTRAINT "profileCharacters_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "profileCharacters" ADD CONSTRAINT "profileCharacters_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profileCharacters" ADD CONSTRAINT "profileCharacters_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "characters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
