/*
  Warnings:

  - You are about to drop the column `sessioId` on the `votes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sessionId,pollId]` on the table `votes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sessionId` to the `votes` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "votes_sessioId_pollId_key";

-- AlterTable
ALTER TABLE "votes" DROP COLUMN "sessioId",
ADD COLUMN     "sessionId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "votes_sessionId_pollId_key" ON "votes"("sessionId", "pollId");
