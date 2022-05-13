--@block
CREATE TABLE Users(
    id INT PRIMARY KEY AUTO_INCREMENT, 
    username VARCHAR(255) NOT NULL UNIQUE,
    age INT 
 );

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
