-- CreateTable
CREATE TABLE `Medications` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `codes` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `max_price` INTEGER NOT NULL,

    UNIQUE INDEX `Medications_codes_key`(`codes`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
