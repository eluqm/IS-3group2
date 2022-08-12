SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema BDIS3-6
-- BeResearcher


-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema BDIS3-6
--
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `BDIS3-6` DEFAULT CHARACTER SET utf8 ;
USE `BDIS3-6` ;

-- -----------------------------------------------------
-- Table `BDIS3-6`.`Usuario`
-- Se  recolecta los datos necesarios del usuario para el registro de Usuario. 
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BDIS3-6`.`Usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `user` VARCHAR(45) NOT NULL,
  `contraeña` VARCHAR(45) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `apellidos` VARCHAR(45) NOT NULL,
  `gradoInstruccion` VARCHAR(45) NULL,
  `institucion` VARCHAR(70) NULL,
  `areaInvestigacion` VARCHAR(100) NULL,
  `facultad` VARCHAR(45) NULL,
  `escuela` VARCHAR(45) NULL,
  `descripción` VARCHAR(500) NULL,
  `email` VARCHAR(45) NULL,
  `telefono` INT NULL,
  PRIMARY KEY (`id_usuario`))
ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `BDIS3-6`.`Proyecto`
-- Se registra los diferentes datos que pueda tener un proyecto de investigación
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BDIS3-6`.`Proyecto` (
  `id_proyecto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `likes` INT NOT NULL,
  `descripcion` VARCHAR(800) NULL,
  `objetivos` VARCHAR(45) NULL,
  `metricas` VARCHAR(45) NULL,
  `participantes` VARCHAR(200) NULL,
  `estado` VARCHAR(45) NULL,
  `financioacion` VARCHAR(45) NULL,
  `disponibilidad` VARCHAR(45) NULL,
  `antecedentes` VARCHAR(500) NULL,
  `fechaInicio` DATE NULL,
  `fechaFinal` DATE NULL,
  `fechaPublicaion` DATE NULL,
  `Usuario_id_usuario` INT NOT NULL,
  `Facultad_id_facultad` INT NOT NULL,
  PRIMARY KEY (`id_proyecto`),
  INDEX `fk_Proyecto_Usuario1_idx` (`Usuario_id_usuario` ASC) VISIBLE,
  INDEX `fk_Proyecto_Facultad1_idx` (`Facultad_id_facultad` ASC) VISIBLE,
  CONSTRAINT `fk_Proyecto_Usuario1`
    FOREIGN KEY (`Usuario_id_usuario`)
    REFERENCES `BDIS3-6`.`Usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Proyecto_Facultad1`
    FOREIGN KEY (`Facultad_id_facultad`)
    REFERENCES `BDIS3-6`.`Facultad` (`id_facultad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `BDIS3-6`.`Facultad`
--En esta entidad se registra distintas facultades de la universidad participante, 
--perteneciente a un usuario (investigador - proyecto).
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BDIS3-6`.`Facultad` (
  `id_facultad` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_facultad`))
ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `BDIS3-6`.`escuela`
-- Se registra distintas las distintas escuelas perteneciente a las facultades de 
--la universidad participante, perteneciente a un usuario (investigador - proyecto).
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BDIS3-6`.`escuela` (
  `id_escuela` INT NULL,
  `nombre` VARCHAR(45) NULL)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `BDIS3-6`.`areaInvestigacion`
--Se registra las áreas de investigación, perteneciente a un proyecto.
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BDIS3-6`.`areaInvestigacion` (
  `idarea` INT NULL,
  `nombre` VARCHAR(200) NULL,
  `descripcion` VARCHAR(800) NULL)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `BDIS3-6`.`NuevoParticipante`
-- Se hace el registro de nuevos participantes pertenecientes al proyecto registrado 
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BDIS3-6`.`NuevoParticipante` (
  `idNuevoParticipante` INT NULL,
  `nombre` VARCHAR(45) NULL)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `BDIS3-6`.`enlacesExternos`
-- Se hace el registro de los distintos enlaces externos que pueda tener un proyecto.
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BDIS3-6`.`enlacesExternos` (
  `idenlacesExternos` INT NULL,
  `enlace` VARCHAR(45) NULL)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `BDIS3-6`.`campo_de_Estudio`
-- Se hace el registro de un campo de estudio de un área de investigación en un proyecto establecido.
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BDIS3-6`.`campo_de_Estudio` (
  `idcampo_de_Estudio` INT NULL,
  `nombre` VARCHAR(500) NULL,
  `descripcion` VARCHAR(800) NULL)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
