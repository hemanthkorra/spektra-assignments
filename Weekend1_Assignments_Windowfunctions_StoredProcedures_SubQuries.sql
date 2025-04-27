/*Lab Activity 1: Ranking Functions
Objective: Use RANK(), DENSE_RANK(), and ROW_NUMBER() to analyze employee salaries.Assignment:*/

--- 1. Create an Employees table with columns: EmployeeID, FirstName, LastName, Department, and Salary.
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Department VARCHAR(50),
    Salary DECIMAL(10, 2)
);

INSERT INTO Employees (EmployeeID, FirstName, LastName, Department, Salary) VALUES
(1, 'John', 'Doe', 'IT', 60000.00),
(2, 'Jane', 'Smith', 'HR', 55000.00),
(3, 'Michael', 'Johnson', 'Finance', 70000.00),
(4, 'Emily', 'Davis', 'IT', 60000.00),
(5, 'Daniel', 'Brown', 'Marketing', 50000.00),
(6, 'Emma', 'Wilson', 'Finance', 70000.00),
(7, 'James', 'Taylor', 'HR', 55000.00),
(8, 'Olivia', 'Anderson', 'IT', 62000.00),
(9, 'Benjamin', 'Thomas', 'Marketing', 50000.00),
(10, 'Sophia', 'Jackson', 'Finance', 72000.00),
(11, 'Lucas', 'White', 'IT', 60000.00),
(12, 'Amelia', 'Harris', 'HR', 56000.00),
(13, 'Mason', 'Martin', 'Finance', 70000.00),
(14, 'Charlotte', 'Thompson', 'Marketing', 52000.00),
(15, 'Ethan', 'Garcia', 'IT', 62000.00),
(16, 'Isabella', 'Martinez', 'HR', 55000.00),
(17, 'Logan', 'Robinson', 'Finance', 72000.00),
(18, 'Mia', 'Clark', 'IT', 62000.00),
(19, 'Elijah', 'Rodriguez', 'Marketing', 50000.00),
(20, 'Ava', 'Lewis', 'Finance', 72000.00);


-- 2. Write a query to assign ranks based on salary within each department using RANK()
SELECT e.*,
    RANK() OVER (PARTITION BY Department ORDER BY Salary DESC) AS Rank
FROM Employees e;

-- 3. Use DENSE_RANK() to rank employees and compare the results with RANK()
SELECT e.*,
    RANK() OVER (PARTITION BY Department ORDER BY Salary DESC) AS Rank,
    DENSE_RANK() OVER (PARTITION BY Department ORDER BY Salary DESC) AS Dense_Rank
FROM Employees e;

-- 4. Generate a sequential number for each employee irrespective of the department using ROW_NUMBER()
SELECT e.*,
    ROW_NUMBER() OVER (ORDER BY EmployeeID) AS Row_Number
FROM Employees e;

/*
Lab Activity 2: Subqueries
Objective: Utilize subqueries for filtering and calculating aggregate data.Assignment:
*/

--- 1.	Create a Sales table with columns: SaleID, SalespersonID, Region, and TotalSales.
CREATE TABLE Sales (
    SaleID INT PRIMARY KEY,
    SalespersonID INT,
    Region VARCHAR(50),
    TotalSales DECIMAL(12, 2)
);

INSERT INTO Sales (SaleID, SalespersonID, Region, TotalSales) VALUES
(1, 101, 'North', 15000.00),
(2, 102, 'South', 18000.00),
(3, 103, 'East', 17000.00),
(4, 104, 'West', 20000.00),
(5, 101, 'North', 16000.00),
(6, 105, 'South', 17500.00),
(7, 106, 'East', 19000.00),
(8, 102, 'West', 21000.00),
(9, 107, 'North', 22000.00),
(10, 108, 'South', 23000.00),
(11, 103, 'East', 16500.00),
(12, 109, 'West', 25000.00),
(13, 104, 'North', 15500.00),
(14, 110, 'South', 18500.00),
(15, 105, 'East', 17500.00),
(16, 106, 'West', 19500.00),
(17, 107, 'North', 21000.00),
(18, 108, 'South', 24000.00),
(19, 109, 'East', 26000.00),
(20, 110, 'West', 27000.00);

--- 2.	Write a query to find salespeople whose total sales exceed the average sales in their region using a subquery in the WHERE clause.
SELECT *
FROM Sales s
WHERE TotalSales > (
    SELECT AVG(TotalSales)
    FROM Sales
    WHERE Region = s.Region
);

--- 3.	Use a subquery in the SELECT clause to show the salesperson's rank within their region.
SELECT 
    s.*,
    (
        SELECT COUNT(*)
        FROM Sales s2
        WHERE s2.Region = s.Region
          AND s2.TotalSales >= s.TotalSales
    ) AS Sales_Rank
