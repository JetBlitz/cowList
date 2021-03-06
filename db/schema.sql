DROP DATABASE IF EXISTS cowlist;
CREATE DATABASE IF NOT EXISTS cowList;

USE cowList;
​
CREATE TABLE IF NOT EXISTS cows (
  cowId INT AUTO_INCREMENT NOT NULL,
  cowName VARCHAR(20) NOT NULL,
  cowDescription VARCHAR(255) NOT NULL,
  PRIMARY KEY (cowId),
  UNIQUE (cowName)
);