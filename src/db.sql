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

--cars data

INSERT INTO `` (`id`,`vin`,`make`,`model`,`price`,`created_at`,`updated_at`) VALUES (1,'1234','Audi','A6',100,'2023-09-06 13:29:43','2023-09-06 13:29:43');
INSERT INTO `` (`id`,`vin`,`make`,`model`,`price`,`created_at`,`updated_at`) VALUES (2,'1235','BMW','X5',95,'2023-09-06 13:29:43','2023-09-06 13:29:43');
INSERT INTO `` (`id`,`vin`,`make`,`model`,`price`,`created_at`,`updated_at`) VALUES (3,'1236','Toyota','Corolla',55,'2023-09-06 13:29:43','2023-09-06 13:29:43');
INSERT INTO `` (`id`,`vin`,`make`,`model`,`price`,`created_at`,`updated_at`) VALUES (4,'1237','Honda','Accord',20,'2023-09-07 23:00:35','2023-09-07 23:00:35');
INSERT INTO `` (`id`,`vin`,`make`,`model`,`price`,`created_at`,`updated_at`) VALUES (5,'1238','Ford','Focus',36,'2023-09-07 23:00:35','2023-09-07 23:00:35');
INSERT INTO `` (`id`,`vin`,`make`,`model`,`price`,`created_at`,`updated_at`) VALUES (6,'8745','Chevrolet','Sentra',44,'2023-09-07 23:00:35','2023-09-07 23:00:35');
INSERT INTO `` (`id`,`vin`,`make`,`model`,`price`,`created_at`,`updated_at`) VALUES (7,'9797','Nissan','M3',70,'2023-09-07 23:00:35','2023-09-07 23:00:35');
INSERT INTO `` (`id`,`vin`,`make`,`model`,`price`,`created_at`,`updated_at`) VALUES (8,'8748','Audi','A4',80,'2023-09-07 23:00:35','2023-09-07 23:00:35');
INSERT INTO `` (`id`,`vin`,`make`,`model`,`price`,`created_at`,`updated_at`) VALUES (9,'9056','BMW','X6',90,'2023-09-07 23:00:35','2023-09-07 23:00:35');
INSERT INTO `` (`id`,`vin`,`make`,`model`,`price`,`created_at`,`updated_at`) VALUES (10,'123f','Honda','Accord',20,'2023-09-07 23:01:23','2023-09-07 23:01:23');
INSERT INTO `` (`id`,`vin`,`make`,`model`,`price`,`created_at`,`updated_at`) VALUES (11,'1538','Ford','Focus',36,'2023-09-07 23:01:23','2023-09-07 23:01:23');
INSERT INTO `` (`id`,`vin`,`make`,`model`,`price`,`created_at`,`updated_at`) VALUES (12,'8765','Chevrolet','Sentra',44,'2023-09-07 23:01:23','2023-09-07 23:01:23');
INSERT INTO `` (`id`,`vin`,`make`,`model`,`price`,`created_at`,`updated_at`) VALUES (13,'979fd','Nissan','M3',70,'2023-09-07 23:01:23','2023-09-07 23:01:23');
INSERT INTO `` (`id`,`vin`,`make`,`model`,`price`,`created_at`,`updated_at`) VALUES (14,'88w48','Audi','A4',80,'2023-09-07 23:01:23','2023-09-07 23:01:23');
INSERT INTO `` (`id`,`vin`,`make`,`model`,`price`,`created_at`,`updated_at`) VALUES (15,'97g56','BMW','X6',90,'2023-09-07 23:01:23','2023-09-07 23:01:23');


--reservations data
INSERT INTO `` (`id`,`car_id`,`start_date`,`end_date`,`total_price`,`created_at`,`updated_at`) VALUES (1,1,'2023-09-10','2023-09-11',100,'2023-09-06 13:32:10','2023-09-06 13:32:10');
INSERT INTO `` (`id`,`car_id`,`start_date`,`end_date`,`total_price`,`created_at`,`updated_at`) VALUES (2,2,'2023-09-11','2023-09-12',55,'2023-09-06 13:32:10','2023-09-06 13:32:10');
INSERT INTO `` (`id`,`car_id`,`start_date`,`end_date`,`total_price`,`created_at`,`updated_at`) VALUES (3,3,'2023-09-12','2023-09-15',160,'2023-09-06 20:13:04','2023-09-06 20:13:04');
INSERT INTO `` (`id`,`car_id`,`start_date`,`end_date`,`total_price`,`created_at`,`updated_at`) VALUES (4,1,'2023-09-12','2023-09-13',300,'2023-09-06 20:13:04','2023-09-06 20:13:04');
