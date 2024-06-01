-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 01, 2024 at 02:55 PM
-- Server version: 8.2.0
-- PHP Version: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `madb`
--

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `STATUS` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `description`, `STATUS`) VALUES
(1, 'Task 1', 'Description for Task 1', 'To Do'),
(2, 'Task 2', 'Description for Task 2', 'In Progress'),
(3, 'Task 3', 'Description for Task 3', 'Done');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pushkey` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `username`, `password`, `email`, `pushkey`) VALUES
(1, 'a', 'a', 'root', '$2y$10$rHtl3FwX79DmVlDVRbgzyO9SqI49Cvu93SR7zepikgleFf.h60WZC', 'saas@gmail.com', ''),
(2, 'aa23213', 'a', 'asas', '$2y$10$.p3GhRrQL.EUuJ1QBXtBXugIFJiVly3iVen3UMPSFnFYVCID9nvhC', '1saas@gmail.com', ''),
(3, 's', 's', 's', '$2y$10$94o/GXyqNRq1d951BQr.3.FuwFkTEENdPeZbhZbbDg6bw5Zlve6ZO', 'd@gmail.com', ''),
(4, 's', 's', 'ss', '$2y$10$LlsYm4nhuEAR8qwzlr181OK75OyRaAB/6P576G.NHmkVR.kDy6Z8u', '1d@gmail.com', ''),
(5, 's', 's', 'ss12', '$2y$10$EQfKZ.NEUwvtApKeNYsjI.5JobeKnDq89ZZ82sqvX8YqU7RJu8M4e', '12d@gmail.com', ''),
(6, '1', '1', '12121', '$2y$10$XRb2uFWMyTwxgxW6EwC2yenQhf/kwcVlK2Jy5TczX/EyCkzQMlkJa', '2121@gmail.com', ''),
(7, 'dim', 'frag', 'fr', '$2y$10$Hy7722PfmLvIeh.E68xQde.dd1wYlePjQ6iKODKQwuLTrIVI1yjBG', 'fr@gmail.com', ''),
(8, '12', '1324', '23423fedfc', '$2y$10$CY3fbmThVELn4kc3EjSQSOY4rda82ubRxfPUg8vPcuUzt4LzxnOKC', 'dfd2121@gmail.com', ''),
(9, 'apple', 'juice', 'apple', '$2y$10$.o.e5neMPoWyxf9r7d171.CGbuSvYgrRC4W4hdMlncXI4XP2E0aJq', 'apple@gmail.com', ''),
(10, 'apple', 'juice', 'apple1', '$2y$10$KAfDkYmhGRwtnH2ryRuHo.Yz02VVcaBYwhEg9Dx88cEW6ZpFbDBjq', 'apple1@gmail.com', ''),
(11, '', '', 'difrag', '$2y$10$hI1EBD70A1z2JSgCGG0XteDeiMhysBKLowWi6/kaeQXw0.Zs8cfyC', '', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
