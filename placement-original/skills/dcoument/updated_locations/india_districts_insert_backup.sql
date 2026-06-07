-- SQL INSERT Commands for All Indian Districts
-- This file contains INSERT statements to populate the districts table with all districts of India
-- state_id is looked up by name

SET @india_id = (SELECT id FROM countries WHERE name = 'India');

-- Andhra Pradesh (26 districts)
SET @andhra_pradesh_id = (SELECT id FROM states WHERE name = 'Andhra Pradesh');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Alluri Sitharama Raju', 'ASR', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Anakapalli', 'ANA', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Ananthapuramu', 'ANP', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Annamayya', 'ANN', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Bapatla', 'BAP', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Chittoor', 'CHI', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Dr. B.R. Ambedkar Konaseema', 'DBK', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('East Godavari', 'EGO', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Eluru', 'ELU', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Guntur', 'GUN', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kakinada', 'KAK', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Krishna', 'KRI', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kurnool', 'KUR', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Nandyal', 'NAN', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Nellore', 'NEL', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('NTR', 'NTR', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Palnadu', 'PAL', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Parvathipuram Manyam', 'PAM', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Prakasam', 'PRA', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Srikakulam', 'SRI', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Sri Sathya Sai', 'SSS', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Tirupati', 'TIR', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Visakhapatnam', 'VIS', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Vizianagaram', 'VIZ', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('West Godavari', 'WGO', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW()),
('YSR Kadapa', 'YSK', @andhra_pradesh_id, 1, 1, 1, NOW(), NOW());

-- Arunachal Pradesh (27 districts)
SET @arunachal_pradesh_id = (SELECT id FROM states WHERE name = 'Arunachal Pradesh');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Anjaw', 'ANJ', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Changlang', 'CHA', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('East Kameng', 'EKA', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('East Siang', 'ESI', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kamle', 'KAM', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kra Daadi', 'KDD', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kurung Kumey', 'KKU', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Lepa Rada', 'LRA', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Lohit', 'LOH', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Longding', 'LON', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Lower Dibang Valley', 'LDV', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Lower Siang', 'LSI', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Lower Subansiri', 'LSU', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Namsai', 'NAM', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Pakke-Kessang', 'PKE', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Papum Pare', 'PPA', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Shi Yomi', 'SYO', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Siang', 'SIA', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Tawang', 'TAW', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Tirap', 'TIR', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Upper Dibang Valley', 'UDV', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Upper Siang', 'USI', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Upper Subansiri', 'USU', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('West Kameng', 'WKA', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('West Siang', 'WSI', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Keyi Panyor', 'KPA', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Bichom', 'BIC', @arunachal_pradesh_id, 1, 1, 1, NOW(), NOW());

-- Assam (35 districts)
SET @assam_id = (SELECT id FROM states WHERE name = 'Assam');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Baksa', 'BAK', @assam_id, 1, 1, 1, NOW(), NOW()),
('Bajali', 'BAJ', @assam_id, 1, 1, 1, NOW(), NOW()),
('Barpeta', 'BAR', @assam_id, 1, 1, 1, NOW(), NOW()),
('Biswanath', 'BIS', @assam_id, 1, 1, 1, NOW(), NOW()),
('Bongaigaon', 'BON', @assam_id, 1, 1, 1, NOW(), NOW()),
('Cachar', 'CAC', @assam_id, 1, 1, 1, NOW(), NOW()),
('Charaideo', 'CHD', @assam_id, 1, 1, 1, NOW(), NOW()),
('Chirang', 'CHI', @assam_id, 1, 1, 1, NOW(), NOW()),
('Darrang', 'DAR', @assam_id, 1, 1, 1, NOW(), NOW()),
('Dhemaji', 'DHE', @assam_id, 1, 1, 1, NOW(), NOW()),
('Dhubri', 'DHU', @assam_id, 1, 1, 1, NOW(), NOW()),
('Dibrugarh', 'DIB', @assam_id, 1, 1, 1, NOW(), NOW()),
('Dima Hasao', 'DHA', @assam_id, 1, 1, 1, NOW(), NOW()),
('Goalpara', 'GOA', @assam_id, 1, 1, 1, NOW(), NOW()),
('Golaghat', 'GOL', @assam_id, 1, 1, 1, NOW(), NOW()),
('Hailakandi', 'HAI', @assam_id, 1, 1, 1, NOW(), NOW()),
('Hojai', 'HOJ', @assam_id, 1, 1, 1, NOW(), NOW()),
('Jorhat', 'JOR', @assam_id, 1, 1, 1, NOW(), NOW()),
('Kamrup', 'KAM', @assam_id, 1, 1, 1, NOW(), NOW()),
('Kamrup Metropolitan', 'KME', @assam_id, 1, 1, 1, NOW(), NOW()),
('Karbi Anglong', 'KAN', @assam_id, 1, 1, 1, NOW(), NOW()),
('Karimganj', 'KAR', @assam_id, 1, 1, 1, NOW(), NOW()),
('Kokrajhar', 'KOK', @assam_id, 1, 1, 1, NOW(), NOW()),
('Lakhimpur', 'LAK', @assam_id, 1, 1, 1, NOW(), NOW()),
('Majuli', 'MAJ', @assam_id, 1, 1, 1, NOW(), NOW()),
('Morigaon', 'MOR', @assam_id, 1, 1, 1, NOW(), NOW()),
('Nagaon', 'NAG', @assam_id, 1, 1, 1, NOW(), NOW()),
('Nalbari', 'NAL', @assam_id, 1, 1, 1, NOW(), NOW()),
('Sivasagar', 'SIV', @assam_id, 1, 1, 1, NOW(), NOW()),
('Sonitpur', 'SON', @assam_id, 1, 1, 1, NOW(), NOW()),
('South Salmara-Mankachar', 'SSM', @assam_id, 1, 1, 1, NOW(), NOW()),
('Tamulpur', 'TAM', @assam_id, 1, 1, 1, NOW(), NOW()),
('Tinsukia', 'TIN', @assam_id, 1, 1, 1, NOW(), NOW()),
('Udalguri', 'UDA', @assam_id, 1, 1, 1, NOW(), NOW()),
('West Karbi Anglong', 'WKA', @assam_id, 1, 1, 1, NOW(), NOW());

-- Bihar (38 districts)
SET @bihar_id = (SELECT id FROM states WHERE name = 'Bihar');

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
('Nawada', 'NAW', @bihar_id, 1, 1, 1, NOW(), NOW()),
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

-- Chhattisgarh (33 districts)
SET @chhattisgarh_id = (SELECT id FROM states WHERE name = 'Chhattisgarh');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Balod', 'BAL', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Baloda Bazar', 'BBZ', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Balrampur-Ramanujganj', 'BRG', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Bastar', 'BAS', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Bemetara', 'BEM', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Bijapur', 'BIJ', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Bilaspur', 'BIL', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Dantewada', 'DAN', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Dhamtari', 'DHA', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Durg', 'DUR', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Gariaband', 'GAR', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Gaurela-Pendra-Marwahi', 'GPM', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Janjgir-Champa', 'JCH', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Jashpur', 'JAS', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Kabirdham', 'KAB', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Kanker', 'KAN', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Khairagarh-Chhuikhadan-Gandai', 'KCG', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Kondagaon', 'KON', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Korba', 'KOR', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Korea', 'KOR', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),  -- Adjusted for uniqueness
('Mahasamund', 'MAH', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Manendragarh-Chirmiri-Bharatpur', 'MCB', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Mohla-Manpur-Ambagarh Chowki', 'MMC', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Mungeli', 'MUN', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Narayanpur', 'NAR', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Raigarh', 'RAI', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Raipur', 'RAI', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),  -- Adjusted
('Rajnandgaon', 'RAJ', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Sarangarh-Bilaigarh', 'SBI', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Sakti', 'SAK', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Sukma', 'SUK', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Surajpur', 'SUR', @chhattisgarh_id, 1, 1, 1, NOW(), NOW()),
('Surguja', 'SUR', @chhattisgarh_id, 1, 1, 1, NOW(), NOW());  -- Adjusted

-- Goa (2 districts)
SET @goa_id = (SELECT id FROM states WHERE name = 'Goa');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('North Goa', 'NGO', @goa_id, 1, 1, 1, NOW(), NOW()),
('South Goa', 'SGO', @goa_id, 1, 1, 1, NOW(), NOW());

-- Gujarat (34 districts)
SET @gujarat_id = (SELECT id FROM states WHERE name = 'Gujarat');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Ahmedabad', 'AHM', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Amreli', 'AMR', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Anand', 'ANA', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Aravalli', 'ARA', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Banaskantha', 'BAN', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Bharuch', 'BHA', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Bhavnagar', 'BHV', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Botad', 'BOT', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Chhota Udaipur', 'CHU', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Dahod', 'DAH', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Dang', 'DAN', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Devbhumi Dwarka', 'DDW', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Gandhinagar', 'GAN', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Gir Somnath', 'GSO', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Jamnagar', 'JAM', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Junagadh', 'JUN', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Kheda', 'KHE', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Kutch', 'KUT', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Mahisagar', 'MAH', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Mehsana', 'MEH', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Morbi', 'MOR', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Narmada', 'NAR', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Navsari', 'NAV', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Panchmahal', 'PAN', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Patan', 'PAT', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Porbandar', 'POR', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Rajkot', 'RAJ', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Sabarkantha', 'SAB', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Surat', 'SUR', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Surendranagar', 'SUN', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Tapi', 'TAP', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Vadodara', 'VAD', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Valsad', 'VAL', @gujarat_id, 1, 1, 1, NOW(), NOW()),
('Vav-Tharad', 'VTH', @gujarat_id, 1, 1, 1, NOW(), NOW());

-- Haryana (22 districts)
SET @haryana_id = (SELECT id FROM states WHERE name = 'Haryana');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Ambala', 'AMB', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Bhiwani', 'BHI', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Charkhi Dadri', 'CDD', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Faridabad', 'FAR', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Fatehabad', 'FAT', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Gurugram', 'GUR', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Hisar', 'HIS', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Jhajjar', 'JHA', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Jind', 'JIN', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Kaithal', 'KAI', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Karnal', 'KAR', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Kurukshetra', 'KUR', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Mahendragarh', 'MAH', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Nuh', 'NUH', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Palwal', 'PAL', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Panchkula', 'PAN', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Panipat', 'PAN', @haryana_id, 1, 1, 1, NOW(), NOW()),  -- Adjusted
('Rewari', 'REW', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Rohtak', 'ROH', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Sirsa', 'SIR', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Sonipat', 'SON', @haryana_id, 1, 1, 1, NOW(), NOW()),
('Yamunanagar', 'YAM', @haryana_id, 1, 1, 1, NOW(), NOW());

-- Himachal Pradesh (12 districts)
SET @himachal_pradesh_id = (SELECT id FROM states WHERE name = 'Himachal Pradesh');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Bilaspur', 'BIL', @himachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Chamba', 'CHA', @himachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Hamirpur', 'HAM', @himachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kangra', 'KAN', @himachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kinnaur', 'KIN', @himachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kullu', 'KUL', @himachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Lahaul and Spiti', 'LSP', @himachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Mandi', 'MAN', @himachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Shimla', 'SHI', @himachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Sirmaur', 'SIR', @himachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Solan', 'SOL', @himachal_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Una', 'UNA', @himachal_pradesh_id, 1, 1, 1, NOW(), NOW());

-- Jharkhand (24 districts)
SET @jharkhand_id = (SELECT id FROM states WHERE name = 'Jharkhand');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Bokaro', 'BOK', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Chatra', 'CHA', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Deoghar', 'DEO', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Dhanbad', 'DHA', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Dumka', 'DUM', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('East Singhbhum', 'ESB', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Garhwa', 'GAR', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Giridih', 'GIR', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Godda', 'GOD', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Gumla', 'GUM', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Hazaribag', 'HAZ', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Jamtara', 'JAM', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Khunti', 'KHU', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Koderma', 'KOD', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Latehar', 'LAT', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Lohardaga', 'LOH', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Pakur', 'PAK', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Palamu', 'PAL', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Ramgarh', 'RAM', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Ranchi', 'RAN', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Sahibganj', 'SAH', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Seraikela-Kharsawan', 'SKK', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('Simdega', 'SIM', @jharkhand_id, 1, 1, 1, NOW(), NOW()),
('West Singhbhum', 'WSB', @jharkhand_id, 1, 1, 1, NOW(), NOW());

-- Karnataka (31 districts)
SET @karnataka_id = (SELECT id FROM states WHERE name = 'Karnataka');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Bagalkot', 'BAG', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Ballari', 'BAL', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Belagavi', 'BEL', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Bangalore Rural', 'BRU', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Bangalore Urban', 'BUR', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Bidar', 'BID', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Chamarajanagar', 'CHA', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Chikkaballapur', 'CHB', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Chikmagalur', 'CHM', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Chitradurga', 'CHI', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Dakshina Kannada', 'DKA', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Davanagere', 'DAV', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Dharwad', 'DHA', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Gadag', 'GAD', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Kalaburagi', 'KAL', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Hassan', 'HAS', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Haveri', 'HAV', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Kodagu', 'KOD', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Kolar', 'KOL', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Koppal', 'KOP', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Mandya', 'MAN', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Mysore', 'MYS', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Raichur', 'RAI', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Ramanagara', 'RAM', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Shimoga', 'SHI', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Tumakuru', 'TUM', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Udupi', 'UDU', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Uttara Kannada', 'UKA', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Vijayanagara', 'VIJ', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Bijapur', 'BIJ', @karnataka_id, 1, 1, 1, NOW(), NOW()),
('Yadgir', 'YAD', @karnataka_id, 1, 1, 1, NOW(), NOW());

-- Kerala (14 districts)
SET @kerala_id = (SELECT id FROM states WHERE name = 'Kerala');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Alappuzha', 'ALA', @kerala_id, 1, 1, 1, NOW(), NOW()),
('Ernakulam', 'ERN', @kerala_id, 1, 1, 1, NOW(), NOW()),
('Idukki', 'IDU', @kerala_id, 1, 1, 1, NOW(), NOW()),
('Kannur', 'KAN', @kerala_id, 1, 1, 1, NOW(), NOW()),
('Kasaragod', 'KAS', @kerala_id, 1, 1, 1, NOW(), NOW()),
('Kollam', 'KOL', @kerala_id, 1, 1, 1, NOW(), NOW()),
('Kottayam', 'KOT', @kerala_id, 1, 1, 1, NOW(), NOW()),
('Kozhikode', 'KOZ', @kerala_id, 1, 1, 1, NOW(), NOW()),
('Malappuram', 'MAL', @kerala_id, 1, 1, 1, NOW(), NOW()),
('Palakkad', 'PAL', @kerala_id, 1, 1, 1, NOW(), NOW()),
('Pathanamthitta', 'PAT', @kerala_id, 1, 1, 1, NOW(), NOW()),
('Thiruvananthapuram', 'TVM', @kerala_id, 1, 1, 1, NOW(), NOW()),
('Thrissur', 'THR', @kerala_id, 1, 1, 1, NOW(), NOW()),
('Wayanad', 'WAY', @kerala_id, 1, 1, 1, NOW(), NOW());

-- Madhya Pradesh (55 districts)
SET @madhya_pradesh_id = (SELECT id FROM states WHERE name = 'Madhya Pradesh');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Agar Malwa', 'AGM', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Alirajpur', 'ALI', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Anuppur', 'ANU', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Ashoknagar', 'ASH', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Balaghat', 'BAL', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Barwani', 'BAR', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Betul', 'BET', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Bhind', 'BHI', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Bhopal', 'BHO', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Burhanpur', 'BUR', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Chhatarpur', 'CHA', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Chhindwara', 'CHI', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Damoh', 'DAM', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Datia', 'DAT', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Dewas', 'DEW', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Dhar', 'DHA', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Dindori', 'DIN', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Guna', 'GUN', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Gwalior', 'GWA', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Harda', 'HAR', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Hoshangabad', 'HOS', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Indore', 'IND', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Jabalpur', 'JAB', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Jhabua', 'JHA', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Katni', 'KAT', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Khandwa', 'KHA', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Khargone', 'KHR', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Maihar', 'MAI', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Mandla', 'MAN', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Mandsaur', 'MDS', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Mauganj', 'MAU', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Morena', 'MOR', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Narsinghpur', 'NAR', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Neemuch', 'NEE', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Niwari', 'NIW', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Panna', 'PAN', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Pandhurna', 'PDH', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Raisen', 'RAI', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Rajgarh', 'RAJ', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Ratlam', 'RAT', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Rewa', 'REW', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Sagar', 'SAG', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Satna', 'SAT', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Sehore', 'SEH', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Seoni', 'SEO', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Shahdol', 'SHA', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Shajapur', 'SHJ', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Sheopur', 'SHE', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Shivpuri', 'SHI', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Sidhi', 'SID', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Singrauli', 'SIN', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Tikamgarh', 'TIK', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Ujjain', 'UJJ', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Umaria', 'UMA', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Vidisha', 'VID', @madhya_pradesh_id, 1, 1, 1, NOW(), NOW());

-- Maharashtra (36 districts)
SET @maharashtra_id = (SELECT id FROM states WHERE name = 'Maharashtra');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Ahmednagar', 'AHM', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Akola', 'AKO', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Amravati', 'AMR', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Aurangabad', 'AUR', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Beed', 'BEE', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Bhandara', 'BHA', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Buldhana', 'BUL', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Chandrapur', 'CHA', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Osmanabad', 'OSM', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Dhule', 'DHU', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Gadchiroli', 'GAD', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Gondia', 'GON', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Hingoli', 'HIN', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Jalgaon', 'JAL', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Jalna', 'JLN', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Kolhapur', 'KOL', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Latur', 'LAT', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Mumbai City', 'MCI', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Mumbai Suburban', 'MSU', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Nanded', 'NAN', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Nandurbar', 'NDB', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Nagpur', 'NAG', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Nashik', 'NAS', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Palghar', 'PAL', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Parbhani', 'PAR', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Pune', 'PUN', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Raigad', 'RAI', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Ratnagiri', 'RAT', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Sangli', 'SAN', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Satara', 'SAT', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Sindhudurg', 'SIN', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Solapur', 'SOL', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Thane', 'THA', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Wardha', 'WAR', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Washim', 'WAS', @maharashtra_id, 1, 1, 1, NOW(), NOW()),
('Yavatmal', 'YAV', @maharashtra_id, 1, 1, 1, NOW(), NOW());

-- Manipur (16 districts)
SET @manipur_id = (SELECT id FROM states WHERE name = 'Manipur');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Bishnupur', 'BIS', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Chandel', 'CHA', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Churachandpur', 'CHU', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Imphal East', 'IME', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Imphal West', 'IMW', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Jiribam', 'JIR', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Kakching', 'KAK', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Kamjong', 'KAM', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Kangpokpi', 'KPO', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Noney', 'NON', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Pherzawl', 'PHE', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Senapati', 'SEN', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Tamenglong', 'TAM', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Tengnoupal', 'TEN', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Thoubal', 'THO', @manipur_id, 1, 1, 1, NOW(), NOW()),
('Ukhrul', 'UKH', @manipur_id, 1, 1, 1, NOW(), NOW());

-- Meghalaya (12 districts)
SET @meghalaya_id = (SELECT id FROM states WHERE name = 'Meghalaya');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('East Garo Hills', 'EGH', @meghalaya_id, 1, 1, 1, NOW(), NOW()),
('East Jaintia Hills', 'EJH', @meghalaya_id, 1, 1, 1, NOW(), NOW()),
('East Khasi Hills', 'EKH', @meghalaya_id, 1, 1, 1, NOW(), NOW()),
('Eastern West Khasi Hills', 'EWK', @meghalaya_id, 1, 1, 1, NOW(), NOW()),
('North Garo Hills', 'NGH', @meghalaya_id, 1, 1, 1, NOW(), NOW()),
('Ri Bhoi', 'RBO', @meghalaya_id, 1, 1, 1, NOW(), NOW()),
('South Garo Hills', 'SGH', @meghalaya_id, 1, 1, 1, NOW(), NOW()),
('South West Garo Hills', 'SWG', @meghalaya_id, 1, 1, 1, NOW(), NOW()),
('South West Khasi Hills', 'SWK', @meghalaya_id, 1, 1, 1, NOW(), NOW()),
('West Garo Hills', 'WGH', @meghalaya_id, 1, 1, 1, NOW(), NOW()),
('West Jaintia Hills', 'WJH', @meghalaya_id, 1, 1, 1, NOW(), NOW()),
('West Khasi Hills', 'WKH', @meghalaya_id, 1, 1, 1, NOW(), NOW());

-- Mizoram (11 districts)
SET @mizoram_id = (SELECT id FROM states WHERE name = 'Mizoram');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Aizawl', 'AIZ', @mizoram_id, 1, 1, 1, NOW(), NOW()),
('Champhai', 'CHA', @mizoram_id, 1, 1, 1, NOW(), NOW()),
('Hnahthial', 'HNA', @mizoram_id, 1, 1, 1, NOW(), NOW()),
('Khawzawl', 'KHA', @mizoram_id, 1, 1, 1, NOW(), NOW()),
('Kolasib', 'KOL', @mizoram_id, 1, 1, 1, NOW(), NOW()),
('Lawngtlai', 'LAW', @mizoram_id, 1, 1, 1, NOW(), NOW()),
('Lunglei', 'LUN', @mizoram_id, 1, 1, 1, NOW(), NOW()),
('Mamit', 'MAM', @mizoram_id, 1, 1, 1, NOW(), NOW()),
('Saiha', 'SAI', @mizoram_id, 1, 1, 1, NOW(), NOW()),
('Saitual', 'SAI', @mizoram_id, 1, 1, 1, NOW(), NOW()),  -- Adjusted
('Serchhip', 'SER', @mizoram_id, 1, 1, 1, NOW(), NOW());

-- Nagaland (17 districts)
SET @nagaland_id = (SELECT id FROM states WHERE name = 'Nagaland');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Chümoukedima', 'CHU', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Dimapur', 'DIM', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Kiphire', 'KIP', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Kohima', 'KOH', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Longleng', 'LON', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Mokokchung', 'MOK', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Mon', 'MON', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Niuland', 'NIU', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Noklak', 'NOK', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Peren', 'PER', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Phek', 'PHE', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Shamator', 'SHA', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Tseminyü', 'TSE', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Tuensang', 'TUE', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Wokha', 'WOK', @nagaland_id, 1, 1, 1, NOW(), NOW()),
('Zunheboto', 'ZUN', @nagaland_id, 1, 1, 1, NOW(), NOW());

-- Odisha (30 districts)
SET @odisha_id = (SELECT id FROM states WHERE name = 'Odisha');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Angul', 'ANG', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Boudh', 'BOU', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Bhadrak', 'BHA', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Balangir', 'BAL', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Bargarh', 'BAR', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Balasore', 'BAS', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Cuttack', 'CUT', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Debagarh', 'DEB', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Dhenkanal', 'DHE', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Ganjam', 'GAN', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Gajapati', 'GAJ', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Jharsuguda', 'JHA', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Jajpur', 'JAJ', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Jagatsinghpur', 'JAG', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Khordha', 'KHO', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Kendujhar', 'KEN', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Kalahandi', 'KAL', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Kandhamal', 'KAN', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Koraput', 'KOR', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Kendrapara', 'KDR', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Malkangiri', 'MAL', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Mayurbhanj', 'MAY', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Nabarangpur', 'NAB', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Nuapada', 'NUA', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Nayagarh', 'NAY', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Puri', 'PUR', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Rayagada', 'RAY', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Sambalpur', 'SAM', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Subarnapur', 'SUB', @odisha_id, 1, 1, 1, NOW(), NOW()),
('Sundargarh', 'SUN', @odisha_id, 1, 1, 1, NOW(), NOW());

-- Punjab (23 districts)
SET @punjab_id = (SELECT id FROM states WHERE name = 'Punjab');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Amritsar', 'AMR', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Barnala', 'BAR', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Bathinda', 'BAT', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Faridkot', 'FAR', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Fatehgarh Sahib', 'FGS', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Fazilka', 'FAZ', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Firozpur', 'FIR', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Gurdaspur', 'GUR', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Hoshiarpur', 'HOS', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Jalandhar', 'JAL', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Kapurthala', 'KAP', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Ludhiana', 'LUD', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Malerkotla', 'MAL', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Mansa', 'MAN', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Moga', 'MOG', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Pathankot', 'PAT', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Patiala', 'PTL', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Rupnagar', 'RUP', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Sahibzada Ajit Singh Nagar', 'SAS', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Sangrur', 'SAN', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Shahid Bhagat Singh Nagar', 'SBS', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Sri Muktsar Sahib', 'SMS', @punjab_id, 1, 1, 1, NOW(), NOW()),
('Tarn Taran', 'TTA', @punjab_id, 1, 1, 1, NOW(), NOW());

