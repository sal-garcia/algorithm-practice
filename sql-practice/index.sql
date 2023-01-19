--Simple Join
SELECT p.*,
       c.name AS company_name
  FROM products as p,
       companies as c
 WHERE c.id = p.company_id --assuming that company id matches
--the product id
--could also be done with join
--Simple Join
