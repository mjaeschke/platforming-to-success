### Schema
DROP DATABASE IF EXISTS platforming_db;
CREATE DATABASE platforming_db;
USE platforming_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE scores
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
	score INTEGER NOT NULL,
    bestTime TIME NOT NULL,
	PRIMARY KEY (id)
);