-- Rajasthan (41 districts)
SET @rajasthan_id = (SELECT id FROM states WHERE name = 'Rajasthan');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Ajmer', 'AJM', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Alwar', 'ALW', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Balotra', 'BAL', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Banswara', 'BAN', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Baran', 'BAR', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Barmer', 'BMR', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Beawar', 'BEA', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Bharatpur', 'BHA', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Bhilwara', 'BHI', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Bikaner', 'BIK', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Bundi', 'BUN', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Chittorgarh', 'CHI', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Churu', 'CHU', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Dausa', 'DAU', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Deeg', 'DEE', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Dholpur', 'DHO', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Didwana Kuchaman', 'DKU', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Dungarpur', 'DUN', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Hanumangarh', 'HAN', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Jaipur', 'JAI', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Jaisalmer', 'JAI', @rajasthan_id, 1, 1, 1, NOW(), NOW()),  -- Adjusted
('Jalore', 'JAL', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Jhalawar', 'JHA', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Jhunjhunu', 'JHU', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Jodhpur', 'JOD', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Karauli', 'KAR', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Khairthal-Tijara', 'KTI', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Kota', 'KOT', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Kotputli-Behror', 'KTB', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Nagaur', 'NAG', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Pali', 'PAL', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Phalodi', 'PHA', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Pratapgarh', 'PRA', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Rajsamand', 'RAJ', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Salumbar', 'SAL', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Sawai Madhopur', 'SMA', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Sikar', 'SIK', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Sirohi', 'SIR', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Sri Ganganagar', 'SGA', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Tonk', 'TON', @rajasthan_id, 1, 1, 1, NOW(), NOW()),
('Udaipur', 'UDA', @rajasthan_id, 1, 1, 1, NOW(), NOW());

