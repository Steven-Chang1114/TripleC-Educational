--@block
CREATE TABLE Users(
    id INT PRIMARY KEY AUTO_INCREMENT, 
    username VARCHAR(255) NOT NULL UNIQUE,
    age INT 
 );

--@block
DROP TABLE Users, Cars

--@block
INSERT INTO Users(username, age)
VALUES("Steven", 21);

--@block
INSERT INTO Users(username, age)
VALUES
    ("Justin", 21),
    ("Bob", 19),
    ("Alice", 22);

--@block
SELECT * FROM Users;

--@block
SELECT username, age FROM Users ORDER BY age DESC LIMIT 3;

--@block
SELECT username FROM Users WHERE age >= 21 AND username LIKE 's%';

--@block
UPDATE Users
SET age = 29
WHERE username LIKE 's%';

--@block
CREATE TABLE Cars(
    id INT PRIMARY KEY AUTO_INCREMENT, 
    car VARCHAR(255) NOT NULL,
    owner_id INT NOT NULL,
    FOREIGN KEY (owner_id) REFERENCES Users(id)
);

--@block
INSERT INTO Cars(car, owner_id)
VALUES
    ("Toyota", 1),
    ("Tesla", 1),
    ("Tesla", 2),
    ("Ford", 3);

--@block
SELECT * FROM Cars

--@block
SELECT * FROM Users
RIGHT JOIN Cars
ON Cars.owner_id = Users.id;

--@block
SELECT 
    Users.id AS user_id,
    Cars.id AS car_id,
    username,
    age,
    car
FROM Users
INNER JOIN Cars
ON Cars.owner_id = Users.id
WHERE
    age < 21;


