CREATE TABLE `cars_db`.`cars` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `vin` VARCHAR(45) NOT NULL,
  `make` VARCHAR(45) NOT NULL,
  `model` VARCHAR(45) NOT NULL,
  `price` FLOAT NOT NULL,
  `created_at` DATETIME NULL DEFAULT now(),
  `updated_at` DATETIME NULL DEFAULT now(),
  PRIMARY KEY (`id`));

  CREATE TABLE `cars_db`.`reservations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `car_id` INT NULL,
  `start_date` DATETIME NOT NULL,
  `end_date` DATETIME NOT NULL,
  `total_price` FLOAT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT now(),
  `updated_at` DATETIME NOT NULL DEFAULT now(),
  PRIMARY KEY (`id`));

ALTER TABLE `cars_db`.`reservations` 
ADD CONSTRAINT `car_id`
  FOREIGN KEY (`id`)
  REFERENCES `cars_db`.`cars` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

