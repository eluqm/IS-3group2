
--
-- Table structure for table `proyecto`
--

DROP TABLE IF EXISTS `proyecto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proyecto` (
  `id_proyecto` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `fecha` date NOT NULL,
  `estado` varchar(45) NOT NULL,
  `participantes` varchar(200) NOT NULL,
  `id_usuario` varchar(45) NOT NULL,
  `Campo_de_estudio_id_campo_de_estudio` int NOT NULL,
  `Usuario_id_usuario` int NOT NULL,
  `Escuela_id_escuela` int NOT NULL,
  PRIMARY KEY (`id_proyecto`),
  KEY `fk_Proyecto_Campo_de_estudio_idx` (`Campo_de_estudio_id_campo_de_estudio`),
  KEY `fk_Proyecto_Usuario1_idx` (`Usuario_id_usuario`),
  KEY `fk_Proyecto_Escuela1_idx` (`Escuela_id_escuela`),
  CONSTRAINT `fk_Proyecto_Campo_de_estudio` FOREIGN KEY (`Campo_de_estudio_id_campo_de_estudio`) REFERENCES `campo_de_estudio` (`id_campo_de_estudio`),
  CONSTRAINT `fk_Proyecto_Escuela1` FOREIGN KEY (`Escuela_id_escuela`) REFERENCES `escuela` (`id_escuela`),
  CONSTRAINT `fk_Proyecto_Usuario1` FOREIGN KEY (`Usuario_id_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proyecto`
--

LOCK TABLES `proyecto` WRITE;
/*!40000 ALTER TABLE `proyecto` DISABLE KEYS */;
/*!40000 ALTER TABLE `proyecto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

