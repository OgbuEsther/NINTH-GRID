USE ninthgrid;

CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(150)
);

INSERT INTO users (name, email, password) VALUES 
('Alice', 'alice@example.com', '1234567'),
('Bob', 'bob@example.com', '1234567'),
('Esther', 'esther@example.com', '1234567'),
('Tumi', 'tumi@example.com', '1234567');

SELECT * FROM users;

SHOW TABLES IN ninthgrid;
