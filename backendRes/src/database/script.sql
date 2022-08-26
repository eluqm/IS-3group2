create database testing;

use testing;

create table users (
	id int primary key auto_increment,
    namecompleto varchar(50),
    pass varchar(255),
    user varchar (50),
    fecharegistro date, 
    emailcontacto varchar(50) default '',
    areaRese varchar(100) default '',
    insitucion varchar(100) default '',
    sobremi varchar(255) default ''
);


INSERT INTO users (namecompleto, pass, user, fecharegistro)
VALUES ('luis moroco', 'root', 'lmoroco', '2022-09-12');
INSERT INTO users (namecompleto, pass, user, fecharegistro)
VALUES ('edu balvdica', 'root', 'evaldivia', '2022-09-12');
INSERT INTO users (namecompleto, pass, user, fecharegistro)
VALUES ('ckarol navaoo', 'root', 'knavarro', '2022-09-12');

select * from users;

-- ----------------------------------------------------------

create table facultad(
	idF int primary key auto_increment,
    name varchar(255)
);

INSERT INTO facultad (name)
VALUES ('Facultad de procesos');
INSERT INTO facultad (name)
VALUES ('Facultad de servicios');
INSERT INTO facultad (name)
VALUES ('Facultad de  gestion');



INSERT INTO facultad (name)
VALUES ('Arquitectura y Urbanismo');
INSERT INTO facultad (name)
VALUES ('CS. Naturales y Formales');
INSERT INTO facultad (name)
VALUES ('Geología, Física y Minas');
INSERT INTO facultad (name)
VALUES ('Ingeniería Civil');
INSERT INTO facultad (name)
VALUES ('Ingeniería de Procesos');
INSERT INTO facultad (name)
VALUES ('Ingeniería de Producción y Servicios');
INSERT INTO facultad (name)
VALUES ('Filosofía y Humanidades');
INSERT INTO facultad (name)
VALUES ('Administración');
INSERT INTO facultad (name)
VALUES ('Agronomía');
INSERT INTO facultad (name)
VALUES ('Ciencias Contables y Financieras');
INSERT INTO facultad (name)
VALUES ('Ciencias de la Educación');
INSERT INTO facultad (name)
VALUES ('Ciencia Histórico Sociales');
INSERT INTO facultad (name)
VALUES ('Derecho');
INSERT INTO facultad (name)
VALUES ('Economía');
INSERT INTO facultad (name)
VALUES ('Psicología, Relaciones Industriales y Ciencias de la Comunicación');

-- ----------------------------------------------------------

create table areas (
    id int primary key auto_increment,
	idP int,
    area varchar(50)
); 

INSERT INTO areas (idP, area)
VALUES (1, 'neural networdk');
INSERT INTO areas (idP, area)
VALUES (1, 'neural networks');
INSERT INTO areas (idP, area)
VALUES (2, 'machine learing');
INSERT INTO areas (idP, area)
VALUES (3, 'classification');

select * from areas;

INSERT INTO areas (idP, area)
VALUES (15, 'machine learing');
INSERT INTO areas (idP, area)
VALUES (15, 'classification');

-- ----------------------------------------------------------

create table participants (
    id int primary key auto_increment,
	idP int,
    participante varchar(100) 
);

INSERT INTO participants (idP, participante)
VALUES (1, 'becario 1');
INSERT INTO participants (idP, participante)
VALUES (1, 'becario 2');
INSERT INTO participants (idP, participante)
VALUES (2, 'becario 3');
INSERT INTO participants (idP, participante)
VALUES (3, 'becario 4');

select * from participants;

-- ----------------------------------------------------------

create table projects (
	idP int primary key auto_increment,
    id int not null,
    likes int not null default 0,
    estado bool not null default 1,
    titulo varchar(100),
    antecedentes varchar(500),
    descripcion varchar(500),
    idF int not null,
    financiacion float,
    fechaPubli date,
    fechaInit date,
    fechaFin date,
    vacantes int,
    
    foreign key (id) references users(id),
    foreign key (idF) references facultad(idF)
);

select * from projects;

INSERT INTO projects (id, titulo, antecedentes, descripcion, idF, financiacion, fechaPubli, fechaInit, fechaFin, vacantes)
VALUES (1, 'xGA optimizacion', 'blblblbllb', 'blbllvlvlv', 2, 567.342, '2022-08-8', '2022-08-10', '2023-08-8', 4);

INSERT INTO projects (id, titulo, antecedentes, descripcion, idF, financiacion, fechaPubli, fechaInit, fechaFin, vacantes)
VALUES (2, 'xGA Pytorch', 'blblblbllb', 'blbllvlvlv', 3, 567.342, '2022-08-8', '2022-08-10', '2023-08-8', 4);

INSERT INTO projects (id, titulo, antecedentes, descripcion, idF, financiacion, fechaPubli, fechaInit, fechaFin, vacantes)
VALUES (2, 'Keras BT', 'blblblbllb', 'blbllvlvlv', 1, 567.342, '2022-08-8', '2022-08-10', '2023-08-8', 4);

INSERT INTO projects (id, titulo, antecedentes, descripcion, idF, financiacion, fechaPubli, fechaInit, fechaFin, vacantes)
VALUES (3, 'Arboles de GA', 'blblblbllb', 'blbllvlvlv', 1, 567.342, '2022-08-8', '2022-08-10', '2023-08-8', 4);

-- ----------------------------------------------------------

create table escuelaspartici (
    id int primary key auto_increment,
	idP int,
    nameescuela varchar(50)
);

INSERT INTO escuelaspartici (idP, nameescuela)
VALUES (1, 'Computer Science');
INSERT INTO escuelaspartici (idP, nameescuela)
VALUES (1, 'Metalurgica');
INSERT INTO escuelaspartici (idP, nameescuela)
VALUES (2, 'Psioclogía');
INSERT INTO escuelaspartici (idP, nameescuela)
VALUES (3, 'Inge pesquera');


select * from escuelaspartici;