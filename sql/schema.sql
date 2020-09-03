-- PostgreSQL Commands --

create table "Users"
(
	ID varchar(10),
	Type varchar(150),
	Password varchar(150)
)

create table "Dishes"
(
	Name varchar(150),
	Type varchar(150),
	Price varchar(150)
)

ALTER TABLE "Dishes" ADD COLUMN id SERIAL PRIMARY KEY;

-- Testing Database -- 

select * from "Users"
select * from "Dishes"

-- [POST] Adding Data to Dishes --

insert into "Dishes" values
('Croissant','Bread','$0.50'),
('Baguette','Bread','$2.50'),
('Doughnut','Confections','$1.50'),
('Pain Au Chocolat','Bread','$2.00'),
('Penne Pasta','Pasta','$6.80'),
('French Toast','Bread','$5.00'),
('Penne Arabiata','Pasta','$7.00'),
('Pasta Bologaniase','Pasta','$10.00'),
('Pizza','Bread','$12.00'),
('Crepe','Pancake','$2.50'),
('Macaroons','Confections','$2.50'),
('Macaronni','Pasta','$7.50'),
('Hot Dog','Snacks','$1.50'),
('Baguette','Bread','$3.55')


-- [GET] Retrieving Data --

select * from "Users" where "ID" = '1'
select * from "Dishes" where "ID" = '1'

-- [PUT] Updating Data --

update  "Dishes"  set "Name" = 'Chocolate Bread' where "ID" = '4'

-- [DELETE] Deleting Data  --

delete "Dishes" 
delete from "Dishes" where "ID" = 'value'


-- Users DB --

select * from "Users"

insert into "Users" values (1,'Admin','admin123'),(2,'Jagan','jagan123'),(3,'John','john123')

