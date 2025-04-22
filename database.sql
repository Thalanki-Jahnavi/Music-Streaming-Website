INSERT INTO users (email, password)
VALUES
    ('user@example.com', SHA2('password123', 256)),
    ('admin@example.com', SHA2('password456', 256));