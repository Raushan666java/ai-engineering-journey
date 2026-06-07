-- SQL INSERT Commands for All 538 Blocks in Bihar
-- This file contains INSERT statements to populate the blocks table with all 538 blocks in Bihar.
-- Assumes state_id for Bihar is known (replace with actual id if different).
-- District_ids are looked up by name.
-- Codes are generated as UPPER first 3 letters of name.

SET @bihar_id = (SELECT id FROM states WHERE name = 'Bihar');

-- Patna District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Patna', 'PAT', (SELECT id FROM districts WHERE name = 'Patna'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Dhanarua', 'DHA', (SELECT id FROM districts WHERE name = 'Patna'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Phulwarisharif', 'PHU', (SELECT id FROM districts WHERE name = 'Patna'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bihta', 'BIH', (SELECT id FROM districts WHERE name = 'Patna'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Naubatpur', 'NAU', (SELECT id FROM districts WHERE name = 'Patna'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Paliganj', 'PAL', (SELECT id FROM districts WHERE name = 'Patna'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Barh', 'BAR', (SELECT id FROM districts WHERE name = 'Patna'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Mokama', 'MOK', (SELECT id FROM districts WHERE name = 'Patna'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Masaurhi', 'MAS', (SELECT id FROM districts WHERE name = 'Patna'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Punpun', 'PUN', (SELECT id FROM districts WHERE name = 'Patna'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Maner', 'MAN', (SELECT id FROM districts WHERE name = 'Patna'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Danapur', 'DAN', (SELECT id FROM districts WHERE name = 'Patna'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bikram', 'BIK', (SELECT id FROM districts WHERE name = 'Patna'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bakhtiyarpur', 'BAK', (SELECT id FROM districts WHERE name = 'Patna'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Pandarak', 'PAN', (SELECT id FROM districts WHERE name = 'Patna'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Fatuha', 'FAT', (SELECT id FROM districts WHERE name = 'Patna'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Daniawan', 'DANI', (SELECT id FROM districts WHERE name = 'Patna'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Khusrupur', 'KHU', (SELECT id FROM districts WHERE name = 'Patna'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Athmalgola', 'ATH', (SELECT id FROM districts WHERE name = 'Patna'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Belchhi', 'BEL', (SELECT id FROM districts WHERE name = 'Patna'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Ghoswari', 'GHO', (SELECT id FROM districts WHERE name = 'Patna'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Dulhinbazar', 'DUL', (SELECT id FROM districts WHERE name = 'Patna'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sampatchak', 'SAM', (SELECT id FROM districts WHERE name = 'Patna'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Bhojpur District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Ara Sadar', 'ARA', (SELECT id FROM districts WHERE name = 'Bhojpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Udwantnagar', 'UDW', (SELECT id FROM districts WHERE name = 'Bhojpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Jagdishpur', 'JAG', (SELECT id FROM districts WHERE name = 'Bhojpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Koilwar', 'KOI', (SELECT id FROM districts WHERE name = 'Bhojpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sahar', 'SAH', (SELECT id FROM districts WHERE name = 'Bhojpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Barhara', 'BAR', (SELECT id FROM districts WHERE name = 'Bhojpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sandesh', 'SAN', (SELECT id FROM districts WHERE name = 'Bhojpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Shahpur', 'SHA', (SELECT id FROM districts WHERE name = 'Bhojpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Charpokhari', 'CHA', (SELECT id FROM districts WHERE name = 'Bhojpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Piro', 'PIR', (SELECT id FROM districts WHERE name = 'Bhojpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Tarari', 'TAR', (SELECT id FROM districts WHERE name = 'Bhojpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bihia', 'BIH', (SELECT id FROM districts WHERE name = 'Bhojpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Agiawon', 'AGI', (SELECT id FROM districts WHERE name = 'Bhojpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Garhani', 'GAR', (SELECT id FROM districts WHERE name = 'Bhojpur'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Buxar District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Buxar', 'BUX', (SELECT id FROM districts WHERE name = 'Buxar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Dumraon', 'DUM', (SELECT id FROM districts WHERE name = 'Buxar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Simari', 'SIM', (SELECT id FROM districts WHERE name = 'Buxar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Brahmpur', 'BRA', (SELECT id FROM districts WHERE name = 'Buxar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Rajpur', 'RAJ', (SELECT id FROM districts WHERE name = 'Buxar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Itarhi', 'ITA', (SELECT id FROM districts WHERE name = 'Buxar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Nawanagar', 'NAW', (SELECT id FROM districts WHERE name = 'Buxar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Chaungain', 'CHA', (SELECT id FROM districts WHERE name = 'Buxar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Chausa', 'CHA', (SELECT id FROM districts WHERE name = 'Buxar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Chakki', 'CHK', (SELECT id FROM districts WHERE name = 'Buxar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kesath', 'KES', (SELECT id FROM districts WHERE name = 'Buxar'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Bhabhua District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Bhabhua', 'BHA', (SELECT id FROM districts WHERE name = 'Bhabhua'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Ramgarh', 'RAM', (SELECT id FROM districts WHERE name = 'Bhabhua'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Mohania', 'MOH', (SELECT id FROM districts WHERE name = 'Bhabhua'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Durgawati', 'DUR', (SELECT id FROM districts WHERE name = 'Bhabhua'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Adhaura', 'ADH', (SELECT id FROM districts WHERE name = 'Bhabhua'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bhagwanpur', 'BHA', (SELECT id FROM districts WHERE name = 'Bhabhua'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Chand', 'CHA', (SELECT id FROM districts WHERE name = 'Bhabhua'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Chainpur', 'CHA', (SELECT id FROM districts WHERE name = 'Bhabhua'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kudra', 'KUD', (SELECT id FROM districts WHERE name = 'Bhabhua'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Rampur', 'RAM', (SELECT id FROM districts WHERE name = 'Bhabhua'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Nuawon', 'NUA', (SELECT id FROM districts WHERE name = 'Bhabhua'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Rohtas District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Nauhatta', 'NAU', (SELECT id FROM districts WHERE name = 'Rohtas'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Chenari', 'CHE', (SELECT id FROM districts WHERE name = 'Rohtas'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Nasriganj', 'NAS', (SELECT id FROM districts WHERE name = 'Rohtas'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Rohtas', 'ROH', (SELECT id FROM districts WHERE name = 'Rohtas'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Shivsagar', 'SHI', (SELECT id FROM districts WHERE name = 'Rohtas'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Dawath', 'DAW', (SELECT id FROM districts WHERE name = 'Rohtas'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Karakat', 'KAR', (SELECT id FROM districts WHERE name = 'Rohtas'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Nokha', 'NOK', (SELECT id FROM districts WHERE name = 'Rohtas'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Vikramganj', 'VIK', (SELECT id FROM districts WHERE name = 'Rohtas'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kargahar', 'KAR', (SELECT id FROM districts WHERE name = 'Rohtas'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sasaram', 'SAS', (SELECT id FROM districts WHERE name = 'Rohtas'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Dihri', 'DIH', (SELECT id FROM districts WHERE name = 'Rohtas'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Dinara', 'DIN', (SELECT id FROM districts WHERE name = 'Rohtas'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kochas', 'KOC', (SELECT id FROM districts WHERE name = 'Rohtas'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Akorhigola', 'AKO', (SELECT id FROM districts WHERE name = 'Rohtas'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Rajpur', 'RAJ', (SELECT id FROM districts WHERE name = 'Rohtas'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Tilauthu', 'TIL', (SELECT id FROM districts WHERE name = 'Rohtas'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Suryapura', 'SUR', (SELECT id FROM districts WHERE name = 'Rohtas'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sanjhauli', 'SAN', (SELECT id FROM districts WHERE name = 'Rohtas'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Nalanda District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Giriyak', 'GIR', (SELECT id FROM districts WHERE name = 'Nalanda'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Rahui', 'RAH', (SELECT id FROM districts WHERE name = 'Nalanda'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Nursarai', 'NUR', (SELECT id FROM districts WHERE name = 'Nalanda'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Harnaut', 'HAR', (SELECT id FROM districts WHERE name = 'Nalanda'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Chandi', 'CHA', (SELECT id FROM districts WHERE name = 'Nalanda'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Islampur', 'ISL', (SELECT id FROM districts WHERE name = 'Nalanda'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Rajgir', 'RAJ', (SELECT id FROM districts WHERE name = 'Nalanda'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Asthawan', 'AST', (SELECT id FROM districts WHERE name = 'Nalanda'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sarmera', 'SAR', (SELECT id FROM districts WHERE name = 'Nalanda'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Hilsa', 'HIL', (SELECT id FROM districts WHERE name = 'Nalanda'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Biharsharif', 'BIH', (SELECT id FROM districts WHERE name = 'Nalanda'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Ekangarsarai', 'EKA', (SELECT id FROM districts WHERE name = 'Nalanda'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Ben', 'BEN', (SELECT id FROM districts WHERE name = 'Nalanda'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Nagarnausa', 'NAG', (SELECT id FROM districts WHERE name = 'Nalanda'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Karaiparsurai', 'KAR', (SELECT id FROM districts WHERE name = 'Nalanda'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Silao', 'SIL', (SELECT id FROM districts WHERE name = 'Nalanda'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Parwalpur', 'PAR', (SELECT id FROM districts WHERE name = 'Nalanda'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Katrisarai', 'KAT', (SELECT id FROM districts WHERE name = 'Nalanda'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bind', 'BIN', (SELECT id FROM districts WHERE name = 'Nalanda'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Tharthari', 'THA', (SELECT id FROM districts WHERE name = 'Nalanda'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Gaya District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Atri', 'ATR', (SELECT id FROM districts WHERE name = 'Gaya'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Belaganj', 'BEL', (SELECT id FROM districts WHERE name = 'Gaya'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Mohanpur', 'MOH', (SELECT id FROM districts WHERE name = 'Gaya'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Konch', 'KON', (SELECT id FROM districts WHERE name = 'Gaya'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Barachatti', 'BAR', (SELECT id FROM districts WHERE name = 'Gaya'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Manpur', 'MAN', (SELECT id FROM districts WHERE name = 'Gaya'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Gurua', 'GUR', (SELECT id FROM districts WHERE name = 'Gaya'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Tekari', 'TEK', (SELECT id FROM districts WHERE name = 'Gaya'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Imamganj', 'IMA', (SELECT id FROM districts WHERE name = 'Gaya'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Gaya Sadar', 'GAY', (SELECT id FROM districts WHERE name = 'Gaya'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Wazirganj', 'WAZ', (SELECT id FROM districts WHERE name = 'Gaya'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Fatehpur', 'FAT', (SELECT id FROM districts WHERE name = 'Gaya'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Paraiya', 'PAR', (SELECT id FROM districts WHERE name = 'Gaya'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sherghati', 'SHE', (SELECT id FROM districts WHERE name = 'Gaya'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bodh Gaya', 'BOD', (SELECT id FROM districts WHERE name = 'Gaya'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Khizarsarai', 'KHI', (SELECT id FROM districts WHERE name = 'Gaya'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Amas', 'AMA', (SELECT id FROM districts WHERE name = 'Gaya'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Dumaria', 'DUM', (SELECT id FROM districts WHERE name = 'Gaya'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bankey Bazar', 'BAN', (SELECT id FROM districts WHERE name = 'Gaya'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Dobhi', 'DOB', (SELECT id FROM districts WHERE name = 'Gaya'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Tankuppa', 'TAN', (SELECT id FROM districts WHERE name = 'Gaya'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Nimchakbathani', 'NIM', (SELECT id FROM districts WHERE name = 'Gaya'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Guraru', 'GUR', (SELECT id FROM districts WHERE name = 'Gaya'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Muhra', 'MUH', (SELECT id FROM districts WHERE name = 'Gaya'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Jehanabad District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Ghosi', 'GHO', (SELECT id FROM districts WHERE name = 'Jehanabad'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Jehanabad', 'JEH', (SELECT id FROM districts WHERE name = 'Jehanabad'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Makhdumpur', 'MAK', (SELECT id FROM districts WHERE name = 'Jehanabad'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kako', 'KAK', (SELECT id FROM districts WHERE name = 'Jehanabad'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Ratnifridpur', 'RAT', (SELECT id FROM districts WHERE name = 'Jehanabad'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Hulasganj', 'HUL', (SELECT id FROM districts WHERE name = 'Jehanabad'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Modanganj', 'MOD', (SELECT id FROM districts WHERE name = 'Jehanabad'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Nawadah District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Kauakol', 'KAU', (SELECT id FROM districts WHERE name = 'Nawadah'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Varsaliganj', 'VAR', (SELECT id FROM districts WHERE name = 'Nawadah'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Nawadah', 'NAW', (SELECT id FROM districts WHERE name = 'Nawadah'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Rajouli', 'RAJ', (SELECT id FROM districts WHERE name = 'Nawadah'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Akbarpur', 'AKB', (SELECT id FROM districts WHERE name = 'Nawadah'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Hisua', 'HIS', (SELECT id FROM districts WHERE name = 'Nawadah'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Narhat', 'NAR', (SELECT id FROM districts WHERE name = 'Nawadah'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Govindpur', 'GOV', (SELECT id FROM districts WHERE name = 'Nawadah'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Pakribarawan', 'PAK', (SELECT id FROM districts WHERE name = 'Nawadah'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sirdalla', 'SIR', (SELECT id FROM districts WHERE name = 'Nawadah'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kasichak', 'KAS', (SELECT id FROM districts WHERE name = 'Nawadah'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Roh', 'ROH', (SELECT id FROM districts WHERE name = 'Nawadah'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Nardiganj', 'NAR', (SELECT id FROM districts WHERE name = 'Nawadah'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Meskaur', 'MES', (SELECT id FROM districts WHERE name = 'Nawadah'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Aurangabad District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Madanpur', 'MAD', (SELECT id FROM districts WHERE name = 'Aurangabad'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kutumbba', 'KUT', (SELECT id FROM districts WHERE name = 'Aurangabad'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Daudnagar', 'DAU', (SELECT id FROM districts WHERE name = 'Aurangabad'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Aurangabad', 'AUR', (SELECT id FROM districts WHERE name = 'Aurangabad'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Barun', 'BAR', (SELECT id FROM districts WHERE name = 'Aurangabad'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Obra', 'OBR', (SELECT id FROM districts WHERE name = 'Aurangabad'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Dev', 'DEV', (SELECT id FROM districts WHERE name = 'Aurangabad'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Nabinagar', 'NAB', (SELECT id FROM districts WHERE name = 'Aurangabad'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Haspura', 'HAS', (SELECT id FROM districts WHERE name = 'Aurangabad'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Goh', 'GOH', (SELECT id FROM districts WHERE name = 'Aurangabad'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Rafiganj', 'RAF', (SELECT id FROM districts WHERE name = 'Aurangabad'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Arwal District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Arwal', 'ARW', (SELECT id FROM districts WHERE name = 'Arwal'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kurtha', 'KUR', (SELECT id FROM districts WHERE name = 'Arwal'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Karpi', 'KAR', (SELECT id FROM districts WHERE name = 'Arwal'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kaler', 'KAL', (SELECT id FROM districts WHERE name = 'Arwal'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sonebhadra Bansi Surjpur', 'SON', (SELECT id FROM districts WHERE name = 'Arwal'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Muzaffarpur District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Sakra', 'SAK', (SELECT id FROM districts WHERE name = 'Muzaffarpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Muraul', 'MUR', (SELECT id FROM districts WHERE name = 'Muzaffarpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Musahari', 'MUS', (SELECT id FROM districts WHERE name = 'Muzaffarpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Gayghat', 'GAY', (SELECT id FROM districts WHERE name = 'Muzaffarpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sahebganj', 'SAH', (SELECT id FROM districts WHERE name = 'Muzaffarpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kurahni', 'KUR', (SELECT id FROM districts WHERE name = 'Muzaffarpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Saraiya', 'SAR', (SELECT id FROM districts WHERE name = 'Muzaffarpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Minapur', 'MIN', (SELECT id FROM districts WHERE name = 'Muzaffarpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bochaha', 'BOC', (SELECT id FROM districts WHERE name = 'Muzaffarpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Aurai', 'AUR', (SELECT id FROM districts WHERE name = 'Muzaffarpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Katra', 'KAT', (SELECT id FROM districts WHERE name = 'Muzaffarpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kanti', 'KAN', (SELECT id FROM districts WHERE name = 'Muzaffarpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Motipur', 'MOT', (SELECT id FROM districts WHERE name = 'Muzaffarpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Paru', 'PAR', (SELECT id FROM districts WHERE name = 'Muzaffarpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bandra', 'BAN', (SELECT id FROM districts WHERE name = 'Muzaffarpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Marawan', 'MAR', (SELECT id FROM districts WHERE name = 'Muzaffarpur'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Vaishali District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Mahnar', 'MAH', (SELECT id FROM districts WHERE name = 'Vaishali'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Vaishali', 'VAI', (SELECT id FROM districts WHERE name = 'Vaishali'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bidupur', 'BID', (SELECT id FROM districts WHERE name = 'Vaishali'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Goraul', 'GOR', (SELECT id FROM districts WHERE name = 'Vaishali'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Raghopur', 'RAG', (SELECT id FROM districts WHERE name = 'Vaishali'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Lalganj', 'LAL', (SELECT id FROM districts WHERE name = 'Vaishali'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Hazipur', 'HAZ', (SELECT id FROM districts WHERE name = 'Vaishali'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Mahua', 'MAH', (SELECT id FROM districts WHERE name = 'Vaishali'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Jandaha', 'JAN', (SELECT id FROM districts WHERE name = 'Vaishali'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Patepur', 'PAT', (SELECT id FROM districts WHERE name = 'Vaishali'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sahdeibuzurg', 'SAH', (SELECT id FROM districts WHERE name = 'Vaishali'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Razapakar', 'RAZ', (SELECT id FROM districts WHERE name = 'Vaishali'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bhagwanpur', 'BHA', (SELECT id FROM districts WHERE name = 'Vaishali'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Chehrakala', 'CHE', (SELECT id FROM districts WHERE name = 'Vaishali'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Patedhi-Belshar', 'PAT', (SELECT id FROM districts WHERE name = 'Vaishali'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Desari', 'DES', (SELECT id FROM districts WHERE name = 'Vaishali'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- W.Champaran District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Bettiah', 'BET', (SELECT id FROM districts WHERE name = 'W.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sikta', 'SIK', (SELECT id FROM districts WHERE name = 'W.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Mainatand', 'MAI', (SELECT id FROM districts WHERE name = 'W.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Chanpattia', 'CHA', (SELECT id FROM districts WHERE name = 'W.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bairia', 'BAI', (SELECT id FROM districts WHERE name = 'W.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Lauria', 'LAU', (SELECT id FROM districts WHERE name = 'W.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bagaha - 1', 'BAG', (SELECT id FROM districts WHERE name = 'W.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bagaha - 2', 'BAG', (SELECT id FROM districts WHERE name = 'W.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Madhubani', 'MAD', (SELECT id FROM districts WHERE name = 'W.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Gaunaha', 'GAU', (SELECT id FROM districts WHERE name = 'W.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Narkatiaganj', 'NAR', (SELECT id FROM districts WHERE name = 'W.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Manjhaulia', 'MAN', (SELECT id FROM districts WHERE name = 'W.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Nautan', 'NAU', (SELECT id FROM districts WHERE name = 'W.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Jogapatti', 'JOG', (SELECT id FROM districts WHERE name = 'W.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Ramnagar', 'RAM', (SELECT id FROM districts WHERE name = 'W.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Thakraha', 'THA', (SELECT id FROM districts WHERE name = 'W.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bhitaha', 'BHI', (SELECT id FROM districts WHERE name = 'W.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Piprasi', 'PIP', (SELECT id FROM districts WHERE name = 'W.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- E.Champaran District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Kesharia', 'KES', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kalyanpur', 'KAL', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Motihari', 'MOT', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sugauli', 'SUG', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Harsiddhi', 'HAR', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Pakridayal', 'PAK', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Maheshi', 'MAE', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Adapur', 'ADA', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Chiraian', 'CHI', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Paharpur', 'PAH', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Raxaul', 'RAX', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Turkaulia', 'TUR', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Areraj', 'ARE', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Ramgarhwa', 'RAM', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Ghorasahan', 'GHO', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Madhuban', 'MAD', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Chakai', 'CHA', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Patahi', 'PAT', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Dhakha', 'DHA', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sangrampur', 'SAN', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Phenhara', 'PHE', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Tetaria', 'TET', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Vankatwa', 'VAN', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kotwa', 'KOT', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Banjaria', 'BAN', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Piprakothi', 'PIP', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Chhauradano', 'CHH', (SELECT id FROM districts WHERE name = 'E.Champaran'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Sitamarhi District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Bathnaha', 'BAT', (SELECT id FROM districts WHERE name = 'Sitamarhi'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Parihar', 'PAR', (SELECT id FROM districts WHERE name = 'Sitamarhi'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Nanpur', 'NAN', (SELECT id FROM districts WHERE name = 'Sitamarhi'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bazpatti', 'BAZ', (SELECT id FROM districts WHERE name = 'Sitamarhi'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bairgania', 'BAI', (SELECT id FROM districts WHERE name = 'Sitamarhi'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Belsand', 'BEL', (SELECT id FROM districts WHERE name = 'Sitamarhi'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Riga', 'RIG', (SELECT id FROM districts WHERE name = 'Sitamarhi'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sursand', 'SUR', (SELECT id FROM districts WHERE name = 'Sitamarhi'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Pupri', 'PUP', (SELECT id FROM districts WHERE name = 'Sitamarhi'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sonbarsa', 'SON', (SELECT id FROM districts WHERE name = 'Sitamarhi'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Dumra', 'DUM', (SELECT id FROM districts WHERE name = 'Sitamarhi'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Runni saidpur', 'RUN', (SELECT id FROM districts WHERE name = 'Sitamarhi'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Majorganj', 'MAJ', (SELECT id FROM districts WHERE name = 'Sitamarhi'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Suppi', 'SUP', (SELECT id FROM districts WHERE name = 'Sitamarhi'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Parsauni', 'PAR', (SELECT id FROM districts WHERE name = 'Sitamarhi'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bokhra', 'BOK', (SELECT id FROM districts WHERE name = 'Sitamarhi'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Chorout', 'CHO', (SELECT id FROM districts WHERE name = 'Sitamarhi'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Sheohar District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Sheohar', 'SHE', (SELECT id FROM districts WHERE name = 'Sheohar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Tariyani', 'TAR', (SELECT id FROM districts WHERE name = 'Sheohar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Piprahi', 'PIP', (SELECT id FROM districts WHERE name = 'Sheohar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Dumrikatsari', 'DUM', (SELECT id FROM districts WHERE name = 'Sheohar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Puranhia', 'PUR', (SELECT id FROM districts WHERE name = 'Sheohar'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Saran District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Chapra', 'CHA', (SELECT id FROM districts WHERE name = 'Saran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Manjhi', 'MAN', (SELECT id FROM districts WHERE name = 'Saran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Dighwara', 'DIG', (SELECT id FROM districts WHERE name = 'Saran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Rivilganj', 'RIV', (SELECT id FROM districts WHERE name = 'Saran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Parsa', 'PAR', (SELECT id FROM districts WHERE name = 'Saran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Baniapur', 'BAN', (SELECT id FROM districts WHERE name = 'Saran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Amnaur', 'AMN', (SELECT id FROM districts WHERE name = 'Saran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Taraiya', 'TAR', (SELECT id FROM districts WHERE name = 'Saran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sonepur', 'SON', (SELECT id FROM districts WHERE name = 'Saran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Garkha', 'GAR', (SELECT id FROM districts WHERE name = 'Saran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Ekma', 'EKM', (SELECT id FROM districts WHERE name = 'Saran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Dariyapur', 'DAR', (SELECT id FROM districts WHERE name = 'Saran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Jalalpur', 'JAL', (SELECT id FROM districts WHERE name = 'Saran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Marhaura', 'MAR', (SELECT id FROM districts WHERE name = 'Saran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Masarakh', 'MAS', (SELECT id FROM districts WHERE name = 'Saran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Maker', 'MAK', (SELECT id FROM districts WHERE name = 'Saran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Nagra', 'NAG', (SELECT id FROM districts WHERE name = 'Saran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Panapur', 'PAN', (SELECT id FROM districts WHERE name = 'Saran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Eisuapur', 'EIS', (SELECT id FROM districts WHERE name = 'Saran'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Lahladpur Jantabazar', 'LAH', (SELECT id FROM districts WHERE name = 'Saran'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Siwan District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Pachrukhi', 'PAC', (SELECT id FROM districts WHERE name = 'Siwan'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Raghunathpur', 'RAG', (SELECT id FROM districts WHERE name = 'Siwan'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Mairwan', 'MAI', (SELECT id FROM districts WHERE name = 'Siwan'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Aandar', 'AAN', (SELECT id FROM districts WHERE name = 'Siwan'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Guthani', 'GUT', (SELECT id FROM districts WHERE name = 'Siwan'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Maharajganj', 'MAH', (SELECT id FROM districts WHERE name = 'Siwan'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Darauli', 'DAR', (SELECT id FROM districts WHERE name = 'Siwan'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Siswan', 'SIS', (SELECT id FROM districts WHERE name = 'Siwan'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Daraunda', 'DAR', (SELECT id FROM districts WHERE name = 'Siwan'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Husainaganj', 'HUS', (SELECT id FROM districts WHERE name = 'Siwan'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bhagwanpur Hat', 'BHA', (SELECT id FROM districts WHERE name = 'Siwan'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Goriyakothi', 'GOR', (SELECT id FROM districts WHERE name = 'Siwan'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Baraharia', 'BAR', (SELECT id FROM districts WHERE name = 'Siwan'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Siwan Sadar', 'SIW', (SELECT id FROM districts WHERE name = 'Siwan'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Basantpur', 'BAS', (SELECT id FROM districts WHERE name = 'Siwan'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Lakari Nabiganj', 'LAK', (SELECT id FROM districts WHERE name = 'Siwan'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Jiradei', 'JIR', (SELECT id FROM districts WHERE name = 'Siwan'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Nautan', 'NAU', (SELECT id FROM districts WHERE name = 'Siwan'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Hasanpur', 'HAS', (SELECT id FROM districts WHERE name = 'Siwan'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Gopalganj District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Bhore', 'BHO', (SELECT id FROM districts WHERE name = 'Gopalganj'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Gopalganj', 'GOP', (SELECT id FROM districts WHERE name = 'Gopalganj'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Manjha', 'MAN', (SELECT id FROM districts WHERE name = 'Gopalganj'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Uchakagaon', 'UCH', (SELECT id FROM districts WHERE name = 'Gopalganj'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kuchaikot', 'KUC', (SELECT id FROM districts WHERE name = 'Gopalganj'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kateya', 'KAT', (SELECT id FROM districts WHERE name = 'Gopalganj'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Vijayeepur', 'VIJ', (SELECT id FROM districts WHERE name = 'Gopalganj'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Barauli', 'BAR', (SELECT id FROM districts WHERE name = 'Gopalganj'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Hathua', 'HAT', (SELECT id FROM districts WHERE name = 'Gopalganj'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Baikunthpur', 'BAI', (SELECT id FROM districts WHERE name = 'Gopalganj'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Phulwaria', 'PHU', (SELECT id FROM districts WHERE name = 'Gopalganj'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Thawe', 'THA', (SELECT id FROM districts WHERE name = 'Gopalganj'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Panchdevari', 'PAN', (SELECT id FROM districts WHERE name = 'Gopalganj'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sindhwalia', 'SIN', (SELECT id FROM districts WHERE name = 'Gopalganj'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Darbhanga District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Bahadurpur', 'BAH', (SELECT id FROM districts WHERE name = 'Darbhanga'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Jale', 'JAL', (SELECT id FROM districts WHERE name = 'Darbhanga'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Hayaghat', 'HAY', (SELECT id FROM districts WHERE name = 'Darbhanga'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Singhwara', 'SIN', (SELECT id FROM districts WHERE name = 'Darbhanga'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Benipur', 'BEN', (SELECT id FROM districts WHERE name = 'Darbhanga'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Ghanshyampur', 'GHA', (SELECT id FROM districts WHERE name = 'Darbhanga'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Baheri', 'BAH', (SELECT id FROM districts WHERE name = 'Darbhanga'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kewati', 'KEW', (SELECT id FROM districts WHERE name = 'Darbhanga'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Manigachhi', 'MAN', (SELECT id FROM districts WHERE name = 'Darbhanga'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Darbhanga', 'DAR', (SELECT id FROM districts WHERE name = 'Darbhanga'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Biraul', 'BIR', (SELECT id FROM districts WHERE name = 'Darbhanga'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kusheswarsthan', 'KUS', (SELECT id FROM districts WHERE name = 'Darbhanga'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Alinagar', 'ALI', (SELECT id FROM districts WHERE name = 'Darbhanga'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kusheswarsthan East', 'KUS', (SELECT id FROM districts WHERE name = 'Darbhanga'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Gaura Vauram', 'GAU', (SELECT id FROM districts WHERE name = 'Darbhanga'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kiratpur', 'KIR', (SELECT id FROM districts WHERE name = 'Darbhanga'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Tardih', 'TAR', (SELECT id FROM districts WHERE name = 'Darbhanga'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('HanumanNagar', 'HAN', (SELECT id FROM districts WHERE name = 'Darbhanga'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Madhubani District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Jainagar', 'JAI', (SELECT id FROM districts WHERE name = 'Madhubani'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Pandaul', 'PAN', (SELECT id FROM districts WHERE name = 'Madhubani'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Rahika', 'RAH', (SELECT id FROM districts WHERE name = 'Madhubani'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bisfi', 'BIS', (SELECT id FROM districts WHERE name = 'Madhubani'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Benipatti', 'BEN', (SELECT id FROM districts WHERE name = 'Madhubani'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Basopatti', 'BAS', (SELECT id FROM districts WHERE name = 'Madhubani'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Babubarhi', 'BAB', (SELECT id FROM districts WHERE name = 'Madhubani'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Rajnagar', 'RAJ', (SELECT id FROM districts WHERE name = 'Madhubani'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Madhepur', 'MAD', (SELECT id FROM districts WHERE name = 'Madhubani'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Khutauna', 'KHU', (SELECT id FROM districts WHERE name = 'Madhubani'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Khajauli', 'KHA', (SELECT id FROM districts WHERE name = 'Madhubani'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Jhanjharpur', 'JHA', (SELECT id FROM districts WHERE name = 'Madhubani'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Ghoghardiha', 'GHO', (SELECT id FROM districts WHERE name = 'Madhubani'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Ladania', 'LAD', (SELECT id FROM districts WHERE name = 'Madhubani'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Madhwapur', 'MAD', (SELECT id FROM districts WHERE name = 'Madhubani'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Harlakhi', 'HAR', (SELECT id FROM districts WHERE name = 'Madhubani'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Laukahi', 'LAU', (SELECT id FROM districts WHERE name = 'Madhubani'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Andharatharhi', 'AND', (SELECT id FROM districts WHERE name = 'Madhubani'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Lakhnaur', 'LAK', (SELECT id FROM districts WHERE name = 'Madhubani'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Phulparas', 'PHU', (SELECT id FROM districts WHERE name = 'Madhubani'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kaluahi', 'KAL', (SELECT id FROM districts WHERE name = 'Madhubani'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Samastipur District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Jitwarpur', 'JIT', (SELECT id FROM districts WHERE name = 'Samastipur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kalyanpur', 'KAL', (SELECT id FROM districts WHERE name = 'Samastipur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Warisnagar', 'WAR', (SELECT id FROM districts WHERE name = 'Samastipur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Rosara', 'ROS', (SELECT id FROM districts WHERE name = 'Samastipur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Tajpur Morwa', 'TAJ', (SELECT id FROM districts WHERE name = 'Samastipur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Patori', 'PAT', (SELECT id FROM districts WHERE name = 'Samastipur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sarairanjan', 'SAR', (SELECT id FROM districts WHERE name = 'Samastipur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Pusa', 'PUS', (SELECT id FROM districts WHERE name = 'Samastipur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Ujiyarpur', 'UJI', (SELECT id FROM districts WHERE name = 'Samastipur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Dalsinghsarai', 'DAL', (SELECT id FROM districts WHERE name = 'Samastipur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Singhia', 'SIN', (SELECT id FROM districts WHERE name = 'Samastipur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Hasanpur', 'HAS', (SELECT id FROM districts WHERE name = 'Samastipur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Mohiuddinnagar', 'MOH', (SELECT id FROM districts WHERE name = 'Samastipur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bibhutipur', 'BIB', (SELECT id FROM districts WHERE name = 'Samastipur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bithan', 'BIT', (SELECT id FROM districts WHERE name = 'Samastipur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Tajpur', 'TAJ', (SELECT id FROM districts WHERE name = 'Samastipur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Shivajinagar', 'SHI', (SELECT id FROM districts WHERE name = 'Samastipur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Vidyapatinagar', 'VID', (SELECT id FROM districts WHERE name = 'Samastipur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Khanpur', 'KHA', (SELECT id FROM districts WHERE name = 'Samastipur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Mohanpur', 'MOH', (SELECT id FROM districts WHERE name = 'Samastipur'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Munger District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Haveli kharagpur', 'HAV', (SELECT id FROM districts WHERE name = 'Munger'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Dharhara', 'DHA', (SELECT id FROM districts WHERE name = 'Munger'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Munger', 'MUN', (SELECT id FROM districts WHERE name = 'Munger'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Jamalpur', 'JAM', (SELECT id FROM districts WHERE name = 'Munger'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Tarapur', 'TAR', (SELECT id FROM districts WHERE name = 'Munger'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sangrampur', 'SAN', (SELECT id FROM districts WHERE name = 'Munger'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bariarpur', 'BAR', (SELECT id FROM districts WHERE name = 'Munger'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Tetiabamber', 'TET', (SELECT id FROM districts WHERE name = 'Munger'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Asarganj', 'ASA', (SELECT id FROM districts WHERE name = 'Munger'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Lakhisarai District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Halsi', 'HAL', (SELECT id FROM districts WHERE name = 'Lakhisarai'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Lakhisarai', 'LAK', (SELECT id FROM districts WHERE name = 'Lakhisarai'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Barahia', 'BAR', (SELECT id FROM districts WHERE name = 'Lakhisarai'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Suryagarha', 'SUR', (SELECT id FROM districts WHERE name = 'Lakhisarai'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Piparia', 'PIP', (SELECT id FROM districts WHERE name = 'Lakhisarai'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Raigarh Chowk', 'RAI', (SELECT id FROM districts WHERE name = 'Lakhisarai'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Chanan Banu Bagicha', 'CHA', (SELECT id FROM districts WHERE name = 'Lakhisarai'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Sheikhpura District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Ariari', 'ARI', (SELECT id FROM districts WHERE name = 'Sheikhpura'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sheikpura', 'SHE', (SELECT id FROM districts WHERE name = 'Sheikhpura'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Barbigha', 'BAR', (SELECT id FROM districts WHERE name = 'Sheikhpura'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Ghatkusumba', 'GHA', (SELECT id FROM districts WHERE name = 'Sheikhpura'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Chebara', 'CHE', (SELECT id FROM districts WHERE name = 'Sheikhpura'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Shekhopur Sarai', 'SHE', (SELECT id FROM districts WHERE name = 'Sheikhpura'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Begusarai District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Bhagawanpur', 'BHA', (SELECT id FROM districts WHERE name = 'Begusarai'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Teghra', 'TEG', (SELECT id FROM districts WHERE name = 'Begusarai'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bakhri', 'BAK', (SELECT id FROM districts WHERE name = 'Begusarai'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Begusarai', 'BEG', (SELECT id FROM districts WHERE name = 'Begusarai'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Barauni', 'BAR', (SELECT id FROM districts WHERE name = 'Begusarai'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bachwara', 'BAC', (SELECT id FROM districts WHERE name = 'Begusarai'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Cheria Bariyarpur', 'CHE', (SELECT id FROM districts WHERE name = 'Begusarai'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Balia', 'BAL', (SELECT id FROM districts WHERE name = 'Begusarai'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Khodabandpur', 'KHO', (SELECT id FROM districts WHERE name = 'Begusarai'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sahebpur Kamal', 'SAH', (SELECT id FROM districts WHERE name = 'Begusarai'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Matihani', 'MAT', (SELECT id FROM districts WHERE name = 'Begusarai'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Garhpura', 'GAR', (SELECT id FROM districts WHERE name = 'Begusarai'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Navkothi', 'NAV', (SELECT id FROM districts WHERE name = 'Begusarai'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Birpur', 'BIR', (SELECT id FROM districts WHERE name = 'Begusarai'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Mansurchak', 'MAN', (SELECT id FROM districts WHERE name = 'Begusarai'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Chhourahi', 'CHH', (SELECT id FROM districts WHERE name = 'Begusarai'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Dandari', 'DAN', (SELECT id FROM districts WHERE name = 'Begusarai'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Samho-Akaha-Kurha', 'SAM', (SELECT id FROM districts WHERE name = 'Begusarai'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Jamui District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Jamui', 'JAM', (SELECT id FROM districts WHERE name = 'Jamui'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Chakai', 'CHA', (SELECT id FROM districts WHERE name = 'Jamui'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Laxmipur', 'LAX', (SELECT id FROM districts WHERE name = 'Jamui'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Jhajha', 'JHA', (SELECT id FROM districts WHERE name = 'Jamui'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sono', 'SON', (SELECT id FROM districts WHERE name = 'Jamui'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Khaira', 'KHA', (SELECT id FROM districts WHERE name = 'Jamui'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sikandra', 'SIK', (SELECT id FROM districts WHERE name = 'Jamui'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Barhat', 'BAR', (SELECT id FROM districts WHERE name = 'Jamui'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Asalmanagar Aliganj', 'ASA', (SELECT id FROM districts WHERE name = 'Jamui'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Gidhaur', 'GID', (SELECT id FROM districts WHERE name = 'Jamui'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Khagaria District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Gogari', 'GOG', (SELECT id FROM districts WHERE name = 'Khagaria'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Parwatta', 'PAR', (SELECT id FROM districts WHERE name = 'Khagaria'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Khagaria', 'KHA', (SELECT id FROM districts WHERE name = 'Khagaria'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Alauli', 'ALA', (SELECT id FROM districts WHERE name = 'Khagaria'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Chautham', 'CHA', (SELECT id FROM districts WHERE name = 'Khagaria'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Beldaur', 'BEL', (SELECT id FROM districts WHERE name = 'Khagaria'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Mansi', 'MAN', (SELECT id FROM districts WHERE name = 'Khagaria'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Bhagalpur District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Pirpainti', 'PIR', (SELECT id FROM districts WHERE name = 'Bhagalpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kahalgoan', 'KAH', (SELECT id FROM districts WHERE name = 'Bhagalpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sanhaula', 'SAN', (SELECT id FROM districts WHERE name = 'Bhagalpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sabour', 'SAB', (SELECT id FROM districts WHERE name = 'Bhagalpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Nathnagar', 'NAT', (SELECT id FROM districts WHERE name = 'Bhagalpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Jagdishpur', 'JAG', (SELECT id FROM districts WHERE name = 'Bhagalpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sultanganj', 'SUL', (SELECT id FROM districts WHERE name = 'Bhagalpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sahkund', 'SAH', (SELECT id FROM districts WHERE name = 'Bhagalpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bihpur', 'BIH', (SELECT id FROM districts WHERE name = 'Bhagalpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Navgachia', 'NAV', (SELECT id FROM districts WHERE name = 'Bhagalpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Gopalpur', 'GOP', (SELECT id FROM districts WHERE name = 'Bhagalpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kharik', 'KHA', (SELECT id FROM districts WHERE name = 'Bhagalpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Narayanpur', 'NAR', (SELECT id FROM districts WHERE name = 'Bhagalpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Gauradih', 'GAU', (SELECT id FROM districts WHERE name = 'Bhagalpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Ismailpur', 'ISM', (SELECT id FROM districts WHERE name = 'Bhagalpur'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Rangrachowk', 'RAN', (SELECT id FROM districts WHERE name = 'Bhagalpur'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Banka District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Banka', 'BAN', (SELECT id FROM districts WHERE name = 'Banka'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Rajon', 'RAJ', (SELECT id FROM districts WHERE name = 'Banka'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Amarpur', 'AMA', (SELECT id FROM districts WHERE name = 'Banka'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Dhoraiya', 'DHO', (SELECT id FROM districts WHERE name = 'Banka'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Katoria', 'KAT', (SELECT id FROM districts WHERE name = 'Banka'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bausi', 'BAU', (SELECT id FROM districts WHERE name = 'Banka'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Shambhuganj', 'SHA', (SELECT id FROM districts WHERE name = 'Banka'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Barahat', 'BAR', (SELECT id FROM districts WHERE name = 'Banka'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Belhar', 'BEL', (SELECT id FROM districts WHERE name = 'Banka'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Chandan', 'CHA', (SELECT id FROM districts WHERE name = 'Banka'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Phulidumar', 'PHU', (SELECT id FROM districts WHERE name = 'Banka'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Saharsa District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Nauhatta', 'NAU', (SELECT id FROM districts WHERE name = 'Saharsa'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Simari bakhatiyarpur', 'SIM', (SELECT id FROM districts WHERE name = 'Saharsa'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Salkhua', 'SAL', (SELECT id FROM districts WHERE name = 'Saharsa'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kahra', 'KAH', (SELECT id FROM districts WHERE name = 'Saharsa'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Mahishi', 'MAH', (SELECT id FROM districts WHERE name = 'Saharsa'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sonbarsa', 'SON', (SELECT id FROM districts WHERE name = 'Saharsa'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Saurbazar', 'SAU', (SELECT id FROM districts WHERE name = 'Saharsa'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Patarghat', 'PAT', (SELECT id FROM districts WHERE name = 'Saharsa'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sattar Kateya', 'SAT', (SELECT id FROM districts WHERE name = 'Saharsa'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Banma Itahari', 'BAN', (SELECT id FROM districts WHERE name = 'Saharsa'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Madhepura District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Madhepura', 'MAD', (SELECT id FROM districts WHERE name = 'Madhepura'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sigheshwarsthan', 'SIG', (SELECT id FROM districts WHERE name = 'Madhepura'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Murliganj', 'MUR', (SELECT id FROM districts WHERE name = 'Madhepura'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Chausa', 'CHA', (SELECT id FROM districts WHERE name = 'Madhepura'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kumarkhand', 'KUM', (SELECT id FROM districts WHERE name = 'Madhepura'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Alamnagar', 'ALA', (SELECT id FROM districts WHERE name = 'Madhepura'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Udakishanganj', 'UDA', (SELECT id FROM districts WHERE name = 'Madhepura'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Shankarpur', 'SHA', (SELECT id FROM districts WHERE name = 'Madhepura'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Gwalpara', 'GWA', (SELECT id FROM districts WHERE name = 'Madhepura'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bihariganj', 'BIH', (SELECT id FROM districts WHERE name = 'Madhepura'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Puraini', 'PUR', (SELECT id FROM districts WHERE name = 'Madhepura'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Dhelarh', 'DHE', (SELECT id FROM districts WHERE name = 'Madhepura'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Gamharia', 'GAM', (SELECT id FROM districts WHERE name = 'Madhepura'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Supaul District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Supaul', 'SUP', (SELECT id FROM districts WHERE name = 'Supaul'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Triveniganj', 'TRI', (SELECT id FROM districts WHERE name = 'Supaul'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Pipara', 'PIP', (SELECT id FROM districts WHERE name = 'Supaul'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Marauna', 'MAR', (SELECT id FROM districts WHERE name = 'Supaul'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kishunpur', 'KIS', (SELECT id FROM districts WHERE name = 'Supaul'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Raghopur', 'RAG', (SELECT id FROM districts WHERE name = 'Supaul'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Nirmali', 'NIR', (SELECT id FROM districts WHERE name = 'Supaul'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Basantpur', 'BAS', (SELECT id FROM districts WHERE name = 'Supaul'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Chhatapur', 'CHA', (SELECT id FROM districts WHERE name = 'Supaul'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Saraigarh Bhaptiyahi', 'SAR', (SELECT id FROM districts WHERE name = 'Supaul'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Pratapganj', 'PRA', (SELECT id FROM districts WHERE name = 'Supaul'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Purnia District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Purnia', 'PUR', (SELECT id FROM districts WHERE name = 'Purnia'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Amaur', 'AMA', (SELECT id FROM districts WHERE name = 'Purnia'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bhawanipur', 'BHA', (SELECT id FROM districts WHERE name = 'Purnia'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Banmankhi', 'BAN', (SELECT id FROM districts WHERE name = 'Purnia'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Dhamdaha', 'DHA', (SELECT id FROM districts WHERE name = 'Purnia'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Baisa', 'BAI', (SELECT id FROM districts WHERE name = 'Purnia'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Vaisi', 'VAI', (SELECT id FROM districts WHERE name = 'Purnia'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Barharakothi', 'BAR', (SELECT id FROM districts WHERE name = 'Purnia'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Kishanganj District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Kishanganj', 'KIS', (SELECT id FROM districts WHERE name = 'Kishanganj'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kochadhaman', 'KOC', (SELECT id FROM districts WHERE name = 'Kishanganj'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bahadurganj', 'BAH', (SELECT id FROM districts WHERE name = 'Kishanganj'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Terhagachhi', 'TER', (SELECT id FROM districts WHERE name = 'Kishanganj'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Dighalbank', 'DIG', (SELECT id FROM districts WHERE name = 'Kishanganj'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Thakurganj', 'THA', (SELECT id FROM districts WHERE name = 'Kishanganj'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Pothia', 'POT', (SELECT id FROM districts WHERE name = 'Kishanganj'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Katihar District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Katihar', 'KAT', (SELECT id FROM districts WHERE name = 'Katihar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Warsoi', 'WAR', (SELECT id FROM districts WHERE name = 'Katihar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kadwa', 'KAD', (SELECT id FROM districts WHERE name = 'Katihar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Amdabad', 'AMD', (SELECT id FROM districts WHERE name = 'Katihar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Manihari', 'MAN', (SELECT id FROM districts WHERE name = 'Katihar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Balrampur', 'BAL', (SELECT id FROM districts WHERE name = 'Katihar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Korha', 'KOR', (SELECT id FROM districts WHERE name = 'Katihar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Falka', 'FAL', (SELECT id FROM districts WHERE name = 'Katihar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Alamnagar', 'ALA', (SELECT id FROM districts WHERE name = 'Katihar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Barari', 'BAR', (SELECT id FROM districts WHERE name = 'Katihar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Pranpur', 'PRA', (SELECT id FROM districts WHERE name = 'Katihar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Mansahi', 'MAN', (SELECT id FROM districts WHERE name = 'Katihar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Samaili', 'SAM', (SELECT id FROM districts WHERE name = 'Katihar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kursaila', 'KUR', (SELECT id FROM districts WHERE name = 'Katihar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Hasanganj', 'HAS', (SELECT id FROM districts WHERE name = 'Katihar'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Dandkhora', 'DAN', (SELECT id FROM districts WHERE name = 'Katihar'), @bihar_id, 1, 1, 1, NOW(), NOW());

-- Araria District
INSERT INTO blocks (name, code, district_id, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Araria', 'ARA', (SELECT id FROM districts WHERE name = 'Araria'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Raniganj', 'RAN', (SELECT id FROM districts WHERE name = 'Araria'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Bharganwan', 'BHA', (SELECT id FROM districts WHERE name = 'Araria'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Kursakata', 'KUR', (SELECT id FROM districts WHERE name = 'Araria'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Sikti', 'SIK', (SELECT id FROM districts WHERE name = 'Araria'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Narpatganj', 'NAR', (SELECT id FROM districts WHERE name = 'Araria'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Farbisganj', 'FAR', (SELECT id FROM districts WHERE name = 'Araria'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Palasi', 'PAL', (SELECT id FROM districts WHERE name = 'Araria'), @bihar_id, 1, 1, 1, NOW(), NOW()),
('Jokihat', 'JOK', (SELECT id FROM districts WHERE name = 'Araria'), @bihar_id, 1, 1, 1, NOW(), NOW());
