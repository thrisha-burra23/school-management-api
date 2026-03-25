-- Create table
CREATE TABLE IF NOT EXISTS schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);

-- Sample data (Hyderabad-focused for testing proximity)
INSERT INTO schools (name, address, latitude, longitude) VALUES
('ABC School', 'Banjara Hills, Hyderabad', 17.4126, 78.4482),
('XYZ School', 'Madhapur, Hyderabad', 17.4483, 78.3915),
('Delhi Public School', 'Gachibowli, Hyderabad', 17.4401, 78.3489),
('Oakridge International School', 'Kondapur, Hyderabad', 17.4699, 78.3566),
('Chirec International School', 'Kondapur, Hyderabad', 17.4700, 78.3570);