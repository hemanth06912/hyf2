-- create database newDatabase;
-- use newDatabase;

-- CREATE TABLE `class`(
-- `id` INT(20) UNSIGNED NOT NULL,
-- `name` VARCHAR(255) NOT NULL,
-- `begins(Date)` DATETIME NOT NULL,
-- `ends(Date)` DATETIME NOT NULL,
-- primary key(`id`) 
-- );

-- CREATE TABLE `student`(
-- `id` INT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
-- `name` VARCHAR(255) NOT NULL,
-- `email` VARCHAR(255) NOT NULL,
-- `phone` varchar(255) NULL,
-- `class_id` int(10) unsigned NOT NULL,
-- primary key(`id`),
-- constraint `fk_class` foreign key(`class_id`) references `class`(`id`) ON delete cascade
-- );


-- creating index:
-- create index IDX_STUDENT_NAME
-- ON STUDENT (name);

-- adding colomn status:
alter table class 
add status_of_class varchar(255) ENUM('NOT_STARTED','ONGOING','FINISHED') not null; 


