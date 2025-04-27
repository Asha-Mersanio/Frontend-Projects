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
-- Database: `sql_practice`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_merit_student` ()  BEGIN  
    SELECT * FROM student_info WHERE marks > 70;  
    SELECT COUNT(stud_code) AS Total_Student FROM student_info;    
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `Details`
--

CREATE TABLE `Details` (
  `ID` int(11) NOT NULL,
  `Firstname` varchar(50) DEFAULT NULL,
  `Lastname` varchar(200) NOT NULL,
  `Age` int(10) NOT NULL,
  `EmailId` varchar(100) NOT NULL DEFAULT 'unassigned',
  `10th_mark` int(20) NOT NULL,
  `12th_mark` int(20) NOT NULL,
  `Total` int(11) DEFAULT NULL,
  `Country` varchar(50) NOT NULL,
  `BirthOfYear` int(10) DEFAULT NULL
) ;

--
-- Dumping data for table `Details`
--

INSERT INTO `Details` (`ID`, `Firstname`, `Lastname`, `Age`, `EmailId`, `10th_mark`, `12th_mark`, `Total`, `Country`, `BirthOfYear`) VALUES
(101, 'Asha', 'Rani', 21, 'classicmodelcars.com', 456, 452, 908, 'France', 2002),
(102, 'Sandhiya', 'Rani', 22, 'sandhiyarajendran23@gmail.com', 324, 456, 780, 'Italy', 2004),
(103, 'Preethi', 'sharma', 23, 'preeti@tcs.com', 421, 453, 874, 'Italy', 2001),
(104, 'Akshaya', 'Ravi', 23, 'akshayaravi23@infotect.com', 500, 476, 976, 'France', 1998),
(105, 'Prasana', 'Devi', 23, 'prasanadevi23@gmail.com', 421, 432, 853, 'France', 2005),
(106, NULL, 'asdfghjk', 22, 'asdferg@gmail.com', 451, 456, 907, 'France', 2000),
(109, 'Elakya', '', 23, 'asdfer@fmail.com', 434, 567, 991, 'italy', 1998),
(110, 'Murugan', '', 32, 'unassigned', 342, 432, 774, 'France', 2000),
(112, 'Sri', 'Priya', 23, 'unassigned', 451, 456, 907, 'France', 2000);

-- --------------------------------------------------------

--
-- Table structure for table `Equipments`
--

CREATE TABLE `Equipments` (
  `ID` int(20) NOT NULL,
  `Products` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Equipments`
--

INSERT INTO `Equipments` (`ID`, `Products`) VALUES
(1, 'Fridge'),
(2, 'Cooker'),
(3, 'Central Printer'),
(4, 'Pressure Cooker');

-- --------------------------------------------------------

--
-- Table structure for table `Exam_Hall`
--

