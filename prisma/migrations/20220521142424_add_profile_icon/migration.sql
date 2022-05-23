-- CreateTable
CREATE TABLE "ProfileIcon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pathImage" TEXT NOT NULL,
    "cursor1" TEXT NOT NULL,
    "cursor2" TEXT NOT NULL,

    CONSTRAINT "ProfileIcon_pkey" PRIMARY KEY ("id")
);
