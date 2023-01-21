--Simple Join
--Assuming there are two tables(product and companies) with matching ID's columns
--
SELECT p.*,
       c.name AS company_name
  FROM products as p,
       companies as c
 WHERE c.id = p.company_id --assuming that company id matches
--the product id
--could also be done with join
--Simple Join

--SUMMATION
--Write a program that finds the summation of every number from 1 to num.
--The number will always be a positive integer greater than 0.
--assuming the column is n and the table is named kata
--8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
select n, (n * (1 + n)) / 2 AS res
from kata
--SUMMATION