CREATE TABLE `Exam_Hall` (
  `Room_No` int(20) NOT NULL,
  `Sitting_Member` int(50) NOT NULL,
  `Roll_No` int(10) NOT NULL,
  `Exam_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Exam_Hall`
--

INSERT INTO `Exam_Hall` (`Room_No`, `Sitting_Member`, `Roll_No`, `Exam_ID`) VALUES
(1002, 15, 103, 1),
(1023, 12, 101, 2),
(1054, 10, 102, 3),
(1003, 13, 104, 4),
(1034, 10, 105, 5);

-- --------------------------------------------------------

--
-- Table structure for table `managers`
--

CREATE TABLE `managers` (
  `id` int(11) NOT NULL,
  `managers_name` varchar(100) NOT NULL,
  `under_control` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `managers`
--

INSERT INTO `managers` (`id`, `managers_name`, `under_control`) VALUES
(1, 'asha', NULL),
(2, 'vinoth', 3),
(3, 'gayathri', 5),
(4, 'yugandhan', 2),
(5, 'nancy', 1);

-- --------------------------------------------------------

--
-- Table structure for table `Product_table`
--

CREATE TABLE `Product_table` (
  `Product_id` int(11) NOT NULL,
  `Warehouse` varchar(100) NOT NULL,
  `Product` varchar(100) NOT NULL,
  `Model` varchar(100) NOT NULL,
  `Quantity` int(50) NOT NULL,
  `Date_Info` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Product_table`
--

INSERT INTO `Product_table` (`Product_id`, `Warehouse`, `Product`, `Model`, `Quantity`, `Date_Info`) VALUES
(2, 'Amazon', 'iphone', '7', 5, '2023-04-07'),
(3, 'Amazon', 'iphone', 'x', 100, '2023-04-07'),
(4, 'Amazon', 'Samsung', 'galaxyS', 100, '2023-04-07'),
(5, 'Amazon', 'Samsung', 'Note8', 50, '2023-04-07'),
(6, 'Flipkart', 'iphone', '6s', 50, '2023-04-07'),
(7, 'flipkart', 'iphone', '7', 130, '2023-04-07'),
(8, 'flipkart', 'iphone', 'x', 75, '2023-04-07'),
(9, 'flipkart', 'samsung', 'Galaxy S', 200, '2023-04-07'),
(10, 'flipkart', 'samsung', 'Note8', 250, '2023-04-07');

-- --------------------------------------------------------

--
-- Stand-in structure for view `Result_report`
-- (See below for the actual view)
--
CREATE TABLE `Result_report` (
`Firstname` varchar(50)
,`Lastname` varchar(200)
,`Country` varchar(50)
,`sum(total)` decimal(32,0)
);

-- --------------------------------------------------------

--
-- Table structure for table `Students_Data`
--

CREATE TABLE `Students_Data` (
  `student_id` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `class` varchar(10) NOT NULL,
  `section` varchar(10) NOT NULL,
  `marks` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Students_Data`
--

INSERT INTO `Students_Data` (`student_id`, `Name`, `class`, `section`, `marks`) VALUES
(2, 'Prasanna', '1', 'a', 89),
(3, 'Kumar', '2', 'b', 80),
(4, 'Naveen', '1', 'b', 60),
(5, 'Meena', '3', 'a', 67),
(6, 'Soundarya', '1', 'b', 65),
(7, 'Lakshmi', '1', 'a', 76),
(8, 'Ramya', '2', 'b', 68);

-- --------------------------------------------------------

--
-- Table structure for table `Student_exam`
--

CREATE TABLE `Student_exam` (
  `Roll_No` int(20) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Branch` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Student_exam`
--

INSERT INTO `Student_exam` (`Roll_No`, `Name`, `Branch`) VALUES
(101, 'Akshya', 'ComputerScience'),
(102, 'Abitha', 'Physics'),
(103, 'Monisha', 'ComputerScience'),
(104, 'Seethalakshimi', 'Chemistry'),
(105, 'Revathy', 'Tamil literature');

-- --------------------------------------------------------

--
-- Table structure for table `Table1`
--

CREATE TABLE `Table1` (
  `St.id` int(20) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Mark` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Table1`
--

INSERT INTO `Table1` (`St.id`, `Name`, `Mark`) VALUES
(1, 'Naresh', '67'),
(2, 'Naresh', '89'),
(3, 'Avinash', '98'),
(4, 'Naresh', '65'),
(5, 'Esh', '98');

-- --------------------------------------------------------

--
-- Table structure for table `Table2`
--

CREATE TABLE `Table2` (
  `St_id` int(20) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Mark` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Table2`
--

INSERT INTO `Table2` (`St_id`, `Name`, `Mark`) VALUES
(1, 'Deepak', 87),
(2, 'Naresh', 89),
(3, 'Avinash', 65),
(4, 'Asha', 87),
(5, 'Deeepika', 87),
(6, 'Sanjay', 97),
(7, 'Eshwasr', 74);

-- --------------------------------------------------------

--
-- Table structure for table `Vollyball`
--

CREATE TABLE `Vollyball` (
  `Name` varchar(50) NOT NULL,
  `Age` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Vollyball`
--

INSERT INTO `Vollyball` (`Name`, `Age`) VALUES
('player', 23),
('player', 34),
('player', 32),
('player', 29),
('player', 25),
('player', 22),
('player', 26),
('player', 25);

-- --------------------------------------------------------

--
-- Structure for view `Result_report`
--
DROP TABLE IF EXISTS `Result_report`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `Result_report`  AS  select `Details`.`Firstname` AS `Firstname`,`Details`.`Lastname` AS `Lastname`,`Details`.`Country` AS `Country`,sum(`Details`.`Total`) AS `sum(total)` from `Details` group by `Details`.`Country` ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Details`
--
ALTER TABLE `Details`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ID` (`ID`);

--
-- Indexes for table `Equipments`
--
ALTER TABLE `Equipments`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Exam_Hall`
--
ALTER TABLE `Exam_Hall`
  ADD PRIMARY KEY (`Exam_ID`),
  ADD KEY `Roll_No` (`Roll_No`);

--
-- Indexes for table `managers`
--
ALTER TABLE `managers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Product_table`
--
ALTER TABLE `Product_table`
  ADD PRIMARY KEY (`Product_id`);

--
-- Indexes for table `Students_Data`
--
ALTER TABLE `Students_Data`
  ADD PRIMARY KEY (`student_id`);

--
-- Indexes for table `Student_exam`
--
ALTER TABLE `Student_exam`
  ADD PRIMARY KEY (`Roll_No`);

--
-- Indexes for table `Table1`
--
ALTER TABLE `Table1`
  ADD PRIMARY KEY (`St.id`);

--
-- Indexes for table `Table2`
--
ALTER TABLE `Table2`
  ADD PRIMARY KEY (`St_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Details`
--
ALTER TABLE `Details`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Equipments`
--
ALTER TABLE `Equipments`
  MODIFY `ID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Exam_Hall`
--
ALTER TABLE `Exam_Hall`
  MODIFY `Exam_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `managers`
--
ALTER TABLE `managers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Product_table`
--
ALTER TABLE `Product_table`
  MODIFY `Product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `Students_Data`
--
ALTER TABLE `Students_Data`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `Student_exam`
--
ALTER TABLE `Student_exam`
  MODIFY `Roll_No` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- AUTO_INCREMENT for table `Table1`
--
ALTER TABLE `Table1`
  MODIFY `St.id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Table2`
--
ALTER TABLE `Table2`
  MODIFY `St_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Exam_Hall`
--
ALTER TABLE `Exam_Hall`
  ADD CONSTRAINT `Exam_Hall_ibfk_1` FOREIGN KEY (`Roll_No`) REFERENCES `Student_exam` (`Roll_No`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
