CREATE DATABASE burrito_bucket;

USE burrito_bucket;

CREATE TABLE wish_list (
    id INT NOT NULL AUTO_INCREMENT,
    goal VARCHAR(500) NOT NULL,
    complete BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);