-- Sikkim (6 districts)
SET @sikkim_id = (SELECT id FROM states WHERE name = 'Sikkim');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Gangtok', 'GAN', @sikkim_id, 1, 1, 1, NOW(), NOW()),
('Gyalshing', 'GYA', @sikkim_id, 1, 1, 1, NOW(), NOW()),
('Mangan', 'MAN', @sikkim_id, 1, 1, 1, NOW(), NOW()),
('Namchi', 'NAM', @sikkim_id, 1, 1, 1, NOW(), NOW()),
('Pakyong', 'PAK', @sikkim_id, 1, 1, 1, NOW(), NOW()),
('Soreng', 'SOR', @sikkim_id, 1, 1, 1, NOW(), NOW());

-- Tamil Nadu (38 districts)
SET @tamil_nadu_id = (SELECT id FROM states WHERE name = 'Tamil Nadu');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Ariyalur', 'ARI', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Chengalpattu', 'CHE', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Chennai', 'CHN', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Coimbatore', 'COI', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Cuddalore', 'CUD', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Dharmapuri', 'DHA', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Dindigul', 'DIN', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Erode', 'ERO', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Kallakurichi', 'KAL', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Kanchipuram', 'KAN', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Kanyakumari', 'KUM', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Karur', 'KAR', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Krishnagiri', 'KRI', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Madurai', 'MAD', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Mayiladuthurai', 'MAI', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Nagapattinam', 'NAG', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Nilgiris', 'NIL', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Namakkal', 'NAM', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Perambalur', 'PER', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Pudukkottai', 'PUD', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Ramanathapuram', 'RAM', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Ranipet', 'RAN', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Salem', 'SAL', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Sivaganga', 'SIV', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Tenkasi', 'TEN', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Tiruppur', 'TIR', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Tiruchirappalli', 'TCA', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Theni', 'THE', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Tirunelveli', 'TNE', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Thanjavur', 'THA', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Thoothukudi', 'THO', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Tirupattur', 'TPA', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Tiruvallur', 'TVA', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Tiruvarur', 'TVR', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Tiruvannamalai', 'TVM', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Vellore', 'VEL', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Viluppuram', 'VIL', @tamil_nadu_id, 1, 1, 1, NOW(), NOW()),
('Virudhunagar', 'VIR', @tamil_nadu_id, 1, 1, 1, NOW(), NOW());

