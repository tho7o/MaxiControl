-- --------------------------------------------------------
-- Host:                         192.168.1.200
-- Server version:               8.0.26 - MySQL Community Server - GPL
-- Server OS:                    Linux
-- HeidiSQL Version:             11.2.0.6284
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table mydb.breast_feeding
CREATE TABLE IF NOT EXISTS `breast_feedings` (
  `breast_feeding_id` int unsigned NOT NULL AUTO_INCREMENT,
  `breast_feeding_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `breast_feeding_minutes` int unsigned NOT NULL,
  PRIMARY KEY (`breast_feeding_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- Data exporting was unselected.

-- Dumping structure for table mydb.diapers
CREATE TABLE IF NOT EXISTS `diappers` (
  `diapper_id` int unsigned NOT NULL AUTO_INCREMENT,
  `diapper_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `diapper_type` int unsigned DEFAULT NULL,
  PRIMARY KEY (`diapper_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- Data exporting was unselected.

-- Dumping structure for table mydb.users
CREATE TABLE IF NOT EXISTS `users` (
  `users_id` int unsigned NOT NULL AUTO_INCREMENT,
  `users_firstname` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `users_lastname` varchar(25) NOT NULL,
  `users_email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `users_password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `users_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`users_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;


# user: maximiliano
# pass: 12345
INSERT INTO `users` (`users_firstname`, `users_lastname`, `users_email`, `users_password`)
VALUES ('admin', 'admin', 'maximiliano', '$2a$10$ykgAZ1slOosaAtcJlLFXvepvNwyQb5Gz1gCvrwLwvzcUW6E2iX2Te');
