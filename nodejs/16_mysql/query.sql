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