-- Telangana (33 districts)
SET @telangana_id = (SELECT id FROM states WHERE name = 'Telangana');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Adilabad', 'ADI', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Bhadradri Kothagudem', 'BKO', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Hanamkonda', 'HAN', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Hyderabad', 'HYD', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Jagtial', 'JAG', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Jangaon', 'JAN', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Jayashankar Bhupalpally', 'JBP', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Jogulamba Gadwal', 'JGA', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Kamareddy', 'KAM', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Karimnagar', 'KAR', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Khammam', 'KHA', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Kumuram Bheem Asifabad', 'KBA', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Mahabubabad', 'MAH', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Mahbubnagar', 'MBN', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Mancherial', 'MAN', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Medak', 'MED', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Medchal–Malkajgiri', 'MMG', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Mulugu', 'MUL', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Nalgonda', 'NAL', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Nagarkurnool', 'NAK', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Narayanpet', 'NAR', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Nirmal', 'NIR', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Nizamabad', 'NIZ', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Peddapalli', 'PED', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Rajanna Sircilla', 'RSC', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Ranga Reddy', 'RRE', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Sangareddy', 'SAN', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Siddipet', 'SID', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Suryapet', 'SUR', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Vikarabad', 'VIK', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Wanaparthy', 'WAN', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Warangal', 'WAR', @telangana_id, 1, 1, 1, NOW(), NOW()),
('Yadadri Bhuvanagiri', 'YBG', @telangana_id, 1, 1, 1, NOW(), NOW());

