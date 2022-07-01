
--
-- Table structure for table `paper`
--

DROP TABLE IF EXISTS `paper`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paper` (
  `id_paper` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `tema` varchar(45) NOT NULL,
  `fecha` date NOT NULL,
  `id_usuario` int NOT NULL,
  `id_campo_de_estudio` int NOT NULL,
  PRIMARY KEY (`id_paper`),
  KEY `fk_Paper_Usuario1_idx` (`id_usuario`),
  KEY `fk_Paper_Campo_de_estudio1_idx` (`id_campo_de_estudio`),
  CONSTRAINT `fk_Paper_Campo_de_estudio1` FOREIGN KEY (`id_campo_de_estudio`) REFERENCES `campo_de_estudio` (`id_campo_de_estudio`),
  CONSTRAINT `fk_Paper_Usuario1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paper`
--

LOCK TABLES `paper` WRITE;
/*!40000 ALTER TABLE `paper` DISABLE KEYS */;
/*!40000 ALTER TABLE `paper` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
