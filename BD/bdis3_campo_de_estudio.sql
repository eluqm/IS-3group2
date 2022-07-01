--
-- Table structure for table `campo_de_estudio`
--

DROP TABLE IF EXISTS `campo_de_estudio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `campo_de_estudio` (
  `id_campo_de_estudio` int NOT NULL AUTO_INCREMENT,
  `tema` varchar(45) NOT NULL,
  PRIMARY KEY (`id_campo_de_estudio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campo_de_estudio`
--

LOCK TABLES `campo_de_estudio` WRITE;
/*!40000 ALTER TABLE `campo_de_estudio` DISABLE KEYS */;
/*!40000 ALTER TABLE `campo_de_estudio` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
