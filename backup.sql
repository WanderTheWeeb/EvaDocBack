/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19-11.6.2-MariaDB, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: EvaDoc
-- ------------------------------------------------------
-- Server version	11.6.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*M!100616 SET @OLD_NOTE_VERBOSITY=@@NOTE_VERBOSITY, NOTE_VERBOSITY=0 */;

--
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `answer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `questionId` int(11) DEFAULT NULL,
  `optionId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_a4013f10cd6924793fbd5f0d637` (`questionId`),
  KEY `FK_996935e4981a0cdf304cebc4bf5` (`optionId`),
  CONSTRAINT `FK_996935e4981a0cdf304cebc4bf5` FOREIGN KEY (`optionId`) REFERENCES `option` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_a4013f10cd6924793fbd5f0d637` FOREIGN KEY (`questionId`) REFERENCES `question` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
INSERT INTO `answer` VALUES
(1,1,3),
(2,2,7),
(3,3,7),
(4,4,3),
(5,5,3),
(6,6,7),
(7,7,7),
(8,8,7),
(9,9,7),
(10,10,8),
(11,11,1),
(12,1,3),
(13,2,7),
(14,3,7),
(15,4,4),
(16,5,3),
(17,6,8),
(18,7,7),
(19,8,7),
(20,9,7),
(21,10,9),
(22,11,1),
(23,1,3),
(24,2,7),
(25,3,7),
(26,4,4),
(27,5,4),
(28,6,7),
(29,7,7),
(30,8,7),
(31,9,7),
(32,10,9),
(33,11,1),
(34,1,3),
(35,2,7),
(36,3,7),
(37,4,3),
(38,5,3),
(39,6,7),
(40,7,7),
(41,8,7),
(42,9,7),
(43,10,9),
(44,11,1),
(45,1,3),
(46,2,7),
(47,3,7),
(48,4,3),
(49,5,3),
(50,6,7),
(51,7,7),
(52,8,7),
(53,9,7),
(54,10,8),
(55,11,1);
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `option`
--

DROP TABLE IF EXISTS `option`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `option` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) NOT NULL,
  `groupId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_36bc87d0a59a8049be8e59b4808` (`groupId`),
  CONSTRAINT `FK_36bc87d0a59a8049be8e59b4808` FOREIGN KEY (`groupId`) REFERENCES `option_group` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `option`
--

