-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : lun. 06 mai 2024 à 21:00
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `mobile`
--

-- --------------------------------------------------------

--
-- Structure de la table `Accidents`
--

CREATE TABLE `Accidents` (
  `AccidentID` int(11) NOT NULL,
  `RentalID` int(11) NOT NULL,
  `AccidentDetails` text NOT NULL,
  `ReportedOn` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Accidents`
--

INSERT INTO `Accidents` (`AccidentID`, `RentalID`, `AccidentDetails`, `ReportedOn`) VALUES
(1, 1, 'Minor fender bender', '2024-05-02'),
(2, 2, 'Collision with another vehicle', '2024-05-03'),
(3, 3, 'Car rolled over in accident', '2024-05-04'),
(4, 4, 'Side collision at intersection', '2024-05-05'),
(5, 5, 'Hit and run accident', '2024-05-06');

-- --------------------------------------------------------

--
-- Structure de la table `Cars`
--

CREATE TABLE `Cars` (
  `CarID` int(11) NOT NULL,
  `Make` text NOT NULL,
  `Model` text NOT NULL,
  `Year` int(11) NOT NULL,
  `Description` text DEFAULT NULL,
  `PricePerDay` double NOT NULL,
  `Available` tinyint(1) NOT NULL DEFAULT 1,
  `LocationID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Cars`
--

INSERT INTO `Cars` (`CarID`, `Make`, `Model`, `Year`, `Description`, `PricePerDay`, `Available`, `LocationID`) VALUES
(1, 'Toyota', 'Camry', 2022, 'Sedan', 50, 1, 1),
(2, 'Honda', 'Accord', 2021, 'Sedan', 55, 1, 2),
(3, 'Nissan', 'Altima', 2020, 'Sedan', 60, 1, 3),
(4, 'Kia', 'Soul', 2019, 'SUV', 65, 1, 4),
(5, 'Hyundai', 'Elantra', 2018, 'Sedan', 70, 1, 5);

-- --------------------------------------------------------

--
-- Structure de la table `Contracts`
--

CREATE TABLE `Contracts` (
  `ContractID` int(11) NOT NULL,
  `RentalID` int(11) NOT NULL,
  `ContractDetails` blob DEFAULT NULL,
  `Signed` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Contracts`
--

INSERT INTO `Contracts` (`ContractID`, `RentalID`, `ContractDetails`, `Signed`) VALUES
(1, 1, 0x436f6e74726163742064657461696c7320666f722072656e74616c2031, 1),
(2, 2, 0x436f6e74726163742064657461696c7320666f722072656e74616c2032, 0),
(3, 3, 0x436f6e74726163742064657461696c7320666f722072656e74616c2033, 1),
(4, 4, 0x436f6e74726163742064657461696c7320666f722072656e74616c2034, 1),
(5, 5, 0x436f6e74726163742064657461696c7320666f722072656e74616c2035, 0);

-- --------------------------------------------------------

--
-- Structure de la table `Incidents`
--

CREATE TABLE `Incidents` (
  `IncidentID` int(11) NOT NULL,
  `RentalID` int(11) NOT NULL,
  `IncidentDetails` text NOT NULL,
  `ReportedOn` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Incidents`
--

INSERT INTO `Incidents` (`IncidentID`, `RentalID`, `IncidentDetails`, `ReportedOn`) VALUES
(1, 1, 'Minor scratch on rear bumper', '2024-05-02'),
(2, 2, 'Flat tire', '2024-05-03'),
(3, 3, 'Dent on driver side door', '2024-05-04'),
(4, 4, 'Broken side mirror', '2024-05-05'),
(5, 5, 'Cracked windshield', '2024-05-06');

-- --------------------------------------------------------

--
-- Structure de la table `Locations`
--

CREATE TABLE `Locations` (
  `LocationID` int(11) NOT NULL,
  `City` text NOT NULL,
  `Address` text NOT NULL,
  `Country` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Locations`
--

INSERT INTO `Locations` (`LocationID`, `City`, `Address`, `Country`) VALUES
(1, 'New York', '123 Main St', 'USA'),
(2, 'Los Angeles', '456 Elm St', 'USA'),
(3, 'London', '789 Oak St', 'UK'),
(4, 'Paris', '321 Pine St', 'France'),
(5, 'Berlin', '654 Birch St', 'Germany');

-- --------------------------------------------------------

--
-- Structure de la table `Rentals`
--

CREATE TABLE `Rentals` (
  `RentalID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `CarID` int(11) NOT NULL,
  `StartDate` date NOT NULL,
  `EndDate` date NOT NULL,
  `TotalCost` double NOT NULL,
  `RentalStatus` text NOT NULL CHECK (`RentalStatus` in ('En cours','Terminée','Annulée'))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Rentals`
--

INSERT INTO `Rentals` (`RentalID`, `UserID`, `CarID`, `StartDate`, `EndDate`, `TotalCost`, `RentalStatus`) VALUES
(1, 1, 1, '2024-05-01', '2024-05-05', 200, 'Terminée'),
(2, 2, 2, '2024-05-02', '2024-05-06', 220, 'Terminée'),
(3, 3, 3, '2024-05-03', '2024-05-07', 240, 'Terminée'),
(4, 4, 4, '2024-05-04', '2024-05-08', 260, 'Terminée'),
(5, 5, 5, '2024-05-05', '2024-05-09', 280, 'Terminée');

-- --------------------------------------------------------

--
-- Structure de la table `Reviews`
--

CREATE TABLE `Reviews` (
  `ReviewID` int(11) NOT NULL,
  `RentalID` int(11) NOT NULL,
  `Rating` int(11) NOT NULL CHECK (`Rating` between 1 and 5),
  `Comments` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Reviews`
--

INSERT INTO `Reviews` (`ReviewID`, `RentalID`, `Rating`, `Comments`) VALUES
(1, 1, 4, 'The car was in good condition and drove smoothly.'),
(2, 2, 3, 'The car had some issues with the brakes, but overall it was fine.'),
(3, 3, 5, 'Excellent service and the car was very clean and well-maintained.'),
(4, 4, 2, 'The car had a strange smell and the interior was dirty.'),
(5, 5, 5, 'Highly recommend! The car was perfect and the rental process was easy.');

-- --------------------------------------------------------

--
-- Structure de la table `Users`
--

CREATE TABLE `Users` (
  `UserID` int(11) NOT NULL,
  `FirstName` text NOT NULL,
  `LastName` text NOT NULL,
  `Email` text NOT NULL,
  `Password` text NOT NULL,
  `PhoneNumber` text DEFAULT NULL,
  `Address` text DEFAULT NULL,
  `UserType` enum('Regular','Admin') NOT NULL DEFAULT 'Regular'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Users`
--

INSERT INTO `Users` (`UserID`, `FirstName`, `LastName`, `Email`, `Password`, `PhoneNumber`, `Address`, `UserType`) VALUES
(1, 'admin', 'admin', 'admin.admin@example.com', 'password', '+1234567890', '123 Main St', 'Admin'),
(2, 'Jane', 'Smith', 'jane.smith@example.com', 'password456', '+1987654321', '456 Elm St', 'Regular'),
(3, 'Alice', 'Johnson', 'alice.johnson@example.com', 'password789', '+1122334455', '789 Oak St', 'Regular'),
(4, 'Bob', 'Williams', 'bob.williams@example.com', 'passwordabc', '+1555666777', '321 Pine St', 'Regular'),
(5, 'Eva', 'Brown', 'eva.brown@example.com', 'passwordefg', '+1444333222', '654 Birch St', 'Regular');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Accidents`
--
ALTER TABLE `Accidents`
  ADD PRIMARY KEY (`AccidentID`),
  ADD KEY `RentalID` (`RentalID`);

--
-- Index pour la table `Cars`
--
ALTER TABLE `Cars`
  ADD PRIMARY KEY (`CarID`),
  ADD KEY `LocationID` (`LocationID`);

--
-- Index pour la table `Contracts`
--
ALTER TABLE `Contracts`
  ADD PRIMARY KEY (`ContractID`),
  ADD UNIQUE KEY `RentalID` (`RentalID`);

--
-- Index pour la table `Incidents`
--
ALTER TABLE `Incidents`
  ADD PRIMARY KEY (`IncidentID`),
  ADD KEY `RentalID` (`RentalID`);

--
-- Index pour la table `Locations`
--
ALTER TABLE `Locations`
  ADD PRIMARY KEY (`LocationID`);

--
-- Index pour la table `Rentals`
--
ALTER TABLE `Rentals`
  ADD PRIMARY KEY (`RentalID`),
  ADD KEY `UserID` (`UserID`),
  ADD KEY `CarID` (`CarID`);

--
-- Index pour la table `Reviews`
--
ALTER TABLE `Reviews`
  ADD PRIMARY KEY (`ReviewID`),
  ADD KEY `RentalID` (`RentalID`);

--
-- Index pour la table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`UserID`),
  ADD UNIQUE KEY `Email` (`Email`) USING HASH;

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Accidents`
--
ALTER TABLE `Accidents`
  MODIFY `AccidentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `Cars`
--
ALTER TABLE `Cars`
  MODIFY `CarID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `Contracts`
--
ALTER TABLE `Contracts`
  MODIFY `ContractID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `Incidents`
--
ALTER TABLE `Incidents`
  MODIFY `IncidentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `Locations`
--
ALTER TABLE `Locations`
  MODIFY `LocationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `Rentals`
--
ALTER TABLE `Rentals`
  MODIFY `RentalID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `Reviews`
--
ALTER TABLE `Reviews`
  MODIFY `ReviewID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `Users`
--
ALTER TABLE `Users`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Accidents`
--
ALTER TABLE `Accidents`
  ADD CONSTRAINT `Accidents_ibfk_1` FOREIGN KEY (`RentalID`) REFERENCES `Rentals` (`RentalID`);

--
-- Contraintes pour la table `Cars`
--
ALTER TABLE `Cars`
  ADD CONSTRAINT `Cars_ibfk_1` FOREIGN KEY (`LocationID`) REFERENCES `Locations` (`LocationID`);

--
-- Contraintes pour la table `Contracts`
--
ALTER TABLE `Contracts`
  ADD CONSTRAINT `Contracts_ibfk_1` FOREIGN KEY (`RentalID`) REFERENCES `Rentals` (`RentalID`);

--
-- Contraintes pour la table `Incidents`
--
ALTER TABLE `Incidents`
  ADD CONSTRAINT `Incidents_ibfk_1` FOREIGN KEY (`RentalID`) REFERENCES `Rentals` (`RentalID`);

--
-- Contraintes pour la table `Rentals`
--
ALTER TABLE `Rentals`
  ADD CONSTRAINT `Rentals_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `Users` (`UserID`),
  ADD CONSTRAINT `Rentals_ibfk_2` FOREIGN KEY (`CarID`) REFERENCES `Cars` (`CarID`);

--
-- Contraintes pour la table `Reviews`
--
ALTER TABLE `Reviews`
  ADD CONSTRAINT `Reviews_ibfk_1` FOREIGN KEY (`RentalID`) REFERENCES `Rentals` (`RentalID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
