-- CreateTable
CREATE TABLE "votes" (
    "id" SERIAL NOT NULL,
    "sessioId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pollOptionId" TEXT NOT NULL,
    "pollId" TEXT NOT NULL,

    CONSTRAINT "votes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "votes_sessioId_pollId_key" ON "votes"("sessioId", "pollId");

-- AddForeignKey
ALTER TABLE "votes" ADD CONSTRAINT "votes_pollOptionId_fkey" FOREIGN KEY ("pollOptionId") REFERENCES "PollOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "votes" ADD CONSTRAINT "votes_pollId_fkey" FOREIGN KEY ("pollId") REFERENCES "polls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