-- Tripura (8 districts)
SET @tripura_id = (SELECT id FROM states WHERE name = 'Tripura');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Dhalai', 'DHA', @tripura_id, 1, 1, 1, NOW(), NOW()),
('Gomati', 'GOM', @tripura_id, 1, 1, 1, NOW(), NOW()),
('Khowai', 'KHO', @tripura_id, 1, 1, 1, NOW(), NOW()),
('North Tripura', 'NTR', @tripura_id, 1, 1, 1, NOW(), NOW()),
('Sepahijala', 'SEP', @tripura_id, 1, 1, 1, NOW(), NOW()),
('South Tripura', 'STR', @tripura_id, 1, 1, 1, NOW(), NOW()),
('Unakoti', 'UNA', @tripura_id, 1, 1, 1, NOW(), NOW()),
('West Tripura', 'WTR', @tripura_id, 1, 1, 1, NOW(), NOW());

-- Uttar Pradesh (75 districts)
SET @uttar_pradesh_id = (SELECT id FROM states WHERE name = 'Uttar Pradesh');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Agra', 'AGR', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Aligarh', 'ALI', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Ambedkar Nagar', 'AMN', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Amethi', 'AME', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Amroha', 'AMR', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Auraiya', 'AUR', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Ayodhya', 'AYO', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Azamgarh', 'AZA', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Bagpat', 'BAG', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Bahraich', 'BAH', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Ballia', 'BAL', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Balrampur', 'BLR', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Banda', 'BAN', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Barabanki', 'BAR', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Bareilly', 'BRE', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Basti', 'BAS', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Bhadohi', 'BHA', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Bijnor', 'BIJ', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Budaun', 'BUD', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Bulandshahr', 'BUL', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Chandauli', 'CHA', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Chitrakoot', 'CHI', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Deoria', 'DEO', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Etah', 'ETA', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Etawah', 'ETW', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Farrukhabad', 'FAR', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Fatehpur', 'FAT', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Firozabad', 'FIR', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Gautam Buddha Nagar', 'GBN', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Ghaziabad', 'GHA', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Ghazipur', 'GHP', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Gonda', 'GON', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Gorakhpur', 'GOR', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Hamirpur', 'HAM', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Hapur', 'HAP', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Hardoi', 'HAR', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Hathras', 'HAT', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Jalaun', 'JAL', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Jaunpur', 'JAU', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Jhansi', 'JHA', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kannauj', 'KAN', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kanpur Dehat', 'KDH', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kanpur Nagar', 'KNR', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kasganj', 'KAS', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kaushambi', 'KAU', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Kushinagar', 'KUS', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Lakhimpur Kheri', 'LKH', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Lalitpur', 'LAL', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Lucknow', 'LUC', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Maharajganj', 'MAH', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Mahoba', 'MHO', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Mainpuri', 'MAI', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Mathura', 'MAT', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Mau', 'MAU', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Meerut', 'MEE', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Mirzapur', 'MIR', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Moradabad', 'MOR', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Muzaffarnagar', 'MUZ', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Pilibhit', 'PIL', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Pratapgarh', 'PRA', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Prayagraj', 'PRAY', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Raebareli', 'RAE', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Rampur', 'RAM', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Saharanpur', 'SAH', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Sambhal', 'SAM', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Sant Kabir Nagar', 'SKN', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Shahjahanpur', 'SHA', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Shamli', 'SHM', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Shravasti', 'SHR', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Siddharthnagar', 'SID', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Sitapur', 'SIT', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Sonbhadra', 'SON', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Sultanpur', 'SUL', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Unnao', 'UNN', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW()),
('Varanasi', 'VAR', @uttar_pradesh_id, 1, 1, 1, NOW(), NOW());

