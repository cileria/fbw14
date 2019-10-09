select * from autos;

truncate table autos;

insert into autos (marke, baujahr, modell, ccm, farbe) 
values ('Audi', 2010, '3er', 1300, 'blau'), 
	   ('Porsche', 2012, 'Cayenne', 2000, 'rot'),
	   ('BMW', 2007, '5er', 2000, 'schwarz');	

insert into autos (marke, baujahr, modell, ccm, farbe) 
values ('Opel', 2015, 'Omega', 1300, 'blau');

-- alle auswählen
select * from autos;
-- alle blauen autos
select * from autos where farbe = 'blau';
-- alle autos, die nach 2010 gebaut wurden
select * from autos where baujahr > 2010;


select * from person;
insert into person (firstname, lastname, age) 
values  ('Max', 'Mueller', 32),
		('Manfred', 'Richter', 42),
		('Manuela', 'Winter', 42),
		('Sandra', 'Meier', 25),
		('Robert', 'Schulz', 20),
		('Bob', 'Smith', 35);

select * from person;
-- älter als 40
select * from person where age > 40;
-- firstname ist Max
select * from person where firstname = 'Max';

select firstname, age from person;
-- firstname fängt mit M an
select * from person where firstname like 'M%';
-- i ist im firtname enthalten
select * from person where lastname like '%i%';
-- firstname ändern
update person set firstname = 'Achmed' where firstname = 'Max';
-- achmed wird 36 jahre alt
update person set age = 36 where id = 1;
-- alle werden 10 jähre älter
update person set age = age + 10;
-- alle sollen den zusatz 'Junior' haben
update person set firstname = concat(firstname, ' Junior');


-- finde alle customers mit dem anfangsbuchstaben K für firstname
select * from customers where firstname like 'K%';
-- alle customers deren lastname entweder mit A oder N ended
select * from customers where lastname like '%A' or lastname like '%N';
-- firstname, lastname and age aller customers, die jünger als 35 sind
select firstname, lastname, timestampdiff(year, birthdate, current_date()) as age 
from customers where timestampdiff(year,birthdate, current_date()) < 35;
-- finde alle customers die sich nach 20 uhr abends registriert haben
select * from customers where hour(registered) > 20;
-- alle customers die einen email account bei googlemail haben
select * from customers where email like '%googlemail%' or email like '%gmail%';


-- Lesen/Select
-- Alle
select * from customers;
-- filtern
select * from customers where city = 'Berlin';
-- sortieren
select * from customers where lastname = 'Meier' order by firstname desc;

-- Verändern/Update
update customers set city = 'Bln' where city = 'Berlin';
update customers set firstname = lcase(firstname);
-- select * from customers;

-- Einfügen/Insert
insert into customers (
	id, 
    firstname, 
    lastname, 
    registered, 
    birthdate, phone, city, street, postal, email
)
values (
	1001,
	'Max', 
    'Mustermann', 
    now(), 
    '1988-01-10', '49152792', 'Berlin', 'Main Street 5', '14332', 'max@abc.com'
);

-- löschen/delete
delete from customers where city = 'Koeln';