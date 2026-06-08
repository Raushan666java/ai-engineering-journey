-- SQL INSERT Commands for All Indian States and Union Territories
-- This file contains INSERT statements to populate the states table with all states and UTs of India
-- country_id is looked up by name (India)

SET @india_id = (SELECT id FROM countries WHERE name = 'India');

-- States and Union Territories of India (36 total)
INSERT INTO states (name, code, country_id, status, created_by, updated_by, created_at, updated_at) VALUES
-- States (28)
('Andhra Pradesh', 'AP', @india_id, 1, 1, 1, NOW(), NOW()),
('Arunachal Pradesh', 'AR', @india_id, 1, 1, 1, NOW(), NOW()),
('Assam', 'AS', @india_id, 1, 1, 1, NOW(), NOW()),
('Bihar', 'BR', @india_id, 1, 1, 1, NOW(), NOW()),
('Chhattisgarh', 'CT', @india_id, 1, 1, 1, NOW(), NOW()),
('Goa', 'GA', @india_id, 1, 1, 1, NOW(), NOW()),
('Gujarat', 'GJ', @india_id, 1, 1, 1, NOW(), NOW()),
('Haryana', 'HR', @india_id, 1, 1, 1, NOW(), NOW()),
('Himachal Pradesh', 'HP', @india_id, 1, 1, 1, NOW(), NOW()),
('Jharkhand', 'JH', @india_id, 1, 1, 1, NOW(), NOW()),
('Karnataka', 'KA', @india_id, 1, 1, 1, NOW(), NOW()),
('Kerala', 'KL', @india_id, 1, 1, 1, NOW(), NOW()),
('Madhya Pradesh', 'MP', @india_id, 1, 1, 1, NOW(), NOW()),
('Maharashtra', 'MH', @india_id, 1, 1, 1, NOW(), NOW()),
('Manipur', 'MN', @india_id, 1, 1, 1, NOW(), NOW()),
('Meghalaya', 'ML', @india_id, 1, 1, 1, NOW(), NOW()),
('Mizoram', 'MZ', @india_id, 1, 1, 1, NOW(), NOW()),
('Nagaland', 'NL', @india_id, 1, 1, 1, NOW(), NOW()),
('Odisha', 'OR', @india_id, 1, 1, 1, NOW(), NOW()),
('Punjab', 'PB', @india_id, 1, 1, 1, NOW(), NOW()),
('Rajasthan', 'RJ', @india_id, 1, 1, 1, NOW(), NOW()),
('Sikkim', 'SK', @india_id, 1, 1, 1, NOW(), NOW()),
('Tamil Nadu', 'TN', @india_id, 1, 1, 1, NOW(), NOW()),
('Telangana', 'TG', @india_id, 1, 1, 1, NOW(), NOW()),
('Tripura', 'TR', @india_id, 1, 1, 1, NOW(), NOW()),
('Uttar Pradesh', 'UP', @india_id, 1, 1, 1, NOW(), NOW()),
('Uttarakhand', 'UT', @india_id, 1, 1, 1, NOW(), NOW()),
('West Bengal', 'WB', @india_id, 1, 1, 1, NOW(), NOW()),

-- Union Territories (8)
('Andaman and Nicobar Islands', 'AN', @india_id, 1, 1, 1, NOW(), NOW()),
('Chandigarh', 'CH', @india_id, 1, 1, 1, NOW(), NOW()),
('Dadra and Nagar Haveli and Daman and Diu', 'DN', @india_id, 1, 1, 1, NOW(), NOW()),
('Delhi', 'DL', @india_id, 1, 1, 1, NOW(), NOW()),
('Jammu and Kashmir', 'JK', @india_id, 1, 1, 1, NOW(), NOW()),
('Ladakh', 'LA', @india_id, 1, 1, 1, NOW(), NOW()),
('Lakshadweep', 'LD', @india_id, 1, 1, 1, NOW(), NOW()),
('Puducherry', 'PY', @india_id, 1, 1, 1, NOW(), NOW());
