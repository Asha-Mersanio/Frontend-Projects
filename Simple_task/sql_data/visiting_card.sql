-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 16, 2023 at 04:03 AM
-- Server version: 10.3.28-MariaDB
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `visiting_card`
--

-- --------------------------------------------------------

--
-- Table structure for table `Carder_details`
--

CREATE TABLE `Carder_details` (
  `ID` int(20) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Designation` varchar(100) NOT NULL,
  `PhoneNo` varchar(255) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `EmailAddress` varchar(100) NOT NULL,
  `Website` varchar(100) NOT NULL,
  `Company_Name` varchar(250) NOT NULL,
  `File_name` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Carder_details`
--

INSERT INTO `Carder_details` (`ID`, `Name`, `Designation`, `PhoneNo`, `Address`, `EmailAddress`, `Website`, `Company_Name`, `File_name`) VALUES
(51, 'Ranganadhan', 'Accountant', '8523697415', 'sholinganallur,chennai-09', 'ranga12@gmail.com', 'www.finance.com', 'FINANCE', '782131251crown.png'),
(52, 'Mantoz', 'Productlauncher', '8965231478', 'Indiranagar,Bangalore-65', 'mantopz23@gmail.com', 'www.apple.com', 'IPHONEINDUSTRY', '1223529672apple.png'),
(53, 'ShanthiReddy', 'Productmanager', '9632587415', 'Chowrikarpet,Mumbai-43', 'shanthi34@gmail.com', 'www.loreal.com', 'LOREAL', '157514811crown.png'),
(54, 'KajalSharma', 'Tester', '8965231478', 'Malapuram,Kerala', 'kajal34@gmail.com', 'www.royalcrown.com', 'ROYALCROWN', '1527550732logo1.png'),
(55, 'NareshKumar', 'BearingOperator', '8072532912', 'SB Kovil, Chengalpattu', 'ram23@gmail.com', 'www.timken.com', 'TIMKEN', '770227079show.jpg'),
(56, 'vinoth', 'dthdsrg', '1231231231', 'rsfhgdasfhg', 'test@email.com', 'www.sgasf.com', 'VOSIGHNOW', '1527550732logo1.png'),
(57, 'Madhan', 'edshnsg', '3213213211', 'fsrhdhsg', 'vino@email.com', 'www.dbdb.com', 'LJAUGFOUGA', '961960871crown.png'),
(58, 'Nancy', 'Designer', '7865412237', 'hanshadpur, Iraq', 'naacy23@outlook.com', 'www.naruto.com', 'NARUTOCOMIC', '398244484crown.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Carder_details`
--
ALTER TABLE `Carder_details`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Carder_details`
--
ALTER TABLE `Carder_details`
  MODIFY `ID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
