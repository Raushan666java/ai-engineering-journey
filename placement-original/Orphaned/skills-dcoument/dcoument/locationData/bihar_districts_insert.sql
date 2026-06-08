-- SQL INSERT Commands for All Bihar Districts
-- This file contains INSERT statements to populate the districts table with all 38 districts of Bihar
-- state_id is looked up by name (Bihar)

SET @bihar_id = (SELECT id FROM states WHERE name = 'Bihar');

-- Bihar Districts (38 total) - Alphabetically ordered
INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Araria', 'ARR', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Arwal', 'ARW', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Aurangabad', 'AUR', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Banka', 'BNK', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Begusarai', 'BEG', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bhabhua', 'BHA', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bhagalpur', 'BHP', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bhojpur', 'BHO', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Buxar', 'BUX', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Darbhanga', 'DAR', @bihar_id, 1, 1, 1, NOW(), NOW()),
('E.Champaran', 'ECH', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Gaya', 'GAY', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Gopalganj', 'GOP', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Jamui', 'JAM', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Jehanabad', 'JEH', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Katihar', 'KAT', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Khagaria', 'KHA', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kishanganj', 'KIS', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Lakhisarai', 'LAK', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Madhepura', 'MAD', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Madhubani', 'MDB', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Munger', 'MUN', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Muzaffarpur', 'MUZ', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Nalanda', 'NAL', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Nawadah', 'NAW', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Patna', 'PAT', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Purnia', 'PUR', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Rohtas', 'ROH', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Saharsa', 'SAH', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Samastipur', 'SAM', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Saran', 'SAR', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sheikhpura', 'SHE', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sheohar', 'SHO', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sitamarhi', 'SIT', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Siwan', 'SIW', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Supaul', 'SUP', @bihar_id, 1, 1, 1, NOW(), NOW()),
('Vaishali', 'VAI', @bihar_id, 1, 1, 1, NOW(), NOW()),
('W.Champaran', 'WCH', @bihar_id, 1, 1, 1, NOW(), NOW());
