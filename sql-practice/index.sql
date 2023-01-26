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

--UPPERCASE
--you are given a table 'makeuppercase' with column 's',
--return a table with column 's' and your result in a column
--named 'res'.
SELECT s, UPPER(s) as res
FROM makeuppercase
--UPPERCASE

--UP and DOWN
--you are given a table 'numbers' with columns 'numbers1' 'numbers2 and 'id'
--return a table with similar structure
--if the sum of a column is odd the column shows the minimum value
--when the sum is even it shows the max value, use a case stament
SELECT
CASE WHEN SUM(number1)%2=1 THEN MIN(number1) ELSE MAX(number1) END AS number1,
CASE WHEN SUM(number2)%2=1 THEN MIN(number2) ELSE MAX(number2) END AS number2
FROM numbers
--UP and DOWN
