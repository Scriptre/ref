CREATE TABLE restaurants (
    id serial NOT NULL PRIMARY KEY,  /* serial increments. NOT NULL requires data for a row. PRIMARY KEY is used to identify a row uniquely in a table*/
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NULL check(price_range >=1 and price_range <=5)
);

INSERT INTO restaurants (id, name, location, price_range) values (123, 'mcdonalds', 'new york', 3);

SELECT name_column FROM my_table;
SELECT * FROM restaurants; /* displays all data */