LOCK TABLES `option` WRITE;
/*!40000 ALTER TABLE `option` DISABLE KEYS */;
INSERT INTO `option` VALUES
(1,'Sí',1),
(2,'No',1),
(3,'Excelente',2),
(4,'Bueno',2),
(5,'Regular',2),
(6,'Malo',2),
(7,'Siempre',3),
(8,'Casi siempre',3),
(9,'Pocas veces',3),
(10,'Nunca',3);
/*!40000 ALTER TABLE `option` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `option_group`
--

DROP TABLE IF EXISTS `option_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `option_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `option_group`
--

LOCK TABLES `option_group` WRITE;
/*!40000 ALTER TABLE `option_group` DISABLE KEYS */;
INSERT INTO `option_group` VALUES
(1,'T/F','Solo se responde con valores de si o no'),
(2,'Opcion1','Los valores que contiene son excelente,Bueno,Regular,Malo'),
(3,'Frecuncia','Los valores que tiene son Siempre, Casi siempre, Pocas veces o Nunca');
/*!40000 ALTER TABLE `option_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `period`
--

DROP TABLE IF EXISTS `period`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `period` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `surveyId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_b7143d856e8dafd39f10818d8b3` (`surveyId`),
  CONSTRAINT `FK_b7143d856e8dafd39f10818d8b3` FOREIGN KEY (`surveyId`) REFERENCES `survey` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `period`
--

LOCK TABLES `period` WRITE;
/*!40000 ALTER TABLE `period` DISABLE KEYS */;
INSERT INTO `period` VALUES
(1,'EvaDoc_202351',1);
/*!40000 ALTER TABLE `period` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `professor`
--

DROP TABLE IF EXISTS `professor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `professor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `noPersonal` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `fisrtLastName` varchar(255) NOT NULL,
  `secondLastName` varchar(255) NOT NULL,
  `surveyId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_0bcb1cb803e02d1c67f74a209e7` (`surveyId`),
  CONSTRAINT `FK_0bcb1cb803e02d1c67f74a209e7` FOREIGN KEY (`surveyId`) REFERENCES `survey` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `professor`
--

LOCK TABLES `professor` WRITE;
/*!40000 ALTER TABLE `professor` DISABLE KEYS */;
INSERT INTO `professor` VALUES
(1,'id    ','name          ','firstLastName ','secondLastName',NULL),
(2,'47464 ','Christian     ','Flores        ','Hernandez',NULL),
(3,'41436 ','Cinthya       ','Castañeda     ','Rodriguez',NULL),
(4,'43361 ','Claudia       ','Marcial       ','Cisneros',NULL),
(5,'23635 ','Claudia       ','Marin         ','Sanchez',NULL),
(6,'26545 ','Enrique       ','Chapuz        ','Tiquet',NULL),
(7,'46682 ','Fily          ','Hernandez     ','Hernandez',NULL),
(8,'noId1 ','Francisco     ','Jimenez       ','Hamud',NULL),
(9,'48742 ','Gilberto      ','Herrera       ','Cruz',NULL),
(10,'47465 ','Isaias        ','Pacheco       ','Morales',NULL),
(11,'33669 ','Janet         ','Diaz          ','Jimenez',NULL),
(12,'NoId2 ','Janett        ','Alonso        ','Fonseca',NULL),
(13,'48741 ','Jonathan      ','Castañeda     ','Rodriguez',NULL),
(14,'33670 ','Joselyn       ','Yepez         ','Enriquez',NULL),
(15,'23011 ','Juan Carlos   ','Alvarado      ','Cruz',NULL),
(16,'31397 ','Lourdes       ','Santillan     ','Maya',NULL),
(17,'24082 ','Maria Eugenia ','Alarcon       ','Aguirre',NULL),
(18,'42136 ','Melina        ','Vicente       ','Hernandez',NULL),
(19,'NoId3 ','Michael       ','White         ','Martinez',NULL),
(20,'23906 ','Monica        ','Vidal         ','Moreno',NULL),
(21,'NoID4 ','Nestor        ','Felipe        ','Jimenez',NULL),
(22,'33063 ','Ninive        ','Alvarado      ','Ortiz',NULL),
(23,'43358 ','Paula         ','Vazquez       ','Diaz',NULL),
(24,'41437 ','Ruben         ','Jacome        ','de los Santos',NULL),
(25,'43360 ','Samael        ','Castañeda     ','Mesa',NULL),
(26,'44438 ','Sergio        ','Ramirez       ','Torres',NULL),
(27,'42979 ','Veronica      ','Fabian        ','Ortega',NULL),
(28,'37039 ','Wendy         ','Ramos         ','Guillen',NULL);
/*!40000 ALTER TABLE `professor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) NOT NULL,
  `surveyId` int(11) DEFAULT NULL,
  `optionGroupId` int(11) DEFAULT NULL,
  `answerId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_a1188e0f702ab268e0982049e5c` (`surveyId`),
  KEY `FK_e9f2cfbc72228d76d2d968272b4` (`optionGroupId`),
  KEY `FK_1feacb4b624dd7518b6d969c8a5` (`answerId`),
  CONSTRAINT `FK_1feacb4b624dd7518b6d969c8a5` FOREIGN KEY (`answerId`) REFERENCES `question` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_a1188e0f702ab268e0982049e5c` FOREIGN KEY (`surveyId`) REFERENCES `survey` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_e9f2cfbc72228d76d2d968272b4` FOREIGN KEY (`optionGroupId`) REFERENCES `option_group` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES
(1,'El ambiente de trabajo y la interacción en clase promovidos han sido:',1,2,NULL),
(2,'El docente impulsa la participación de los estudiantes durante las clases para mejorar el aprendizaje:',1,3,NULL),
(3,'¿El docente apoya y aclara dudas cuando se le solicita?',1,3,NULL),
(4,'¿En qué nivel de calidad el apoyo y las clases brindados te permiten mejorar tu aprendizaje?',1,2,NULL),
(5,'En tu opinión, ¿cuál es el nivel de conocimiento y dominio del idioma que demuestra el docente?',1,2,NULL),
(6,'¿El docente lee, revisa y devuelve los trabajos y tareas solicitados con observaciones que te permite corregir tus errores?',1,3,NULL),
(7,'¿El docente avisa a los alumnos en caso de no atender la clase en el horario programado?',1,3,NULL),
(8,'¿El docente es puntual en su horario de clase programado?',1,3,NULL),
(9,'¿El horario que el docente imparte la clase coincide con el horario programado?',1,3,NULL),
(10,'¿Con qué frecuencia el docente imparte la clase en español?',1,3,NULL),
(11,'¿Te gustaría recibir otro curso con el mismo docente?',1,1,NULL);
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `survey`
--

DROP TABLE IF EXISTS `survey`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `survey` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `survey`
--

LOCK TABLES `survey` WRITE;
/*!40000 ALTER TABLE `survey` DISABLE KEYS */;
INSERT INTO `survey` VALUES
(1,'Evaluacion Docente Agosto-Diciembre');
/*!40000 ALTER TABLE `survey` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2025-02-08 23:29:31