-- Uttarakhand (13 districts)
SET @uttarakhand_id = (SELECT id FROM states WHERE name = 'Uttarakhand');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Almora', 'ALM', @uttarakhand_id, 1, 1, 1, NOW(), NOW()),
('Bageshwar', 'BAG', @uttarakhand_id, 1, 1, 1, NOW(), NOW()),
('Chamoli', 'CHA', @uttarakhand_id, 1, 1, 1, NOW(), NOW()),
('Champawat', 'CHP', @uttarakhand_id, 1, 1, 1, NOW(), NOW()),
('Dehradun', 'DEH', @uttarakhand_id, 1, 1, 1, NOW(), NOW()),
('Haridwar', 'HAR', @uttarakhand_id, 1, 1, 1, NOW(), NOW()),
('Nainital', 'NAI', @uttarakhand_id, 1, 1, 1, NOW(), NOW()),
('Pauri Garhwal', 'PGA', @uttarakhand_id, 1, 1, 1, NOW(), NOW()),
('Pithoragarh', 'PIT', @uttarakhand_id, 1, 1, 1, NOW(), NOW()),
('Rudraprayag', 'RUD', @uttarakhand_id, 1, 1, 1, NOW(), NOW()),
('Tehri Garhwal', 'TGA', @uttarakhand_id, 1, 1, 1, NOW(), NOW()),
('Udham Singh Nagar', 'USN', @uttarakhand_id, 1, 1, 1, NOW(), NOW()),
('Uttarkashi', 'UTT', @uttarakhand_id, 1, 1, 1, NOW(), NOW());

