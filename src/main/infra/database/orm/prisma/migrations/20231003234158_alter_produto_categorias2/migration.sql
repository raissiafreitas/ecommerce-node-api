/*
  Warnings:

  - You are about to drop the column `dataCriacao` on the `produtos` table. All the data in the column will be lost.
  - Added the required column `descricao` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "dataCriacao",
ADD COLUMN     "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "descricao" VARCHAR(200) NOT NULL;
