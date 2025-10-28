-- CreateTable
CREATE TABLE `Mangas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `autor` VARCHAR(191) NOT NULL,
    `genero` VARCHAR(191) NOT NULL,
    `preco` INTEGER NOT NULL DEFAULT 0,
    `paginas` INTEGER NOT NULL DEFAULT 0,
    `sinopse` VARCHAR(191) NOT NULL DEFAULT '',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