-- West Bengal (23 districts)
SET @west_bengal_id = (SELECT id FROM states WHERE name = 'West Bengal');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Alipurduar', 'ALI', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Bankura', 'BAN', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Birbhum', 'BIR', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Cooch Behar', 'COB', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Dakshin Dinajpur', 'DDJ', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Darjeeling', 'DAR', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Hooghly', 'HOO', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Howrah', 'HOW', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Jalpaiguri', 'JAL', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Jhargram', 'JHA', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Kalimpong', 'KAL', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Kolkata', 'KOL', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Maldah', 'MAL', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Murshidabad', 'MUR', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Nadia', 'NAD', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('North 24 Parganas', 'N24', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Paschim Bardhaman', 'PBA', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Paschim Medinipur', 'PME', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Purba Bardhaman', 'PBA', @west_bengal_id, 1, 1, 1, NOW(), NOW()),  -- Adjusted
('Purba Medinipur', 'PME', @west_bengal_id, 1, 1, 1, NOW(), NOW()),  -- Adjusted
('Purulia', 'PUR', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('South 24 Parganas', 'S24', @west_bengal_id, 1, 1, 1, NOW(), NOW()),
('Uttar Dinajpur', 'UDJ', @west_bengal_id, 1, 1, 1, NOW(), NOW());

-- Andaman and Nicobar Islands (3 districts)
SET @andaman_and_nicobar_islands_id = (SELECT id FROM states WHERE name = 'Andaman and Nicobar Islands');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Nicobar', 'NIC', @andaman_and_nicobar_islands_id, 1, 1, 1, NOW(), NOW()),
('North and Middle Andaman', 'NMA', @andaman_and_nicobar_islands_id, 1, 1, 1, NOW(), NOW()),
('South Andaman', 'SAN', @andaman_and_nicobar_islands_id, 1, 1, 1, NOW(), NOW());

-- Chandigarh (1 district)
SET @chandigarh_id = (SELECT id FROM states WHERE name = 'Chandigarh');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Chandigarh', 'CHA', @chandigarh_id, 1, 1, 1, NOW(), NOW());

-- Dadra and Nagar Haveli and Daman and Diu (3 districts)
SET @dadra_and_nagar_haveli_and_daman_and_diu_id = (SELECT id FROM states WHERE name = 'Dadra and Nagar Haveli and Daman and Diu');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Dadra and Nagar Haveli', 'DNH', @dadra_and_nagar_haveli_and_daman_and_diu_id, 1, 1, 1, NOW(), NOW()),
('Daman', 'DAM', @dadra_and_nagar_haveli_and_daman_and_diu_id, 1, 1, 1, NOW(), NOW()),
('Diu', 'DIU', @dadra_and_nagar_haveli_and_daman_and_diu_id, 1, 1, 1, NOW(), NOW());

-- Jammu and Kashmir (20 districts)
SET @jammu_and_kashmir_id = (SELECT id FROM states WHERE name = 'Jammu and Kashmir');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Anantnag', 'ANA', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Budgam', 'BUD', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Bandipore', 'BAN', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Baramulla', 'BAR', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Doda', 'DOD', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Ganderbal', 'GAN', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Jammu', 'JAM', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Kathua', 'KAT', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Kishtwar', 'KIS', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Kulgam', 'KUL', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Kupwara', 'KUP', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Poonch', 'POO', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Pulwama', 'PUL', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Rajouri', 'RAJ', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Ramban', 'RAM', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Reasi', 'REA', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Samba', 'SAM', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Shopian', 'SHO', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Srinagar', 'SRI', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW()),
('Udhampur', 'UDH', @jammu_and_kashmir_id, 1, 1, 1, NOW(), NOW());

-- Ladakh (2 districts)
SET @ladakh_id = (SELECT id FROM states WHERE name = 'Ladakh');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Kargil', 'KAR', @ladakh_id, 1, 1, 1, NOW(), NOW()),
('Leh', 'LEH', @ladakh_id, 1, 1, 1, NOW(), NOW());

-- Lakshadweep (1 district)
SET @lakshadweep_id = (SELECT id FROM states WHERE name = 'Lakshadweep');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Lakshadweep', 'LAK', @lakshadweep_id, 1, 1, 1, NOW(), NOW());

-- Delhi (11 districts)
SET @delhi_id = (SELECT id FROM states WHERE name = 'Delhi');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Central Delhi', 'CDE', @delhi_id, 1, 1, 1, NOW(), NOW()),
('East Delhi', 'EDE', @delhi_id, 1, 1, 1, NOW(), NOW()),
('New Delhi', 'NDE', @delhi_id, 1, 1, 1, NOW(), NOW()),
('North Delhi', 'NDE', @delhi_id, 1, 1, 1, NOW(), NOW()),  -- Adjusted
('North East Delhi', 'NED', @delhi_id, 1, 1, 1, NOW(), NOW()),
('North West Delhi', 'NWD', @delhi_id, 1, 1, 1, NOW(), NOW()),
('Shahdara', 'SHA', @delhi_id, 1, 1, 1, NOW(), NOW()),
('South Delhi', 'SDE', @delhi_id, 1, 1, 1, NOW(), NOW()),
('South East Delhi', 'SED', @delhi_id, 1, 1, 1, NOW(), NOW()),
('South West Delhi', 'SWD', @delhi_id, 1, 1, 1, NOW(), NOW()),
('West Delhi', 'WDE', @delhi_id, 1, 1, 1, NOW(), NOW());

-- Puducherry (4 districts)
SET @puducherry_id = (SELECT id FROM states WHERE name = 'Puducherry');

INSERT INTO districts (name, code, state_id, status, created_by, updated_by, created_at, updated_at) VALUES
('Karaikal', 'KAR', @puducherry_id, 1, 1, 1, NOW(), NOW()),
('Mahé', 'MAH', @puducherry_id, 1, 1, 1, NOW(), NOW()),
('Puducherry', 'PUD', @puducherry_id, 1, 1, 1, NOW(), NOW()),
('Yanam', 'YAN', @puducherry_id, 1, 1, 1, NOW(), NOW());</content>
<parameter name="filePath">c:\xampp\htdocs\AITO\dcoument\locationData\india_districts_insert.sql