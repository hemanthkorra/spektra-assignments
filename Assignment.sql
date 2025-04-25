--- Assignment 1
/*
 Write a SQL query to locate those salespeople who do not live in the same city where their customers live and have received a 
 commission of more than 12% from the company. Return Customer Name, customer city, Salesman, salesman city, commission.
*/
SELECT DISTINCT
    custPerson.FirstName + ' ' + custPerson.LastName AS CustomerName,
    custAddr.City AS CustomerCity,
    salesPerson.FirstName + ' ' + salesPerson.LastName AS SalesmanName,
    salesAddr.City AS SalesmanCity,
    salesRep.CommissionPct  AS Commission
FROM Sales.SalesOrderHeader salesOrder
JOIN Sales.Customer cust ON salesOrder.CustomerID = cust.CustomerID
JOIN Sales.SalesPerson salesRep ON salesOrder.SalesPersonID = salesRep.BusinessEntityID
JOIN Person.Person salesPerson ON salesRep.BusinessEntityID = salesPerson.BusinessEntityID
JOIN Person.Person custPerson ON cust.PersonID = custPerson.BusinessEntityID

-- Customer Address
JOIN Person.BusinessEntityAddress custBEA ON cust.StoreID = custBEA.BusinessEntityID
JOIN Person.Address custAddr ON custBEA.AddressID = custAddr.AddressID

-- Salesperson Address
JOIN Person.BusinessEntityAddress salesBEA ON salesRep.BusinessEntityID = salesBEA.BusinessEntityID
JOIN Person.Address salesAddr ON salesBEA.AddressID = salesAddr.AddressID

WHERE custAddr.City <> salesAddr.City
  AND salesRep.CommissionPct > 0.0012;



--- Assignment 2
/*
1. To list every salesperson, along with the customer's name, city, grade, order number, date, and amount, create a SQL query.
   Requirement for choosing the salesmen's list:
   1. Salespeople who work for one or more clients, or  Salespeople who haven't joined any clients yet.
   2. Requirements for choosing a customer list:
	1. placed one or more orders with their salesman, or  didn't place any orders.
*/
SELECT 
    sp.BusinessEntityID AS SalesPersonID,
    pp.FirstName + ' ' + pp.LastName AS SalesPersonName,
    c.CustomerID,
    ISNULL(ppc.FirstName + ' ' + ppc.LastName, s.Name) AS CustomerName,
    a.City,
    -- No grade column exists in default schema

    soh.SalesOrderID AS OrderNumber,
    soh.OrderDate,
    soh.TotalDue AS OrderAmount
FROM 
    Sales.SalesPerson sp
LEFT JOIN 
    Person.Person pp ON sp.BusinessEntityID = pp.BusinessEntityID
LEFT JOIN 
    Sales.SalesOrderHeader soh ON sp.BusinessEntityID = soh.SalesPersonID
LEFT JOIN 
    Sales.Customer c ON soh.CustomerID = c.CustomerID
LEFT JOIN 
    Person.Person ppc ON c.PersonID = ppc.BusinessEntityID
LEFT JOIN 
    Sales.Store s ON c.StoreID = s.BusinessEntityID
LEFT JOIN 
    Person.BusinessEntityAddress bea ON 
        (c.PersonID IS NOT NULL AND bea.BusinessEntityID = c.PersonID)
        OR (c.StoreID IS NOT NULL AND bea.BusinessEntityID = c.StoreID)
LEFT JOIN 
    Person.Address a ON bea.AddressID = a.AddressID
ORDER BY 
    SalesPersonName, CustomerName, soh.OrderDate;

--- Assignment 3
/*
3. Write a SQL query to calculate the difference between the maximum salary and the salary of all the employees who work in the department of ID 80.
Return job title, employee name and salary difference.
*/
SELECT 
    e.JobTitle,
    p.FirstName + ' ' + p.LastName AS EmployeeName,
    (MAX(eph.Rate) OVER () - eph.Rate) AS SalaryDifference
FROM 
    HumanResources.Employee e
JOIN 
    HumanResources.EmployeeDepartmentHistory edh ON e.BusinessEntityID = edh.BusinessEntityID
JOIN 
    HumanResources.Department d ON edh.DepartmentID = d.DepartmentID
JOIN 
    HumanResources.EmployeePayHistory eph ON e.BusinessEntityID = eph.BusinessEntityID
JOIN 
    Person.Person p ON e.BusinessEntityID = p.BusinessEntityID
WHERE 
    d.DepartmentID = 12
ORDER BY 
    EmployeeName;



--- Assignment 4
/*
Create a SQL query to compare employees' year-to-date sales. Return TerritoryName, SalesYTD, BusinessEntityID, and Sales from the prior year (PrevRepSales). 
The results are sorted by territorial name in ascending order.
*/
SELECT 
    t.Name AS TerritoryName,
    sp.SalesYTD,
    sp.BusinessEntityID,
    ISNULL(SUM(soh.SubTotal), 0) AS PrevRepSales
FROM 
    Sales.SalesPerson AS sp
INNER JOIN 
    Sales.SalesTerritory AS t ON sp.TerritoryID = t.TerritoryID
LEFT JOIN 
    Sales.SalesOrderHeader AS soh 
    ON sp.BusinessEntityID = soh.SalesPersonID 
    AND YEAR(soh.OrderDate) = YEAR(GETDATE()) - 1
GROUP BY 
    t.Name, sp.SalesYTD, sp.BusinessEntityID
ORDER BY 
    t.Name ASC;


--- Assignment 5
SELECT 
    soh.SalesOrderID AS ord_no,
    soh.TotalDue AS purch_amt,
    p.FirstName + ' ' + p.LastName AS cust_name,
    a.City
FROM 
    Sales.SalesOrderHeader AS soh
JOIN 
    Sales.Customer AS c ON soh.CustomerID = c.CustomerID
JOIN 
    Person.Person AS p ON c.PersonID = p.BusinessEntityID
JOIN 
    Sales.SalesOrderHeaderSalesReason AS sohsr ON soh.SalesOrderID = sohsr.SalesOrderID -- for address link
JOIN 
    Person.Address AS a ON soh.BillToAddressID = a.AddressID
WHERE 
    soh.TotalDue BETWEEN 500 AND 2000;

--- Assignment 6

SELECT 
    p.FirstName + ' ' + p.LastName AS CustomerName,
    addr.City,
    soh.SalesOrderID AS OrderNumber,
    soh.OrderDate,
    soh.TotalDue AS OrderAmount
FROM 
    Sales.Customer AS c
JOIN 
    Person.Person AS p ON c.PersonID = p.BusinessEntityID
JOIN 
    Sales.SalesOrderHeader AS soh ON c.CustomerID = soh.CustomerID
JOIN 
    Person.Address AS addr ON soh.BillToAddressID = addr.AddressID
ORDER BY 
    soh.OrderDate ASC;

--- Assignment 7

SELECT 
    e.JobTitle,
    p.LastName,
    p.MiddleName,
    p.FirstName
FROM 
    HumanResources.Employee AS e
JOIN 
    Person.Person AS p ON e.BusinessEntityID = p.BusinessEntityID
WHERE 
    e.JobTitle LIKE 'Sales%';