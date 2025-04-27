-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 16, 2023 at 04:02 AM
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
-- Database: `asha`
--

-- --------------------------------------------------------

--
-- Table structure for table `calculator_results`
--

CREATE TABLE `calculator_results` (
  `id` int(10) NOT NULL,
  `result` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `registers_details`
--

CREATE TABLE `registers_details` (
  `ID` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Mobile_Number` varchar(10) NOT NULL,
  `Email_ID` varchar(100) NOT NULL,
  `Password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `registers_details`
--

INSERT INTO `registers_details` (`ID`, `Name`, `Mobile_Number`, `Email_ID`, `Password`) VALUES
(101, 'Abinaya', '0876543219', 'abinaya@gmail.com', 'Abinaya123@'),
(102, 'Naresh', '8072912532', 'naresh@yahoo.com', 'nareshR@38'),
(103, 'Srinath', '9600128374', 'sri@microsoft.com', 'Ssri$123'),
(105, 'Nancy', '8521479631', 'nancy@foneally.com', 'Nancy@55'),
(106, 'Yuganthan', '7415236982', 'yuga@gmail.com', 'Yuga@171'),
(107, 'Sandhiya', '8248829852', 'sandy@thomas.com', 'Sandy@30'),
(108, 'PrasannaDevi', '6523987415', 'prassana@adk.com', 'Pras162@'),
(109, 'Asha', '8521479632', 'asha@123.com', 'Asha@123'),
(110, 'asha', '9123553019', 'asha@12gmail.com', 'ashaR123!'),
(115, 'vino', '0987654321', 'vinoth@email.com', 'Vino@123'),
(116, 'chandru', '9632587412', 'asdf@test.com', 'asdf@123R'),
(117, 'Asharani', '9123553019', 'asdrf@gmail.com', 'Asharani@28'),
(118, 'asha', '9632587410', 'asdfg@gmail.com', 'Devi@12345'),
(120, 'vinoth', '1234567890', 'vinoth.k@foneally.com', 'Vino@123'),
(121, 'sripriya', '0987654321', 'sripriya@gmail.com', 'Sripriya@12'),
(122, 'Nareshkumar', '8072912532', 'naresh377@gmail.com', 'Naresh@377'),
(123, 'madhan', '8745213693', 'vinothkumar@mail.com', 'Vino@123'),
(124, 'ashiya', '7412589638', 'ashiya@test.com', 'Ashiya@123'),
(125, 'Zara', '6398521475', 'zara2811@infosys.com', 'Zara2811@'),
(126, 'Naveenkumar', '6398521470', 'naveensk@gmail.com', 'Naveen@1112'),
(127, 'Gayathri', '9632587452', 'gayu123@gmail.com', 'Gayu@123'),
(128, 'Ashitha', '8569321475', 'ashitha@gmail.com', 'Ashitha@123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `calculator_results`
--
ALTER TABLE `calculator_results`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `registers_details`
--
ALTER TABLE `registers_details`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `calculator_results`
--
ALTER TABLE `calculator_results`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `registers_details`
--
ALTER TABLE `registers_details`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
