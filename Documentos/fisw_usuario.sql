-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: fisw
-- ------------------------------------------------------
-- Server version	5.7.14-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) DEFAULT NULL,
  `Apellido` varchar(45) DEFAULT NULL,
  `Rut` varchar(45) DEFAULT NULL,
  `Tipo` int(11) DEFAULT '2' COMMENT 'Tipos {\n0: Administrador\n1: Profesor\n2: Alumno }',
  `Mail` varchar(70) NOT NULL,
  `Password` varchar(45) NOT NULL,
  `Clasificacion_idU` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`idUsuario`),
  UNIQUE KEY `idUsuario_UNIQUE` (`idUsuario`),
  KEY `Clasificacion_id2_idx` (`Clasificacion_idU`),
  CONSTRAINT `Clasificacion_id2` FOREIGN KEY (`Clasificacion_idU`) REFERENCES `clasificacion` (`idClasificacion`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Rolando','Casanueva','18275943-0',0,'rolando.casanueva.12@sansano.usm.cl','valdivia',0),(2,'Admin','','',0,'admin@usm.cl','admin',0),(3,'Juan','Bustamante','12345678-9',2,'juan.bustamante.12@sansano.usm.cl','eljeizi',1),(4,'Ricardo','Carrasco','',2,'ricardo.carrasco.12@sansano.usm.cl','ricardo1234',2);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-09-27 16:18:05
