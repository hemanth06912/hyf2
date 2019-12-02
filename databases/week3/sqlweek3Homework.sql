-- create database MysqlHomework3;
-- use MysqlHomework3;


-- create Table meal (
--  id int(10) unsigned not null AUTO_INCREMENT,
--  title varchar(255) not null,
--  description text not null,
--  location varchar(255) not null,
--  when_date datetime not null,
--  max_reservations int(10)  unsigned not null,
--  price decimal  unsigned not null,
--  created_date date,
--  primary key (id)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- CREATE Table Reservation(
-- 	 id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
-- 	 number_of_guests int(10) UNSIGNED NOT NULL,
-- 	 meal_id int(10) unsigned not NULL,
-- 	 created_date date,
-- 	 primary key (id),
-- 	 FOREIGN KEY (meal_id) REFERENCES meal (id)
-- 	 )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- CREATE Table Review(
-- 	 id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
-- 	 title varchar(255) NOT NULL,
-- 	 description text NOT NULL,
-- 	 meal_id int(10) unsigned NOT NULL,
-- 	 stars int(10) ,
-- 	 created_date date,
--      primary key (id),
--      FOREIGN KEY (meal_id) REFERENCES meal (id) 
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- drop table meal;

-- insert into meal (id, title , description, location, when_date, max_reservations, price, created_date) 
-- values( 1,'chicken curry', 'hot chicken curry', 'ishoj','2017-10-25 06:54:16',6,180,'2016-10-25 06:54:16');
-- insert into meal (id, title ,description,location,when_date,max_reservations,price,created_date) 
-- values (2, 'chicken curry', 'hot chicken curry', 'ishoj','2017-10-25 06:54:16',6,180,'2016-10-25 06:54:16');
-- insert into meal (id, title , description, location, when_date, max_reservations, price, created_date) 
-- values( 3,'chicken cur', 'cold chicken curry', 'viby','2018-10-25 06:04:16',6,180,'2017-10-25 07:24:16');
-- insert into meal (id, title ,description,location,when_date,max_reservations,price,created_date) 
-- values (4, 'mutton curry', 'hot mutton curry', 'kbh','2007-1-5 16:04:6',8,190,'2015-10-21 06:24:16');
-- insert into meal (id, title , description, location, when_date, max_reservations, price, created_date) 
-- values( 5,'chick curry', 'hot chick curry', 'valby','2013-12-29 09:51:36',9,140,'2012-11-25 05:54:16');
-- insert into meal (id, title ,description,location,when_date,max_reservations,price,created_date) 
-- values (6, 'chi curry', 'hot chi curry', 'hellerup','2016-11-25 06:54:16',4,100,'2016-10-25 06:54:16');

-- get all meals:
-- select * from meal;

-- Add a new meal :
-- insert into meal (id, title ,description,location,when_date,max_reservations,price,created_date) 
-- values (7, 'chea curry', 'hot chi curry', 'jellerup','2016-11-25 06:54:16',4,100,'2016-10-25 06:54:16');

-- get a meal by id fx 3:
-- select * from meal where id=3;

-- updating the meal table and changing the attributes in the column:
-- update meal 
-- set title = 'potato curry',
-- description = 'hot potato curry'
-- where id =1; 

-- delete a row from the meal table:
-- delete from meal
-- where id =3;

-- revervation table ----------------------------------------- 

-- insert the values into the table ----
-- insert into reservation (id,number_of_guests, meal_id, created_date) values (1,9,3,'2016-10-25 06:54:16');
-- insert into reservation (id,number_of_guests, meal_id, created_date) values (2,5,1,'2013-10-2 06:54:16');
-- insert into reservation (id,number_of_guests, meal_id, created_date) values (3,6,5,'2013-11-27 06:59:16');
-- insert into reservation (id,number_of_guests, meal_id, created_date) values (4,5,6,'2011-09-24 09:54:16');
-- insert into reservation (id,number_of_guests, meal_id, created_date) values (5,12,7,'2015-08-15 06:04:16');
-- insert into reservation (id,number_of_guests, meal_id, created_date) values (6,11,2,'2012-10-25 06:54:16');

-- get all the reservations:
-- select * from reservation;

-- Adding a new reservation:
-- insert into reservation (id,number_of_guests, meal_id, created_date) values (7,8,3,'2009-10-25 06:54:16');

-- getting the reservation for a specific id:
-- select * from reservation where id = 3;

-- updating the attributes in the reservation table:
-- update reservation 
-- set meal_id=3, number_of_guests = 2
-- where id= 5;

-- delete the reservation:
-- delete from reservation
-- where id = 3;

-- reviews table -------------------------------------------

-- insert into review (id ,title, description, meal_id, stars) values (1, 'potato curry' , 'delicious food', 1, 5 );
-- insert into review (id ,title, description, meal_id, stars) values (2, 'chicken curry' , 'delicious food', 2, 4 );
-- insert into review (id ,title, description, meal_id, stars) values (3, 'chicken cur' , 'nice food', 1, 3 );
-- insert into review (id ,title, description, meal_id, stars) values (4, 'mutton curry' , 'good food', 1, 4 );

-- get all the reviews:
-- select * from review;

-- Add a review to the table:
-- insert into review (id ,title, description, meal_id, stars) values (5, 'chick curry' , 'good food', 5, 4 );

-- get the review info with id:
-- select * from review where id=1;

-- updating the attributes in the table review:
-- update review 
-- set description = 'not good', stars = 2
-- where id = 3;

-- deleting the particular row from the table:
-- delete from review
-- where id=3;

-- Additional queries --------------------------------

-- task1 ----------------------------
-- get the meals that have prices smaller than 150:
-- select * from meal where price < 150 ;

-- task2 ----------------------------
 -- select * from reservation;
 -- meals that still have reservations:

-- select meal.id,meal.title,max_reservations,number_of_guests from meal
-- join reservation on meal.id=reservation.meal_id
-- where max_reservations > number_of_guests;

-- task 3:---------------------------------------
-- get the titles that partially match :
-- select meal.id, meal.title from meal
-- where meal.title like '%curry%'

-- task 4:
-- get the meals that are created between two dates:


-- task 5:
-- get only specific number of meals:
-- select *  from meal 
-- limit 3;

-- task 6:
-- get the meal that have good reviews
-- assuming meals with stars greater 3 as good:

-- select meal.id, meal.title,review.stars 
-- from meal join review 
-- on meal.id =review.meal_id
-- where review.stars >3;

-- task 7:
-- get the specfic meal  between two dates:
-- select meal.id,meal.title,meal.created_date 
-- from meal 
-- where meal.created_date between '2016-01-01 00:00:00' and '2018-01-01 00:00:00';



-- select meal.id,meal.title,meal.max_reservations,reservation.number_of_guests,reservation.created_date
-- from meal join reservation 
-- on meal.id = reservation.meal_id
-- order by  created_date desc;

-- task 8:
-- sort all meals from average number of stars:
-- select meal.id,meal.title,review.stars,avg(review.stars) as avg_stars
-- from meal join review 
-- on meal.id = review.meal_id
-- group by meal.id
-- order by avg(review.stars);




 





 
