/*
  Warnings:

  - You are about to drop the column `SKU` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `SKU` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `SKU` on the `Variant` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `Variant` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - You are about to drop the `VariantDetails` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[sku]` on the table `Inventory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[sku]` on the table `Variant` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sku` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sku` to the `Variant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Variant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Variant" DROP CONSTRAINT "Variant_SKU_fkey";

-- DropForeignKey
ALTER TABLE "Variant" DROP CONSTRAINT "Variant_productId_fkey";

-- DropForeignKey
ALTER TABLE "VariantDetails" DROP CONSTRAINT "VariantDetails_variantId_fkey";

-- DropIndex
DROP INDEX "Image_SKU_key";

-- DropIndex
DROP INDEX "Inventory_SKU_key";

-- DropIndex
DROP INDEX "Variant_SKU_key";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "SKU",
ADD COLUMN     "altText" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "order" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "variantId" TEXT,
ALTER COLUMN "productId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Inventory" DROP COLUMN "SKU",
DROP COLUMN "productId",
ADD COLUMN     "sku" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "quantity" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Variant" DROP COLUMN "SKU",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "sku" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "price" SET DATA TYPE DECIMAL(10,2);

-- DropTable
DROP TABLE "VariantDetails";

-- CreateTable
CREATE TABLE "VariantDetail" (
    "id" TEXT NOT NULL,
    "variantId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "VariantDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "VariantDetail_variantId_idx" ON "VariantDetail"("variantId");

-- CreateIndex
CREATE UNIQUE INDEX "VariantDetail_variantId_key_key" ON "VariantDetail"("variantId", "key");

-- CreateIndex
CREATE INDEX "Image_productId_idx" ON "Image"("productId");

-- CreateIndex
CREATE INDEX "Image_variantId_idx" ON "Image"("variantId");

-- CreateIndex
CREATE UNIQUE INDEX "Inventory_sku_key" ON "Inventory"("sku");

-- CreateIndex
CREATE INDEX "Inventory_sku_idx" ON "Inventory"("sku");

-- CreateIndex
CREATE INDEX "Product_isActive_idx" ON "Product"("isActive");

-- CreateIndex
CREATE UNIQUE INDEX "Variant_sku_key" ON "Variant"("sku");

-- CreateIndex
CREATE INDEX "Variant_productId_idx" ON "Variant"("productId");

-- CreateIndex
CREATE INDEX "Variant_sku_idx" ON "Variant"("sku");

-- CreateIndex
CREATE INDEX "Variant_isActive_idx" ON "Variant"("isActive");

-- AddForeignKey
ALTER TABLE "Variant" ADD CONSTRAINT "Variant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VariantDetail" ADD CONSTRAINT "VariantDetail_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "Variant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_sku_fkey" FOREIGN KEY ("sku") REFERENCES "Variant"("sku") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "Variant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
