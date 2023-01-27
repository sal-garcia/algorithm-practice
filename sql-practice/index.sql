--Simple Join
select products.*, companies.name AS company_name
FROM products
JOIN companies ON companies.id=products.company_id
--assuming that company id matches
--the product id
--could also be done with join
--Simple Join