FROM Sales s 
ORDER BY Region;


--- Lab Activity 3: Stored Procedures
-- 1. Create a stored procedure GetHighEarningEmployees that accepts a salary threshold as an input parameter 
-- and returns employee details for those earning above the threshold.

CREATE PROCEDURE GetHighEarningEmployees 
    @salary_threshold DECIMAL(8, 2)
AS
BEGIN
    -- Select all employee details where the salary is greater than the provided threshold
    SELECT *
    FROM Employees
    WHERE Salary > @salary_threshold;
END;

-- 2. Create another procedure UpdateEmployeeSalary to increase salaries for employees in a specific department.

CREATE PROCEDURE UpdateEmployeeSalary
    @department VARCHAR(50),
    @Salary DECIMAL(10, 2)
AS
BEGIN
    -- Print message before update
    SELECT 'Before Update' AS Message;
    
    -- Display employees from the specified department before salary update
    SELECT FirstName + ' ' + LastName AS Name, Department, Salary 
    FROM Employees 
    WHERE Department = @department;

    -- Update the salary for employees in the specified department
    UPDATE Employees 
    SET Salary += @Salary 
    WHERE Department = @department;
    
    -- Print message after update
    SELECT 'After Update' AS Message;
    
    -- Display employees from the specified department after salary update
    SELECT FirstName + ' ' + LastName AS Name, Department, Salary 
    FROM Employees 
    WHERE Department = @department;
END;

-- 3. Test both procedures using different input values.

-- Test the GetHighEarningEmployees procedure with two salary thresholds
EXECUTE GetHighEarningEmployees @salary_threshold = 70000.00;
EXECUTE GetHighEarningEmployees @salary_threshold = 60000.00;

-- Test the UpdateEmployeeSalary procedure with two different departments
EXECUTE UpdateEmployeeSalary @department = 'IT', @Salary = 20000.00;
EXECUTE UpdateEmployeeSalary @department = 'Finance', @Salary = 50.23;




-- Lab Activity 4: LAG Function

-- 1. Create the MonthlySales table
CREATE TABLE MonthlySales (
    Month INT,
    Region VARCHAR(50),
    TotalSales DECIMAL(12, 2)
);

INSERT INTO MonthlySales (Month, Region, TotalSales) VALUES
(1, 'North', 15000.00),
(4, 'South', 18000.00),
(5, 'East', 17500.00),
(2, 'West', 20000.00),
(3, 'North', 19000.00),
(6, 'South', 21000.00),
(7, 'East', 16000.00),
(8, 'West', 17000.00),
(9, 'North', 22000.00),
(10, 'South', 23000.00),
(11, 'East', 24000.00),
(12, 'West', 25000.00),
(5, 'North', 17500.00),
(1, 'South', 15000.00),
(6, 'East', 21000.00),
(3, 'West', 19000.00),
(4, 'North', 18000.00),
(7, 'South', 16000.00),
(8, 'East', 17000.00),
(1, 'West', 15000.00);

-- 2. Use LAG() to find the difference in sales between the current month and the previous month for each region
-- 3. Add a column to identify months with a sales decrease.
SELECT MS.*,
       LAG(TotalSales) OVER (ORDER BY Month) AS Lag_Values,
       CASE 
           WHEN Month = LAG(Month) OVER (ORDER BY Month) THEN 'Same month'
           WHEN MS.TotalSales > LAG(TotalSales) OVER (ORDER BY Month) THEN 'Higher than previous month'
           WHEN MS.TotalSales < LAG(TotalSales) OVER (ORDER BY Month) THEN 'Lower than previous month'
           WHEN MS.TotalSales = LAG(TotalSales) OVER (ORDER BY Month) THEN 'Equals to previous month'
       END AS Sal_Compare
FROM MonthlySales MS;

-- Lab Activity 5: LEAD Function

-- 1. Use the MonthlySales table from the previous activity.
-- 2. Use LEAD() to calculate the predicted sales for the next month in each region.
-- 3. Add a column to compare current sales with the predicted future sales.
SELECT MS.*,
       LEAD(TotalSales) OVER (ORDER BY Month) AS Lead_Values,
       CASE 
           WHEN Month = LEAD(Month) OVER (ORDER BY Month) THEN 'Same month'
           WHEN MS.TotalSales > LEAD(TotalSales) OVER (ORDER BY Month) THEN 'Sales increased'
           WHEN MS.TotalSales < LEAD(TotalSales) OVER (ORDER BY Month) THEN 'Sales decreased'
           WHEN MS.TotalSales = LEAD(TotalSales) OVER (ORDER BY Month) THEN 'Sales are equal'
       END AS Sal_Compare
FROM MonthlySales MS;
